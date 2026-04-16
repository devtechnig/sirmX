'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Activity } from '@/app/dashboard/data/mockData';

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

export default function ActivityFeed({ activities }: { activities: Activity[] }) {
  return (
    <motion.div variants={itemVariants} className="dash-card rounded-[3rem] p-9 flex flex-col inner-glow">
      <div className="flex items-center justify-between mb-10">
        <h4 className="text-2xl font-black font-headline text-dash-on-surface tracking-tight">Intelligence</h4>
        <span className="text-[10px] font-black uppercase tracking-widest bg-dash-primary/10 text-dash-primary px-3 py-1 rounded-full border border-dash-primary/20">Live</span>
      </div>
      
      <div className="flex-1 space-y-9 relative">
        <div className="absolute left-[13px] top-2 bottom-8 w-[1.5px] bg-dash-outline-variant/10"></div>
        
        {activities.map((activity, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative flex gap-6 pl-9 group/activity cursor-pointer"
          >
            <div className="absolute left-0 top-1.5 w-7 h-7 bg-dash-surface rounded-full flex items-center justify-center z-10 border border-dash-outline-variant/20 group-hover/activity:border-dash-primary/50 group-hover/activity:shadow-lg transition-all duration-500">
              <div className={`w-2.5 h-2.5 rounded-full ${activity.color} ${activity.ring ? `ring-4 ${activity.ring} animate-pulse` : ''}`}></div>
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-bold text-dash-on-surface group-hover/activity:text-dash-primary transition-colors tracking-tight leading-snug">{activity.title}</p>
              <p className="text-xs text-dash-outline leading-relaxed mt-1.5 font-medium opacity-80">{activity.desc}</p>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-[9px] text-dash-outline uppercase tracking-widest font-black opacity-60 bg-dash-surface-container-high/50 px-2 py-0.5 rounded-md">{activity.time}</span>
                <span className="material-symbols-outlined text-[12px] text-dash-outline opacity-0 group-hover/activity:opacity-100 group-hover/activity:translate-x-1 transition-all">chevron_right</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.button 
        whileHover={{ letterSpacing: '0.25em' }}
        className="mt-10 text-center text-[10px] font-black uppercase tracking-[0.2em] text-dash-outline hover:text-dash-primary transition-all duration-300 py-3 rounded-2xl border border-dash-outline-variant/10 hover:border-dash-primary/20"
      >
        View Full Matrix
      </motion.button>
    </motion.div>
  );
}
