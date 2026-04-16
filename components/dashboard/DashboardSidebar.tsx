import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
  { name: 'Regulations', href: '/dashboard/regulations', icon: 'gavel' },
  { name: 'AI Insights', href: '/dashboard/ai-insight', icon: 'psychology' },
  { name: 'Tasks', href: '/dashboard/tasks', icon: 'assignment' },
  { name: 'Analytics', href: '/dashboard/analytics', icon: 'analytics' },
  { name: 'Team', href: '/dashboard/team', icon: 'group' },
];

const systemItems = [
  { name: 'Settings', href: '/dashboard/settings', icon: 'settings' },
  { name: 'Billing', href: '/dashboard/billing', icon: 'payments' },
  { name: 'Help', href: '/dashboard/help', icon: 'help' },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-dash-surface-container-low/50 backdrop-blur-xl flex flex-col py-6 fixed left-0 top-0 z-50 border-r border-dash-outline-variant/10 transition-all duration-500">
      <div className="px-7 mb-10 flex items-center justify-start">
        <Link href="/dashboard" className="flex items-center group/logo">
          <div className="relative w-12 h-12 overflow-hidden">
            <Image
              src="/logo.png"
              alt="SIRMx Logo"
              fill
              className="object-contain transition-transform duration-500 group-hover/logo:scale-110"
            />
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto dash-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? 'text-dash-primary bg-dash-primary/5 font-black shadow-inner'
                  : 'text-dash-on-surface-variant hover:bg-dash-surface-container-high/50 hover:text-dash-on-surface'
              }`}
            >
              <motion.span 
                whileHover={{ scale: 1.15, rotate: 8 }}
                className={`material-symbols-outlined relative z-10 text-[22px] ${isActive ? 'text-dash-primary' : 'text-dash-outline group-hover:text-dash-primary'} transition-colors duration-300`}
              >
                {item.icon}
              </motion.span>
              <span className="font-headline tracking-tight text-sm relative z-10">{item.name}</span>
              {isActive && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute left-0 top-2 bottom-2 w-1.25 bg-dash-primary rounded-r-full shadow-[2px_0_15px_rgba(62, 224, 137, 0.6)]"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {isActive && (
                <div className="absolute inset-0 bg-dash-primary/5 pointer-events-none" />
              )}
            </Link>
          );
        })}

        <div className="pt-8 pb-3 px-5">
          <p className="text-[10px] text-dash-outline font-black tracking-[0.2em] uppercase opacity-50">System</p>
        </div>

        {systemItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-dash-on-surface-variant hover:bg-dash-surface-container-high/50 hover:text-dash-on-surface transition-all duration-300"
          >
            <motion.span 
              whileHover={{ scale: 1.15 }}
              className="material-symbols-outlined text-[22px] text-dash-outline group-hover:text-dash-primary transition-colors duration-300"
            >
              {item.icon}
            </motion.span>
            <span className="font-headline tracking-tight text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto px-4 pt-4 border-t border-dash-outline-variant/10">
        <div className="bg-dash-surface-container/40 border border-dash-outline-variant/10 rounded-2xl p-4 shadow-sm hover:border-dash-primary/20 transition-all group">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5A1oWD9KimV7iKh47Ea_XKE05lvsAUU2HNbvX3FsTljPF0PdiQkJKgN82p21OkB-sf-QagT9MdxBgQGz5zIZ8A5Ht6Q2aHNoD2ETAE7OjeZf_G5fas1-A2I_qOeVuIjrBry7Ete8cQ9c-1dwTtEAlIsH3Emh6b2t-CkOjPk-0LHlw1ChwiTvjtfTi17_1NYLWDOqqnill2QRY7TxMx62uv0ttDPIvgugXvLnq4ykkXXKmvoo0JPijVLieuYVzXusvlIuwsA"
                alt="Admin User Profile"
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover border-2 border-dash-outline-variant/20 group-hover:border-dash-primary/40 transition-all shadow-sm"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-dash-primary rounded-full border-2 border-dash-surface-container animate-pulse shadow-sm"></div>
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold truncate text-dash-on-surface tracking-tight">Alexander Vance</p>
              <p className="text-[10px] text-dash-outline font-bold truncate uppercase tracking-widest leading-none">C.R.O</p>
            </div>
          </div>
          <button className="w-full py-2.5 bg-dash-surface-container-high/60 text-dash-on-surface-variant text-[11px] rounded-xl font-bold hover:bg-dash-error hover:text-white transition-all shadow-sm btn-press">
            Log Out
          </button>
        </div>
      </div>
    </aside>
  );
}
