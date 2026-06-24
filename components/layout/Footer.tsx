'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import WathiqLogo from '@/components/ui/WathiqLogo';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Twitter/X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const links = t.footer.links;

  const navGroups = [
    { title: links.company.title, items: links.company.items, hrefs: ['/about', '/about#mission', '/careers', '/contact'] },
    { title: links.solutions.title, items: links.solutions.items, hrefs: ['/solutions', '/solutions#fraud', '/solutions#business'] },
    { title: links.industries.title, items: links.industries.items, hrefs: ['/industries#industry-finance', '/industries#industry-telecom', '/industries#industry-ecommerce', '/industries#industry-health', '/industries#industry-gov'] },
    { title: links.legal.title, items: links.legal.items, hrefs: ['/privacy', '/terms', '/cookies'] },
  ];

  return (
    <footer className="bg-navy-950 text-white">
      {/* Top diagonal divider — matches homepage section divider system */}
      <div className="w-full overflow-hidden leading-none" style={{ height: 72 }}>
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 72L1440 10V72H0Z" fill="#04091C" />
        </svg>
      </div>

      <div className="container-wide pt-8 pb-12 sm:pt-12 sm:pb-16">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <WathiqLogo variant="light" size="md" />
            <p className={`mt-4 text-slate-400 text-sm leading-relaxed max-w-xs ${isRTL ? 'text-right' : ''}`}>
              {t.footer.tagline}
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-electric-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {navGroups.map((group) => (
              <div key={group.title} className={isRTL ? 'text-right' : ''}>
                <h4 className="text-white font-semibold text-sm mb-4">{group.title}</h4>
                <ul className="space-y-2.5">
                  {group.items.map((item, i) => (
                    <li key={item}>
                      <Link
                        href={group.hrefs[i] || '#'}
                        className="text-slate-400 hover:text-white text-sm transition-colors duration-150"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-slate-500 text-sm">{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Cookies
            </Link>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-slate-500 text-xs">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
