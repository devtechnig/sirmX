'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function AnalyticsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-12"
    >
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-extrabold font-headline tracking-tighter text-dash-on-surface">Compliance Analytics</h2>
          <p className="text-dash-outline font-medium mt-1 opacity-80">Deep-dive into regulatory trends, risk coefficient distribution, and jurisdiction health.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-4">
           <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: 'var(--color-dash-surface-container-highest)' }}
            className="px-6 py-3 bg-dash-surface-container-high/60 text-dash-on-surface font-bold rounded-2xl text-sm border border-dash-outline-variant/10 shadow-sm"
           >
            Export CSV
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: '0 10px 20px -5px rgba(62, 224, 137, 0.3)' }}
            className="px-6 py-3 bg-dash-primary text-dash-on-primary font-bold rounded-2xl text-sm shadow-lg shadow-dash-primary/20 hover:brightness-110 transition-all font-headline glow-primary"
          >
            Refresh Data
          </motion.button>
        </motion.div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Avg Resolution Time', value: '4.2 Days', trend: '+12%', color: 'text-dash-primary', bgColor: 'bg-dash-primary/5' },
          { label: 'Audit Readiness', value: '94%', trend: '+2.4%', color: 'text-dash-secondary', bgColor: 'bg-dash-secondary/5' },
          { label: 'Regulatory Velocity', value: '+14%', trend: 'High', color: 'text-dash-primary', bgColor: 'bg-dash-primary/5' },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="dash-card p-8 rounded-[2.5rem] border border-dash-outline-variant/10 relative overflow-hidden group inner-glow"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bgColor} rounded-full -mr-16 -mt-16 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <p className="text-[10px] text-dash-outline font-black uppercase tracking-[0.2em] opacity-60">{stat.label}</p>
                <span className={`text-[9px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-lg ${stat.bgColor} ${stat.color} border border-current opacity-30`}>{stat.trend}</span>
              </div>
              <h3 className={`text-4xl font-black font-headline tracking-tighter ${stat.color} group-hover:drop-shadow-sm transition-all`}>{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        variants={itemVariants}
        className="dash-card p-12 rounded-[3.5rem] border border-dash-outline-variant/10 min-h-[500px] flex flex-col items-center justify-center text-center relative overflow-hidden bg-dash-surface-container-low/20"
      >
        <div className="absolute inset-0 bg-dash-primary/5 opacity-30 pointer-events-none" />
        <div className="relative z-10">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-24 h-24 rounded-3xl bg-dash-primary/10 border border-dash-primary/20 flex items-center justify-center mb-8 shadow-glow-primary mx-auto"
          >
            <span className="material-symbols-outlined text-5xl text-dash-primary font-black">analytics</span>
          </motion.div>
          <h3 className="text-3xl font-black text-dash-on-surface mb-4 font-headline tracking-tight">Interactive Analytics Coming Soon</h3>
          <p className="text-dash-outline font-medium max-w-lg mx-auto leading-relaxed text-base opacity-80">
            We are currently integrating D3-powered visualization kernels to provide industry-leading regulatory heatmaps and predictive risk modeling. Expected release: <span className="text-dash-primary font-bold">V1.4 Stable</span>.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-8 py-3 bg-dash-surface-container-high text-dash-primary rounded-xl text-xs font-black uppercase tracking-[0.2em] border border-dash-primary/20"
          >
            Get Beta Access
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
