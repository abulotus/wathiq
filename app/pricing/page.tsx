'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import TechBackground from '@/components/ui/TechBackground';

const pricing = {
  en: {
    tag: 'Pricing',
    title: 'Simple, Transparent Pricing',
    subtitle: 'Scale as you grow. No hidden fees.',
    plans: [
      {
        name: 'Startup',
        description: 'For organizations just beginning their digital trust journey',
        price: 'Custom',
        features: [
          'Up to 10,000 verifications/month',
          'Identity verification',
          'Basic fraud detection',
          'Email support',
          'API documentation',
          'Single integration',
        ],
        cta: 'Get Started',
        highlight: false,
      },
      {
        name: 'Growth',
        description: 'For scaling businesses with increasing verification needs',
        price: 'Custom',
        features: [
          'Up to 100,000 verifications/month',
          'All Startup features',
          'Advanced fraud detection',
          'Business verification',
          'Priority email support',
          'Multiple integrations',
          'Custom workflows',
          'Analytics dashboard',
        ],
        cta: 'Book Demo',
        highlight: true,
      },
      {
        name: 'Enterprise',
        description: 'For large organizations with custom requirements',
        price: 'Custom',
        features: [
          'Unlimited verifications',
          'All Growth features',
          'Dedicated account manager',
          'Phone & email support',
          'Custom SLA',
          'White-label options',
          'Advanced compliance',
          'On-premise deployment',
          'API rate limits negotiable',
        ],
        cta: 'Contact Sales',
        highlight: false,
      },
    ],
    faq: [
      {
        q: 'Can I change plans later?',
        a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.',
      },
      {
        q: 'Do you offer discounts for annual commitments?',
        a: 'Yes, we offer 20% discount for annual prepayment on Growth and Enterprise plans.',
      },
      {
        q: 'What about setup fees?',
        a: 'There are no setup fees. You only pay for the plan you choose and the verifications you use.',
      },
      {
        q: 'Is support included?',
        a: 'Yes, all plans include support. Email support is included in all plans. Growth and Enterprise include priority support.',
      },
    ],
  },
  ar: {
    tag: 'التسعير',
    title: 'تسعير بسيط وشفاف',
    subtitle: 'نمِّ عملك معنا. لا توجد رسوم مخفية.',
    plans: [
      {
        name: 'الناشئة',
        description: 'للمنظمات التي تبدأ رحلتها نحو الثقة الرقمية',
        price: 'حسب الطلب',
        features: [
          'حتى 10,000 تحقق/شهر',
          'التحقق من الهوية',
          'كشف احتيال أساسي',
          'دعم بالبريد الإلكتروني',
          'توثيق API',
          'تكامل واحد',
        ],
        cta: 'ابدأ الآن',
        highlight: false,
      },
      {
        name: 'النمو',
        description: 'للشركات المتنامية مع احتياجات تحقق متزايدة',
        price: 'حسب الطلب',
        features: [
          'حتى 100,000 تحقق/شهر',
          'جميع ميزات الناشئة',
          'كشف احتيال متقدم',
          'التحقق من الأعمال',
          'دعم أولويات بالبريد الإلكتروني',
          'تكاملات متعددة',
          'سير عمل مخصص',
          'لوحة تحليلات',
        ],
        cta: 'احجز عرضاً',
        highlight: true,
      },
      {
        name: 'المؤسسات',
        description: 'للمنظمات الكبيرة ذات المتطلبات المخصصة',
        price: 'حسب الطلب',
        features: [
          'تحققات غير محدودة',
          'جميع ميزات النمو',
          'مدير حساب مخصص',
          'دعم هاتفي وبريد إلكتروني',
          'اتفاقية مستوى الخدمة مخصصة',
          'خيارات العلامات البيضاء',
          'امتثال متقدم',
          'نشر محلي',
          'حدود معدل API قابلة للتفاوض',
        ],
        cta: 'اتصل بالمبيعات',
        highlight: false,
      },
    ],
    faq: [
      {
        q: 'هل يمكنني تغيير الخطة لاحقاً؟',
        a: 'نعم، يمكنك ترقية أو خفض خطتك في أي وقت. تسري التغييرات في دورة الفواتير التالية.',
      },
      {
        q: 'هل تقدمون خصومات للالتزام السنوي؟',
        a: 'نعم، نقدم خصم 20% للدفع السنوي المقدم على خطط النمو والمؤسسات.',
      },
      {
        q: 'ماذا عن رسوم الإعداد؟',
        a: 'لا توجد رسوم إعداد. تدفع فقط مقابل الخطة التي تختارها والتحققات التي تستخدمها.',
      },
      {
        q: 'هل الدعم مشمول؟',
        a: 'نعم، جميع الخطط تشمل الدعم. دعم البريد الإلكتروني مشمول في جميع الخطط. تشمل خطط النمو والمؤسسات دعماً أولويات.',
      },
    ],
  },
};

export default function PricingPage() {
  const { isRTL } = useLanguage();
  const p = isRTL ? pricing.ar : pricing.en;

  return (
    <>
      <PageHero tag={p.tag} title={p.title} subtitle={p.subtitle} />

      {/* Pricing Cards */}
      <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {p.plans.map((plan, i) => (
              <AnimatedItem key={i} index={i}>
                <div
                  className={`rounded-3xl p-8 sm:p-10 h-full transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-gradient-to-br from-electric-50 to-teal-50 border-2 border-electric-500 ring-2 ring-electric-500/20 lg:scale-105 shadow-xl'
                      : 'bg-white border border-slate-100 shadow-card hover:shadow-card-hover'
                  }`}
                >
                  {plan.highlight && (
                    <div className="inline-block bg-electric-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {isRTL ? 'الأكثر شيوعاً' : 'Most Popular'}
                    </div>
                  )}

                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-navy-900' : 'text-navy-900'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 h-10">{plan.description}</p>

                  <div className={`mb-8 ${isRTL ? 'text-right' : ''}`}>
                    <div className="text-4xl font-black text-electric-600">{plan.price}</div>
                    <p className="text-slate-500 text-sm">{isRTL ? 'اتصل بنا للحصول على عرض مخصص' : 'Contact us for custom quote'}</p>
                  </div>

                  <a
                    href="/contact"
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 text-center block mb-8 ${
                      plan.highlight
                        ? 'bg-electric-600 text-white hover:bg-electric-700'
                        : 'bg-slate-100 text-navy-900 hover:bg-slate-200'
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                      {isRTL ? 'المميزات' : 'Features'}
                    </div>
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                          </svg>
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 bg-slate-50 relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className={`text-center mb-14 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="heading-md text-navy-900">
              {isRTL ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {p.faq.map((item, i) => (
                <AnimatedItem key={i} index={i}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                    <h3 className={`font-bold text-navy-900 mb-3 text-lg ${isRTL ? 'text-right' : ''}`}>
                      {item.q}
                    </h3>
                    <p className={`text-slate-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                      {item.a}
                    </p>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
