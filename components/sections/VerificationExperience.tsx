'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import PhoneVerifyDemo from '@/components/ui/PhoneVerifyDemo';
import SecurityWeave from '@/components/ui/SecurityWeave';

const bullets = {
  en: [
    'Live guided camera capture for national ID cards and passports',
    'Automatic PDF417 barcode reading',
    'Face match through a live selfie',
    'Result delivered via API and webhook to your dashboard',
  ],
  ar: [
    'التقاط موجَّه بالكاميرا الحيّة لبطاقة الهوية الوطنية وجواز السفر',
    'قراءة تلقائية لباركود PDF417',
    'مطابقة الوجه عبر صورة ذاتية حيّة',
    'وصول النتيجة عبر API وWebhook إلى لوحة التحكم',
  ],
};

export default function VerificationExperience() {
  const { isRTL, href } = useLanguage();
  const items = isRTL ? bullets.ar : bullets.en;

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, #0A1530 0%, #071130 55%, #04091C 100%)' }}>
      <SecurityWeave className="opacity-[0.05]" />
      <div className="container-wide relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <AnimatedSection className="order-2 lg:order-1">
            <PhoneVerifyDemo />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className={`order-1 lg:order-2 ${isRTL ? 'text-right' : ''}`}>
            <SectionTag label={isRTL ? 'تجربة التحقّق' : 'The Verification Experience'} variant="white" />
            <h2 className="heading-lg text-white mt-4">
              {isRTL ? 'موجَّهة خطوة بخطوة، بواجهة عربية' : 'Guided, step by step, in Arabic'}
            </h2>
            <p className="body-lg text-white/70 mt-4">
              {isRTL
                ? 'يُكمل المتقدّم رحلة التحقق عبر تطبيق واثق للجوال — من التقاط الوثيقة إلى الصورة الذاتية وصولاً إلى النتيجة — بواجهة عربية أولاً من البداية حتى النهاية.'
                : "The applicant completes the verification journey through the Wathiq mobile app — from document capture to a selfie through to a result — in an Arabic-first experience from start to finish."}
            </p>
            <ul className="mt-7 space-y-3.5">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-400/15 text-teal-300">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={href('/mobile-app')}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-300 hover:text-electric-200 transition-colors"
            >
              {isRTL ? 'استعرض تطبيق الجوال' : 'Explore the mobile app'}
              <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
