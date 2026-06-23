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

const solutionIcons = {
  identity: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
    </svg>
  ),
  fraud: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
    </svg>
  ),
  business: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

export default function SolutionsPage() {
  const { t, isRTL } = useLanguage();
  const sol = t.solutions;

  const solutions = [
    { id: 'identity', data: sol.identity, icon: solutionIcons.identity, gradient: 'from-blue-600 to-blue-900' },
    { id: 'fraud',    data: sol.fraud,    icon: solutionIcons.fraud,    gradient: 'from-emerald-500 to-emerald-800' },
    { id: 'business', data: sol.business, icon: solutionIcons.business, gradient: 'from-purple-600 to-purple-900' },
  ];

  return (
    <>
      <PageHero tag={sol.hero.tag} title={sol.hero.title} subtitle={sol.hero.subtitle} />

      <div className="bg-white">
        {solutions.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section key={item.id} id={item.id} className={`section-pad ${isEven ? 'bg-white' : 'bg-slate-50'}`}>
              <div className="container-wide">
                {/*
                  Two-column grid — alternates visually in LTR using grid-flow-col-dense.
                  In RTL, dir="rtl" on <html> automatically reverses the column order, so:
                    odd sections: content RIGHT, visual LEFT  (same natural RTL order as DOM)
                    even sections: visual RIGHT, content LEFT (reversed by col-dense)
                  No lg:flex-row-reverse needed (and it wouldn't work on a grid anyway).
                */}
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <AnimatedSection className={`${!isEven ? 'lg:col-start-1' : ''} ${isRTL ? 'text-right' : ''}`}>
                    <SectionTag label={item.data.tag} variant="blue" />
                    <h2 className="heading-lg text-navy-900 mt-4 mb-5">{item.data.title}</h2>
                    <p className="body-lg mb-8">{item.data.body}</p>

                    {/* Feature bullets
                        No flex-row-reverse: with dir="rtl", CheckIcon (first child) goes RIGHT,
                        text (second child) goes LEFT → bullet appears before text in RTL ✓
                    */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {item.data.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckIcon />
                          <span className="text-slate-700 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact" className="btn-primary">
                      {isRTL ? 'اطلب استشارة' : 'Request a Consultation'}
                      <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </AnimatedSection>

                  {/* Visual */}
                  <AnimatedSection delay={0.2} direction={!isEven ? 'left' : 'right'} className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative">
                      <div className={`rounded-3xl bg-gradient-to-br ${item.gradient} p-5 sm:p-8 shadow-2xl`}>
                        <div className="text-white mb-4">{item.icon}</div>
                        <h3 className="text-white text-xl font-bold mb-2">{item.data.title}</h3>
                        <p className="text-white/90 text-sm mb-6 leading-relaxed">{item.data.body.slice(0, 100)}...</p>
                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-2">
                          {item.data.features.slice(0, 3).map((f, i) => (
                            <span key={i} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">{f}</span>
                          ))}
                        </div>
                      </div>

                      {/* Stat card — hidden on mobile to avoid horizontal overflow */}
                      <div className="hidden sm:block absolute -bottom-5 end-[-20px] bg-white rounded-2xl shadow-card-hover p-4 border border-slate-100">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                          <div>
                            <div className="text-navy-900 font-bold text-sm">{isRTL ? 'جاهز للاستخدام' : 'Enterprise Ready'}</div>
                            <div className="text-slate-400 text-xs">{isRTL ? 'حلول قابلة للتوسع' : 'Scalable solutions'}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>
          );
        })}

        {/* Diagonal transition: white → navy-900 */}
        <div className="relative h-[72px] bg-white overflow-hidden">
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 72L1440 10V72H0Z" fill="#071130" />
          </svg>
        </div>

        {/* Bottom CTA */}
        <section className="py-20 bg-navy-900">
          <div className="container-wide">
            <AnimatedSection className="text-center">
              <h2 className="heading-lg text-white mb-4">
                {isRTL ? 'لا تجد ما تبحث عنه؟' : 'Not sure which solution fits?'}
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                {isRTL
                  ? 'تحدث مع فريقنا وسنساعدك في تحديد الحل الأنسب لاحتياجاتك.'
                  : "Talk to our team and we'll help identify the right approach for your organization."}
              </p>
              <Link href="/contact" className="btn-primary shadow-glow px-8 py-3.5 text-base">
                {isRTL ? 'تحدث مع خبير' : 'Talk to an Expert'}
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
