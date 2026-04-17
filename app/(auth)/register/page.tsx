'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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

interface FieldErrors {
  name?: string[];
  email?: string[];
  password?: string[];
}

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setFieldErrors({});

    if (!agreed) {
      setError('Please agree to the Terms and Privacy Policy to continue.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.issues) {
          setFieldErrors(data.issues as FieldErrors);
          setError('Please fix the errors below.');
        } else {
          setError(data.error ?? 'Registration failed. Please try again.');
        }
        return;
      }

      // Store credentials temporarily in sessionStorage so the pending page
      // can perform an automatic login once verification is confirmed.
      // sessionStorage is cleared when the browser tab closes.
      sessionStorage.setItem('sirmx_pending_email', email);
      sessionStorage.setItem('sirmx_pending_password', password);
      sessionStorage.setItem('sirmx_pending_name', `${firstName} ${lastName}`.trim());

      // Navigate to the verification pending page
      router.push(`/verify-pending?email=${encodeURIComponent(email)}`);
    } catch {
      setError('Could not reach the server. Please try again.');
    } finally {
      setIsLoading(false);
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
        <h2 className="text-2xl font-black text-on-surface tracking-tighter mb-1">Create Account</h2>
        <p className="text-on-surface-variant text-sm font-medium">Start your 14-day premium trial.</p>
      </motion.div>

      <AnimatePresence>
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
      </AnimatePresence>

      <motion.form variants={itemVariants} className="space-y-4" onSubmit={handleRegister}>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">
              First Name
            </label>
            <input
              id="register-firstname"
              type="text"
              placeholder="Adam"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">
              Last Name
            </label>
            <input
              id="register-lastname"
              type="text"
              placeholder="Vance"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">
            Work Email
          </label>
          <input
            id="register-email"
            type="email"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full bg-surface-container-low border rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring ${
              fieldErrors.email ? 'border-red-400' : 'border-outline-variant/10'
            }`}
          />
          {fieldErrors.email && (
            <p className="text-[10px] text-red-600 font-medium px-1">{fieldErrors.email[0]}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">
            Password
          </label>
          <input
            id="register-password"
            type="password"
            placeholder="Min. 8 chars, 1 uppercase, 1 number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={`w-full bg-surface-container-low border rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring ${
              fieldErrors.password ? 'border-red-400' : 'border-outline-variant/10'
            }`}
          />
          {fieldErrors.password && (
            <p className="text-[10px] text-red-600 font-medium px-1">{fieldErrors.password[0]}</p>
          )}
        </div>

        <div className="flex items-start gap-2.5 px-1 py-1">
          <input
            type="checkbox"
            className="mt-0.5 accent-primary h-3.5 w-3.5"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="terms" className="text-[10px] text-on-surface-variant font-medium leading-tight">
            I agree to the{' '}
            <Link href="/terms" className="text-primary font-bold hover:underline">
              Terms
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary font-bold hover:underline">
              Privacy Policy
            </Link>
            .
          </label>
        </div>

        <button
          id="register-submit"
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white font-black py-3 rounded-xl shadow-lg shadow-primary/10 hover:scale-[1.01] active:scale-[0.99] transition-all font-headline tracking-tighter text-base mt-2 btn-press disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Creating account…
            </>
          ) : (
            'Create Trial Account'
          )}
        </button>
      </motion.form>

      <motion.p
        variants={itemVariants}
        className="mt-6 text-center text-xs font-medium text-on-surface-variant"
      >
        Already have an account?{' '}
        <Link href="/login" className="text-primary font-black hover:underline px-1">
          Login here
        </Link>
      </motion.p>
    </motion.div>
  );
}
