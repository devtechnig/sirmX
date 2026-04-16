'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

export default function AIInsight() {
  return (
    <motion.section 
      variants={itemVariants}
      whileHover={{ scale: 1.005 }}
      className="bg-dash-primary/5 rounded-[3.5rem] p-10 border border-dash-primary/20 glow-primary relative overflow-hidden group cursor-default"
    >
      {/* Animated Background Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dash-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 transition-all duration-1000 group-hover:scale-125 group-hover:bg-dash-primary/10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-dash-primary/5 rounded-full blur-[100px] -ml-48 -mb-48 transition-all duration-1000 group-hover:scale-110"></div>

      <div className="flex flex-col md:flex-row gap-12 items-center relative z-10 text-center md:text-left">
        <motion.div 
          animate={{ 
            boxShadow: ["0 0 40px rgba(62, 224, 137, 0.2)", "0 0 70px rgba(62, 224, 137, 0.4)", "0 0 40px rgba(62, 224, 137, 0.2)"] 
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-28 h-28 rounded-[2.5rem] bg-dash-primary flex items-center justify-center shrink-0 shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-white/20 rounded-[2.5rem] animate-pulse"></div>
          <span className="material-symbols-outlined text-5xl text-dash-on-primary relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>
            psychology
          </span>
        </motion.div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
            <h4 className="text-2xl font-black font-headline text-dash-on-surface tracking-tight uppercase tracking-[0.05em]"><span className="text-dash-primary">AI</span> Insight Engines</h4>
            <span className="px-3 py-1 bg-dash-primary/20 text-dash-primary text-[10px] font-black rounded-full border border-dash-primary/20 animate-pulse">OPTIMIZED</span>
          </div>
          <p className="text-dash-on-surface leading-snug text-2xl font-bold tracking-tight max-w-2xl bg-gradient-to-r from-dash-on-surface to-dash-on-surface/60 bg-clip-text">
            &quot;Projected drop of <span className="text-dash-primary">4.2%</span> in SEC-Reg compliance next quarter. Action required on 17 record retention tasks before EOD Friday to mitigate institutional risk.&quot;
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="text-[11px] font-black uppercase tracking-widest px-8 py-4 bg-dash-primary text-dash-on-primary rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-dash-primary/30 flex items-center gap-2 group/btn btn-press"
            >
              Launch Mitigator 
              <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">bolt</span>
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: 'var(--color-dash-surface-container-high)' }}
              className="text-[11px] font-black uppercase tracking-widest px-8 py-4 text-dash-outline hover:text-dash-on-surface transition-all rounded-2xl border border-dash-outline-variant/10 shadow-sm"
            >
              Mark as Reviewed
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
