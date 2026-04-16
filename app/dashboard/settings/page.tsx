'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-4xl font-extrabold font-headline tracking-tight text-dash-on-surface">Platform Settings</h2>
        <p className="text-dash-on-surface-variant mt-1">Manage your enterprise configuration and security preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside className="space-y-2">
          {['Profile', 'Notifications', 'Security', 'API Keys', 'Integrations'].map((item) => (
            <button key={item} className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all ${item === 'Profile' ? 'bg-dash-primary text-dash-on-primary' : 'hover:bg-dash-surface-container-high text-dash-on-surface-variant'}`}>
              {item}
            </button>
          ))}
        </aside>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-dash-surface-container-low p-8 rounded-2xl border border-dash-outline-variant/10 space-y-8">
             <div className="space-y-4">
              <h3 className="text-xl font-bold text-dash-on-surface">Organization Profile</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-dash-outline uppercase">Company Name</label>
                  <input type="text" defaultValue="sirmX Global" className="w-full bg-dash-surface-container-high border border-dash-outline-variant/10 rounded-lg px-4 py-2.5 text-dash-on-surface" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-dash-outline uppercase">Primary Domain</label>
                  <input type="text" defaultValue="sirmx.ai" className="w-full bg-dash-surface-container-high border border-dash-outline-variant/10 rounded-lg px-4 py-2.5 text-dash-on-surface" />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-dash-outline-variant/10">
              <h3 className="text-xl font-bold text-dash-on-surface">Regional Focus</h3>
              <div className="flex flex-wrap gap-2">
                {['Nigeria (Lagos)', 'Nigeria (Abuja)', 'United Kingdom', 'European Union', 'United States'].map(reg => (
                  <span key={reg} className="bg-dash-primary/10 text-dash-primary px-3 py-1 rounded-full text-xs font-bold border border-dash-primary/20">
                    {reg}
                  </span>
                ))}
              </div>
            </div>

            <button className="px-8 py-3 bg-dash-primary text-dash-on-primary font-bold rounded-xl text-sm transition-all hover:brightness-110 active:scale-95">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
