'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Developers', href: '/developers' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 rounded-xl bg-white/80 backdrop-blur-xl shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="sirmX Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain transition-all"
            priority
          />
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
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-headline font-bold text-sm hover:opacity-90 transition-all whisper-shadow btn-press">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
