'use client';

import type { Metadata } from 'next';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';

const caseStudies = {
  en: [
    {
      id: 1,
      title: 'Financial Services: Fraud Reduction at Scale',
      company: 'Regional Bank in GCC',
      industry: 'Banking',
      challenge: 'A major bank was losing $2.3M annually to identity fraud and account takeovers. Manual verification took 3-5 days.',
      solution: 'Implemented Wathiq\'s AI-powered identity verification and real-time fraud detection.',
      results: [
        '94% reduction in fraud incidents',
        'Verification time reduced from 3-5 days to <5 minutes',
        'Customer satisfaction improved by 38%',
        'Cost savings of $1.8M in year one',
      ],
      metrics: {
        fraud_reduced: '94%',
        speed_gain: '50x',
        satisfaction: '+38%',
      },
    },
    {
      id: 2,
      title: 'E-Commerce: Seller Trust Network',
      company: 'Middle East Marketplace',
      industry: 'E-Commerce',
      challenge: 'Platform had 15% fraudulent seller accounts. Buyer confidence was declining.',
      solution: 'Built seller verification and business identity system using Wathiq\'s solutions.',
      results: [
        'Fraudulent seller accounts reduced from 15% to 1.2%',
        'Buyer retention increased by 42%',
        'GMV growth accelerated by 31%',
        'Support tickets decreased by 52%',
      ],
      metrics: {
        fraud_reduced: '92%',
        retention_gain: '+42%',
        gmv_growth: '+31%',
      },
    },
    {
      id: 3,
      title: 'Government Services: Digital Transformation',
      company: 'National Government Agency',
      industry: 'Government',
      challenge: 'Citizens faced long queues for identity verification. Digital services were underutilized.',
      solution: 'Deployed Wathiq\'s digital identity platform for government services.',
      results: [
        '120K citizens onboarded in 6 months',
        '89% reduction in office visits',
        'Service delivery time: 2 days to 5 minutes',
        'Cost per transaction reduced by 85%',
      ],
      metrics: {
        citizens: '120K',
        office_visits: '-89%',
        cost_reduction: '-85%',
      },
    },
  ],
  ar: [
    {
      id: 1,
      title: 'الخدمات المالية: تقليل الاحتيال بكفاءة',
      company: 'بنك إقليمي في مجلس التعاون',
      industry: 'الخدمات المالية',
      challenge: 'كان البنك يخسر 2.3 مليون دولار سنوياً بسبب احتيال الهوية واستيلاء الحسابات. التحقق اليدوي استغرق 3-5 أيام.',
      solution: 'تم تنفيذ التحقق من الهوية المدعوم بالذكاء الاصطناعي والكشف عن الاحتيال في الوقت الفعلي.',
      results: [
        'انخفاض حوادث الاحتيال بنسبة 94%',
        'تقليل وقت التحقق من 3-5 أيام إلى أقل من 5 دقائق',
        'تحسن رضا العملاء بنسبة 38%',
        'توفير تكاليف 1.8 مليون دولار في السنة الأولى',
      ],
      metrics: {
        fraud_reduced: '94%',
        speed_gain: '50x',
        satisfaction: '+38%',
      },
    },
    {
      id: 2,
      title: 'التجارة الإلكترونية: شبكة ثقة البائعين',
      company: 'منصة تجارة إلكترونية بالشرق الأوسط',
      industry: 'التجارة الإلكترونية',
      challenge: 'كانت المنصة تعاني من 15% حسابات بائعين احتيالية. ثقة المشترين كانت تتراجع.',
      solution: 'بناء نظام التحقق من البائعين والهوية التجارية باستخدام حلول وثيق.',
      results: [
        'انخفاض حسابات البائعين الاحتيالية من 15% إلى 1.2%',
        'زيادة احتفاظ المشترين بنسبة 42%',
        'تسارع نمو الإيرادات الإجمالية بنسبة 31%',
        'انخفاض تذاكر الدعم بنسبة 52%',
      ],
      metrics: {
        fraud_reduced: '92%',
        retention_gain: '+42%',
        gmv_growth: '+31%',
      },
    },
    {
      id: 3,
      title: 'الخدمات الحكومية: التحول الرقمي',
      company: 'جهة حكومية وطنية',
      industry: 'الحكومة',
      challenge: 'واجه المواطنون طوابير طويلة للتحقق من الهوية. كانت الخدمات الرقمية قليلة الاستخدام.',
      solution: 'نشر منصة الهوية الرقمية لخدمات الحكومة.',
      results: [
        'تسجيل 120 ألف مواطن في 6 أشهر',
        'تقليل زيارات المكاتب بنسبة 89%',
        'سرعة تقديم الخدمة: من يومين إلى 5 دقائق',
        'تقليل تكلفة المعاملة بنسبة 85%',
      ],
      metrics: {
        citizens: '120K',
        office_visits: '-89%',
        cost_reduction: '-85%',
      },
    },
  ],
};

