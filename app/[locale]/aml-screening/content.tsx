'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';
import Link from 'next/link';

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const flowSteps = {
  en: ['Verification accepted, or a manual request', 'Matched against your selected lists', 'Clean or Potential Match', 'Compliance review & resolution'],
  ar: ['قبول التحقق، أو طلب يدوي', 'مطابقة مع القوائم التي تختارها', 'نتيجة نظيفة أو مطابقة محتملة', 'مراجعة الامتثال والحل'],
};

const screeningFeatures = {
  en: ['Screening against your selected list sources', 'Automatic screening on accepted verifications (opt-in)', 'Manual screening from the dashboard or API', 'Configurable match sensitivity'],
  ar: ['فحص مقابل مصادر القوائم التي تختارها', 'فحص تلقائي عند قبول التحقق (اختياري)', 'فحص يدوي من لوحة التحكم أو عبر API', 'حساسية مطابقة قابلة للتخصيص'],
};

const investigationFeatures = {
  en: ['Source-by-source match coverage', 'Field-by-field evidence comparison', 'Downloadable PDF screening reports', 'Full case audit trail'],
  ar: ['تغطية مطابقة لكل مصدر على حدة', 'مقارنة أدلة حقلاً بحقل', 'تقارير فحص قابلة للتنزيل بصيغة PDF', 'سجل تدقيق كامل للحالة'],
};

