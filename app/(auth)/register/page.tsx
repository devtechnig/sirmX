'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RegisterPage() {
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
        <h2 className="text-2xl font-black text-on-surface tracking-tighter mb-1">Create Account</h2>
        <p className="text-on-surface-variant text-sm font-medium">Start your 14-day premium trial.</p>
      </motion.div>

      <motion.form variants={itemVariants} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">First Name</label>
            <input 
              type="text" 
              placeholder="Adam"
              className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">Last Name</label>
            <input 
              type="text" 
              placeholder="Vance"
              className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">Work Email</label>
            <input 
              type="email" 
              placeholder="email@company.com"
              className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">Company</label>
            <input 
              type="text" 
              placeholder="Company Ltd"
              className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-outline opacity-60 px-1">Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline/40 transition-all font-medium focus-ring"
          />
        </div>

        <div className="flex items-start gap-2.5 px-1 py-1">
          <input type="checkbox" className="mt-0.5 accent-primary h-3.5 w-3.5" id="terms" />
          <label htmlFor="terms" className="text-[10px] text-on-surface-variant font-medium leading-tight">
            I agree to the <Link href="/terms" className="text-primary font-bold hover:underline">Terms</Link> and <Link href="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link>.
          </label>
        </div>

        <button 
          className="w-full bg-primary text-white font-black py-3 rounded-xl shadow-lg shadow-primary/10 hover:scale-[1.01] active:scale-[0.99] transition-all font-headline tracking-tighter text-base mt-2 btn-press"
          type="button"
          onClick={() => window.location.href = '/dashboard'}
        >
          Create Trial Account
        </button>
      </motion.form>

      <motion.p variants={itemVariants} className="mt-6 text-center text-xs font-medium text-on-surface-variant">
        Already have an account? <Link href="/login" className="text-primary font-black hover:underline px-1">Login here</Link>
      </motion.p>
    </motion.div>
  );
}
