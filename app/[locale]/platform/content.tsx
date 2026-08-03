'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Link from 'next/link';

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const pillars = {
  en: [
    {
      id: 'verification',
      tag: 'ePassport Verification',
      title: 'Verify supported ePassports across borders.',
      body: "For the Syrian market, Wathiq reads the PDF417 barcode on the Syrian national ID card and the older (non-electronic) Syrian passport, and verifies electronic passports for Syrian citizens and 140 countries worldwide — including EU member states, the United States, and most Middle Eastern countries. The applicant completes document and biometric capture through Wathiq's Arabic-first mobile experience, and a decision is returned.",
      features: ['140 supported ePassports worldwide', 'National ID & legacy passport support', 'Biometric liveness & face match', 'Decision delivered to your dashboard'],
      linkLabel: 'See ePassport coverage',
      linkPath: '/epassport-coverage',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
        </svg>
      ),
      gradient: 'from-blue-600 to-blue-900',
    },
    {
      id: 'api',
      tag: 'API & Webhooks',
      title: 'Connect Wathiq to your existing systems.',
      body: 'Integrate verification into your product through Wathiq\'s API. Start a verification request, retrieve or receive the result, and get webhook notifications as status changes.',
      features: ['API integration', 'Start a verification request', 'Retrieve or receive results', 'Webhook status notifications'],
      linkLabel: 'View Developers',
      linkPath: '/developers',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-emerald-800',
    },
    {
      id: 'dashboard',
      tag: 'Client Dashboard',
      title: 'Manage verification activity from one place.',
      body: 'Your team reviews verification references, status, and details in the client dashboard, searches and filters activity, and tracks webhook delivery status.',
      features: ['Verification references & status', 'Search and filtering', 'Submission and result dates', 'Webhook delivery status & team access'],
      linkLabel: 'View Client Dashboard',
      linkPath: '/client-dashboard',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM13 13a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6zM4 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
        </svg>
      ),
      gradient: 'from-purple-600 to-purple-900',
    },
  ],
  ar: [
    {
      id: 'verification',
      tag: 'التحقق من جوازات السفر الإلكترونية',
      title: 'تحقّق من جوازات السفر الإلكترونية المدعومة عبر الحدود.',
      body: 'للسوق السورية، يقرأ واثق باركود PDF417 على بطاقة الهوية الوطنية السورية وجواز السفر السوري القديم (غير الإلكتروني)، ويتحقق من جوازات السفر الإلكترونية للمواطنين السوريين ولـ140 دولة حول العالم — منها دول الاتحاد الأوروبي والولايات المتحدة ومعظم دول الشرق الأوسط. يكمل المتقدّم التقاط الوثيقة والبيانات الحيوية عبر تجربة واثق للجوال ذات الواجهة العربية، ثم يصل القرار.',
      features: ['140 جواز سفر إلكتروني مدعوم حول العالم', 'دعم الهوية الوطنية وجوازات السفر القديمة', 'التحقق من الحيوية ومطابقة الوجه', 'القرار يصل إلى لوحة التحكم'],
      linkLabel: 'اطّلع على تغطية الجوازات',
      linkPath: '/epassport-coverage',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
        </svg>
      ),
      gradient: 'from-blue-600 to-blue-900',
    },
    {
      id: 'api',
      tag: 'API وWebhooks',
      title: 'اربط واثق بأنظمتك الحالية.',
      body: 'ادمج التحقق في منتجك من خلال واجهة برمجة تطبيقات واثق. ابدأ طلب تحقق، واسترجع أو استلم النتيجة، واحصل على إشعارات Webhook عند تغيّر الحالة.',
      features: ['تكامل عبر API', 'بدء طلب تحقق', 'استرجاع أو استلام النتائج', 'إشعارات حالة عبر Webhook'],
      linkLabel: 'استعرض قسم المطورين',
      linkPath: '/developers',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-emerald-800',
    },
    {
      id: 'dashboard',
      tag: 'لوحة تحكم العملاء',
      title: 'أدر نشاط التحقق من مكان واحد.',
      body: 'يراجع فريقك مراجع التحقق وحالتها وتفاصيلها في لوحة تحكم العملاء، ويبحث ويصفّي النشاط، ويتابع حالة تسليم Webhook.',
      features: ['مراجع التحقق وحالتها', 'البحث والتصفية', 'تواريخ الإرسال والنتيجة', 'حالة تسليم Webhook ووصول الفريق'],
      linkLabel: 'استعرض لوحة تحكم العملاء',
      linkPath: '/client-dashboard',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM13 13a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6zM4 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
        </svg>
      ),
      gradient: 'from-purple-600 to-purple-900',
    },
  ],
};

export default function PlatformPage() {
  const { isRTL, href } = useLanguage();
  const items = isRTL ? pillars.ar : pillars.en;

  return (
    <>
      <PageHero
        tag={isRTL ? 'المنصة' : 'Platform'}
        title={isRTL ? 'منصة واثق' : 'The Wathiq Platform'}
        subtitle={isRTL
          ? 'ثلاثة مكونات متصلة: التحقق من جوازات السفر الإلكترونية، وواجهة برمجة التطبيقات وWebhooks، ولوحة تحكم العملاء.'
          : 'Three connected components: ePassport verification, an API and webhooks, and a client dashboard.'}
      />

      <div className="bg-white">
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section key={item.id} id={item.id} className={`section-pad ${isEven ? 'bg-white' : 'bg-slate-50'}`}>
              <div className="container-wide">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <AnimatedSection className={`${!isEven ? 'lg:col-start-1' : ''} ${isRTL ? 'text-right' : ''}`}>
                    <SectionTag label={item.tag} variant="blue" />
                    <h2 className="heading-lg text-navy-900 mt-4 mb-5">{item.title}</h2>
                    <p className="body-lg mb-8">{item.body}</p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckIcon />
                          <span className="text-slate-700 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={href(item.linkPath)} className="btn-primary">
                      {item.linkLabel}
                      <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </AnimatedSection>

                  <AnimatedSection delay={0.2} direction={!isEven ? 'left' : 'right'} className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative">
                      <div className={`rounded-3xl bg-gradient-to-br ${item.gradient} p-5 sm:p-8 shadow-2xl`}>
                        <div className="text-white mb-4">{item.icon}</div>
                        <h3 className="text-white text-xl font-bold mb-2">{item.tag}</h3>
                        <p className="text-white/90 text-sm mb-6 leading-relaxed">{item.body.slice(0, 100)}...</p>
                        <div className="flex flex-wrap gap-2">
                          {item.features.slice(0, 3).map((f, i) => (
                            <span key={i} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>
          );
        })}

        <section className="py-20 bg-slate-50">
          <div className="container-wide">
            <AnimatedSection className="text-center">
              <h2 className="heading-lg text-navy-900 mb-4">
                {isRTL ? 'لديك أسئلة حول المنصة؟' : 'Questions about the platform?'}
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
                {isRTL
                  ? 'تحدث مع فريقنا وسنوضح لك كيف يعمل واثق مع أنظمتك.'
                  : "Talk to our team and we'll walk through how Wathiq connects to your systems."}
              </p>
              <Link href={href('/contact')} className="btn-primary shadow-glow px-8 py-3.5 text-base">
                {isRTL ? 'اطلب عرضاً تجريبياً' : 'Request a Demo'}
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
