'use client';

import React, { useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageTransition from "@/components/ui/PageTransition";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
  }, []);

  return (
    <div className="light h-screen bg-white text-on-surface overflow-hidden">
      <PageTransition>
        <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
          {/* Visual Side (Left) */}
          <div className="hidden lg:flex relative bg-surface-container-low flex-col justify-center items-center p-12 overflow-hidden border-r border-outline-variant/10">
            <div className="absolute inset-0 z-0">
              <Image
                src="/auth_hero.png"
                alt="Auth Hero"
                fill
                className="object-cover opacity-60 mix-blend-multiply"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/90 z-10" />
            </div>

            <div className="relative z-20 max-w-lg text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-10 flex flex-col items-center"
              >
                <Link href="/" className="mb-10">
                  <div className="relative w-24 h-24 overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="SIRMx Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>

                <h2 className="text-4xl font-extrabold font-headline tracking-tighter text-on-surface leading-[1.1] mb-6">
                  Nigerian Regulatory Intelligence, <span className="text-primary italic">Automated.</span>
                </h2>
                <p className="text-lg text-on-surface-variant font-medium leading-relaxed opacity-80 mb-10">
                  Join 500+ enterprises managing CBN, SEC, and FIRS compliance through autonomous AI agents. Real-time monitoring for the modern Nigerian legal landscape.
                </p>
                
                <div className="flex flex-col items-center gap-6 pt-10 border-t border-outline-variant/20 w-full">
                  <div className="flex -space-x-3 overflow-hidden">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="inline-block h-10 w-10 rounded-full ring-4 ring-surface-container-low overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.3em] opacity-40">
                    Trusted by 50+ Financial Institutions
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Form Side (Right) */}
          <div className="flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white relative overflow-hidden h-full">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

            <div className="w-full max-w-md relative z-10 overflow-hidden py-4">
              <div className="lg:hidden mb-8 flex justify-center">
                 <Link href="/" className="flex items-center">
                  <div className="relative w-16 h-16">
                    <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                  </div>
                </Link>
              </div>
              {children}
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
