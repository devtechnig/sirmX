'use client';

import React, { useLayoutEffect } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { motion } from 'framer-motion';
import PageTransition from "@/components/ui/PageTransition";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  }, []);

  return (
    <div className="dark bg-dash-background text-dash-on-surface min-h-screen Selection:bg-dash-primary/30">
      <PageTransition>
        <div className="flex overflow-hidden transition-colors duration-500 min-h-screen">
          <DashboardSidebar />
    
          <main className="flex-1 ml-64 flex flex-col min-h-screen relative overflow-hidden bg-dash-background">
            <DashboardHeader />
            
            <div className="flex-1 overflow-y-auto dash-scrollbar relative p-10 space-y-10 min-h-full pb-24">
              {children}
            </div>
    
            {/* Global Action Hub - Floating Refined */}
            <div className="fixed bottom-10 right-10 z-50">
              <motion.button 
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: '0 20px 40px rgba(62, 224, 137, 0.3)',
                  rotate: 90
                }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-[2rem] bg-dash-primary text-dash-on-primary shadow-2xl flex items-center justify-center glow-primary border border-white/20 transition-all active:shadow-inner"
              >
                <span className="material-symbols-outlined text-3xl font-black" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
              </motion.button>
            </div>
          </main>
        </div>
      </PageTransition>
    </div>
  );
}
