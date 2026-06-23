'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import TechBackground from '@/components/ui/TechBackground';

const industryIconMap: Record<string, React.ReactNode> = {
  finance: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ecommerce: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  telecom: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  health: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  gov: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  enterprise: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

const industryColors = [
  { bg: 'bg-electric-600', light: 'bg-electric-50', border: 'border-electric-100', text: 'text-electric-600' },
  { bg: 'bg-teal-600', light: 'bg-teal-50', border: 'border-teal-100', text: 'text-teal-600' },
  { bg: 'bg-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-600' },
  { bg: 'bg-rose-600', light: 'bg-rose-50', border: 'border-rose-100', text: 'text-rose-600' },
  { bg: 'bg-amber-600', light: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-600' },
  { bg: 'bg-purple-600', light: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-600' },
];

export default function IndustriesPage() {
  const { t, isRTL } = useLanguage();
  const ind = t.industries;

  return (
    <>
      <PageHero tag={ind.hero.tag} title={ind.hero.title} subtitle={ind.hero.subtitle} />

      <section className="section-pad bg-white relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ind.items.map((item, i) => {
              const color = industryColors[i % industryColors.length];
              return (
                <AnimatedItem key={i} index={i}>
                  <div
                    className={`group relative bg-white rounded-3xl border border-slate-100 p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full flex flex-col ${isRTL ? 'text-right' : ''}`}
                  >
                    {/* Top accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 ${color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${color.light} ${color.text} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200`}>
                      {industryIconMap[item.icon]}
                    </div>

                    <h3 className="text-navy-900 font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.desc}</p>

                    {/* Examples */}
                    <div className={`flex-1 space-y-2 mb-6 ${isRTL ? 'text-right' : ''}`}>
                      {item.examples.map((ex, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className={`w-1.5 h-1.5 rounded-full ${color.bg} flex-shrink-0`} />
                          {ex}
                        </div>
                      ))}
                    </div>

                  </div>
                </AnimatedItem>
              );
            })}
          </div>

          {/* Stats banner */}
          <AnimatedSection delay={0.4} className="mt-20">
            <div className="relative bg-navy-900 rounded-3xl overflow-hidden px-5 py-8 sm:px-8 sm:py-12">
              <div className="absolute inset-0 hero-pattern" />
              <div className="absolute -end-10 -top-10 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 65%)' }} />

              <div className={`relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-8 ${isRTL ? 'text-right' : 'text-center'}`}>
                {[
                  { val: '6+', label: isRTL ? 'قطاع خدمي' : 'Industries Served' },
                  { val: '50+', label: isRTL ? 'شريك مؤسسي' : 'Enterprise Partners' },
                  { val: '100%', label: isRTL ? 'تركيز على المنطقة' : 'Regional Focus' },
                  { val: '24/7', label: isRTL ? 'دعم متواصل' : 'Expert Support' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.val}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
