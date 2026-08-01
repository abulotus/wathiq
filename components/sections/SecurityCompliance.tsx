'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';

export default function SecurityCompliance() {
  const { isRTL, href } = useLanguage();

  return (
    <section className="section-pad bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-mesh opacity-20" />
      <TechBackground variant="dark" />
      <div className="absolute -end-40 top-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)' }} />

      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-10">
          <SectionTag label={isRTL ? 'الأمان والخصوصية' : 'Security & Privacy'} variant="white" />
          <h2 className="heading-lg text-white mt-4">
            {isRTL ? 'الأمان أساس كل ما نبنيه' : 'Security Is the Foundation of Everything We Build'}
          </h2>
          <p className="body-lg text-slate-300 mt-4 max-w-xl mx-auto">
            {isRTL
              ? 'كل استدعاء عبر API وWebhooks يمر عبر TLS، وإشعارات Webhook موقّعة بـ HMAC-SHA256 — إليك ملخص ممارساتنا المؤكدة.'
              : 'Every API and webhook call runs over TLS, and webhook notifications are signed with HMAC-SHA256 — here is a summary of our confirmed practices.'}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {(isRTL
              ? ['TLS على كل اتصال', 'توقيع Webhook بـ HMAC-SHA256', 'إلغاء تكرار الأحداث', 'صلاحيات مالك/مسؤول']
              : ['TLS on every connection', 'HMAC-SHA256 signed webhooks', 'Event deduplication', 'Owner/Admin roles']
            ).map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-center">
                <span className="text-slate-200 text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={href('/security')}
                className="inline-flex items-center gap-1.5 text-electric-400 font-semibold text-sm hover:text-electric-300 transition-colors"
              >
                {isRTL ? 'اقرأ مبادئ الأمان لدينا' : 'Read our security principles'}
                <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={href('/contact')}
                className="inline-flex items-center gap-1.5 text-electric-400 font-semibold text-sm hover:text-electric-300 transition-colors"
              >
                {isRTL ? 'هل لديك متطلبات امتثال محددة؟ تواصل معنا' : 'Have specific compliance requirements? Talk to us'}
                <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 72L1440 10V72H0Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
