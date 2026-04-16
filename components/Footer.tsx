'use client';

import Link from 'next/link';
import Image from 'next/image';
import MotionWrapper from "@/components/ui/MotionWrapper";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full pt-20 pb-10 border-t border-outline-variant/10 transition-colors duration-300">
      <MotionWrapper className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
        <div className="col-span-2">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo.png"
              alt="sirmX Logo"
              width={100}
              height={32}
              className="h-6 w-auto object-contain transition-all"
            />
          </Link>
          <p className="font-body text-xs leading-relaxed text-on-surface-variant max-w-xs">
            The Sovereign Intelligence Framework for modern regulatory management. Automating trust globally.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-6 text-sm">Product</h5>
          <ul className="space-y-4">
            <li>
              <Link href="/products" className="font-body text-xs text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block">
                Tracking
              </Link>
            </li>
            <li>
              <Link href="/products" className="font-body text-xs text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block">
                Summarization
              </Link>
            </li>
            <li>
              <Link href="/products" className="font-body text-xs text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block">
                Integrations
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-6 text-sm">Company</h5>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="font-body text-xs text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="font-body text-xs text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-body text-xs text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-6 text-sm">Legal</h5>
          <ul className="space-y-4">
            <li>
              <Link href="/privacy" className="font-body text-xs text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="font-body text-xs text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/security" className="font-body text-xs text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block">
                Security
              </Link>
            </li>
            <li>
              <Link href="/compliance" className="font-body text-xs text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block">
                Global Compliance
              </Link>
            </li>
          </ul>
        </div>
      </MotionWrapper>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-outline-variant/10 flex justify-between items-center">
        <p className="font-body text-xs leading-relaxed text-on-surface-variant">
          © {new Date().getFullYear()} sirmX Intelligence Framework. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-outline hover:text-primary cursor-pointer text-xl transition-colors">
            share
          </span>
          <span className="material-symbols-outlined text-outline hover:text-primary cursor-pointer text-xl transition-colors">
            language
          </span>
        </div>
      </div>
    </footer>
  );
}
