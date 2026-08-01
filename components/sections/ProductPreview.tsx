'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';
import { DashboardMockup, WorkflowMockup, MobileMockup } from '@/components/ui/ProductMockups';

const tabs = [
  {
    id: 'dashboard',
    en: 'Verification Dashboard',
    ar: 'لوحة التحقق',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM13 13a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6zM4 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    description: {
      en: 'A real-time overview of verification references, status, and team activity — giving your team full visibility at a glance.',
      ar: 'نظرة عامة في الوقت الفعلي على مراجع التحقق وحالتها ونشاط الفريق.',
    },
  },
  {
    id: 'workflow',
    en: 'Verification Workflow',
    ar: 'سير عمل التحقق',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    description: {
      en: 'Document capture, OCR and barcode data, registry matching, and a biometric liveness and face-match check against the document photo.',
      ar: 'التقاط الوثيقة، واستخراج بيانات OCR والباركود، ومطابقة السجل، وفحص حيوي للتحقق من الحيوية ومطابقة الوجه مع صورة الوثيقة.',
    },
  },
];

const capabilities = [
  {
    en: '140 supported ePassports worldwide',
    ar: '140 جواز سفر إلكتروني مدعوم حول العالم',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    en: 'Arabic-first interface',
    ar: 'واجهة عربية أولاً',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 8h8M8 16h5" />
      </svg>
    ),
  },
  {
    en: 'API & webhook integration',
    ar: 'تكامل عبر API وWebhooks',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    en: 'Biometric liveness & face match',
    ar: 'التحقق من الحيوية ومطابقة الوجه',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    en: 'Client dashboard & mobile app',
    ar: 'لوحة تحكم وتطبيق جوال',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM13 13a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6zM4 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
];

export default function ProductPreview() {
  const { isRTL, href } = useLanguage();
  const [active, setActive] = useState('dashboard');
  const activeTab = tabs.find(t => t.id === active)!;

  const renderDesktop = () => {
    switch (active) {
      case 'dashboard': return <DashboardMockup isRTL={isRTL} />;
      case 'workflow': return <WorkflowMockup isRTL={isRTL} />;
      default: return null;
    }
  };

  return (
    <section className="section-pad bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-mesh opacity-20" />
      <TechBackground variant="light" />

      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-12">
          <SectionTag label={isRTL ? 'المنتج' : 'Product'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'تعرّف على واثق من الداخل' : 'See Wathiq in Action'}
          </h2>
          <p className="body-lg mt-4 max-w-xl mx-auto">
            {isRTL
              ? 'من تطبيق الجوال إلى لوحة تحكم العملاء — منصة واحدة متصلة.'
              : 'From the mobile app to the client dashboard — one connected platform.'}
          </p>
          <p className="text-slate-400 text-xs mt-3">
            {isRTL ? 'إعادة بناء توضيحية للمنتج الفعلي، ببيانات افتراضية.' : "An illustrative recreation of the real product, with fictional sample data."}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-x-10 -inset-y-8 bg-gradient-to-tr from-electric-500/15 via-teal-400/10 to-transparent blur-2xl rounded-[2.5rem] pointer-events-none" />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActive(tab.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 ${
                        active === tab.id
                          ? 'bg-electric-600 border-electric-600 text-white shadow-glow'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-electric-400 hover:text-electric-600'
                      }`}
                    >
                      {tab.icon}
                      {isRTL ? tab.ar : tab.en}
                    </button>
                  ))}
                </div>
                {renderDesktop()}
                <p className="text-slate-500 text-sm mt-4 max-w-md">
                  {isRTL ? activeTab.description.ar : activeTab.description.en}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <MobileMockup isRTL={isRTL} compact />
                <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-slate-600 text-xs font-semibold">
                    {isRTL ? 'تطبيق الجوال · التحقق من جواز السفر' : 'Mobile app · ePassport verification'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-4xl mx-auto">
            {capabilities.map((c, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm"
              >
                <span className="text-electric-600">{c.icon}</span>
                {isRTL ? c.ar : c.en}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <a
            href={href('/contact')}
            className="inline-flex items-center gap-2 btn-primary text-sm px-6 py-3 shadow-glow"
          >
            {isRTL ? 'احجز عرضاً تجريبياً حقيقياً' : 'Book a Live Demo'}
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
