'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { MobileVerifyChecklist } from '@/components/ui/RealProductUI';

const features = {
  en: ['Arabic interface', 'Guided step-by-step capture', 'NFC chip reading for ePassports', 'Live selfie for biometric matching', 'Clear result state'],
  ar: ['واجهة عربية', 'التقاط موجَّه خطوة بخطوة', 'قراءة شريحة NFC لجوازات السفر الإلكترونية', 'صورة ذاتية مباشرة للمطابقة البيومترية', 'حالة نتيجة واضحة'],
};

export default function MobileAppPage() {
  const { isRTL, href } = useLanguage();

  return (
    <>
      <PageHero
        tag={isRTL ? 'تطبيق الجوال' : 'Mobile App'}
        title={isRTL ? 'تجربة جوال عربية للتحقق من جوازات السفر الإلكترونية' : 'An Arabic mobile experience for ePassport verification'}
        subtitle={isRTL
          ? 'يُكمل المستخدم عبر تطبيق واثق للجوال رحلة التحقق من جواز السفر الإلكتروني المدعوم.'
          : "The user completes the supported ePassport verification journey through Wathiq's mobile application."}
      />

      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <AnimatedSection className="flex flex-col items-center">
              <MobileVerifyChecklist isRTL={isRTL} />
              <p className="text-slate-400 text-xs text-center mt-4">
                {isRTL ? 'إعادة بناء دقيقة لخطوات رحلة التحقق الفعلية، ببيانات افتراضية.' : "A faithful recreation of the real verification journey's steps, with fictional sample data."}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className={isRTL ? 'text-right' : ''}>
              <h2 className="text-navy-900 font-bold text-lg mb-5">
                {isRTL ? 'ما يوفره التطبيق' : 'What the app provides'}
              </h2>
              <div className="space-y-3 mb-10">
                {(isRTL ? features.ar : features.en).map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {isRTL
                  ? 'للتحقق من جوازات السفر الإلكترونية تحديداً، يقرأ التطبيق شريحة NFC للجواز — وهي قناة الأدلة الأعلى ضماناً، ومتاحة فقط عبر تطبيق واثق للجوال، وليس عبر متصفح الويب.'
                  : "For ePassport verification specifically, the app reads the passport's NFC chip — the highest-assurance evidence channel, available only through the Wathiq mobile app, not the web browser."}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {isRTL
                  ? 'واثق لا يوفر حالياً SDK للجوال. تتصل أنظمة الأعمال عبر API وWebhooks المتاحة، بينما يوفر التطبيق تجربة التحقق المدعومة عبر الهاتف.'
                  : "Wathiq does not currently provide a mobile SDK. Business systems connect through the available API and webhooks, while the app provides the supported mobile verification experience."}
              </p>
              <Link href={href('/contact')} className="btn-primary px-8 py-3.5 shadow-glow inline-flex">
                {isRTL ? 'اطلب عرضاً تجريبياً' : 'Request a Demo'}
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
