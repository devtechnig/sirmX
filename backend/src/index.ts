import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth';

const app = express();
const PORT = process.env.PORT ?? 3001;
const FRONTEND_URL = process.env.FRONTEND_URL ?? 'http://localhost:3000';

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or server-to-server)
      if (!origin) return callback(null, true);
      
      const allowedOrigins = [
        FRONTEND_URL, // Reads from .env if set
        'http://localhost:3000',
        'http://localhost:3001',
        'https://sirm-x.vercel.app' // Strict production URL
      ];
      
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }),
);
app.use(express.json());

// ─── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/auth', authRouter);

// ─── 404 handler ──────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 SIRMx API running at http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Auth:   http://localhost:${PORT}/api/auth\n`);
});
