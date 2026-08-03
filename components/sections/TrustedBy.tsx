'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import TechBackground from '@/components/ui/TechBackground';

const facts = [
  {
    val: '140',
    en: 'Supported ePassports Worldwide',
    ar: 'جواز سفر إلكتروني مدعوم حول العالم',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    val: 'AR',
    en: 'Arabic-First Interface',
    ar: 'واجهة عربية أولاً',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8 12h8M8 8h8M8 16h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    val: 'API',
    en: 'API & Webhook Integration',
    ar: 'تكامل عبر API وWebhooks',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    val: '2',
    en: 'Client Dashboard & Mobile App',
    ar: 'لوحة تحكم وتطبيق جوال',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM13 13a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6zM4 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TrustedBy() {
  const { isRTL } = useLanguage();

  return (
    <section className="bg-white py-14 relative overflow-hidden">
      {/* Soft fades at the top/bottom so this section blends into the hero's tinted tail
          and the next section's slate-50, instead of cutting to flat white on a hard edge. */}
      <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-electric-50/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-slate-100/80 to-transparent pointer-events-none" />
      <TechBackground variant="light" />
      <div className="container-wide relative z-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 text-center mb-8">
          {isRTL ? 'حقائق مؤكدة عن المنصة' : 'Verified platform facts'}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {facts.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/60"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center">
                {f.icon}
              </span>
              <div>
                <div className="text-navy-900 font-black text-lg leading-none">{f.val}</div>
                <div className="text-slate-500 text-xs font-medium mt-1 leading-tight">
                  {isRTL ? f.ar : f.en}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
