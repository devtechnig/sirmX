'use client';

import React, { useLayoutEffect } from 'react';
import PageTransition from "@/components/ui/PageTransition";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
  }, []);

  return (
    <div className="light bg-white text-on-surface min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <main className="flex-grow">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
