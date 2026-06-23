'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import TechBackground from '@/components/ui/TechBackground';

const partners = [
  {
    name: 'Gulf National Bank',
    nameAr: 'بنك الخليج الوطني',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'MENA Telecom Group',
    nameAr: 'مجموعة اتصالات منا',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M1.5 8.5C5.5 4.5 18.5 4.5 22.5 8.5M5 12c2-2 12-2 14 0M8.5 15.5c1-1 6-1 7 0M12 19v.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Ministry of Digital',
    nameAr: 'وزارة التحول الرقمي',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 22V12l9-9 9 9v10M9 22v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'GCC Insurance Co.',
    nameAr: 'شركة التأمين الخليجي',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3L4 7v5c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V7L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Emirates FinTech',
    nameAr: 'الإمارات للتقنية المالية',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Arabian HealthNet',
    nameAr: 'الشبكة الصحية العربية',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Kian E-Commerce',
    nameAr: 'كيان للتجارة الإلكترونية',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Falcon Securities',
    nameAr: 'الصقر للأوراق المالية',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 3v18h18M7 16l4-4 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const badges = [
  { label: 'ISO 27001', color: 'text-electric-600 bg-electric-50 border-electric-200' },
  { label: 'GDPR Compliant', color: 'text-teal-700 bg-teal-50 border-teal-200' },
  { label: 'SOC 2 Type II', color: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
  { label: 'UK FCA Registered', color: 'text-slate-700 bg-slate-50 border-slate-200' },
  { label: 'eIDAS Compliant', color: 'text-purple-700 bg-purple-50 border-purple-200' },
];

export default function TrustedBy() {
  const { isRTL } = useLanguage();
  const doubled = [...partners, ...partners];

  return (
    <section className="bg-white border-b border-slate-100 py-14 relative overflow-hidden">
      <TechBackground variant="light" />
      <div className="container-wide mb-8 text-center relative z-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          {isRTL ? 'موثوق به من قِبل قادة الصناعة عبر المنطقة' : 'Trusted by industry leaders across the region'}
        </p>
      </div>

      {/* Marquee */}
      <div className="relative z-10">
        {/* Fade edges */}
        <div className="absolute inset-y-0 start-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 end-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-10 w-max"
          style={{ animation: `marquee ${isRTL ? '35s' : '35s'} linear infinite` }}
        >
          {doubled.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-slate-200 transition-all duration-200 cursor-default flex-shrink-0"
            >
              <span className="text-slate-400">{p.icon}</span>
              <span className="text-slate-600 font-medium text-sm whitespace-nowrap">
                {isRTL ? p.nameAr : p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance badges */}
      <div className="container-wide mt-10 flex flex-wrap items-center justify-center gap-3 relative z-10">
        {badges.map((b, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${b.color}`}
          >
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 1L1 3.5v3C1 9.5 3.3 11.7 6 12c2.7-.3 5-2.5 5-5.5v-3L6 1Z" />
            </svg>
            {b.label}
          </span>
        ))}
      </div>
    </section>
  );
}
