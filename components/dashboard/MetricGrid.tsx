'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MetricCard } from '@/app/dashboard/data/mockData';

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

export default function MetricGrid({ metrics }: { metrics: MetricCard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, idx) => (
        <motion.div 
          key={metric.label}
          variants={itemVariants} 
          className={`dash-card rounded-[2.5rem] p-7 relative overflow-hidden group ${idx === 1 ? 'border-dash-primary/40 glow-primary shadow-dash-primary/5' : ''}`}
        >
          {/* Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-dash-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000 blur-3xl opacity-50 group-hover:opacity-100"></div>
          
          <div className="relative z-10">
            <p className="text-[10px] text-dash-outline font-black uppercase tracking-[0.2em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">{metric.label}</p>
            <div className="flex items-baseline gap-3">
              <h3 className={`text-4xl font-bold font-headline tracking-tighter ${idx === 1 ? 'text-dash-primary' : 'text-dash-on-surface'}`}>{metric.value}</h3>
              {metric.trend && (
                <span className="text-dash-primary text-[10px] font-black flex items-center bg-dash-primary/10 px-2 py-0.5 rounded-lg border border-dash-primary/10">
                  {metric.trend} <span className="material-symbols-outlined text-[12px] ml-0.5">arrow_upward</span>
                </span>
              )}
              {metric.status && <span className={`${idx === 2 ? 'text-dash-error bg-dash-error/10 border-dash-error/20' : 'text-dash-on-surface-variant bg-dash-surface-container-highest border-dash-outline-variant/20'} text-[10px] font-bold px-2.5 py-1 rounded-xl border shadow-sm uppercase`}>{metric.status}</span>}
            </div>
            
            {metric.barValue && (
              <div className="mt-8 w-full bg-dash-surface-container-highest/50 h-2 rounded-full overflow-hidden border border-dash-outline-variant/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.barValue}%` }}
                  transition={{ duration: 1.8, delay: idx * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-dash-primary h-full rounded-full shadow-[0_0_15px_rgba(62,224,137,0.5)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                </motion.div>
              </div>
            )}

            {metric.geos && (
              <div className="mt-6 flex -space-x-2.5">
                {metric.geos.map((geo) => (
                  <motion.div 
                    key={geo} 
                    whileHover={{ y: -3, zIndex: 20 }}
                    className="w-8 h-8 rounded-full border-2 border-dash-surface bg-dash-surface-container-high flex items-center justify-center text-[10px] text-dash-primary font-black shadow-md cursor-pointer transition-transform"
                  >
                    {geo}
                  </motion.div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-dash-surface bg-dash-surface-container-highest flex items-center justify-center text-[10px] text-dash-outline font-bold shadow-md">+2</div>
              </div>
            )}

            {metric.segments && (
              <div className="mt-7 flex items-center gap-2">
                {metric.segments.map((seg, sIdx) => (
                  <div key={sIdx} className={`h-1.5 flex-1 rounded-full ${seg} opacity-40 shadow-sm sm:h-2`}></div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
