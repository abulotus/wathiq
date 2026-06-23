'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';

const valueIcons = [
  <svg key="sec" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="inn" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="trust" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  <svg key="simple" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
];

const valueColors = ['bg-electric-500', 'bg-teal-500', 'bg-indigo-500', 'bg-gold-400'];

export default function About() {
  const { t, isRTL } = useLanguage();
  const about = t.about;

  return (
    <section className="section-pad bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-mesh opacity-20" />
      <TechBackground variant="dark" />
      <div className="absolute -end-40 top-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 65%)' }} />
      <div className="absolute -start-24 bottom-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.10) 0%, transparent 65%)' }} />

      <div className="container-wide relative z-10">
        {/*
          Two-column grid.
          In LTR: [text | values]  — text left, values right
          In RTL:  dir="rtl" on <html> fills grid right→left automatically:
                   first DOM child (text) → RIGHT column
                   second DOM child (values) → LEFT column
          No order classes needed — they'd fight the natural RTL grid flow.
        */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Text column (first in DOM = right column in RTL) ── */}
          <AnimatedSection>
            <SectionTag label={about.tag} variant="white" />
            <h2 className="heading-lg text-white mt-4 mb-6">{about.title}</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-10">{about.body}</p>

            {/* Mission & Vision cards */}
            <div className="space-y-4">
              {[about.mission, about.vision].map((item, i) => (
                <AnimatedItem key={i} index={i}>
                  {/*
                    flex items in RTL: natural RTL flex-row puts number (first) on RIGHT,
                    text (second) on LEFT — no flex-row-reverse needed.
                  */}
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-electric-500/20 border border-electric-500/30 flex items-center justify-center text-electric-400 font-bold text-sm">
                      {i === 0 ? '01' : '02'}
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Values column (second in DOM = left column in RTL) ── */}
          <AnimatedSection delay={0.2} direction="left">
            <h3 className="text-white/60 text-sm font-bold uppercase tracking-widest mb-6">
              {about.values.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.values.items.map((value, i) => (
                <AnimatedItem key={i} index={i + 2}>
                  <div className="group relative p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    {/* Accent bar at inline-start (logical property — right in RTL, left in LTR) */}
                    <div className={`absolute top-0 bottom-0 w-1 ${valueColors[i]} rounded-full opacity-70 start-0`} />

                    {/* Icon + title — natural RTL flex puts icon (first) on RIGHT side */}
                    <div className="flex items-center gap-3 mb-3 ps-3">
                      <div className={`w-8 h-8 rounded-lg ${valueColors[i]} bg-opacity-20 flex items-center justify-center text-white flex-shrink-0`}>
                        {valueIcons[i]}
                      </div>
                      <h4 className="text-white font-semibold text-sm">{value.title}</h4>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed ps-3">{value.desc}</p>
                  </div>
                </AnimatedItem>
              ))}
            </div>

            {/* UK address card */}
            <AnimatedSection delay={0.5}>
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-electric-600/20 to-teal-600/10 border border-electric-500/20">
                {/* Natural RTL flex: icon (first) on RIGHT, text (second) on LEFT */}
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-electric-500 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                          d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8z" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 end-[-4px] w-4 h-4 bg-teal-400 rounded-full border-2 border-navy-950" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-1">
                      {isRTL ? 'مسجل في المملكة المتحدة' : 'UK Registered Company'}
                    </div>
                    <div className="text-slate-300 text-xs leading-relaxed">
                      71-75 Shelton Street{isRTL ? '،' : ','} London{isRTL ? '،' : ','} WC2H 9JQ
                    </div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      {isRTL ? 'المملكة المتحدة' : 'United Kingdom'}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>

      {/* Section divider — fills with WhyChooseUs's slate-50 background */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path d="M0 72L1440 10V72H0Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
