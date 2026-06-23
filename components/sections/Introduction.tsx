'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';

const iconMap = [
  <svg key="id" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0M9 14l2 2 4-4" />
  </svg>,
  <svg key="fraud" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="access" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </svg>,
  <svg key="onboard" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>,
];

const colors = [
  { bg: 'bg-electric-50', border: 'border-electric-100', icon: 'text-electric-600 bg-electric-100', via: 'via-electric-400' },
  { bg: 'bg-teal-50', border: 'border-teal-100', icon: 'text-teal-600 bg-teal-100', via: 'via-teal-400' },
  { bg: 'bg-indigo-50', border: 'border-indigo-100', icon: 'text-indigo-600 bg-indigo-100', via: 'via-indigo-400' },
  { bg: 'bg-purple-50', border: 'border-purple-100', icon: 'text-purple-600 bg-purple-100', via: 'via-purple-400' },
];

export default function Introduction() {
  const { t, isRTL } = useLanguage();
  const intro = t.intro;
  const cards = [intro.card1, intro.card2, intro.card3, intro.card4];

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 to-white" />
      <TechBackground variant="light" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <SectionTag label={intro.tag} />
          <h2 className="heading-lg text-navy-900 mt-4 mb-6">{intro.title}</h2>
          <p className="body-lg max-w-2xl mx-auto">{intro.body1}</p>
          <p className="body-lg max-w-2xl mx-auto mt-3">{intro.body2}</p>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <AnimatedItem key={i} index={i}>
              <div
                className={`group relative p-6 rounded-2xl border ${colors[i].border} ${colors[i].bg} hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col`}
              >
                {/* Icon — always block-level, never overlaps text */}
                <div className={`w-12 h-12 rounded-xl ${colors[i].icon} flex items-center justify-center mb-4 flex-shrink-0 self-start group-hover:scale-110 transition-transform duration-200`}>
                  {iconMap[i]}
                </div>

                <h3 className={`font-bold text-navy-900 mb-2 ${isRTL ? 'text-right' : ''}`}>{card.title}</h3>
                <p className={`text-sm text-slate-500 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{card.desc}</p>

                {/* Bottom accent */}
                <div className={`mt-auto pt-4`}>
                  <div className={`h-0.5 rounded-full bg-gradient-to-r from-transparent ${colors[i].via} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Trust indicators */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="grid-mesh rounded-3xl border border-slate-100 p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-navy-800 flex items-center justify-center">
                  <svg className="w-7 h-7 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-navy-900 text-base mb-1">
                  {isRTL ? 'التزامنا بالثقة الرقمية' : 'Our Commitment to Digital Trust'}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {isRTL
                    ? 'كل حل نقدمه مبني على مبادئ الأمان والخصوصية والموثوقية — لأن ثقة عملائك هي أثمن ما تملك.'
                    : 'Every solution we provide is built on principles of security, privacy, and reliability — because your customers\' trust is your most valuable asset.'}
                </p>
              </div>
              <div className="flex gap-6 flex-shrink-0">
                {[
                  { val: 'ISO', sub: isRTL ? 'متوافق' : 'Aligned' },
                  { val: 'GDPR', sub: isRTL ? 'مُراعى' : 'Aware' },
                  { val: '256-bit', sub: isRTL ? 'تشفير' : 'Encryption' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-navy-800 font-bold text-sm">{item.val}</div>
                    <div className="text-slate-400 text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Section divider — same diagonal direction, fills with About's dark background */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path d="M0 72L1440 10V72H0Z" fill="#04091C" />
        </svg>
      </div>
    </section>
  );
}
