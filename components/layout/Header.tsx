'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import WathiqLogo from '@/components/ui/WathiqLogo';

export default function Header() {
  const { t, toggleLanguage, isRTL } = useLanguage();
  const [solidBg, setSolidBg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    let rafId: number;
    const update = () => { setSolidBg(!isHomePage || window.scrollY > 30); };
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId); };
  }, [isHomePage]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileOpen);
    return () => { document.body.classList.remove('overflow-hidden'); };
  }, [mobileOpen]);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/solutions', label: t.nav.solutions },
    { href: '/industries', label: t.nav.industries },
    { href: '/security', label: t.nav.security },
    { href: '/partnership', label: t.nav.partnership },
    { href: '/contact', label: t.nav.contact },
  ];

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  const dark = !solidBg;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,border-color] duration-200 ${
          dark ? 'bg-transparent border-transparent' : 'bg-white shadow-sm border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            <Link href="/" className="flex-shrink-0 z-10">
              <WathiqLogo variant={dark ? 'light' : 'dark'} size="md" />
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 whitespace-nowrap ${
                    isActive(link.href)
                      ? dark ? 'text-white bg-white/15' : 'text-electric-600 bg-electric-50'
                      : dark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors duration-150 ${
                  dark
                    ? 'text-white/80 hover:text-white border-white/25 hover:border-white/50'
                    : 'text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                {t.nav.switchLang}
              </button>
              <Link
                href="/contact"
                className="px-5 py-2 rounded-lg text-sm font-semibold bg-electric-500 text-white hover:bg-electric-600 transition-colors duration-150 shadow-sm"
              >
                {t.nav.getStarted}
              </Link>
            </div>

            <button
              className={`lg:hidden p-3 rounded-lg transition-colors ${dark ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-[5px]">
                <span className={`block h-[2px] rounded transition-all duration-200 origin-center ${dark ? 'bg-white' : 'bg-slate-700'} ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-[2px] rounded transition-all duration-200 ${dark ? 'bg-white' : 'bg-slate-700'} ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-[2px] rounded transition-all duration-200 origin-center ${dark ? 'bg-white' : 'bg-slate-700'} ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — CSS only, no framer-motion */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950/60 lg:hidden transition-opacity duration-200 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Slide panel */}
      <div
        className={`fixed top-0 z-50 w-72 h-full bg-white shadow-2xl flex flex-col lg:hidden transition-transform duration-300 ease-in-out ${
          isRTL ? 'left-0' : 'right-0'
        } ${
          mobileOpen ? 'translate-x-0' : (isRTL ? '-translate-x-full' : 'translate-x-full')
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
          <WathiqLogo variant="dark" size="sm" />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-3 rounded-lg hover:bg-slate-100 text-slate-500"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium mb-1 transition-colors ${
                isActive(link.href) ? 'text-electric-600 bg-electric-50' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-3">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-full px-5 py-3 bg-electric-500 text-white text-sm font-semibold rounded-xl hover:bg-electric-600 transition-colors"
          >
            {t.nav.getStarted}
          </Link>
          <button
            onClick={() => { toggleLanguage(); setMobileOpen(false); }}
            className="flex items-center justify-center w-full px-5 py-2.5 border border-slate-200 text-slate-600 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
          >
            {t.nav.switchLang}
          </button>
        </div>
      </div>
    </>
  );
}
