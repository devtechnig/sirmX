'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HelpPage() {
  const faqs = [
    { q: 'How often are regulations updated?', a: 'Our AI engine crawls agency portals every 15 minutes to identify new circulars and policy shifts.' },
    { q: 'Can I export audit logs?', a: 'Yes, you can export comprehensive audit reports in PDF or CSV format from the Analytics page.' },
    { q: 'How are risk levels calculated?', a: 'Risk levels are determined by cross-referencing new mandates against your specific business sector and geographic footprint.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-extrabold font-headline tracking-tight text-dash-on-surface">Help & Documentation</h2>
        <p className="text-dash-on-surface-variant font-body leading-relaxed">
          Need help navigating the SIRMx platform? Explore our guides or contact our support team.
        </p>
        <div className="relative pt-4">
          <span className="absolute inset-y-0 left-4 flex items-center text-dash-outline">
            <span className="material-symbols-outlined">search</span>
          </span>
          <input 
            type="text" 
            placeholder="Search documentation..." 
            className="w-full bg-dash-surface-container-low border border-dash-outline-variant/10 rounded-2xl pl-12 pr-6 py-4 text-dash-on-surface focus:outline-none focus:ring-2 focus:ring-dash-primary/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        {[
          { icon: 'book', title: 'User Guides', desc: 'Step-by-step instructions for all features.' },
          { icon: 'api', title: 'API Reference', desc: 'Integrate SIRMx intelligence into your stack.' },
          { icon: 'support_agent', title: 'Live Support', desc: 'Chat with our compliance architects.' },
        ].map((box, i) => (
          <div key={i} className="bg-dash-surface-container-low p-8 rounded-2xl border border-dash-outline-variant/10 hover:border-dash-primary/20 transition-all cursor-pointer group">
            <div className="w-12 h-12 rounded-xl bg-dash-primary/5 flex items-center justify-center mb-6 group-hover:bg-dash-primary/10 transition-colors">
              <span className="material-symbols-outlined text-dash-primary">{box.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-dash-on-surface mb-2">{box.title}</h3>
            <p className="text-sm text-dash-on-surface-variant leading-relaxed">{box.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-4 pt-12">
        <h3 className="text-2xl font-bold text-dash-on-surface mb-8">Frequently Asked Questions</h3>
        <div className="space-y-4 font-body">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-dash-surface-container-low p-6 rounded-xl border border-dash-outline-variant/10">
              <h4 className="font-bold text-dash-on-surface mb-2">{faq.q}</h4>
              <p className="text-sm text-dash-on-surface-variant leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
