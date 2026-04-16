'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { mockDashboardData } from '../data/mockData';

const regulations = mockDashboardData.regulations;

export default function RegulationsInventory() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <motion.div variants={itemVariants}>
          <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-dash-on-surface mb-2">Regulations Inventory</h2>
          <p className="text-dash-outline max-w-lg leading-relaxed font-medium opacity-80">
            Live ledger of global regulatory shifts. Monitor compliance status and upcoming deadlines across primary financial jurisdictions.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: 'var(--color-dash-surface-container-highest)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-dash-surface-container-high text-dash-on-surface px-6 py-3 rounded-2xl text-sm font-bold transition-all border border-dash-outline-variant/10 hover:border-dash-primary/30 shadow-sm"
          >
            Export Catalog
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: '0 10px 20px -5px rgba(62, 224, 137, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-dash-primary text-dash-on-primary px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-dash-primary/20 hover:brightness-110 transition-all flex items-center gap-2 glow-primary"
          >
            <span className="material-symbols-outlined text-lg font-black">add</span>
            <span>New Tracker</span>
          </motion.button>
        </motion.div>
      </section>

      {/* Filter Matrix */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8 bg-dash-surface-container-low/50 p-5 rounded-3xl border border-dash-outline-variant/10 backdrop-blur-md">
        <div className="flex flex-col gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-dash-outline font-black px-1 opacity-60">Authority</span>
          <div className="flex items-center gap-2">
            <span className="px-5 py-2 rounded-xl bg-dash-primary text-dash-on-primary text-xs font-bold cursor-pointer shadow-lg shadow-dash-primary/20 transition-all">All</span>
            {['FINRA', 'SEC', 'GDPR', 'MiFID II'].map((auth) => (
              <motion.span 
                key={auth} 
                whileHover={{ backgroundColor: 'var(--color-dash-surface-container-highest)' }}
                className="px-5 py-2 rounded-xl bg-dash-surface-container-high/50 text-dash-on-surface text-xs font-bold hover:text-dash-primary transition-all cursor-pointer border border-dash-outline-variant/5"
              >
                {auth}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="h-10 w-[1px] bg-dash-outline-variant/20 mt-5 hidden lg:block"></div>
        <div className="flex flex-col gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-dash-outline font-black px-1 opacity-60">Compliance Status</span>
          <div className="flex items-center gap-2">
            {[
              { label: 'New', color: 'bg-dash-primary' },
              { label: 'Reviewed', color: 'bg-dash-secondary' },
              { label: 'Action Required', color: 'bg-dash-error' },
            ].map((status) => (
              <motion.span 
                key={status.label} 
                whileHover={{ backgroundColor: 'var(--color-dash-surface-container-highest)' }}
                className="px-5 py-2 rounded-xl bg-dash-surface-container-high/50 text-dash-on-surface text-xs font-bold hover:text-dash-primary transition-all cursor-pointer flex items-center gap-2.5 border border-dash-outline-variant/5"
              >
                <span className={`w-2 h-2 rounded-full ${status.color} shadow-[0_0_8px_rgba(0,0,0,0.2)]`}></span> {status.label}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Regulations List */}
      <div className="grid grid-cols-1 gap-6">
        {regulations.map((reg, i) => (
          <motion.div
            key={reg.name}
            variants={itemVariants}
            className="dash-card rounded-[3rem] p-9 hover:border-dash-primary/40 transition-all group cursor-pointer inner-glow relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-10"
          >
            {/* Hover Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-dash-primary/5 rounded-full -mr-32 -mt-32 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`}></div>
            
            <div className="flex items-center gap-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-dash-surface-container-high/50 border border-dash-outline-variant/10 flex items-center justify-center shrink-0 group-hover:border-dash-primary/30 transition-all duration-500 group-hover:scale-110 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-dash-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-2xl font-black text-dash-primary font-headline uppercase relative z-10">{reg.short}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-bold text-dash-on-surface group-hover:text-dash-primary transition-colors tracking-tight">{reg.name}</h3>
                  <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-xl border ${reg.priorityClass} glow-primary shadow-sm`}>
                    {reg.priority}
                  </span>
                </div>
                <p className="text-sm text-dash-outline font-medium max-w-xl opacity-90 leading-relaxed group-hover:text-dash-on-surface/80 transition-colors">{reg.desc}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-10 md:gap-16 relative z-10">
              <div className="text-left md:text-right">
                <p className="text-[10px] text-dash-outline font-black uppercase tracking-[0.2em] mb-2.5 flex items-center md:justify-end gap-2 opacity-60">
                  <span className="material-symbols-outlined text-[15px]">event</span> Filing Deadline
                </p>
                <p className="text-base font-bold text-dash-on-surface font-mono bg-dash-surface-container-high/40 px-3 py-1 rounded-lg border border-dash-outline-variant/5">{reg.deadline}</p>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className={`text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-3 ${reg.statusColor.replace('bg-', 'text-')}`}>
                    {reg.pulse && (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dash-error opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-dash-error shadow-[0_0_15px_rgba(255,107,107,0.5)]"></span>
                      </span>
                    )}
                    <span className="drop-shadow-sm">{reg.status}</span>
                  </p>
                </div>
                <div className="h-14 w-[1px] bg-dash-outline-variant/20 mx-1"></div>
                <motion.button 
                  whileHover={{ scale: 1.15, backgroundColor: 'var(--color-dash-primary)', color: 'white', boxShadow: '0 0 20px rgba(62, 224, 137, 0.4)' }}
                  className="w-12 h-12 rounded-2xl bg-dash-surface-container-high/50 border border-dash-outline-variant/20 text-dash-outline flex items-center justify-center transition-all duration-300 shadow-sm group-hover:border-dash-primary/30"
                >
                  <span className="material-symbols-outlined text-2xl font-black">chevron_right</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bento Intelligence Grid Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        {[
          {
            title: 'Automated Gap Analysis',
            desc: 'Based on your current policies, Rule 3110 update requires immediate attention to remote oversight manuals.',
            tag: 'AI Suggestion',
            icon: 'auto_awesome',
            color: 'text-dash-primary',
            bgColor: 'bg-dash-primary/10',
            btnText: 'Run Analysis',
            btnColor: 'text-dash-primary'
          },
          {
            title: 'Risk Proximity Alert',
            desc: 'FINRA Rule 3110 has a hard deadline in 7 days. 4 critical tasks remain incomplete for this entity.',
            tag: 'Risk Alert',
            icon: 'warning',
            color: 'text-dash-error',
            bgColor: 'bg-dash-error/10',
            btnText: 'View Open Tasks',
            btnColor: 'text-dash-error'
          },
          {
            title: 'Quarterly Outlook',
            score: '94%',
            trend: '+2.4% vs last qtr',
            tag: 'Compliance Score',
            icon: 'assignment_turned_in',
            color: 'text-dash-secondary',
            bgColor: 'bg-dash-secondary/10'
          }
        ].map((card, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants} 
            className="bg-dash-surface-container-low/40 p-8 rounded-[2.5rem] border border-dash-outline-variant/10 backdrop-blur-sm shadow-sm hover:border-dash-primary/20 transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`w-11 h-11 rounded-2xl ${card.bgColor} flex items-center justify-center ${card.color} shadow-sm border border-current opacity-20 transition-opacity group-hover:opacity-100`}>
                <span className="material-symbols-outlined font-black">{card.icon}</span>
              </div>
              <span className={`text-[10px] font-black ${card.color} px-3 py-1 ${card.bgColor} rounded-full uppercase tracking-widest border border-current/10`}>{card.tag}</span>
            </div>
            
            <h4 className="font-headline text-lg font-black text-dash-on-surface mb-3 tracking-tight">{card.title}</h4>
            
            {card.score ? (
              <>
                <div className="flex items-end gap-3 mt-4">
                  <span className="text-5xl font-black text-dash-on-surface tracking-tighter">{card.score}</span>
                  <span className="text-[10px] text-dash-primary mb-2 font-black tracking-widest">{card.trend}</span>
                </div>
                <div className="w-full bg-dash-surface-container-highest/50 h-2 rounded-full mt-6 overflow-hidden border border-dash-outline-variant/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: card.score }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-dash-primary shadow-[0_0_15px_rgba(62,224,137,0.3)]"
                  />
                </div>
              </>
            ) : (
              <>
                <p className="text-sm text-dash-outline leading-relaxed mb-6 font-medium opacity-80">{card.desc}</p>
                <motion.a 
                  whileHover={{ x: 5 }}
                  className={`text-[10px] font-black ${card.btnColor} flex items-center gap-2 group/btn cursor-pointer uppercase tracking-[0.2em]`}
                  href="#"
                >
                  {card.btnText}
                  <span className="material-symbols-outlined text-sm font-black group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </motion.a>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
