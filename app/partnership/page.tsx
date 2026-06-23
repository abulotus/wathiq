'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Link from 'next/link';
import TechBackground from '@/components/ui/TechBackground';

const partnerIcons = [
  <svg key="tech" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg key="resell" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="impl" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="strat" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>,
];

const partnerColors = [
  'from-electric-500 to-electric-700',
  'from-teal-500 to-teal-700',
  'from-indigo-500 to-purple-600',
  'from-navy-700 to-navy-900',
];

export default function PartnershipPage() {
  const { t, isRTL } = useLanguage();
  const part = t.partnership;

  return (
    <>
      <PageHero tag={part.hero.tag} title={part.hero.title} subtitle={part.hero.subtitle} />

      {/* Partner types */}
      <section className="section-pad bg-white relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className={`text-center max-w-2xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
            <SectionTag label={isRTL ? 'أنواع الشراكة' : 'Partnership Types'} />
            <h2 className="heading-lg text-navy-900 mt-4">
              {isRTL ? 'شراكة مصممة لأهدافك' : 'Partnership Designed for Your Goals'}
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {part.types.map((type, i) => (
              <AnimatedItem key={i} index={i}>
                <div className={`group relative bg-white rounded-3xl border border-slate-100 p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden ${isRTL ? 'text-right' : ''}`}>
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${partnerColors[i]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative z-10 flex gap-5">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${partnerColors[i]} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      {partnerIcons[i]}
                    </div>
                    <div>
                      <h3 className="text-navy-900 font-bold text-xl mb-2">{type.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{type.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="section-pad bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className={isRTL ? 'text-right' : ''}>
              <SectionTag label={isRTL ? 'لماذا الشراكة معنا' : 'Why Partner With Us'} />
              <h2 className="heading-lg text-navy-900 mt-4 mb-6">
                {isRTL ? 'نمو مشترك، قيمة حقيقية' : 'Shared Growth, Real Value'}
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: isRTL ? 'وصول للسوق الإقليمي' : 'Regional Market Access',
                    desc: isRTL ? 'استفد من معرفتنا العميقة بالسوق السوري والشرق أوسطي.' : 'Leverage our deep knowledge of the Syrian and Middle Eastern market.',
                  },
                  {
                    title: isRTL ? 'دعم تقني كامل' : 'Full Technical Support',
                    desc: isRTL ? 'فريق مخصص لمساعدتك في التكامل والنشر والدعم المستمر.' : 'Dedicated team to help with integration, deployment, and ongoing support.',
                  },
                  {
                    title: isRTL ? 'نموذج مرن' : 'Flexible Partnership Model',
                    desc: isRTL ? 'نموذج شراكة مصمم وفق أهدافك ومتطلبات أعمالك الفريدة.' : 'Partnership model designed around your unique business goals and requirements.',
                  },
                  {
                    title: isRTL ? 'نمو مشترك' : 'Mutual Growth',
                    desc: isRTL ? 'نجاحك هو نجاحنا. نستثمر في نجاح شركائنا على المدى البعيد.' : 'Your success is our success. We invest in the long-term success of our partners.',
                  },
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-50 border border-electric-200 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 text-sm">{benefit.title}</h4>
                      <p className="text-slate-500 text-sm mt-0.5">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA card */}
            <AnimatedSection delay={0.2} direction="left">
              <div className="relative bg-navy-900 rounded-3xl overflow-hidden p-5 sm:p-10">
                <div className="absolute inset-0 hero-pattern" />
                <div className="absolute -end-10 -top-10 w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.20) 0%, transparent 65%)' }} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-electric-500 flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>

                  <h3 className="text-white text-2xl font-bold mb-3">{part.cta}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8">{part.ctaSubtext}</p>

                  <Link href="/contact" className="btn-primary w-full justify-center py-3.5 text-base shadow-glow">
                    {part.cta}
                    <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <div className="flex items-center gap-2 mt-6">
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-slate-400 text-xs">
                      {isRTL ? 'فريقنا جاهز للتواصل' : 'Our team is ready to connect'}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
