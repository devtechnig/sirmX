'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeamPage() {
  const members = [
    { name: 'Alexander Vance', role: 'Chief Risk Officer', area: 'Regulatory Strategy', status: 'Active' },
    { name: 'Sarah Jenkins', role: 'Compliance Manager', area: 'EU/US Operations', status: 'Active' },
    { name: 'Marcus Chen', role: 'GRC Architect', area: 'Cloud Security', status: 'On Leave' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-extrabold font-headline tracking-tight text-dash-on-surface">Team Management</h2>
          <p className="text-dash-on-surface-variant mt-1">Assign roles, monitor activity, and collaborate on compliance.</p>
        </div>
        <button className="px-6 py-2.5 bg-dash-primary text-dash-on-primary font-bold rounded-xl text-sm shadow-lg shadow-dash-primary/10 hover:brightness-110 transition-all font-headline">
          Invite Member
        </button>
      </div>

      <div className="bg-dash-surface-container-low rounded-2xl border border-dash-outline-variant/10 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-dash-surface-container-high">
            <tr className="text-[10px] font-bold text-dash-outline uppercase tracking-widest">
              <th className="px-8 py-4">Member</th>
              <th className="px-8 py-4">Specialization</th>
              <th className="px-8 py-4">Role</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dash-outline-variant/10 font-body">
            {members.map((member, i) => (
              <tr key={i} className="hover:bg-dash-surface-container-high/50 transition-colors">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-dash-primary/10 flex items-center justify-center font-bold text-dash-primary">
                      {member.name.charAt(0)}
                    </div>
                    <span className="font-bold text-dash-on-surface">{member.name}</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-dash-on-surface-variant text-sm">{member.area}</td>
                <td className="px-8 py-5 text-dash-on-surface-variant text-sm">{member.role}</td>
                <td className="px-8 py-5">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${member.status === 'Active' ? 'bg-dash-primary/10 text-dash-primary' : 'bg-dash-surface-container-highest text-dash-outline'}`}>
                    {member.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="text-dash-outline hover:text-dash-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
