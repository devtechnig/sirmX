'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { mockDashboardData } from '../data/mockData';

export default function AIInsightsPage() {
  const actions = mockDashboardData.aiInsights.suggestedActions;
  const heatmapBlocks = mockDashboardData.aiInsights.heatmapBlocks;
  const predictive = mockDashboardData.aiInsights.predictiveAlert;

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
      <section className="mb-10">
        <motion.div variants={itemVariants}>
          <h2 className="font-headline text-4xl font-extrabold text-dash-on-surface tracking-tighter mb-2">AI Insights Engine</h2>
          <p className="text-dash-outline max-w-2xl leading-relaxed font-medium opacity-80">
            Intelligence synthesis of global regulatory shifts. Predictive modeling identifies risks before they impact your operations using proprietary deep-learning kernels.
          </p>
        </motion.div>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Main Predictive Card */}
        <motion.div 
          variants={itemVariants}
          className="col-span-12 lg:col-span-8 dash-card rounded-[3rem] p-10 relative overflow-hidden group inner-glow bg-dash-surface-container-low/20"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dash-primary/5 blur-[120px] -z-0 group-hover:bg-dash-primary/10 transition-colors duration-1000"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
              <div>
                <span className="bg-dash-primary/10 text-dash-primary text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-[0.2em] mb-4 inline-block border border-dash-primary/20 glow-primary shadow-sm">{predictive.tag}</span>
                <h3 className="font-headline text-4xl font-black text-dash-on-surface tracking-tight group-hover:text-dash-primary transition-colors">
                  {predictive.title}
                </h3>
              </div>
              <div className="flex items-center gap-3 px-5 py-2.5 bg-dash-surface-container-high/80 backdrop-blur-md rounded-2xl border border-dash-outline-variant/10 shadow-sm transition-all group-hover:border-dash-primary/40 group-hover:shadow-glow-primary">
                <span className="material-symbols-outlined text-dash-primary text-xl font-black" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="text-[10px] font-black text-dash-primary uppercase tracking-[0.2em]">Neural Synthesis</span>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-8 items-start p-9 bg-dash-surface-container-high/40 backdrop-blur-md rounded-[2.5rem] border border-dash-outline-variant/10 group-hover:bg-dash-surface-container-high/60 transition-all duration-500 shadow-inner">
                <div className="w-16 h-16 rounded-[1.5rem] bg-dash-error/10 flex items-center justify-center shrink-0 text-dash-error border border-dash-error/20 glow-error shadow-lg">
                  <span className="material-symbols-outlined text-3xl font-black">warning</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dash-on-surface mb-3 tracking-tight">{predictive.alertTitle}</h4>
                  <p className="text-dash-outline font-medium leading-relaxed text-base">
                    {predictive.alertDesc} Risk probability: <span className="text-dash-primary font-black font-mono text-2xl ml-1 drop-shadow-sm">87%</span>.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Exposure Level', value: predictive.exposure, color: 'text-dash-error', icon: 'radar' },
                  { label: 'Lead Time', value: predictive.timeToCompliance, color: 'text-dash-on-surface', icon: 'schedule' },
                  { label: 'Asset Impact', value: predictive.affectedAssets, color: 'text-dash-on-surface', icon: 'token' }
                ].map((stat, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    whileHover={{ y: -5, backgroundColor: 'var(--color-dash-surface-container-high)' }}
                    className="p-7 bg-dash-surface-container-low/40 rounded-3xl border border-dash-outline-variant/5 transition-all duration-300 group/stat shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-3 opacity-60">
                      <span className="material-symbols-outlined text-sm font-black">{stat.icon}</span>
                      <p className="text-[10px] uppercase text-dash-outline font-black tracking-[0.2em]">{stat.label}</p>
                    </div>
                    <p className={`text-2xl font-black ${stat.color} tracking-tighter`}>{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Suggested Actions Side Panel */}
        <div className="col-span-12 lg:col-span-4 space-y-8 flex flex-col">
          <motion.div 
            variants={itemVariants}
            className="flex-1 dash-card rounded-[3rem] p-9 relative overflow-hidden flex flex-col bg-dash-surface-container-low/20"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-dash-primary glow-primary opacity-50"></div>
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-headline font-black text-2xl text-dash-on-surface tracking-tight">AI Strategy</h3>
              <div className="w-11 h-11 rounded-2xl bg-dash-primary/10 flex items-center justify-center text-dash-primary border border-dash-primary/20 shadow-glow-primary">
                <span className="material-symbols-outlined text-[24px] font-black">lightbulb</span>
              </div>
            </div>
            <ul className="space-y-8 flex-1">
              {actions.map((action) => (
                <li key={action.id} className="group cursor-pointer">
                  <div className="flex gap-6">
                    <div className="w-11 h-11 rounded-2xl bg-dash-surface-container-high/50 flex items-center justify-center shrink-0 group-hover:bg-dash-primary group-hover:text-dash-on-primary transition-all duration-300 font-black text-sm border border-dash-outline-variant/10 shadow-sm relative overflow-hidden">
                      <div className="absolute inset-0 bg-dash-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative z-10">{action.id}</span>
                    </div>
                    <div className="space-y-1.5 px-1">
                      <p className="text-[15px] font-bold text-dash-on-surface group-hover:text-dash-primary transition-colors tracking-tight">{action.title}</p>
                      <p className="text-xs text-dash-outline font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300">
                        {action.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(62, 224, 137, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-12 py-5 bg-dash-primary text-dash-on-primary font-black uppercase tracking-[0.2em] rounded-[1.5rem] text-[10px] shadow-lg shadow-dash-primary/20 transition-all glow-primary border border-white/10"
            >
              Execute Protocol
            </motion.button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-dash-surface-container-high/40 rounded-[2.5rem] p-7 border border-dash-outline-variant/10 relative overflow-hidden group backdrop-blur-md shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dash-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-dash-primary shadow-[0_0_10px_rgba(62,224,137,0.5)]"></span>
              </span>
              <p className="text-[10px] font-black text-dash-primary uppercase tracking-[0.25em] leading-none">Neural Core Synthesis</p>
            </div>
            <p className="text-xs text-dash-outline italic font-medium leading-relaxed group-hover:text-dash-on-surface transition-colors">
              &quot;AI is currently parsing 412 updates across 14 jurisdictions. Optimal compliance route identified in <span className="text-dash-primary font-black">2m 14s</span>.&quot;
            </p>
          </motion.div>
        </div>

        {/* Sentiment Heatmap Card */}
        <motion.div 
          variants={itemVariants}
          className="col-span-12 dash-card rounded-[3rem] p-10 inner-glow bg-dash-surface-container-low/20 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-14">
            <div className="space-y-2">
              <h3 className="font-headline text-4xl font-black text-dash-on-surface tracking-tight">Market Sentiment Heatmap</h3>
              <p className="text-dash-outline text-base font-medium opacity-80">Visualizing global market reaction and regulatory aggression coefficients per territory.</p>
            </div>
            <div className="flex flex-wrap gap-8 bg-dash-background/40 p-5 rounded-[1.5rem] border border-dash-outline-variant/5">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 bg-dash-error rounded-xl shadow-[0_0_15px_rgba(255,107,107,0.3)] border border-white/10"></div>
                <span className="text-[11px] text-dash-on-surface font-black uppercase tracking-widest opacity-60">High Aggression</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 bg-dash-primary rounded-xl shadow-[0_0_15px_rgba(62,224,137,0.3)] border border-white/10"></div>
                <span className="text-[11px] text-dash-on-surface font-black uppercase tracking-widest opacity-60">Standard Baseline</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 h-72 font-headline">
            {heatmapBlocks.map((block, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05, y: -5, zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                className={`${block.bg} rounded-[2rem] p-7 flex flex-col justify-end ${block.hover} transition-all duration-500 border ${block.border} cursor-pointer group/block relative overflow-hidden shadow-sm`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 opacity-0 group-hover/block:opacity-100 translate-y-2 group-hover/block:translate-y-0 transition-all">
                  <span className="material-symbols-outlined text-lg font-black text-white">analytics</span>
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.25em]">{block.geo}</p>
                  <p className="text-base font-black text-white leading-tight mt-3 tracking-tight">{block.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {mockDashboardData.aiInsights.detailCards.map((item, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="col-span-12 md:col-span-6 dash-card rounded-[3rem] p-10 flex flex-col group hover:border-dash-primary/40 inner-glow transition-all duration-500 bg-dash-surface-container-low/20"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-5">
                <div className={`w-4 h-4 rounded-full ${item.color.includes('primary') ? 'bg-dash-primary shadow-[0_0_12px_rgba(62,224,137,0.5)]' : 'bg-dash-error shadow-[0_0_12px_rgba(255,107,107,0.5)]'}`}></div>
                <h4 className="text-2xl font-black text-dash-on-surface group-hover:text-dash-primary transition-colors tracking-tight">{item.title}</h4>
              </div>
              <motion.button 
                whileHover={{ rotate: 45, scale: 1.2, backgroundColor: 'var(--color-dash-primary)', color: 'white' }}
                className="w-12 h-12 rounded-2xl bg-dash-surface-container-high border border-dash-outline-variant/10 text-dash-outline flex items-center justify-center hover:text-dash-primary transition-all shadow-sm"
                >
                <span className="material-symbols-outlined text-2xl font-black">north_east</span>
              </motion.button>
            </div>
            <p className="text-base text-dash-outline font-medium leading-relaxed mb-10 opacity-90">{item.desc}</p>
            <div className="mt-auto flex items-center justify-between pt-6 border-t border-dash-outline-variant/5">
              <div className="flex items-center gap-2.5 px-4 py-2 bg-dash-primary/5 rounded-2xl border border-dash-primary/10 shadow-inner group-hover:border-dash-primary/30 transition-all">
                <span className="material-symbols-outlined text-lg text-dash-primary font-black" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="text-[10px] font-black text-dash-primary uppercase tracking-widest">Insight Synthetic</span>
              </div>
              <div className="flex items-center gap-2 text-dash-outline group-hover:text-dash-on-surface transition-colors">
                <span className="material-symbols-outlined text-base">schedule</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.time}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
