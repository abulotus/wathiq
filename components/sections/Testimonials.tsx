'use client';

import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import { useLanguage } from '@/contexts/LanguageContext';
import TechBackground from '@/components/ui/TechBackground';

const testimonials = [
  {
    stars: 5,
    en: {
      quote: "WATHIQ reduced our customer onboarding time from 3 days to under 4 hours while cutting fraudulent applications by 94%. The API integration was seamless — our team had it running in production within two days.",
      name: 'Ahmed Al-Rasheed',
      role: 'Chief Digital Officer',
      company: 'Gulf National Bank',
      initials: 'AR',
    },
    ar: {
      quote: "قلّص وثيق وقت إعداد العملاء من 3 أيام إلى أقل من 4 ساعات، مع تقليل الطلبات الاحتيالية بنسبة 94%. كان التكامل مع API سلساً للغاية — أطلق فريقنا الحل في الإنتاج خلال يومين.",
      name: 'أحمد الرشيد',
      role: 'مدير التحول الرقمي',
      company: 'بنك الخليج الوطني',
      initials: 'ار',
    },
    accent: 'bg-electric-500',
  },
  {
    stars: 5,
    en: {
      quote: "As a healthcare organization handling sensitive patient data, regulatory compliance is non-negotiable. WATHIQ's eIDAS and GDPR-aligned verification layer gave our board the confidence to accelerate our digital transformation roadmap.",
      name: 'Dr. Sara Al-Khoury',
      role: 'Head of Cybersecurity',
      company: 'Arabian HealthNet',
      initials: 'SK',
    },
    ar: {
      quote: "بوصفنا منظمة صحية تتعامل مع بيانات المرضى الحساسة، الامتثال التنظيمي أمر لا تنازل عنه. منحت طبقة التحقق من وثيق المتوافقة مع eIDAS وGDPR مجلس إدارتنا الثقة اللازمة لتسريع خارطة التحول الرقمي.",
      name: 'د. سارة الخوري',
      role: 'رئيسة الأمن السيبراني',
      company: 'الشبكة الصحية العربية',
      initials: 'سخ',
    },
    accent: 'bg-teal-500',
  },
  {
    stars: 5,
    en: {
      quote: "We evaluated six identity verification vendors. WATHIQ was the only one with genuine MENA regional expertise — Arabic document support, local compliance knowledge, and a team that understood the nuances of our market.",
      name: 'James Mitchell',
      role: 'CTO',
      company: 'Emirates FinTech Solutions',
      initials: 'JM',
    },
    ar: {
      quote: "قيّمنا ستة موردين للتحقق من الهوية. كان وثيق الوحيد الذي يمتلك خبرة إقليمية حقيقية في منطقة الشرق الأوسط — دعم الوثائق العربية، والمعرفة التنظيمية المحلية، وفريق يفهم دقائق سوقنا.",
      name: 'جيمس ميتشل',
      role: 'مدير التقنية',
      company: 'الإمارات للتقنية المالية',
      initials: 'جم',
    },
    accent: 'bg-indigo-500',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { isRTL } = useLanguage();

  return (
    <section className="section-pad bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-mesh opacity-30" />
      <TechBackground variant="light" />

      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-14">
          <SectionTag label={isRTL ? 'شهادات العملاء' : 'Client Stories'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'ماذا يقول شركاؤنا' : 'What Our Partners Say'}
          </h2>
          <p className="body-lg mt-4 max-w-xl mx-auto">
            {isRTL
              ? 'نتائج حقيقية من مؤسسات تثق في وثيق لتأمين تجاربها الرقمية.'
              : 'Real results from organisations that trust WATHIQ to secure their digital experiences.'}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const c = isRTL ? t.ar : t.en;
            return (
              <AnimatedItem key={i} index={i}>
                <div className={`group relative bg-white rounded-3xl p-7 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col ${isRTL ? 'text-right' : ''}`}>
                  {/* Accent top bar */}
                  <div className={`absolute top-0 inset-x-0 h-1 rounded-t-3xl ${t.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Quote mark */}
                  <div className={`text-5xl font-serif leading-none mb-3 ${t.accent.replace('bg-', 'text-')} opacity-30`}>"</div>

                  <Stars count={t.stars} />

                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6 italic">
                    "{c.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                    <div className={`w-10 h-10 rounded-full ${t.accent} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                      {c.initials}
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 text-sm">{c.name}</div>
                      <div className="text-slate-400 text-xs">{c.role}, {c.company}</div>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </div>

        {/* Summary stat row */}
        <AnimatedSection delay={0.4} className="mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { val: '94%', label: isRTL ? 'تقليل الاحتيال' : 'Fraud Reduction', color: 'text-electric-600' },
              { val: '48h', label: isRTL ? 'متوسط وقت التكامل' : 'Avg. Integration Time', color: 'text-teal-600' },
              { val: '99.9%', label: isRTL ? 'وقت التشغيل المكفول' : 'Guaranteed Uptime', color: 'text-indigo-600' },
              { val: '50+', label: isRTL ? 'مؤسسة شريكة' : 'Partner Organisations', color: 'text-purple-600' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-5 text-center shadow-sm">
                <div className={`text-2xl sm:text-3xl font-black ${s.color} mb-1`}>{s.val}</div>
                <div className="text-slate-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 72L1440 10V72H0Z" fill="#04091C" />
        </svg>
      </div>
    </section>
  );
}
