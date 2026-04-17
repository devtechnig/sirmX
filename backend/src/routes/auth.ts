import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { signToken } from '../lib/jwt';
import { sendVerificationEmail } from '../lib/email';
import { requireAuth, AuthRequest } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// ─── Validation schemas ────────────────────────────────────────────────────────
const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

// ─── POST /api/auth/register ───────────────────────────────────────────────────
router.post('/register', async (req: Request, res: Response) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: 'Validation failed',
      issues: result.error.flatten().fieldErrors,
    });
    return;
  }

  const { name, email, password } = result.data;

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      res.status(409).json({ error: 'An account with this email already exists' });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const verifyToken = crypto.randomBytes(32).toString('hex');
    const verifyTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const user = await prisma.user.create({
      data: { name, email, passwordHash, verifyToken, verifyTokenExpiry },
    });

    await sendVerificationEmail(email, verifyToken);

    res.status(201).json({
      message: 'Account created. Please check your email to verify your account.',
      userId: user.id,
    });
  } catch (err) {
    console.error('[register]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ─── GET /api/auth/verify?token=…  ────────────────────────────────────────────
// Called by the Next.js /api/verify proxy when the user clicks the email link.
// On success: issues a JWT and redirects back to /verify-pending so the page
// can complete the auto-login without asking for the password again.
router.get('/verify', async (req: Request, res: Response) => {
  const { token } = req.query;
  const frontendUrl = process.env.FRONTEND_URL ?? 'https://sirm-x.vercel.app';

  if (!token || typeof token !== 'string') {
    res.status(400).json({ error: 'Missing or invalid token' });
    return;
  }

  try {
    const user = await prisma.user.findUnique({ where: { verifyToken: token } });

    if (!user) {
      res.redirect(`${frontendUrl}/login?error=invalid_token`);
      return;
    }

    if (user.verifyTokenExpiry && user.verifyTokenExpiry < new Date()) {
      res.redirect(`${frontendUrl}/login?error=token_expired`);
      return;
    }

    if (user.emailVerified) {
      res.redirect(`${frontendUrl}/login?verified=already`);
      return;
    }

    // Mark as verified + clear token
    await prisma.user.update({
      where: { id: user.id },
      data: { emailVerified: true, verifyToken: null, verifyTokenExpiry: null },
    });

    // Issue JWT immediately — the pending page will store it + redirect to /dashboard
    const jwt = signToken({ userId: user.id, email: user.email });

    res.redirect(
      `${frontendUrl}/verify-pending?verified=true&token=${jwt}&email=${encodeURIComponent(user.email)}&name=${encodeURIComponent(user.name ?? '')}`,
    );
  } catch (err) {
    console.error('[verify]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ─── GET /api/auth/verification-status?email=…  ──────────────────────────────
// Polled by /verify-pending every few seconds — lets the page detect when the
// user has clicked the link in their inbox even if they're in a different tab.
router.get('/verification-status', async (req: Request, res: Response) => {
  const { email } = req.query;

  if (!email || typeof email !== 'string') {
    res.status(400).json({ error: 'email query param is required' });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { emailVerified: true },
    });

    if (!user) {
      res.status(404).json({ exists: false, verified: false });
      return;
    }

    res.json({ exists: true, verified: user.emailVerified });
  } catch (err) {
    console.error('[verification-status]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ─── POST /api/auth/login ──────────────────────────────────────────────────────
router.post('/login', async (req: Request, res: Response) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: 'Email and password are required' });
    return;
  }

  const { email, password } = result.data;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    if (!user.emailVerified) {
      res.status(403).json({
        error: 'Please verify your email address before logging in',
        code: 'EMAIL_NOT_VERIFIED',
      });
      return;
    }

    const token = signToken({ userId: user.id, email: user.email });

    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error('[login]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ─── GET /api/auth/me (protected) ─────────────────────────────────────────────
router.get('/me', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.userId },
      select: { id: true, name: true, email: true, createdAt: true },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.json({ user });
  } catch (err) {
    console.error('[me]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ─── POST /api/auth/resend-verification ───────────────────────────────────────
router.post('/resend-verification', async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: 'Email is required' });
    return;
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    // Always return success to prevent user enumeration
    if (!user || user.emailVerified) {
      res.json({ message: 'If that email exists and is unverified, a new link has been sent.' });
      return;
    }

    const verifyToken = crypto.randomBytes(32).toString('hex');
    const verifyTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await prisma.user.update({
      where: { id: user.id },
      data: { verifyToken, verifyTokenExpiry },
    });

    await sendVerificationEmail(email, verifyToken);

    res.json({ message: 'If that email exists and is unverified, a new link has been sent.' });
  } catch (err) {
    console.error('[resend-verification]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
