'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function FinalCTA() {
  const { isRTL, href } = useLanguage();

  return (
    <section className="pt-8 sm:pt-10 pb-14 sm:pb-20 lg:pb-28 bg-white">
      <div className="container-wide">
        <AnimatedSection>
          <div className="relative rounded-3xl bg-gradient-to-br from-electric-50 to-teal-50 border border-electric-100 overflow-hidden px-5 py-14 sm:px-14 sm:py-16 text-center">
            <div className="absolute inset-0 grid-mesh opacity-40" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)' }} />
            <div className="relative z-10">
              <h2 className="text-navy-900 text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 max-w-2xl mx-auto">
                {isRTL
                  ? 'أضف التحقق من جوازات السفر الإلكترونية بواجهة عربية إلى رحلة عملائك'
                  : "Bring Arabic-first ePassport verification into your customer journey."}
              </h2>
              <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                {isRTL
                  ? 'اتصل عبر API وWebhooks الخاصة بواثق، وأدر نشاط التحقق من لوحة تحكم العملاء، وادعم المستخدمين عبر تطبيق الجوال.'
                  : "Connect through Wathiq's API and webhooks, manage verification activity from the client dashboard, and support users through the mobile application."}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href={href('/contact')} className="btn-primary px-8 py-3.5 shadow-glow">
                  {isRTL ? 'اطلب عرضاً تجريبياً' : 'Request a Demo'}
                  <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href={href('/contact')} className="btn-secondary bg-white px-8 py-3.5">
                  {isRTL ? 'تواصل مع فريقنا' : 'Contact Our Team'}
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
