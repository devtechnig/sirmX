'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { mockDashboardData } from '../data/mockData';

const columns = [
  {
    title: 'To Do',
    color: 'bg-dash-error',
    count: mockDashboardData.tasks.todo.length,
    tasks: mockDashboardData.tasks.todo,
  },
  {
    title: 'In Progress',
    color: 'bg-dash-primary',
    count: mockDashboardData.tasks.inProgress.length,
    tasks: mockDashboardData.tasks.inProgress,
  },
  {
    title: 'Review',
    color: 'bg-dash-secondary',
    count: mockDashboardData.tasks.review.length,
    tasks: mockDashboardData.tasks.review,
  },
  {
    title: 'Completed',
    color: 'bg-dash-on-surface-variant',
    count: mockDashboardData.tasks.completed.length,
    tasks: mockDashboardData.tasks.completed,
  },
];

export default function TasksPage() {
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

  const columnVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
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
      className="flex flex-col h-full -m-10 overflow-hidden"
    >
      {/* Board Header */}
      <section className="px-10 pt-10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end bg-dash-background/40 backdrop-blur-xl sticky top-0 z-30 border-b border-dash-outline-variant/10 shadow-sm">
        <motion.div variants={columnVariants}>
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-dash-on-surface mb-1">Compliance Pipeline</h1>
          <p className="font-body text-dash-outline font-medium opacity-80">Regulatory Task Management & Enterprise Audit Readiness</p>
        </motion.div>
        <motion.div variants={columnVariants} className="flex gap-4 mt-6 md:mt-0">
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: 'var(--color-dash-surface-container-highest)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-dash-surface-container-high text-dash-on-surface px-6 py-3 rounded-2xl text-sm font-bold border border-dash-outline-variant/10 hover:border-dash-primary/30 transition-all font-headline shadow-sm"
          >
            Filter Matrix
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: '0 10px 20px -5px rgba(62, 224, 137, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-dash-primary text-dash-on-primary px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-dash-primary/20 hover:brightness-110 transition-all flex items-center gap-2 glow-primary"
          >
            <span className="material-symbols-outlined text-lg font-black">add</span>
            <span>New Task</span>
          </motion.button>
        </motion.div>
      </section>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto px-10 py-8 h-full dash-scrollbar">
        <div className="flex gap-8 h-full min-w-max">
          {columns.map((column, colIdx) => (
            <motion.div 
              key={column.title} 
              variants={columnVariants}
              className="w-85 flex flex-col h-full bg-dash-surface-container-low/20 rounded-[3rem] p-3 border border-dash-outline-variant/5"
            >
              <div className="flex items-center justify-between mb-6 px-5 pt-3">
                <div className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${column.color} shadow-sm border border-white/10`}></span>
                  <h3 className="font-headline font-black text-dash-on-surface text-xs uppercase tracking-[0.2em] opacity-80">{column.title}</h3>
                  <span className="bg-dash-surface-container-high/60 border border-dash-outline-variant/10 text-dash-on-surface-variant text-[10px] px-2.5 py-1 rounded-xl font-black shadow-inner">{column.count}</span>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--color-dash-surface-container-high)' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-dash-outline hover:text-dash-primary transition-all"
                >
                  <span className="material-symbols-outlined text-xl">more_horiz</span>
                </motion.button>
              </div>
              
              <div className="flex-1 space-y-5 overflow-y-auto px-2 dash-scrollbar pb-32">
                {column.tasks.map((task, i) => (
                  <motion.div 
                    layout
                    key={task.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: colIdx * 0.1 + i * 0.05, duration: 0.5 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className={`dash-card p-6 rounded-[2.5rem] border border-dash-outline-variant/10 group cursor-grab active:cursor-grabbing inner-glow bg-dash-surface relative overflow-hidden ${task.completed ? 'opacity-70 grayscale-[0.3]' : 'shadow-xl'}`}
                  >
                    {/* Card Decoration */}
                    <div className={`absolute top-0 left-0 w-1.5 h-full ${task.priority === 'high' ? 'bg-dash-error' : task.completed ? 'bg-dash-primary' : 'bg-dash-outline-variant/30'} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    
                    <div className="flex justify-between items-start mb-5">
                      <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1 rounded-xl border ${task.priority === 'high' ? 'bg-dash-error/10 text-dash-error border-dash-error/20' : 'bg-dash-surface-container-highest text-dash-outline border-dash-outline-variant/10 shadow-inner'}`}>
                        {task.id}
                      </span>
                      <div className="flex items-center gap-2">
                        {task.priority === 'high' && <span className="material-symbols-outlined text-dash-error text-xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>priority_high</span>}
                        {task.priority === 'medium' && <span className="material-symbols-outlined text-dash-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>low_priority</span>}
                        {task.priority === 'time' && <span className="material-symbols-outlined text-dash-outline text-xl">schedule</span>}
                        {task.priority === 'done' && <span className="material-symbols-outlined text-dash-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>}
                      </div>
                    </div>
                    
                    <h4 className={`text-[15px] font-bold text-dash-on-surface mb-6 leading-relaxed group-hover:text-dash-primary transition-colors tracking-tight ${task.completed ? 'line-through decoration-dash-primary/40 text-dash-outline decoration-2' : ''}`}>
                      {task.title}
                    </h4>
                    
                    {task.progress !== undefined && (
                      <div className="mb-6 bg-dash-surface-container-low/50 p-3 rounded-2xl border border-dash-outline-variant/5">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-dash-outline mb-2 opacity-70">
                          <span>Progress</span>
                          <span className={task.progress === 100 ? 'text-dash-primary' : ''}>{task.progress}%</span>
                        </div>
                        <div className="w-full bg-dash-surface-container-highest/40 h-2 rounded-full overflow-hidden border border-dash-outline-variant/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${task.progress}%` }}
                            transition={{ duration: 1.5, delay: colIdx * 0.1 + i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                            className={`${task.progress === 100 ? 'bg-dash-primary' : 'bg-dash-primary/80'} h-full rounded-full shadow-[0_0_12px_rgba(62,224,137,0.3)] relative overflow-hidden`}
                          >
                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                          </motion.div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-auto pt-2">
                      <div className="flex -space-x-3">
                        {task.users.map((url, idx) => (
                          <motion.div 
                            key={idx} 
                            whileHover={{ y: -3, zIndex: 10, scale: 1.1 }}
                            className="w-8 h-8 rounded-full border-2 border-dash-surface overflow-hidden relative shadow-md ring-1 ring-black/5"
                          >
                            <Image src={url} alt="User" fill className="object-cover" />
                          </motion.div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-dash-surface bg-dash-surface-container-highest flex items-center justify-center text-[9px] font-bold text-dash-outline shadow-md">+1</div>
                      </div>
                      <motion.div 
                        whileHover={{ scale: 1.05, backgroundColor: 'var(--color-dash-primary)', color: 'white' }}
                        className="flex items-center gap-2 text-dash-outline px-3 py-1.5 bg-dash-surface-container-high rounded-xl border border-dash-outline-variant/10 group-hover:shadow-glow transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[13px] font-bold">link</span>
                        <span className="text-[10px] font-black uppercase tracking-widest">{task.link}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
                
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: 'var(--color-dash-surface-container-high)' }}
                  className="w-full py-4 rounded-[2rem] border-2 border-dashed border-dash-outline-variant/20 text-dash-outline flex items-center justify-center gap-2 hover:border-dash-primary/30 hover:text-dash-primary transition-all group"
                >
                  <span className="material-symbols-outlined text-lg group-hover:rotate-90 transition-transform duration-300">add</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Add Item</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Analytics Indicator - Premium Glow */}
      <motion.div 
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }}
        className="fixed bottom-12 right-12 bg-dash-surface-container-low/60 backdrop-blur-2xl p-7 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-dash-primary/20 max-w-xs hidden xl:block z-40 group cursor-default"
      >
        <div className="absolute inset-0 bg-dash-primary/5 rounded-[2rem] opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="p-3.5 bg-dash-primary/15 rounded-2xl border border-dash-primary/20 shadow-inner"
            >
              <span className="material-symbols-outlined text-dash-primary text-2xl font-black">auto_graph</span>
            </motion.div>
            <div>
              <p className="text-[10px] text-dash-outline font-black uppercase tracking-[0.2em] opacity-60">Filing Health</p>
              <p className="text-2xl font-black text-dash-on-surface tracking-tighter shadow-glow-primary">94.2%</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-[11px] font-black">
              <span className="text-dash-on-surface uppercase tracking-widest opacity-40">Benchmark met</span>
              <span className="text-dash-primary uppercase tracking-widest">+2.4% <span className="text-[10px] opacity-60 font-medium">MoM</span></span>
            </div>
            <div className="w-full bg-dash-surface-container-highest/30 h-2.5 rounded-full overflow-hidden border border-dash-outline-variant/10 shadow-inner">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '94.2%' }}
                transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
                className="bg-dash-primary h-full shadow-[0_0_15px_rgba(62,224,137,0.4)] relative overflow-hidden"
              >
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
              </motion.div>
            </div>
            <p className="text-[11px] text-dash-on-surface-variant leading-relaxed font-bold mt-2">
              <span className="text-dash-error">3 critical blockers</span> remaining for <span className="text-dash-primary">Q3 Audit Readiness</span>. Velocity at target.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
