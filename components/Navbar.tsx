'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Products', href: '/products' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Developers', href: '/developers' },
  { name: 'Resources', href: '/resources' },
  { name: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 rounded-xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-emerald-900 dark:text-emerald-50">
          sirmX
        </Link>
        <div className="hidden md:flex items-center gap-8 font-manrope font-semibold text-sm tracking-tight">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-all duration-300 px-3 py-1 rounded-md",
                  isActive
                    ? "text-emerald-700 dark:text-emerald-400 border-b-2 border-emerald-600"
                    : "text-slate-600 dark:text-slate-400 hover:text-emerald-900 dark:hover:text-emerald-50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-headline font-bold text-sm scale-95 active:opacity-80 transition-transform">
          Request Demo
        </button>
      </div>
    </nav>
  );
}
