'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import TechBackground from '@/components/ui/TechBackground';
import Link from 'next/link';

const coverageCategories = {
  en: [
    {
      title: 'INTERNATIONAL SANCTIONS',
      desc: 'Supported international sanctions source families across key regulatory jurisdictions.',
      sources: [
        'United Nations Security Council',
        'European Union',
        'United Kingdom',
        'United States',
        'Canada',
        'Australia',
      ],
    },
    {
      title: 'SYRIA PEP',
      desc: 'Syria-focused politically exposed person screening designed for regulatory compliance in Syrian markets.',
      sources: [],
      note: 'Comprehensive Syria-specific PEP database',
    },
    {
      title: 'SYRIA RCA',
      desc: 'Relatives and close associates of covered politically exposed persons in Syria-focused screening.',
      sources: [],
      note: 'Associated individuals linked to Syria PEP records',
    },
  ],
  ar: [
    {
      title: 'العقوبات الدولية',
      desc: 'مصادر العقوبات الدولية المدعومة عبر الولايات القضائية التنظيمية الرئيسية.',
      sources: [
        'قائمة مجلس الأمن التابعة للأمم المتحدة',
        'الاتحاد الأوروبي',
        'المملكة المتحدة',
        'الولايات المتحدة',
        'كندا',
        'أستراليا',
      ],
    },
    {
      title: 'الأشخاص المعرّضون سياسياً في سوريا',
      desc: 'تغطية تركز على الأشخاص المعرّضين سياسياً في سوريا لدعم متطلبات العناية الواجبة وإدارة المخاطر.',
      sources: [],
      note: 'بيانات متخصصة بالأشخاص المعرّضين سياسياً في سوريا',
    },
    {
      title: 'أفراد الأسرة والمقرّبون في سوريا',
      desc: 'تغطية أفراد أسر الأشخاص المعرّضين سياسياً والمقرّبين منهم ضمن نطاق الفحص الخاص بسوريا.',
      sources: [],
      note: 'أفراد مرتبطون بسجلات الأشخاص المعرّضين سياسياً في سوريا',
    },
  ],
};

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function CoverageContent() {
  const { isRTL, href } = useLanguage();
  const coverage = isRTL ? coverageCategories.ar : coverageCategories.en;

  return (
    <>
      <PageHero
        title={isRTL ? 'تغطية فحص مكافحة غسل الأموال' : 'AML Screening Coverage'}
        subtitle={isRTL
          ? 'اختر من مصادر العقوبات الدولية المدعومة، إلى جانب تغطية تركز على الأشخاص المعرّضين سياسياً في سوريا وأفراد أسرهم والمقرّبين منهم.'
          : 'Wathiq supports configurable screening across major international sanctions sources together with Syria-focused PEP and RCA coverage.'}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={href('/contact')} className="btn-primary">
            {isRTL ? 'ناقش متطلبات مؤسستك' : 'Discuss your requirements'}
          </Link>
          <Link href={href('/aml-screening')} className="btn-secondary">
            {isRTL ? 'استعرض خدمة الفحص' : 'View AML screening'}
          </Link>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-navy-900 mb-5">
              {isRTL ? 'اختر نطاق الفحص وفق سياسة المخاطر لديك' : 'Comprehensive and configurable coverage'}
            </h2>
            <p className="body-lg text-slate-600 mb-6">
              {isRTL
                ? 'فعّل مصادر العقوبات وفئات الأشخاص المعرّضين سياسياً المناسبة لأسواق مؤسستك ومتطلباتها التنظيمية. ويمكن للمسؤولين المخوّلين تعديل النطاق من لوحة التحكم.'
                : 'Authorised client administrators select which sources to enable for screening. Organisations control which sources are active based on their compliance policy and market requirements.'}
            </p>
            <p className="body-lg text-slate-600">
              {isRTL
                ? 'تعرض هذه الصفحة نطاق التغطية المدعوم حالياً، ولا تمثل جميع المصادر المتاحة عالمياً. يساعدك فريقنا على تحديد المصادر الملائمة لبرنامج الامتثال لديك.'
                : "Coverage is not claimed to be exhaustive of all available sources globally. Contact us to discuss your specific compliance requirements."}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coverage categories */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto mb-12 text-center">
            <span className="inline-flex rounded-full bg-electric-100 px-3 py-1 text-xs font-bold text-electric-700 mb-4">
              {isRTL ? 'نطاق التغطية' : 'Coverage scope'}
            </span>
            <h2 className="heading-lg text-navy-900">
              {isRTL ? 'مصادر دولية مع تغطية متخصصة للسياق السوري' : 'International sources with Syria-focused coverage'}
            </h2>
            <p className="body-lg text-slate-600 mt-4">
              {isRTL
                ? 'تظهر النتائج بحسب الفئة والمصدر، بما يسهّل على فريق الامتثال فهم سبب ظهور كل تطابق محتمل ومراجعته.'
                : 'Results are organised by category and source, helping compliance teams understand and review each potential match.'}
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-2">
            {coverage.map((cat, idx) => (
              <AnimatedItem key={idx} index={idx} className={idx === 0 ? 'lg:col-span-2' : ''}>
                <article className={`h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:-translate-y-1 hover:border-electric-200 hover:shadow-lg transition-all duration-200 ${isRTL ? 'text-right' : ''}`}>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <span className="text-xs font-bold tracking-wider text-electric-600">{String(idx + 1).padStart(2, '0')}</span>
                      <h3 className="text-xl font-bold text-navy-900 mt-2 leading-8">{cat.title}</h3>
                    </div>
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center">
                      <CheckIcon />
                    </div>
                  </div>
                  <p className="text-slate-600 leading-7 mb-7">{cat.desc}</p>

                {cat.sources && cat.sources.length > 0 ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {cat.sources.map((source, i) => (
                        <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-teal-600 flex items-center justify-center flex-shrink-0">
                            <CheckIcon />
                          </div>
                          <span className="text-slate-700 font-medium text-sm">{source}</span>
                        </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-electric-100 bg-electric-50/60 p-5">
                    <p className="text-navy-900 font-semibold leading-7">{cat.note}</p>
                  </div>
                )}
                </article>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg text-navy-900 mb-4">
              {isRTL ? 'كيف تُدار التغطية داخل مؤسستك؟' : 'How coverage is managed'}
            </h2>
            <p className="body-lg text-slate-600">
              {isRTL
                ? 'إعدادات مرنة، وتحديثات مستمرة، مع بقاء مسؤولية اختيار المصادر وقرار الامتثال لدى مؤسستك.'
                : 'Flexible configuration and regular updates, while source selection and compliance decisions remain with your organisation.'}
            </p>
          </AnimatedSection>

          <div className={`grid gap-6 md:grid-cols-3 ${isRTL ? 'text-right' : ''}`}>
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 hover:shadow-md transition-shadow duration-200">
                <span className="block text-xs font-bold text-blue-600 mb-4">01</span>
                <h3 className="font-bold text-blue-950 mb-3 text-base">
                  {isRTL ? 'مصادر قابلة للتخصيص' : 'Configurable sources'}
                </h3>
                <p className="text-blue-900/80 text-sm leading-7">
                  {isRTL
                    ? 'يمكن للمسؤولين المخوّلين تفعيل كل مصدر أو تعطيله وفق سياسة الامتثال ونطاق المخاطر المعتمد.'
                    : 'Available screening sources are fully configurable by authorised organisation administrators. Each source can be enabled or disabled according to compliance policy requirements.'}
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-6 hover:shadow-md transition-shadow duration-200">
                <span className="block text-xs font-bold text-amber-600 mb-4">02</span>
                <h3 className="font-bold text-amber-950 mb-3 text-base">
                  {isRTL ? 'التحديثات المنتظمة' : 'Regular updates'}
                </h3>
                <p className="text-amber-900/80 text-sm leading-7">
                  {isRTL
                    ? 'تُحدّث المصادر المدعومة دورياً. وعند تفعيل المراقبة المستمرة، يُعاد الفحص تلقائياً عند وصول تحديثات إلى المصادر المختارة.'
                    : 'All supported sources are regularly updated. When continuous monitoring is enabled, screening is automatically retriggered when sources are updated.'}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition-shadow duration-200">
                <span className="block text-xs font-bold text-slate-500 mb-4">03</span>
                <h3 className="font-bold text-slate-950 mb-3 text-base">
                  {isRTL ? 'المواءمة التنظيمية' : 'Local compliance'}
                </h3>
                <p className="text-slate-700 text-sm leading-7">
                  {isRTL
                    ? 'ينبغي اختيار المصادر بما يتوافق مع المتطلبات المحلية والدولية المنطبقة على نشاط مؤسستك وتقييمها للمخاطر.'
                    : 'The selection of sources should align with applicable local and international compliance requirements for your business.'}
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-navy-900 mb-4">
              {isRTL ? 'تأكد من توافق التغطية مع متطلبات مؤسستك' : 'Confirm coverage for your requirements'}
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              {isRTL
                ? 'شاركنا الأسواق التي تعمل فيها وسياسة المخاطر لديك، وسنوضح المصادر المدعومة وخيارات الإعداد والتكامل المناسبة.'
                : "Talk to our team about supported sources and configurations available for your needs."}
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              <Link href={href('/aml-screening')} className="btn-secondary focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 transition-all duration-200">
                {isRTL ? 'العودة إلى فحص مكافحة غسل الأموال' : 'Back to AML Screening'}
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href={href('/contact')} className="btn-primary focus:ring-2 focus:ring-offset-2 focus:ring-electric-600 transition-all duration-200">
                {isRTL ? 'اطلب عرضاً توضيحياً' : 'Request a Demo'}
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
