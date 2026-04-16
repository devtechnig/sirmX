'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BillingPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-4xl font-extrabold font-headline tracking-tight text-dash-on-surface">Billing & Subscription</h2>
        <p className="text-dash-on-surface-variant mt-1">Manage your enterprise license and view your transaction history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
           {/* Current Plan Card */}
           <div className="bg-dash-surface-container-low p-8 rounded-2xl border border-dash-outline-variant/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8">
               <span className="bg-dash-primary text-dash-on-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Active</span>
             </div>
             <h3 className="text-xl font-bold text-dash-on-surface mb-2">Enterprise Plan</h3>
             <p className="text-dash-on-surface-variant text-sm mb-6 max-w-sm">Full access to global regulatory tracking and AI-powered insights for up to 50 team members.</p>
             <div className="flex items-baseline gap-2 mb-8">
               <span className="text-4xl font-bold text-dash-primary">$499</span>
               <span className="text-dash-on-surface-variant font-medium">/ month</span>
             </div>
             <div className="flex gap-4">
                <button className="px-6 py-2.5 bg-dash-primary text-dash-on-primary font-bold rounded-xl text-sm hover:brightness-110 active:scale-95 transition-all">
                  Manage Plan
                </button>
                <button className="px-6 py-2.5 bg-dash-surface-container-high text-dash-on-surface font-bold rounded-xl text-sm border border-dash-outline-variant/10">
                  Update Payment Method
                </button>
             </div>
           </div>

           {/* History Table */}
           <div className="bg-dash-surface-container-low rounded-2xl border border-dash-outline-variant/10 overflow-hidden">
             <div className="p-6 border-b border-dash-outline-variant/10">
               <h4 className="font-bold text-dash-on-surface">Billing History</h4>
             </div>
             <table className="w-full text-left">
               <thead className="bg-dash-surface-container-high">
                 <tr className="text-[10px] font-bold text-dash-outline uppercase tracking-widest">
                   <th className="px-8 py-4">Invoice ID</th>
                   <th className="px-8 py-4">Date</th>
                   <th className="px-8 py-4">Amount</th>
                   <th className="px-8 py-4 text-right">Receipt</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-dash-outline-variant/10 text-sm">
                 {[1, 2, 3].map(i => (
                   <tr key={i} className="hover:bg-dash-surface-container-high/50 transition-colors">
                     <td className="px-8 py-4 text-dash-on-surface font-mono">INV-2024-00{i}</td>
                     <td className="px-8 py-4 text-dash-on-surface-variant">May 01, 2024</td>
                     <td className="px-8 py-4 text-dash-on-surface font-bold">$499.00</td>
                     <td className="px-8 py-4 text-right whitespace-nowrap">
                       <button className="text-dash-primary font-bold hover:underline">Download PDF</button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-dash-surface-variant/40 p-6 rounded-2xl border border-dash-outline-variant/10">
              <h4 className="font-bold text-dash-on-surface mb-4">Payment Method</h4>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-8 bg-dash-surface-container-highest rounded-md flex items-center justify-center font-bold text-xs text-dash-outline">VISA</div>
                 <div>
                    <p className="text-sm font-bold text-dash-on-surface">•••• 4242</p>
                    <p className="text-[10px] text-dash-on-surface-variant">Expires 12/26</p>
                 </div>
              </div>
              <button className="w-full py-2.5 bg-dash-surface-container-highest text-dash-primary text-xs font-bold rounded-lg hover:bg-dash-surface-variant transition-all">
                Change Method
              </button>
           </div>

           <div className="bg-dash-primary/5 p-6 rounded-2xl border border-dash-primary/20">
              <h4 className="text-dash-primary font-bold mb-2">Need Help?</h4>
              <p className="text-xs text-dash-on-surface-variant leading-relaxed mb-4">Questions about your billing or enterprise license? Contact our finance team.</p>
              <button className="text-dash-primary text-xs font-black uppercase hover:underline">Contact Support</button>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
