'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Link from 'next/link';

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

// The two separate services Wathiq offers. Each stands on its own and can be
// enabled independently — AML screening is not a feature of ID verification,
// and vice versa.
const services = {
  en: [
    {
      id: 'verification',
      tag: 'Service 1 — ePassport Verification',
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
      id: 'aml',
      tag: 'Add-on — AML Screening',
      title: 'Screen against sanctions and watchlists.',
      body: "For banks and fintechs, AML screening is an add-on you enable on top of ePassport verification. Once enabled, it screens individuals against your organisation's selected official sanctions and watchlist sources — automatically whenever a verification is accepted, or run directly on any person from the dashboard or API. A potential match opens a compliance investigation case with source-by-source evidence; it never overrides the identity verification decision on its own.",
      features: ['Screening against your selected list sources', 'Automatic or on-demand screening', 'Investigation view with match evidence', 'Compliance review & audit trail'],
      linkLabel: 'View AML Screening',
      linkPath: '/aml-screening',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
        </svg>
      ),
      gradient: 'from-teal-600 to-teal-900',
    },
  ],
  ar: [
    {
      id: 'verification',
      tag: 'الخدمة 1 — التحقق من جوازات السفر الإلكترونية',
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
      id: 'aml',
      tag: 'إضافة — فحص AML',
      title: 'افحص العقوبات وقوائم الحظر.',
      body: 'للبنوك وشركات التقنية المالية، فحص AML إضافة تُفعَّل فوق خدمة التحقق من جواز السفر الإلكتروني. بعد التفعيل، يفحص واثق الأفراد مقابل مصادر العقوبات وقوائم الحظر الرسمية التي تختارها مؤسستك — تلقائياً عند قبول طلب التحقق، أو مباشرة على أي شخص من لوحة التحكم أو عبر API. تفتح أي مطابقة محتملة حالة تحقيق للامتثال مزودة بأدلة تفصيلية لكل مصدر، ولا تُلغي وحدها قرار التحقق من الهوية.',
      features: ['فحص مقابل مصادر القوائم التي تختارها', 'فحص تلقائي أو عند الطلب', 'واجهة تحقيق مع أدلة المطابقة', 'مراجعة امتثال وسجل تدقيق'],
      linkLabel: 'استعرض فحص AML',
      linkPath: '/aml-screening',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
        </svg>
      ),
      gradient: 'from-teal-600 to-teal-900',
    },
  ],
};

// Shared infrastructure that both services run on. These are not services
// themselves — they're how you connect to and manage whichever service(s)
// your organisation has enabled.
const platformLayer = {
  en: [
    {
      id: 'api',
      title: 'API & Webhooks',
      body: 'Start requests for either service and receive results and status updates by connecting your systems to Wathiq.',
      linkLabel: 'View Developers',
      linkPath: '/developers',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'dashboard',
      title: 'Client Dashboard',
      body: 'Manage activity for both services from one place — review status, results, and investigation cases.',
      linkLabel: 'View Client Dashboard',
      linkPath: '/client-dashboard',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM13 13a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6zM4 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
        </svg>
      ),
    },
  ],
  ar: [
    {
      id: 'api',
      title: 'API وWebhooks',
      body: 'ابدأ طلبات لأي من الخدمتين، وتلقَّ النتائج وتحديثات الحالة من خلال ربط أنظمتك بمنصة واثق.',
      linkLabel: 'استعرض قسم المطورين',
      linkPath: '/developers',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'dashboard',
      title: 'لوحة تحكم العملاء',
      body: 'أدِر نشاط الخدمتين من مكان واحد — راجع الحالة والنتائج وحالات التحقيق.',
      linkLabel: 'استعرض لوحة تحكم العملاء',
      linkPath: '/client-dashboard',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM13 13a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6zM4 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
        </svg>
      ),
    },
  ],
};

export default function PlatformPage() {
  const { isRTL, href } = useLanguage();
  const items = isRTL ? services.ar : services.en;
  const layer = isRTL ? platformLayer.ar : platformLayer.en;

  return (
    <>
      <PageHero
        tag={isRTL ? 'المنصة' : 'Platform'}
        title={isRTL ? 'منصة واثق' : 'The Wathiq Platform'}
        subtitle={isRTL
          ? 'اشترك في التحقق من جوازات السفر الإلكترونية وحده، أو أضف فحص AML فوقه — كلاهما متصل بواجهة برمجة تطبيقات وWebhooks ولوحة تحكم عملاء مشتركة.'
          : 'Subscribe to ePassport verification on its own, or add AML screening on top of it — both connected through one shared API, webhook layer, and client dashboard.'}
      />

      <div className="bg-white">
        <div className="container-wide pt-14 sm:pt-20">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-4">
            <SectionTag label={isRTL ? 'خدماتنا' : 'Our Services'} variant="blue" />
          </AnimatedSection>
        </div>

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

        {/* Shared platform layer — clearly demoted from "service" to "infrastructure" */}
        <section className="section-pad bg-white border-t border-slate-100">
          <div className="container-wide">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
              <SectionTag label={isRTL ? 'كيف تتصل بالخدمتين' : 'How you connect to both'} variant="teal" />
              <h2 className="heading-lg text-navy-900 mt-4">
                {isRTL ? 'طبقة مشتركة واحدة لكلتا الخدمتين' : 'One shared layer for both services'}
              </h2>
              <p className="body-md mt-3">
                {isRTL
                  ? 'واجهة برمجة التطبيقات ولوحة التحكم ليستا خدمة بحد ذاتها — بل الطريقة التي تدير وتتابع بها أي خدمة فعّلتها مؤسستك.'
                  : 'The API and the dashboard are not a service on their own — they are how you manage and track whichever service your organisation has enabled.'}
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {layer.map((item, i) => (
                <AnimatedItem key={item.id} index={i}>
                  <div className={`h-full rounded-2xl bg-slate-50 border border-slate-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${isRTL ? 'text-right' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center mb-5">
                      {item.icon}
                    </div>
                    <h3 className="text-navy-900 font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.body}</p>
                    <Link href={href(item.linkPath)} className="inline-flex items-center gap-1.5 text-electric-600 font-semibold text-sm hover:text-electric-700">
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