export default function AmlScreeningPage() {
  const { isRTL, href } = useLanguage();
  const flow = isRTL ? flowSteps.ar : flowSteps.en;
  const screening = isRTL ? screeningFeatures.ar : screeningFeatures.en;
  const investigation = isRTL ? investigationFeatures.ar : investigationFeatures.en;

  return (
    <>
      <PageHero
        tag={isRTL ? 'فحص AML' : 'AML Screening'}
        title={isRTL ? 'فحص العقوبات وقوائم الحظر للجهات المنظّمة' : 'Sanctions & watchlist screening for regulated clients'}
        subtitle={isRTL
          ? 'للبنوك وشركات التقنية المالية: فحص AML إضافة تُفعَّل فوق خدمة التحقق من جواز السفر الإلكتروني — تلقائياً عند قبول التحقق، أو يدوياً من لوحة التحكم لأي شخص.'
          : 'For banks and fintechs: AML screening is an add-on to ePassport verification — running automatically when a verification is accepted, or manually from the dashboard for any person.'}
      />

      {/* What Wathiq screens */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRTL ? 'text-right' : ''}`}>
            <AnimatedSection>
              <SectionTag label={isRTL ? 'كيف يعمل الفحص' : 'How screening works'} variant="teal" />
              <h2 className="heading-lg text-navy-900 mt-4 mb-5">
                {isRTL ? 'فحص مطابقة اسمي مقابل القوائم التي تختارها.' : 'Name-matching screening against the lists you choose.'}
              </h2>
              <p className="body-lg mb-8">
                {isRTL
                  ? 'يمكنك الاشتراك في التحقق من جواز السفر الإلكتروني وحده، أو إضافة فحص AML فوقه. بمجرد التفعيل، يفحص واثق الأشخاص الطبيعيين مقابل مصادر العقوبات وقوائم الحظر الرسمية التي تختارها مؤسستك — تلقائياً بمجرد قبول طلب تحقق من الهوية، أو يدوياً على أي شخص من لوحة التحكم أو عبر API — دون أن يُلغي الفحص وحده قرار التحقق من الهوية.'
                  : "You can subscribe to ePassport verification on its own, or add AML screening on top of it. Once enabled, Wathiq screens named individuals against the official sanctions and watchlist sources your organisation has selected — automatically as soon as an identity verification is accepted, or manually on any person from the dashboard or API — and it never overrides the identity verification decision on its own."}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {screening.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href={href('/contact')} className="btn-primary">
                {isRTL ? 'اطلب عرضاً تجريبياً' : 'Request a Demo'}
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="relative">
                <div className="rounded-3xl bg-gradient-to-br from-teal-600 to-teal-900 p-5 sm:p-8 shadow-2xl">
                  <div className="text-white mb-4">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{isRTL ? 'فحص AML' : 'AML Screening'}</h3>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    {isRTL
                      ? 'مطابقة محتملة تفتح حالة تحقيق للامتثال — لا تُرفض هوية العميل تلقائياً.'
                      : "A potential match opens a compliance investigation case — it doesn't automatically reject the customer."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      isRTL ? 'نظيف' : 'Clean',
                      isRTL ? 'مطابقة محتملة' : 'Potential Match',
                      isRTL ? 'غير مكتمل' : 'Incomplete',
                    ].map((f, i) => (
                      <span key={i} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Flow diagram */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <SectionTag label={isRTL ? 'مسار الفحص' : 'Screening flow'} />
            <h2 className="heading-lg text-navy-900 mt-4">
              {isRTL ? 'من الفحص إلى قرار الامتثال' : 'From screening to a compliance decision'}
            </h2>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-2 max-w-5xl mx-auto">
            {flow.map((step, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-5 text-center shadow-sm">
                  <span className="text-navy-900 text-sm font-semibold">{step}</span>
                </div>
                {i < flow.length - 1 && (
                  <svg className={`w-5 h-5 text-teal-500 flex-shrink-0 hidden lg:block ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investigation & review */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRTL ? 'text-right lg:grid-flow-col-dense' : ''}`}>
            <AnimatedSection delay={0.2} direction={isRTL ? 'right' : 'left'} className={isRTL ? 'lg:col-start-2' : ''}>
              <SectionTag label={isRTL ? 'التحقيق والمراجعة' : 'Investigation & review'} variant="teal" />
              <h2 className="heading-lg text-navy-900 mt-4 mb-5">
                {isRTL ? 'أدلة كاملة لفريق الامتثال لديك.' : 'Full evidence for your compliance team.'}
              </h2>
              <p className="body-lg mb-8">
                {isRTL
                  ? 'كل مطابقة محتملة تُفتح كحالة تحقيق في لوحة التحكم: تغطية المصادر، ودرجة تشابه لكل نتيجة، ومقارنة الحقول جنباً إلى جنب، وأدلة المصدر. يراجع فريقك الحالة ويغلقها كمطابقة إيجابية زائفة، أو مطابقة مؤكدة، أو بحاجة لمزيد من المعلومات — ويُسجَّل كل إجراء في سجل تدقيق.'
                  : 'Every potential match opens as an investigation case in the dashboard: source coverage, a similarity score per result, side-by-side field comparison, and source evidence. Your team resolves the case as a false positive, a confirmed match, or as needing more information — and every action is captured in an audit trail.'}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {investigation.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className={isRTL ? 'lg:col-start-1' : ''}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-card">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-navy-900 font-bold text-sm">{isRTL ? 'حالة الفحص' : 'Screening case'}</span>
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                    {isRTL ? 'مطابقة محتملة' : 'Potential Match'}
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: isRTL ? 'المصدر' : 'Source', value: isRTL ? 'القائمة المختارة' : 'Selected list' },
                    { label: isRTL ? 'درجة التشابه' : 'Similarity score', value: '78%' },
                    { label: isRTL ? 'الحقول المتطابقة' : 'Matching fields', value: isRTL ? 'الاسم، تاريخ الميلاد' : 'Name, date of birth' },
                    { label: isRTL ? 'الحساسية' : 'Sensitivity', value: isRTL ? 'قياسي' : 'Standard' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-slate-200 last:border-0">
                      <span className="text-slate-500">{row.label}</span>
                      <span className="text-navy-900 font-semibold">{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mt-5">
                  {isRTL
                    ? 'مؤشر توضيحي — ليست بيانات فحص فعلية.'
                    : 'Illustrative — not an actual screening result.'}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Disclaimer callout */}
      <section className="pb-14 sm:pb-20 bg-white">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className={`rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 ${isRTL ? 'text-right' : ''}`}>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isRTL
                  ? 'درجة التشابه مؤشر للتحقيق، وليست احتمالاً أو حكماً قانونياً على الهوية. النتيجة النهائية لأي حالة يحددها فريق الامتثال لديك. فحص AML يغطي مطابقة الأسماء مقابل مصادر العقوبات وقوائم الحظر؛ فحص الشخصيات السياسية المعرضة للمخاطر (PEP) والإعلام السلبي على خارطة طريقنا — تواصل معنا لمناقشة متطلباتك التنظيمية المحددة.'
                  : "A similarity score is an investigation indicator, not a probability or a legal determination of identity. The final outcome of any case is decided by your compliance team. AML screening covers name-matching against sanctions and watchlist sources; PEP and adverse-media screening are on our roadmap — contact us to discuss your specific regulatory requirements."}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container-wide">
          <AnimatedSection className="text-center">
            <h2 className="heading-lg text-navy-900 mb-4">
              {isRTL ? 'هل تحتاج فحص AML لمؤسستك؟' : 'Need AML screening for your organisation?'}
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
              {isRTL
                ? 'تحدث مع فريقنا حول متطلبات الامتثال لديك وقوائم الفحص التي تحتاجها.'
                : "Talk to our team about your compliance requirements and the list sources you need to screen against."}
            </p>
            <Link href={href('/contact')} className="btn-primary shadow-glow px-8 py-3.5 text-base">
              {isRTL ? 'اطلب عرضاً تجريبياً' : 'Request a Demo'}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