export default function CaseStudiesPage() {
  const { isRTL } = useLanguage();
  const studies = isRTL ? caseStudies.ar : caseStudies.en;

  return (
    <>
      <PageHero
        tag={isRTL ? 'دراسات الحالات' : 'Case Studies'}
        title={isRTL ? 'نتائج ملموسة' : 'Proven Results'}
        subtitle={isRTL ? 'اكتشف كيف أحدثت حلول وثيق فرقاً حقيقياً لعملائنا.' : 'Discover how Wathiq\'s solutions have made real impact for our clients.'}
      />

      <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <div className="space-y-12 lg:space-y-16">
            {studies.map((study, i) => (
              <AnimatedItem key={study.id} index={i}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Stats Card */}
                  <div className={`${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-3xl border border-electric-100 p-8 sm:p-10">
                      <div className={`mb-6 ${isRTL ? 'text-right' : ''}`}>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          {study.industry}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
                          {study.title}
                        </h3>
                        <p className="text-slate-600 font-medium">{study.company}</p>
                      </div>

                      <div className={`mb-8 ${isRTL ? 'text-right' : ''}`}>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                          {isRTL ? 'التحديات' : 'Challenge'}
                        </div>
                        <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div className={isRTL ? 'text-right' : ''}>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                          {isRTL ? 'الحل' : 'Solution'}
                        </div>
                        <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className={`${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className={isRTL ? 'text-right' : ''}>
                      <h4 className="text-xl font-bold text-navy-900 mb-6">
                        {isRTL ? 'النتائج' : 'Results'}
                      </h4>

                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {Object.entries(study.metrics).map(([key, value]) => {
                          const metricLabels: { [key: string]: { en: string; ar: string } } = {
                            fraud_reduced: { en: 'Fraud Reduced', ar: 'انخفاض الاحتيال' },
                            speed_gain: { en: 'Speed Gain', ar: 'تسريع العملية' },
                            satisfaction: { en: 'Satisfaction', ar: 'الرضا' },
                            retention_gain: { en: 'Retention Gain', ar: 'زيادة الاحتفاظ' },
                            gmv_growth: { en: 'GMV Growth', ar: 'نمو الإيرادات' },
                            citizens: { en: 'Citizens', ar: 'المواطنون' },
                            office_visits: { en: 'Office Visits', ar: 'زيارات المكاتب' },
                            cost_reduction: { en: 'Cost Reduction', ar: 'توفير التكاليف' },
                          };
                          const label = metricLabels[key] || { en: key.replace(/_/g, ' '), ar: key.replace(/_/g, ' ') };
                          return (
                            <div key={key} className="text-center lg:text-left">
                              <div className="text-3xl font-black text-electric-600 mb-1">{value}</div>
                              <div className="text-xs text-slate-600">{isRTL ? label.ar : label.en}</div>
                            </div>
                          );
                        })}
                      </div>

                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                            <span className="text-slate-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <h2 className="heading-md text-white mb-6 max-w-2xl mx-auto">
              {isRTL ? 'هل أنت جاهز لتحقيق نتائج مشابهة؟' : 'Ready to Achieve Similar Results?'}
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              {isRTL ? 'دعنا نساعدك في تحويل عملك رقمياً.' : 'Let us help you transform your business digitally.'}
            </p>
            <a href="/contact" className="btn-primary px-8 py-3 justify-center inline-flex">
              {isRTL ? 'ابدأ محادثة' : 'Start a Conversation'}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
