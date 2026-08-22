'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import WathiqLogo from '@/components/ui/WathiqLogo';

const navItems = [
  {
    label: 'Verify Identity',
    labelAr: 'التحقق من الهوية',
    submenu: [
      { path: '/platform', en: 'Platform', ar: 'المنصة' },
      { path: '/epassport-coverage', en: 'ePassport Coverage', ar: 'تغطية جوازات السفر' },
      { path: '/industries', en: 'Industries', ar: 'الصناعات' },
    ],
  },
  {
    label: 'AML & Compliance',
    labelAr: 'فحص غسل الاموال والامتثال',
    submenu: [
      { path: '/aml-screening', en: 'AML Screening', ar: 'فحص غسل الاموال' },
    ],
  },
  {
    label: 'Build & Integrate',
    labelAr: 'البناء والتكامل',
    submenu: [
      { path: '/developers', en: 'Developers', ar: 'المطورون' },
      { path: '/client-dashboard', en: 'Client Dashboard', ar: 'لوحة تحكم العملاء' },
      { path: '/mobile-app', en: 'Mobile App', ar: 'تطبيق الجوال' },
    ],
  },
  {
    label: 'Trust & Security',
    labelAr: 'الثقة والأمان',
    submenu: [
      { path: '/security', en: 'Security', ar: 'الأمان' },
    ],
  },
  {
    label: 'Our Company',
    labelAr: 'شركتنا',
    submenu: [
      { path: '/company', en: 'About Us', ar: 'من نحن' },
      { path: '/careers', en: 'Careers', ar: 'وظائف' },
      { path: '/partnerships', en: 'Partnerships', ar: 'الشراكات' },
    ],
  },
];

export default function Header() {
  const { isRTL, href, otherLocaleHref } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number;
    const update = () => { setScrolled(window.scrollY > 30); };
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId); };
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileOpen);
    return () => { document.body.classList.remove('overflow-hidden'); };
  }, [mobileOpen]);

  const isActive = (path: string) => pathname.startsWith(href(path));

  function switchLanguage() {
    const target = otherLocaleHref(pathname);
    document.cookie = `wathiq-lang=${target.startsWith('/ar') ? 'ar' : 'en'};path=/;max-age=31536000;samesite=lax`;
  }

  return (
    <>
      {/* Transparent over the hero so it blends with its light gradient tint; solidifies to white once scrolled past the hero. */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_4px_20px_rgba(10,26,71,0.08)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            <Link href={href('/')} prefetch={false} className="flex-shrink-0 z-10">
              <WathiqLogo variant="dark" size="md" />
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const isSubmenuActive = item.submenu.some(sub => isActive(sub.path));
                return (
                  <div key={item.label} className="group relative">
                    <button
                      className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap flex items-center gap-1 ${
                        isSubmenuActive
                          ? 'text-navy-900'
                          : 'text-slate-500 hover:text-navy-900'
                      }`}
                    >
                      {isRTL ? item.labelAr : item.label}
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      <span
                        className={`absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full bg-electric-500 transition-transform duration-200 origin-center ${
                          isSubmenuActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </button>
                    <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.path}
                          href={href(subitem.path)}
                          prefetch={false}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActive(subitem.path)
                              ? 'text-electric-600 bg-electric-50 font-medium'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {isRTL ? subitem.ar : subitem.en}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </nav>

            <div className="hidden xl:flex items-center gap-3">
              <Link
                href={otherLocaleHref(pathname)}
                prefetch={false}
                onClick={switchLanguage}
                className="px-3 py-1.5 rounded-full text-sm font-medium border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-navy-900 transition-colors duration-150"
              >
                {isRTL ? 'English' : 'العربية'}
              </Link>
              <Link
                href={href('/contact')}
                prefetch={false}
                className="px-5 py-2 rounded-full text-sm font-semibold bg-electric-500 text-white hover:bg-electric-600 transition-all duration-150 shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_18px_rgba(37,99,235,0.4)]"
              >
                {isRTL ? 'اطلب عرضًا تجريبيًا' : 'Request a Demo'}
              </Link>
            </div>

            <button
              className="xl:hidden p-3 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-[5px]">
                <span className={`block h-[2px] rounded bg-navy-900 transition-all duration-200 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-[2px] rounded bg-navy-900 transition-all duration-200 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-[2px] rounded bg-navy-900 transition-all duration-200 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — CSS only, no framer-motion */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950/60 xl:hidden transition-opacity duration-200 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed top-0 z-50 w-72 h-full bg-white shadow-2xl flex flex-col xl:hidden transition-transform duration-300 ease-in-out ${
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
          {navItems.map((item) => {
            const isSubmenuOpen = expandedMenu === item.label;
            return (
              <div key={item.label}>
                <button
                  onClick={() => setExpandedMenu(isSubmenuOpen ? null : item.label)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium mb-1 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {isRTL ? item.labelAr : item.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {isSubmenuOpen && (
                  <div className="pl-4 space-y-1 mb-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        href={href(subitem.path)}
                        prefetch={false}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                          isActive(subitem.path)
                            ? 'text-electric-600 bg-electric-50 font-medium'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {isRTL ? subitem.ar : subitem.en}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-3">
          <Link
            href={href('/contact')}
            prefetch={false}
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-full px-5 py-3 bg-electric-500 text-white text-sm font-semibold rounded-xl hover:bg-electric-600 transition-colors"
          >
            {isRTL ? 'اطلب عرضًا تجريبيًا' : 'Request a Demo'}
          </Link>
          <Link
            href={otherLocaleHref(pathname)}
            prefetch={false}
            onClick={() => { switchLanguage(); setMobileOpen(false); }}
            className="flex items-center justify-center w-full px-5 py-2.5 border border-slate-200 text-slate-600 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
          >
            {isRTL ? 'English' : 'العربية'}
          </Link>
        </div>
      </div>
    </>
  );
}
