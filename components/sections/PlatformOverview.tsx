'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';

const pillars = {
  en: [
    { tag: 'ePassport Verification', title: 'Verify supported ePassports', body: '140 supported ePassports worldwide, verified through an Arabic-first journey.', path: '/epassport-coverage', linkLabel: 'See coverage' },
    { tag: 'API & Webhooks', title: 'Connect your systems', body: 'Start verifications and receive results and status updates through Wathiq.', path: '/developers', linkLabel: 'View Developers' },
    { tag: 'Client Dashboard', title: 'Manage verification activity', body: 'Review references, status, and webhook delivery in one place.', path: '/client-dashboard', linkLabel: 'View Dashboard' },
  ],
  ar: [
    { tag: 'التحقق من جوازات السفر الإلكترونية', title: 'تحقّق من جوازات السفر المدعومة', body: '140 جواز سفر إلكتروني مدعوم حول العالم، عبر رحلة بواجهة عربية أولاً.', path: '/epassport-coverage', linkLabel: 'اطّلع على التغطية' },
    { tag: 'API وWebhooks', title: 'اربط أنظمتك', body: 'ابدأ عمليات التحقق واستلم النتائج وتحديثات الحالة من خلال واثق.', path: '/developers', linkLabel: 'استعرض المطورين' },
    { tag: 'لوحة تحكم العملاء', title: 'أدر نشاط التحقق', body: 'راجع المراجع والحالة وحالة تسليم Webhook من مكان واحد.', path: '/client-dashboard', linkLabel: 'استعرض لوحة التحكم' },
  ],
};

const icons = [
  <svg key="a" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
  </svg>,
  <svg key="b" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg key="c" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM13 13a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6zM4 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
  </svg>,
];

export default function PlatformOverview() {
  const { isRTL, href } = useLanguage();
  const items = isRTL ? pillars.ar : pillars.en;

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag label={isRTL ? 'المنصة' : 'Platform'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'ثلاثة مكونات متصلة' : 'Three connected components'}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AnimatedItem key={i} index={i}>
              <div className={`h-full rounded-2xl border border-slate-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${isRTL ? 'text-right' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center mb-5">
                  {icons[i]}
                </div>
                <div className="text-electric-600 text-xs font-bold uppercase tracking-wider mb-2">{item.tag}</div>
                <h3 className="text-navy-900 font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.body}</p>
                <Link href={href(item.path)} className="inline-flex items-center gap-1.5 text-electric-600 font-semibold text-sm hover:text-electric-700">
                  {item.linkLabel}
                  <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
