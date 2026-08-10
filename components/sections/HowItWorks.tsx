import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import { Language } from '@/lib/translations';

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: 'from-electric-500 to-electric-600',
    glow: 'shadow-[0_0_30px_rgba(37,99,235,0.35)]',
    en: {
      title: 'Integrate',
      desc: 'Connect your system or platform to Wathiq through our API, and receive verification results and status updates through webhook notifications.',
      detail: 'API · Webhooks',
    },
    ar: {
      title: 'التكامل',
      desc: 'اربط نظامك أو منصتك بواثق عبر واجهة برمجة التطبيقات (API)، وتلقَّ نتائج التحقق وتحديثات الحالة من خلال إشعارات Webhook.',
      detail: 'API · إشعارات Webhook',
    },
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    gradient: 'from-teal-500 to-teal-600',
    glow: 'shadow-[0_0_30px_rgba(20,184,166,0.35)]',
    en: {
      title: 'Verify',
      desc: "The user completes the verification journey for an ePassport or personal ID card through Wathiq's Arabic-first mobile app or browser experience.",
      detail: 'Mobile app · Web browser',
    },
    ar: {
      title: 'التحقق',
      desc: 'يُكمل المستخدم عملية التحقق من بطاقة الهوية الوطنية أو جواز السفر الإلكتروني عبر تطبيق واثق للجوال أو المتصفح، من خلال واجهة عربية واضحة وسلسة.',
      detail: 'تطبيق الجوال · المتصفح',
    },
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" />
      </svg>
    ),
    gradient: 'from-indigo-500 to-purple-600',
    glow: 'shadow-[0_0_30px_rgba(99,102,241,0.35)]',
    en: {
      title: 'Manage',
      desc: 'Verification results appear directly in the dashboard, with notifications delivered through webhooks.',
      detail: 'Client dashboard · Webhook status',
    },
    ar: {
      title: 'الإدارة',
      desc: 'تظهر نتائج التحقق مباشرة في لوحة التحكم، وتتلقى أنظمتك تحديثات الحالة عبر إشعارات Webhook.',
      detail: 'لوحة تحكم العملاء · حالة إشعارات Webhook',
    },
  },
];

export default function HowItWorks({ locale }: { locale: Language }) {
  const isRTL = locale === 'ar';

  return (
    <section id="how-it-works" className="pt-8 sm:pt-10 lg:pt-14 pb-14 sm:pb-20 lg:pb-28 bg-white scroll-mt-20">
      <div className="container-wide">
        <AnimatedSection className={`max-w-2xl mx-auto text-center mb-16 sm:mb-20`}>
          <SectionTag label={isRTL ? 'كيف يعمل واثق' : 'How It Works'} variant="blue" />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'إتمام التحقق في ثلاث خطوات' : 'Three Steps to Verification'}
          </h2>
          <p className="body-lg text-slate-500 mt-4 max-w-xl mx-auto">
            {isRTL
              ? 'من ربط نظامك إلى ظهور النتيجة في لوحة التحكم.'
              : 'From integration to a result in your client dashboard.'}
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-16 start-[16.666%] end-[16.666%] h-px border-t border-dashed border-slate-300 z-0" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const content = isRTL ? step.ar : step.en;
              return (
                <AnimatedItem key={i} index={i}>
                  <div className="relative flex flex-col items-center text-center lg:items-center lg:text-center group">
                    {/* Number + Icon bubble */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white ${step.glow} group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                      <div className="absolute -top-3 -end-3 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                        <span className="text-[10px] font-black text-slate-500">{step.number}</span>
                      </div>
                    </div>

                    <h3 className="text-navy-900 text-xl font-bold mb-3">{content.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs mx-auto">{content.desc}</p>

                    {/* Detail pill */}
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {content.detail.split(' · ').map((d, j) => (
                        <span key={j} className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <AnimatedSection delay={0.4} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-slate-600 text-sm">
              {isRTL
                ? 'إدارة عبر لوحة تحكم عربية، أو تكامل كامل عبر API وإشعارات Webhook.'
                : 'An Arabic-interface dashboard, or full connectivity through API and webhook'}
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
