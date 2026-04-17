'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';
const POLL_INTERVAL_MS = 4000; // check every 4 seconds

type PageState = 'waiting' | 'verified' | 'redirecting';

export default function VerifyPendingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get('email') ?? '';
  const verifiedParam = searchParams.get('verified');    // set when the email link redirects back
  const tokenParam = searchParams.get('token');           // JWT issued on verify success
  const nameParam = searchParams.get('name') ?? '';

  const [pageState, setPageState] = useState<PageState>('waiting');
  const [resendLoading, setResendLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [resendDone, setResendDone] = useState(false);
  const [dots, setDots] = useState('');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Animated dots for "Waiting" text ─────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setDots((d) => (d.length >= 3 ? '' : d + '.'));
    }, 500);
    return () => clearInterval(id);
  }, []);

  // ── Auto-login and redirect to dashboard ─────────────────────────────────────
  const completeLogin = useCallback(
    async (jwt: string, userEmail: string, userName: string) => {
      setPageState('redirecting');

      localStorage.setItem('sirmx_token', jwt);
      localStorage.setItem(
        'sirmx_user',
        JSON.stringify({ email: userEmail, name: userName }),
      );

      // Clear the temporarily stored credentials from sessionStorage
      sessionStorage.removeItem('sirmx_pending_email');
      sessionStorage.removeItem('sirmx_pending_password');
      sessionStorage.removeItem('sirmx_pending_name');

      // Brief pause for the success animation, then redirect
      await new Promise((r) => setTimeout(r, 1800));
      router.replace('/dashboard');
    },
    [router],
  );

  // ── Handle direct return from email link (token in URL) ───────────────────────
  useEffect(() => {
    if (verifiedParam === 'true' && tokenParam) {
      setPageState('verified');
      const name = nameParam || sessionStorage.getItem('sirmx_pending_name') || '';
      completeLogin(tokenParam, email, name);
    }
  }, [verifiedParam, tokenParam, email, nameParam, completeLogin]);

  // ── Poll the backend for verification status ──────────────────────────────────
  // This handles the case where the user opens/clicks the email in a different
  // tab — the original tab will still detect and auto-redirect.
  useEffect(() => {
    if (!email || pageState !== 'waiting') return;

    const poll = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/auth/verification-status?email=${encodeURIComponent(email)}`,
        );
        if (!res.ok) return;

        const data = await res.json() as { verified: boolean };

        if (data.verified) {
          // Email was verified (likely in another tab) — try auto-login with stored creds
          if (intervalRef.current) clearInterval(intervalRef.current);

          const storedEmail = sessionStorage.getItem('sirmx_pending_email');
          const storedPassword = sessionStorage.getItem('sirmx_pending_password');
          const storedName = sessionStorage.getItem('sirmx_pending_name') ?? '';

          if (storedEmail && storedPassword) {
            const loginRes = await fetch(`${API_URL}/api/auth/login`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: storedEmail, password: storedPassword }),
            });

            if (loginRes.ok) {
              const loginData = await loginRes.json() as { token: string; user: { name: string } };
              setPageState('verified');
              completeLogin(loginData.token, storedEmail, loginData.user.name ?? storedName);
              return;
            }
          }

          // No stored creds (e.g. page was refreshed) — send to login with success message
          setPageState('verified');
          await new Promise((r) => setTimeout(r, 1500));
          router.replace('/login?verified=true');
        }
      } catch {
        // Silently ignore network errors — will retry on next tick
      }
    };

    intervalRef.current = setInterval(poll, POLL_INTERVAL_MS);
    // Also run immediately on mount
    poll();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [email, pageState, router, completeLogin]);

  // ── Resend email with 60s cooldown ───────────────────────────────────────────
  async function handleResend() {
    if (resendCooldown > 0 || !email) return;
    setResendLoading(true);

    try {
      await fetch(`${API_URL}/api/auth/resend-verification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setResendDone(true);
      setResendCooldown(60);

      cooldownRef.current = setInterval(() => {
        setResendCooldown((c) => {
          if (c <= 1) {
            if (cooldownRef.current) clearInterval(cooldownRef.current);
            setResendDone(false);
            return 0;
          }
          return c - 1;
        });
      }, 1000);
    } finally {
      setResendLoading(false);
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────────
  return (
    <div className="max-w-md mx-auto text-center">
      <AnimatePresence mode="wait">

        {/* ── WAITING STATE ─────────────────────────────────────────────────── */}
        {pageState === 'waiting' && (
          <motion.div
            key="waiting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Envelope animation */}
            <div className="relative w-28 h-28 mx-auto mb-8">
              {/* Pulse rings */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{ scale: 1 + i * 0.3, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {/* Envelope icon */}
              <motion.div
                className="relative z-10 w-28 h-28 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </motion.div>
            </div>

            <h2 className="text-2xl font-black text-on-surface tracking-tighter mb-3">
              Check your inbox
            </h2>

            <p className="text-on-surface-variant text-sm font-medium leading-relaxed mb-2">
              We sent a verification link to
            </p>
            <p className="text-primary font-bold text-sm mb-6 bg-primary/5 border border-primary/15 rounded-lg px-4 py-2 inline-block">
              {email || 'your email address'}
            </p>

            {/* Status indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="inline-block w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-on-surface-variant opacity-60">
                Waiting for verification{dots}
              </span>
            </div>

            {/* Steps */}
            <div className="space-y-3 text-left mb-8">
              {[
                { step: '1', text: 'Open the email from SIRMx', done: true },
                { step: '2', text: 'Click the "Verify Email Address" button', done: false },
                { step: '3', text: 'You\'ll be redirected to your dashboard automatically', done: false },
              ].map(({ step, text, done }) => (
                <div key={step} className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5
                    ${done ? 'bg-emerald-100 text-emerald-700' : 'bg-surface-container-low text-outline/50 border border-outline-variant/10'}`}
                  >
                    {done ? '✓' : step}
                  </div>
                  <p className={`text-sm font-medium leading-relaxed ${done ? 'text-emerald-700 line-through opacity-60' : 'text-on-surface-variant'}`}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 border-t border-outline-variant/10" />
              <span className="text-[10px] text-outline/40 font-black uppercase tracking-widest">
                Didn&apos;t receive it?
              </span>
              <div className="flex-1 border-t border-outline-variant/10" />
            </div>

            {/* Resend button */}
            <button
              id="resend-email-btn"
              onClick={handleResend}
              disabled={resendLoading || resendCooldown > 0}
              className="w-full text-sm font-bold text-primary border border-primary/20 rounded-xl py-2.5 hover:bg-primary/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-4"
            >
              {resendLoading
                ? 'Sending…'
                : resendCooldown > 0
                  ? `Resend in ${resendCooldown}s`
                  : 'Resend verification email'}
            </button>

            <AnimatePresence>
              {resendDone && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-emerald-600 font-medium mb-4"
                >
                  ✅ New verification email sent — check your inbox.
                </motion.p>
              )}
            </AnimatePresence>

            <p className="text-xs text-on-surface-variant/50 font-medium">
              Wrong email?{' '}
              <Link href="/register" className="text-primary font-bold hover:underline">
                Start over
              </Link>
              {' · '}
              <Link href="/login" className="text-primary font-bold hover:underline">
                Already verified?
              </Link>
            </p>
          </motion.div>
        )}

        {/* ── VERIFIED / REDIRECTING STATE ──────────────────────────────────── */}
        {(pageState === 'verified' || pageState === 'redirecting') && (
          <motion.div
            key="verified"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Success icon */}
            <div className="relative w-28 h-28 mx-auto mb-8">
              <motion.div
                className="w-28 h-28 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.svg
                  className="w-12 h-12 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                  />
                </motion.svg>
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-black text-on-surface tracking-tighter mb-3"
            >
              Email verified! 🎉
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-on-surface-variant text-sm font-medium leading-relaxed mb-8"
            >
              Your account is active. Taking you to the dashboard…
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2 text-sm font-medium text-primary"
            >
              <span className="inline-block w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              Redirecting to dashboard…
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
