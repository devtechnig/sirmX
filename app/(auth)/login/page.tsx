'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

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

      <motion.div variants={itemVariants} className="mb-6">
        <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border border-outline-variant/30 rounded-xl text-sm font-bold text-on-surface hover:bg-surface-container-low transition-all shadow-sm btn-press">
          <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-4 h-4" />
          Continue with Google
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-outline-variant/10"></div>
        </div>
        <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.2em] text-outline opacity-40 bg-white px-4">
          Or use email
        </div>
      </motion.div>

      <motion.form variants={itemVariants} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">Email Address</label>
          <input 
            type="email" 
            placeholder="name@company.com"
            className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-end px-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60">Password</label>
            <Link href="/forgot-password" title="Recover Password" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Forgot?</Link>
          </div>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring"
          />
        </div>

        <button 
          className="w-full bg-primary text-white font-black py-3 rounded-xl shadow-lg shadow-primary/10 hover:scale-[1.01] active:scale-[0.99] transition-all font-headline tracking-tighter text-base mt-2 btn-press"
          type="button"
          onClick={() => window.location.href = '/dashboard'}
        >
          Access Dashboard
        </button>
      </motion.form>

      <motion.p variants={itemVariants} className="mt-6 text-center text-xs font-medium text-on-surface-variant">
        New to SIRMx? <Link href="/register" className="text-primary font-black hover:underline px-1">Create account</Link>
      </motion.p>
    </motion.div>
  );
}
