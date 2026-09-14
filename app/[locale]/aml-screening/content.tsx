'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import TechBackground from '@/components/ui/TechBackground';
import Link from 'next/link';

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0-6a4 4 0 110-8 4 4 0 010 8z" />
    </svg>
  );
}

const workflowSteps = {
  en: [
    { title: 'VERIFY', desc: "Wathiq verifies the applicant's identity before AML screening." },
    { title: 'SCREEN', desc: 'When automatic screening is enabled by the organisation, a successfully verified identity is screened against the organisation\'s selected sanctions, PEP and RCA sources.' },
    { title: 'REVIEW', desc: 'Wathiq presents category-level screening results. Potential matches include relevant matching information to support compliance review.' },
    { title: 'MONITOR', desc: 'When continuous monitoring is enabled, enrolled identities can be automatically re-screened as selected screening sources are updated.' },
  ],
  ar: [
    { title: 'تحقق', desc: 'يتحقق واثق من هوية المتقدم قبل فحص مكافحة غسل الأموال.' },
    { title: 'افحص', desc: 'عند تفعيل الفحص التلقائي من قبل المؤسسة، يتم فحص الهوية الموثّقة بنجاح مقابل مصادر العقوبات والأشخاص المعرضين سياسياً والأقارب والأشخاص ذي الصلة التي اختارتها المؤسسة.' },
    { title: 'راجع', desc: 'يقدم واثق نتائج الفحص على مستوى الفئة. التطابقات المحتملة تتضمن معلومات مطابقة ذات صلة لدعم المراجعة من فريق الامتثال.' },
    { title: 'راقب', desc: 'عند تفعيل المراقبة المستمرة، يمكن إعادة فحص الهويات المسجلة تلقائياً عند تحديث مصادر الفحص المختارة.' },
  ],
};

const screeningCategories = {
  en: [
    { title: 'SANCTIONS', desc: 'Screen verified identities against supported international sanctions sources selected by the organisation.' },
    { title: 'PEP', desc: 'Identify potential politically exposed person matches, including Syria-focused PEP coverage.' },
    { title: 'RCA', desc: 'Identify potential relatives and close associates associated with covered politically exposed persons.' },
  ],
  ar: [
    { title: 'العقوبات', desc: 'افحص الهويات الموثّقة مقابل مصادر العقوبات الدولية المدعومة التي اختارتها المؤسسة.' },
    { title: 'الأشخاص المعرضون سياسياً', desc: 'حدّد التطابقات المحتملة للأشخاص المعرضين سياسياً، مع التركيز على تغطية سوريا.' },
    { title: 'الأقارب والأشخاص ذوو الصلة', desc: 'حدّد الأقارب والأشخاص ذوي الصلة المحتملين المرتبطين بالأشخاص المعرضين سياسياً المشمولين.' },
  ],
};

const investigationFeatures = {
  en: ['Source-by-source match coverage', 'Field-by-field evidence comparison', 'Downloadable PDF screening reports', 'Full case audit trail'],
  ar: ['تغطية مطابقة لكل مصدر على حدة', 'مقارنة أدلة حقلاً بحقل', 'تقارير فحص قابلة للتنزيل بصيغة PDF', 'سجل تدقيق كامل للحالة'],
};

const monitoringFeatures = {
  en: ['Manual enrolment, or automatic after accepted KYC', 'Re-screens on list updates or identity data changes', 'Optional periodic re-screen interval, in days', 'Renewal reminder before the annual term ends'],
  ar: ['تسجيل يدوي، أو تلقائي بعد قبول التحقق', 'إعادة فحص عند تحديث القوائم أو تغيّر بيانات الهوية', 'فاصل دوري اختياري لإعادة الفحص بالأيام', 'تذكير بالتجديد قبل انتهاء الاشتراك السنوي'],
};

