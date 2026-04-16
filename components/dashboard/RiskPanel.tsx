'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CategoryRisk } from '@/app/dashboard/data/mockData';

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

export default function RiskPanel({ risks }: { risks: CategoryRisk[] }) {
  return (
    <motion.div 
      variants={itemVariants} 
      className="lg:col-span-2 dash-card rounded-[3rem] p-9 flex flex-col gap-10 inner-glow bg-gradient-to-b from-dash-surface to-dash-surface/50"
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-2xl font-black font-headline text-dash-on-surface tracking-tight">Risk Exposure by Category</h4>
          <p className="text-sm text-dash-outline font-medium opacity-80 mt-1">Real-time categorical risk distribution and mitigation status.</p>
        </div>
        <div className="flex gap-2.5">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-dash-surface-container-high/50 backdrop-blur-md rounded-2xl text-dash-outline hover:text-dash-primary hover:border-dash-primary/30 border border-dash-outline-variant/10 transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[22px]">filter_list</span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-dash-surface-container-high/50 backdrop-blur-md rounded-2xl text-dash-outline hover:text-dash-primary border border-dash-outline-variant/10 transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[22px]">trending_up</span>
          </motion.button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between gap-8">
        {risks.map((item, i) => (
          <div key={item.label} className="space-y-3.5 group/item cursor-pointer">
            <div className="flex justify-between items-end text-xs font-black uppercase tracking-[0.15em]">
              <span className="text-dash-outline group-hover/item:text-dash-on-surface transition-colors">{item.label}</span>
              <span className={`${item.text} bg-surface-container-high p-1 px-2 rounded-lg`}>{item.value}%</span>
            </div>
            <div className="h-2.5 w-full bg-dash-surface-container-highest/30 rounded-full overflow-hidden border border-dash-outline-variant/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1.8, delay: i * 0.1 + 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                className={`h-full ${item.color} rounded-full opacity-80 group-hover/item:opacity-100 transition-opacity relative group-hover/item:shadow-[0_0_15px_rgba(62,224,137,0.3)]`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/item:animate-[shimmer_2s_infinite]" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
