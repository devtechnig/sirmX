'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showResend, setShowResend] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendDone, setResendDone] = useState(false);

  // Check for query params from email verification redirects
  useEffect(() => {
    const verified = searchParams.get('verified');
    const err = searchParams.get('error');

    if (verified === 'true') {
      setSuccessMessage('✅ Email verified! You can now log in.');
    } else if (verified === 'already') {
      setSuccessMessage('Your email is already verified. Log in below.');
    } else if (err === 'invalid_token') {
      setError('This verification link is invalid. Request a new one below.');
      setShowResend(true);
    } else if (err === 'token_expired') {
      setError('This verification link has expired. Request a new one below.');
      setShowResend(true);
    }
  }, [searchParams]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.code === 'EMAIL_NOT_VERIFIED') {
          setError('Please verify your email address before logging in.');
          setShowResend(true);
        } else {
          setError(data.error ?? 'Login failed. Please try again.');
        }
        return;
      }

      // Store token and user info
      localStorage.setItem('sirmx_token', data.token);
      localStorage.setItem('sirmx_user', JSON.stringify(data.user));

      router.push('/dashboard');
    } catch {
      setError('Could not reach the server. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleResend() {
    if (!email) {
      setError('Enter your email address above, then click resend.');
      return;
    }
    setResendLoading(true);
    try {
      await fetch(`${API_URL}/api/auth/resend-verification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setResendDone(true);
      setShowResend(false);
    } finally {
      setResendLoading(false);
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-md mx-auto"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-2xl font-black text-on-surface tracking-tighter mb-1">Welcome back</h2>
        <p className="text-on-surface-variant text-sm font-medium">Log in to your dashboard.</p>
      </motion.div>

      {/* Status banners */}
      <AnimatePresence mode="wait">
        {successMessage && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium"
          >
            {successMessage}
          </motion.div>
        )}
        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium"
          >
            {error}
          </motion.div>
        )}
        {resendDone && (
          <motion.div
            key="resend"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 px-4 py-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-sm font-medium"
          >
            📬 Verification email re-sent. Check your inbox.
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form variants={itemVariants} className="space-y-4" onSubmit={handleLogin}>
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">
            Email Address
          </label>
          <input
            id="login-email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring"
          />
          <div className="flex justify-end px-1 pt-0.5">
            <Link
              href="/forgot-password"
              title="Recover Password"
              className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline"
            >
              Forgot?
            </Link>
          </div>
        </div>

        <button
          id="login-submit"
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white font-black py-3 rounded-xl shadow-lg shadow-primary/10 hover:scale-[1.01] active:scale-[0.99] transition-all font-headline tracking-tighter text-base mt-2 btn-press disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Signing in…
            </>
          ) : (
            'Access Dashboard'
          )}
        </button>
      </motion.form>

      {/* Resend verification */}
      <AnimatePresence>
        {showResend && !resendDone && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 overflow-hidden"
          >
            <button
              onClick={handleResend}
              disabled={resendLoading}
              className="w-full text-sm font-bold text-primary border border-primary/20 rounded-xl py-2.5 hover:bg-primary/5 transition-all disabled:opacity-60"
            >
              {resendLoading ? 'Sending…' : 'Resend verification email'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        variants={itemVariants}
        className="mt-6 text-center text-xs font-medium text-on-surface-variant"
      >
        New to SIRMx?{' '}
        <Link href="/register" className="text-primary font-black hover:underline px-1">
          Create account
        </Link>
      </motion.p>
    </motion.div>
  );
}