export default function AmlScreeningPage() {
  const { isRTL, href } = useLanguage();
  const workflow = isRTL ? workflowSteps.ar : workflowSteps.en;
  const categories = isRTL ? screeningCategories.ar : screeningCategories.en;
  const investigation = isRTL ? investigationFeatures.ar : investigationFeatures.en;
  const monitoring = isRTL ? monitoringFeatures.ar : monitoringFeatures.en;

  return (
    <>
      <PageHero
        title={isRTL ? 'التحقق من الهوية مع فحص مدمج لمكافحة غسل الأموال' : 'Identity verification with built-in AML screening'}
        subtitle={isRTL
          ? 'تحقق من الهوية وافحصها مقابل مصادر العقوبات والأشخاص المعرضين سياسياً والأقارب والأشخاص ذوي الصلة ضمن سير عمل متكامل. تتحكم المؤسسة في توقيت الفحص والمصادر المفعّلة وتفعيل المراقبة المستمرة.'
          : 'Verify identities and screen them against supported sanctions, PEP and RCA sources in one connected workflow. Organisations control when screening runs, which sources are enabled and whether continuous monitoring is active.'}
      />

      {/* Workflow section */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className={`text-center max-w-2xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="heading-lg text-navy-900">
              {isRTL ? 'من التحقق من الهوية إلى المراقبة المستمرة' : 'From identity verification to ongoing monitoring'}
            </h2>
            <p className="body-lg text-slate-500 mt-4">
              {isRTL
                ? 'سير عمل متكامل يربط التحقق من الهوية مع فحص مكافحة غسل الأموال والمراقبة المستمرة.'
                : 'A connected workflow linking identity verification, AML screening and continuous monitoring.'}
            </p>
          </AnimatedSection>

          <div className={`grid md:grid-cols-4 gap-6 ${isRTL ? 'text-right' : ''}`}>
            {workflow.map((step, i) => (
              <AnimatedItem key={i} index={i}>
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm h-full hover:shadow-lg hover:border-slate-300 transition-all duration-200 focus-within:ring-2 focus-within:ring-electric-500 focus-within:ring-offset-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-electric-100 text-electric-600 font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-navy-900 mb-3 text-base">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Screening categories */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className={`text-center max-w-2xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="heading-lg text-navy-900">
              {isRTL ? 'فئات الفحص الثلاث' : 'Three screening categories'}
            </h2>
            <p className="body-lg text-slate-500 mt-4">
              {isRTL
                ? 'واثق يقيّم كل فئة بشكل مستقل ويقدم نتائج واضحة.'
                : 'Wathiq evaluates each category independently and presents clear results.'}
            </p>
          </AnimatedSection>

          <div className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            {categories.map((cat, i) => (
              <AnimatedItem key={i} index={i}>
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-electric-300 transition-all duration-200 focus-within:ring-2 focus-within:ring-electric-500 focus-within:ring-offset-2">
                  <div className="w-10 h-10 rounded-lg bg-electric-100 text-electric-600 font-bold flex items-center justify-center mb-4 text-xs">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-navy-900 mb-3 text-base">{cat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-height-relaxed">{cat.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Automatic screening section */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className={`max-w-2xl ${isRTL ? 'text-right' : ''}`}>
            <h2 className="heading-lg text-navy-900 mb-5">
              {isRTL ? 'الفحص التلقائي بعد التحقق من الهوية' : 'Automatic screening after identity verification'}
            </h2>
            <p className="body-lg text-slate-600 mb-6">
              {isRTL
                ? 'عند تفعيله من قبل المؤسسة، يبدأ واثق فحص مكافحة غسل الأموال تلقائياً بعد نجاح التحقق من الهوية.'
                : 'When enabled by the organisation, Wathiq automatically initiates AML screening after identity verification is successfully completed.'}
            </p>
            <p className="body-lg text-slate-600">
              {isRTL
                ? 'يمكن لمسؤولي المؤسسة تعطيل الفحص التلقائي أو بدء الفحص يدوياً عند الحاجة. الفحص اختياري، وليس إجباري.'
                : 'Administrators can disable automatic screening or initiate screening manually when required. Automatic screening is client-controlled, not mandatory.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Built for Syria section */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRTL ? 'text-right' : ''}`}>
            <AnimatedSection>
              <h2 className="heading-lg text-navy-900 mb-5">
                {isRTL ? 'مصمم لسوريا ومتصل بمصادر العقوبات الدولية' : 'Built for Syria. Connected to international sanctions sources.'}
              </h2>
              <p className="body-lg text-slate-600 mb-6">
                {isRTL
                  ? 'يجمع واثق بين مصادر العقوبات الدولية المدعومة مع فحص الأشخاص المعرضين سياسياً والأقارب والأشخاص ذي الصلة المطور خصيصاً لحالات الامتثال السورية.'
                  : 'Wathiq combines supported international sanctions sources with PEP and RCA screening developed for Syrian compliance use cases.'}
              </p>
              <p className="body-lg text-slate-600 mb-8">
                {isRTL
                  ? 'تختار المؤسسات مصادر الفحص والفئات المناسبة لسياستها الامتثالية.'
                  : 'Organisations can select the screening sources and categories appropriate to their compliance policy.'}
              </p>
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
                  <h3 className="text-white text-xl font-bold mb-2">{isRTL ? 'فحص مدمج' : 'Integrated screening'}</h3>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    {isRTL
                      ? 'تحقق وافحص وراقب ضمن منصة واحدة. تتحكم مؤسستك بكل جانب.'
                      : 'Verify, screen and monitor within one platform. Your organisation controls every aspect.'}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {[
                      isRTL ? 'العقوبات' : 'Sanctions',
                      'PEP',
                      'RCA',
                    ].map((f, i) => (
                      <span key={i} className="bg-white/10 text-white/80 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20">{f}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      isRTL ? 'مختار' : 'Selected',
                      isRTL ? 'قابل للتخصيص' : 'Configurable',
                      isRTL ? 'مراقب' : 'Monitored',
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

      {/* Client-controlled configuration */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className={`text-center max-w-2xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="heading-lg text-navy-900">
              {isRTL ? 'قوائم الفحص حسب سياستك' : 'Configure screening around your compliance policy'}
            </h2>
            <p className="body-lg text-slate-500 mt-4">
              {isRTL
                ? 'يمكن لمسؤولي المؤسسة المصرح لهم تخصيص الفحص بالكامل حول احتياجات الامتثال.'
                : 'Authorised client administrators can configure screening around your specific compliance needs.'}
            </p>
          </AnimatedSection>

          <div className={`grid md:grid-cols-2 gap-6 max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            {[
              { label: isRTL ? 'تفعيل/تعطيل الفحص التلقائي' : 'Enable/disable automatic screening', icon: '⚙️' },
              { label: isRTL ? 'اختيار المصادر المفعّلة' : 'Select enabled sources', icon: '📋' },
              { label: isRTL ? 'فئات الفحص (العقوبات، PEP، RCA)' : 'Screening categories (Sanctions, PEP, RCA)', icon: '🏷️' },
              { label: isRTL ? 'حساسية المطابقة' : 'Matching sensitivity', icon: '🎚️' },
              { label: isRTL ? 'المراقبة المستمرة (مفعّلة/معطّلة)' : 'Continuous monitoring (enabled/disabled)', icon: '🔔' },
              { label: isRTL ? 'تحديثات القوائم وتغييرات البيانات' : 'Retriggers on list updates and data changes', icon: '🔄' },
            ].map((config, i) => (
              <AnimatedItem key={i} index={i}>
                <div className="flex items-start gap-4 bg-white border border-slate-200 rounded-lg p-5 hover:border-electric-300 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-electric-500">
                  <div className="text-2xl flex-shrink-0 mt-0.5">{config.icon}</div>
                  <span className="text-slate-700 font-medium text-sm leading-relaxed">{config.label}</span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Matching sensitivity section */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className={`max-w-2xl ${isRTL ? 'text-right' : ''}`}>
            <h2 className="heading-lg text-navy-900 mb-5">
              {isRTL ? 'حساسية مطابقة قابلة للتخصيص' : 'Configurable matching sensitivity'}
            </h2>
            <p className="body-lg text-slate-600">
              {isRTL
                ? 'يمكن لمسؤولي المؤسسة اختيار حساسية مطابقة مناسبة أو تخصيص حد معين، مما يساعد على توازن التغطية مع عدد الحالات المحتملة التي تتطلب مراجعة يدوية.'
                : 'Administrators can select an appropriate matching sensitivity or configure a custom threshold, helping balance detection coverage with the number of potential matches requiring manual review.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Screening results section */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className={`text-center max-w-2xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="heading-lg text-navy-900">
              {isRTL ? 'نتائج واضحة لكل فئة فحص' : 'Clear results for every screening category'}
            </h2>
            <p className="body-lg text-slate-500 mt-4">
              {isRTL
                ? 'يقيّم واثق فئات الفحص المفعّلة بشكل مستقل ويقدم نتائج واضحة.'
                : 'Wathiq evaluates enabled screening categories independently and presents clear results.'}
            </p>
          </AnimatedSection>

          <div className={`max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-8 ${isRTL ? 'text-right' : ''}`}>
            {[
              {
                title: isRTL ? 'العقوبات' : 'SANCTIONS',
                status: isRTL ? 'لا توجد مطابقة' : 'No match',
                statusType: 'clean',
                icon: '✓',
              },
              {
                title: 'PEP',
                status: isRTL ? 'تشابه محتمل' : 'Potential match',
                statusType: 'warning',
                details: [
                  { label: isRTL ? 'الحقول' : 'Matching fields', value: isRTL ? 'الاسم، الجنسية' : 'Name, nationality' },
                  { label: isRTL ? 'درجة التشابه' : 'Similarity', value: '91.6%' },
                ],
                icon: '⚠️',
              },
              {
                title: 'RCA',
                status: isRTL ? 'تشابه محتمل' : 'Potential match',
                statusType: 'warning',
                details: [
                  { label: isRTL ? 'الحقول' : 'Matching fields', value: isRTL ? 'الاسم، تاريخ الميلاد' : 'Name, DOB' },
                  { label: isRTL ? 'درجة التشابه' : 'Similarity', value: '88.2%' },
                ],
                icon: '⚠️',
              },
            ].map((result, i) => (
              <AnimatedItem key={i} index={i}>
                <div className={`rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow duration-200 focus-within:ring-2 focus-within:ring-offset-2 ${
                  result.statusType === 'clean'
                    ? 'bg-emerald-50 border-emerald-200 focus-within:ring-emerald-500'
                    : 'bg-amber-50 border-amber-200 focus-within:ring-amber-500'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-navy-900 text-base">{result.title}</h3>
                    <span className="text-2xl flex-shrink-0">{result.icon}</span>
                  </div>
                  <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${
                    result.statusType === 'clean'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {result.status}
                  </span>
                  {result.details && (
                    <div className="space-y-3">
                      {result.details.map((detail, j) => (
                        <div key={j} className="flex items-center justify-between text-sm border-t border-current border-opacity-10 pt-3">
                          <span className="text-slate-600 font-medium">{detail.label}</span>
                          <span className="font-semibold text-navy-900">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedItem>
            ))}
          </div>

          <AnimatedSection className={`max-w-3xl mx-auto mb-8 ${isRTL ? 'text-right' : ''}`}>
            <p className="body-lg text-slate-600 mb-6">
              {isRTL
                ? 'عند اكتشاف تشابه محتمل، يقدم واثق الفئة ذات الصلة وسجلات التطابق المحتملة ومعلومات التشابه لدعم مراجعة الامتثال.'
                : 'When a potential match is detected, Wathiq provides the relevant category, potential-match records and similarity information to support compliance review.'}
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <AlertIcon />
                <div>
                  <p className="font-semibold text-blue-900 text-sm mb-1">
                    {isRTL ? 'ملاحظة مهمة' : 'Important note'}
                  </p>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    {isRTL
                      ? 'يشير التطابق المحتمل إلى حالة تتطلب المراجعة من فريق الامتثال، ولا يعني بحد ذاته أن الشخص مدرج على قائمة عقوبات أو أنه شخص معرض سياسياً أو من الأقارب أو الأشخاص ذوي الصلة.'
                      : 'A potential match is an indicator for compliance review. It does not by itself establish that an individual is sanctioned, a PEP or an RCA.'}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className={`flex gap-4 flex-col sm:flex-row justify-center ${isRTL ? 'text-right' : ''}`}>
            <Link href={href('/contact')} className="btn-primary focus:ring-2 focus:ring-offset-2 focus:ring-electric-600 transition-all duration-200">
              {isRTL ? 'اطلب عرضاً تجريبياً' : 'Request a Demo'}
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href={href('/aml-screening/coverage')} className="btn-secondary focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 transition-all duration-200">
              {isRTL ? 'استكشف تغطية الفحص' : 'Explore screening coverage'}
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Investigation & review */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRTL ? 'text-right lg:grid-flow-col-dense' : ''}`}>
            <AnimatedSection delay={0.2} direction={isRTL ? 'right' : 'left'} className={isRTL ? 'lg:col-start-2' : ''}>
              <h2 className="heading-lg text-navy-900 mb-5">
                {isRTL ? 'أدلة كاملة لفريق الامتثال لديك.' : 'Full evidence for your compliance team.'}
              </h2>
              <p className="body-lg text-slate-600 mb-8">
                {isRTL
                  ? 'كل تشابه محتمل يُفتح كحالة تحقيق في لوحة التحكم: تغطية المصادر، ودرجة تشابه لكل نتيجة، ومقارنة الحقول جنباً إلى جنب، وأدلة المصدر. يراجع فريقك الحالة ويغلقها كمطابقة إيجابية زائفة، أو تطابق مؤكد، أو بحاجة لمزيد من المعلومات — ويُسجَّل كل إجراء في سجل تدقيق.'
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
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-navy-900 font-bold text-sm">{isRTL ? 'حالة الفحص' : 'Screening case'}</span>
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                    {isRTL ? 'تشابه محتمل' : 'Potential Match'}
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: isRTL ? 'المصدر' : 'Source', value: isRTL ? 'قائمة مختارة' : 'Selected source' },
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

      {/* Continuous monitoring */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRTL ? 'text-right' : ''}`}>
            <AnimatedSection>
              <h2 className="heading-lg text-navy-900 mb-5">
                {isRTL ? 'ابقَ على اطّلاع عند تغيير بيانات الفحص' : 'Stay informed when screening data changes'}
              </h2>
              <p className="body-lg text-slate-600 mb-8">
                {isRTL
                  ? 'قد يتغير الخطر بعد التوظيف. عند تفعيل المراقبة المستمرة، يمكن لواثق إعادة فحص الهويات المسجلة تلقائياً عند تحديث مصادر الفحص المختارة.'
                  : 'Risk can change after onboarding. When continuous monitoring is enabled, Wathiq can automatically re-screen enrolled identities as selected screening sources are updated.'}
              </p>

              <p className="body-lg text-slate-600 mb-8">
                {isRTL
                  ? 'يمكن لمسؤولي المؤسسة المصرح لهم تفعيل أو تعطيل المراقبة المستمرة. المراقبة اختيارية وقابلة للتخصيص بالكامل حول احتياجات الامتثال.'
                  : 'Authorised administrators can enable or disable continuous monitoring. Monitoring is optional and fully configurable around your compliance needs.'}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {monitoring.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-card">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-navy-900 font-bold text-sm">{isRTL ? 'ملف المراقبة' : 'Monitoring profile'}</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                    {isRTL ? 'نشطة' : 'Active'}
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: isRTL ? 'بداية الاشتراك' : 'Term started', value: isRTL ? '١٢ يناير ٢٠٢٦' : '12 Jan 2026' },
                    { label: isRTL ? 'آخر إعادة فحص' : 'Last re-screen', value: isRTL ? '٣ سبتمبر ٢٠٢٦' : '3 Sep 2026' },
                    { label: isRTL ? 'نهاية الاشتراك' : 'Term ends', value: isRTL ? '١٢ يناير ٢٠٢٧' : '12 Jan 2027' },
                    { label: isRTL ? 'الفئات المشمولة' : 'Covered categories', value: isRTL ? 'العقوبات، PEP، RCA' : 'Sanctions, PEP, RCA' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-slate-200 last:border-0">
                      <span className="text-slate-500">{row.label}</span>
                      <span className="text-navy-900 font-semibold">{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mt-5">
                  {isRTL
                    ? 'مؤشر توضيحي — ليست بيانات فعلية.'
                    : 'Illustrative — not actual monitoring data.'}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Compliance team control */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className={`max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            <h2 className="heading-lg text-navy-900 mb-5">
              {isRTL ? 'فريق الامتثال لديك يبقى في السيطرة' : 'Your compliance team remains in control'}
            </h2>
            <p className="body-lg text-slate-600 mb-6">
              {isRTL
                ? 'يوفر واثق معلومات التحقق من الهوية والفحص لدعم سير العمل الامتثالي. يتم تسطير التطابقات المحتملة للمراجعة؛ تبقى المؤسسة مسؤولة عن قرارات الإدراج والامتثال والعمل النهائية.'
                : 'Wathiq provides identity-verification and screening information to support compliance workflows. Potential matches are surfaced for review; the organisation remains responsible for its final onboarding, compliance and business decisions.'}
            </p>
            <p className="body-lg text-slate-600">
              {isRTL
                ? 'واثق لا يتخذ القرار النهائي بالنيابة عن فريق الامتثال. كل حالة تتطلب تقييم بشري ومراجعة.'
                : 'Wathiq does not make the final decision on behalf of your team. Every case requires human review and assessment.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Disclaimer callout */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className={`border-s-4 border-slate-300 bg-slate-50 rounded-e-2xl px-6 py-5 sm:px-8 sm:py-6 ${isRTL ? 'text-right' : ''}`}>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-3">
                {isRTL ? 'مهم' : 'Important'}
              </div>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  {isRTL
                    ? 'درجة التشابه مؤشر للتحقيق، وليست احتمالاً أو إثباتاً قانونياً. النتيجة النهائية لأي حالة يحددها فريق الامتثال لديك.'
                    : "A similarity score is an investigation indicator, not a probability or a legal determination. The final outcome of any case is decided by your compliance team."}
                </p>
                <p>
                  {isRTL
                    ? 'يغطي فحص غسل الاموال مطابقة الأسماء مقابل مصادر العقوبات والأشخاص المعرضين سياسياً (PEP) والأقارب والأشخاص ذي الصلة (RCA) التي تختارها مؤسستك.'
                    : 'AML screening covers name-matching against sanctions, PEP (Politically Exposed Persons), and RCA (their relatives and close associates) sources your organisation selects.'}
                </p>
                <p>
                  {isRTL
                    ? 'غير مشمول حالياً: فحص الإعلام السلبي أو أخبار سلبية — تواصل معنا لمناقشة احتياجاتك التنظيمية المحددة.'
                    : 'Not currently included: adverse-media screening or negative-news sources — contact us to discuss your specific regulatory requirements.'}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container-wide">
          <AnimatedSection className={`text-center ${isRTL ? 'text-right' : ''}`}>
            <h2 className="heading-lg text-navy-900 mb-4">
              {isRTL ? 'هل تحتاج فحص غسل الأموال لمؤسستك؟' : 'Need AML screening for your organisation?'}
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
              {isRTL
                ? 'تحدث مع فريقنا حول متطلبات الامتثال والمصادر التي تحتاج إلى الفحص مقابلها.'
                : "Talk to our team about your compliance requirements and the sources you need to screen against."}
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
