import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full pt-20 pb-10 px-8 border-t border-slate-100 dark:border-slate-900">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 max-w-7xl mx-auto">
        <div className="col-span-2">
          <div className="text-lg font-black text-emerald-900 dark:text-emerald-100 mb-6">sirmX</div>
          <p className="font-inter text-xs leading-relaxed text-slate-500 dark:text-slate-400 max-w-xs">
            The Sovereign Intelligence Framework for modern regulatory management. Automating trust globally.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-emerald-900 dark:text-emerald-500 mb-6 text-sm">Product</h5>
          <ul className="space-y-4">
            <li>
              <Link href="/products" className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-transform duration-200 block">
                Tracking
              </Link>
            </li>
            <li>
              <Link href="/products" className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-transform duration-200 block">
                Summarization
              </Link>
            </li>
            <li>
              <Link href="/products" className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-transform duration-200 block">
                Integrations
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-emerald-900 dark:text-emerald-500 mb-6 text-sm">Company</h5>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-transform duration-200 block">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-transform duration-200 block">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-transform duration-200 block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-emerald-900 dark:text-emerald-500 mb-6 text-sm">Legal</h5>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-transform duration-200 block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-transform duration-200 block">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-transform duration-200 block">
                Security
              </Link>
            </li>
            <li>
              <Link href="#" className="font-inter text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:translate-x-1 transition-transform duration-200 block">
                Global Compliance
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <p className="font-inter text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          © 2024 sirmX Intelligence Framework. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-xl">
            share
          </span>
          <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-xl">
            language
          </span>
        </div>
      </div>
    </footer>
  );
}
