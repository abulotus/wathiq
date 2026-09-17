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
      />

      {/* Overview */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className={`max-w-2xl mx-auto ${isRTL ? 'text-right' : 'text-center'}`}>
            <h2 className="heading-lg text-navy-900 mb-5">
              {isRTL ? 'تغطية قابلة للضبط وفق سياسة مؤسستك' : 'Comprehensive and configurable coverage'}
            </h2>
            <p className="body-lg text-slate-600 mb-6">
              {isRTL
                ? 'يختار المسؤولون المخوّلون المصادر التي تدخل ضمن نطاق الفحص، ويمكن تفعيل كل مصدر أو إيقافه بما يتوافق مع سياسة الامتثال والأسواق التي تعمل فيها المؤسسة.'
                : 'Authorised client administrators select which sources to enable for screening. Organisations control which sources are active based on their compliance policy and market requirements.'}
            </p>
            <p className="body-lg text-slate-600">
              {isRTL
                ? 'لا تمثل هذه التغطية جميع المصادر المتاحة عالمياً. تواصل مع فريقنا للتحقق من المصادر المناسبة لمتطلباتك التنظيمية.'
                : "Coverage is not claimed to be exhaustive of all available sources globally. Contact us to discuss your specific compliance requirements."}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coverage categories */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <div className="space-y-16">
            {coverage.map((cat, idx) => (
              <AnimatedSection key={idx} className={`${isRTL ? 'text-right' : ''}`}>
                <h2 className="heading-lg text-navy-900 mb-2">{cat.title}</h2>
                <p className="body-lg text-slate-600 mb-8 max-w-2xl">{cat.desc}</p>

                {cat.sources && cat.sources.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {cat.sources.map((source, i) => (
                      <AnimatedItem key={i} index={i}>
                        <div className="bg-white rounded-lg border border-slate-200 p-4 flex items-center gap-3 hover:shadow-md hover:border-electric-300 transition-all duration-200 focus-within:ring-2 focus-within:ring-electric-500">
                          <div className="w-8 h-8 rounded-full bg-electric-100 text-electric-600 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-700 font-medium text-sm">{source}</span>
                        </div>
                      </AnimatedItem>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
                    <p className="text-slate-700 font-medium">{cat.note}</p>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className={`max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            <h2 className="heading-lg text-navy-900 mb-8">
              {isRTL ? 'ملاحظات مهمة' : 'Important notes'}
            </h2>

            <div className="space-y-6">
              <div className="border-s-4 border-blue-300 bg-blue-50 rounded-e-lg px-6 py-5 hover:shadow-md transition-shadow duration-200">
                <h3 className="font-bold text-blue-900 mb-2 text-base">
                  {isRTL ? 'مصادر قابلة للتخصيص' : 'Configurable sources'}
                </h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  {isRTL
                    ? 'المصادر المتاحة قابلة للتخصيص بالكامل من قبل مسؤولي المؤسسة المعتمدين. يمكن تفعيل أو تعطيل كل مصدر حسب احتياجات سياسة الامتثال.'
                    : 'Available screening sources are fully configurable by authorised organisation administrators. Each source can be enabled or disabled according to compliance policy requirements.'}
                </p>
              </div>

              <div className="border-s-4 border-amber-300 bg-amber-50 rounded-e-lg px-6 py-5 hover:shadow-md transition-shadow duration-200">
                <h3 className="font-bold text-amber-900 mb-2 text-base">
                  {isRTL ? 'التحديثات المنتظمة' : 'Regular updates'}
                </h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  {isRTL
                    ? 'تُحدّث المصادر المدعومة دورياً. وعند تفعيل المراقبة المستمرة، يُعاد الفحص تلقائياً عند وصول تحديثات إلى المصادر المختارة.'
                    : 'All supported sources are regularly updated. When continuous monitoring is enabled, screening is automatically retriggered when sources are updated.'}
                </p>
              </div>

              <div className="border-s-4 border-slate-300 bg-slate-50 rounded-e-lg px-6 py-5 hover:shadow-md transition-shadow duration-200">
                <h3 className="font-bold text-slate-900 mb-2 text-base">
                  {isRTL ? 'الامتثال المحلي' : 'Local compliance'}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {isRTL
                    ? 'ينبغي اختيار المصادر بما يتوافق مع المتطلبات المحلية والدولية المنطبقة على نشاط مؤسستك وتقييمها للمخاطر.'
                    : 'The selection of sources should align with applicable local and international compliance requirements for your business.'}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className={`max-w-2xl mx-auto ${isRTL ? 'text-right' : 'text-center'}`}>
            <h2 className="heading-lg text-navy-900 mb-4">
              {isRTL ? 'تحتاج إلى معرفة المزيد؟' : 'Need more information?'}
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              {isRTL
                ? 'تحدث مع فريقنا حول المصادر المدعومة وخيارات الإعداد المناسبة لاحتياجاتك.'
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
