'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DashboardHeader() {
  return (
    <header className="dash-glass sticky top-0 z-40 px-10 py-4 flex items-center justify-between w-full h-20 transition-all duration-300 border-b border-dash-outline-variant/5 bg-dash-background/40 backdrop-blur-2xl">
      {/* Search Hub */}
      <div className="flex-1 max-w-2xl relative group hidden md:block">
        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-dash-outline group-focus-within:text-dash-primary transition-all duration-500 text-xl font-black">
          search
        </span>
        <input
          className="w-full bg-dash-surface-container-high/20 backdrop-blur-3xl border border-dash-outline-variant/10 rounded-2xl py-3 pl-14 pr-4 text-sm text-dash-on-surface placeholder:text-dash-outline/50 transition-all duration-500 shadow-sm font-medium focus-ring"
          placeholder="Intelligence search: policies, tasks, or AI insights..."
          type="text"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 opacity-30 group-focus-within:opacity-100 transition-all duration-500 translate-x-1 group-focus-within:translate-x-0">
          <kbd className="px-2.5 py-1 rounded-xl bg-dash-surface-container-highest border border-dash-outline-variant/20 text-[10px] font-black text-dash-outline shadow-inner">⌘</kbd>
          <kbd className="px-2.5 py-1 rounded-xl bg-dash-surface-container-highest border border-dash-outline-variant/20 text-[10px] font-black text-dash-outline shadow-inner">K</kbd>
        </div>
      </div>

      {/* Control Center */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-dash-surface-container-high/30 p-1.5 rounded-2xl border border-dash-outline-variant/5 shadow-inner backdrop-blur-md">
          <motion.button 
            whileHover={{ backgroundColor: 'var(--color-dash-surface-container-highest)', scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl text-dash-on-surface-variant hover:text-dash-primary transition-all duration-300 relative group"
          >
            <span className="material-symbols-outlined text-[24px] font-black">notifications</span>
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-dash-error rounded-full ring-4 ring-dash-background animate-[pulse_2s_infinite] shadow-glow-error"></span>
            <div className="absolute top-full right-0 mt-5 px-4 py-2 bg-dash-surface-container-highest rounded-2xl text-[11px] font-black text-dash-on-surface opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] border border-dash-primary/20 backdrop-blur-xl">
              3 Critical Syncs Pending
            </div>
          </motion.button>
          
          <div className="w-[1px] h-6 bg-dash-outline-variant/20 mx-1"></div>

          <motion.button 
            whileHover={{ backgroundColor: 'var(--color-dash-surface-container-highest)', scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl text-dash-on-surface-variant hover:text-dash-primary transition-all duration-300 group"
          >
            <span className="material-symbols-outlined text-[24px] font-black" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </motion.button>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px -5px rgba(62, 224, 137, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 bg-dash-primary text-dash-on-primary px-6 py-3 rounded-2xl font-headline font-black text-sm transition-all shadow-xl shadow-dash-primary/20 glow-primary border border-white/10 btn-press"
        >
          <span className="material-symbols-outlined text-xl font-black">bolt</span>
          <span className="tracking-tight">Run Analysis</span>
        </motion.button>

        <div className="h-10 w-[1px] bg-dash-outline-variant/10 mx-2 hidden lg:block"></div>

        <motion.button 
          whileHover={{ scale: 1.05, borderColor: 'var(--color-dash-primary)' }}
          className="flex items-center gap-3.5 p-1.5 pr-5 rounded-3xl bg-dash-surface-container-low/40 border border-dash-outline-variant/10 transition-all group shadow-sm backdrop-blur-md hover:bg-dash-surface-container-high/60"
        >
          <div className="w-10 h-10 rounded-[1.25rem] overflow-hidden relative border-2 border-dash-outline-variant/20 group-hover:border-dash-primary transition-all duration-500 shadow-md group-hover:shadow-glow">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5A1oWD9KimV7iKh47Ea_XKE05lvsAUU2HNbvX3FsTljPF0PdiQkJKgN82p21OkB-sf-QagT9MdxBgQGz5zIZ8A5Ht6Q2aHNoD2ETAE7OjeZf_G5fas1-A2I_qOeVuIjrBry7Ete8cQ9c-1dwTtEAlIsH3Emh6b2t-CkOjPk-0LHlw1ChwiTvjtfTi17_1NYLWDOqqnill2QRY7TxMx62uv0ttDPIvgugXvLnq4ykkXXKmvoo0JPijVLieuYVzXusvlIuwsA"
              alt="Profile"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="text-left hidden lg:block">
            <p className="text-[13px] font-black text-dash-on-surface leading-none mb-1.5 tracking-tight group-hover:text-dash-primary transition-colors">A. Vance</p>
            <p className="text-[9px] text-dash-outline font-black uppercase tracking-[0.25em] leading-none opacity-60">Corporate Admin</p>
          </div>
        </motion.button>
      </div>
    </header>
  );
}
