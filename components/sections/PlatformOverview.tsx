'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import ApiHubDiagram from '@/components/ui/ApiHubDiagram';

const pillars = {
  en: [
    { tag: 'ePassport Verification', title: 'Verify modern ePassports (with chip)', body: 'Verify modern electronic passports with a chip, issued by multiple countries worldwide, through an Arabic-first journey.', path: '/epassport-coverage', linkLabel: 'See coverage' },
    { tag: 'API & Webhooks', title: 'Connect your systems', body: 'Start verifications and receive results and status updates by connecting your system with Wathiq.', path: '/developers', linkLabel: 'View Developers' },
    { tag: 'Client Dashboard', title: 'Client Dashboard', body: 'Manage verification operations and review status and results from one place.', path: '/client-dashboard', linkLabel: 'View Dashboard' },
  ],
  ar: [
    { tag: 'التحقق من جوازات السفر الإلكترونية', title: 'التحقق من جوازات السفر الإلكترونية الحديثة المزوّدة بشريحة', body: 'تحقّق من جوازات السفر الإلكترونية الحديثة المزوّدة بشريحة والصادرة عن دول متعددة حول العالم، عبر تجربة مصمّمة بالعربية من الأساس.', path: '/epassport-coverage', linkLabel: 'اطّلع على الدول والوثائق المدعومة' },
    { tag: 'API وإشعارات Webhook', title: 'اربط أنظمتك بمنصة واثق', body: 'ابدأ طلبات التحقق وتلقَّ النتائج وتحديثات الحالة من خلال تكامل مباشر بين أنظمتك ومنصة واثق.', path: '/developers', linkLabel: 'استكشف أدوات المطورين' },
    { tag: 'لوحة تحكم العملاء', title: 'أدِر عمليات التحقق من مكان واحد', body: 'راجِع طلبات التحقق وحالاتها ونتائجها من لوحة تحكم مركزية واحدة.', path: '/client-dashboard', linkLabel: 'استكشف لوحة تحكم العملاء' },
  ],
};

const icons = [
  // Verification: ID/document with a check badge
  <svg key="a" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <rect x="3" y="4" width="14" height="16" rx="2" />
    <path strokeLinecap="round" d="M7 8.5h6M7 12h4" />
    <circle cx="17" cy="17" r="5" fill="white" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17l1.5 1.5L19.5 15" />
  </svg>,
  // API / connection: link icon
  <svg key="b" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>,
  // Dashboard: widget grid
  <svg key="c" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="3.5" width="7" height="4.5" rx="1.5" />
    <rect x="13.5" y="10.5" width="7" height="10" rx="1.5" />
    <rect x="3.5" y="13" width="7" height="7.5" rx="1.5" />
  </svg>,
];

export default function PlatformOverview() {
  const { isRTL, href } = useLanguage();
  const items = isRTL ? pillars.ar : pillars.en;

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag label={isRTL ? 'المنصة' : 'Platform'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'ثلاث مزايا أساسية' : 'Three core features'}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AnimatedItem key={i} index={i}>
              <div className={`h-full rounded-2xl bg-white border border-slate-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${isRTL ? 'text-right' : ''}`}>
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

        <div className="mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-slate-100">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <h3 className="heading-md text-navy-900">
              {isRTL ? 'كل ذلك ضمن نظام واحد متكامل' : 'All connected through one system'}
            </h3>
            <p className="body-md mt-3">
              {isRTL
                ? 'من قراءة الوثائق والتحقق البيومتري إلى التكامل عبر API وإشعارات Webhook وإدارة النتائج من لوحة التحكم.'
                : 'From document capture to biometric checks, through to the API, webhooks, and dashboard that connect it all to your systems.'}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <ApiHubDiagram />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
