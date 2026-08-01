'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';

const iconPaths: Record<string, string> = {
  finance: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  ecommerce: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
  telecom: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
  health: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  gov: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
  enterprise: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
};

export default function UseCases() {
  const { t, isRTL, href } = useLanguage();
  const items = t.industries.items;

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag label={isRTL ? 'حالات الاستخدام' : 'Use Cases'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'أين يساعد التحقق من جوازات السفر الإلكترونية' : 'Where ePassport verification helps'}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 6).map((item, i) => (
            <AnimatedItem key={i} index={i}>
              <Link
                href={href('/industries')}
                className={`group h-full block bg-white rounded-2xl border border-slate-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${isRTL ? 'text-right' : ''}`}
              >
                <div className="w-11 h-11 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[item.icon]} />
                  </svg>
                </div>
                <h3 className="text-navy-900 font-bold text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </Link>
            </AnimatedItem>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href={href('/industries')} className="inline-flex items-center gap-1.5 text-electric-600 font-semibold text-sm hover:text-electric-700">
            {isRTL ? 'استعرض كل القطاعات' : 'View all industries'}
            <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
