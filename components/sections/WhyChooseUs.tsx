'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Link from 'next/link';
import TechBackground from '@/components/ui/TechBackground';

const icons = [
  <svg key="local" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="tech" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
      d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
  </svg>,
  <svg key="partner" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="scale" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
];

const gradients = [
  'from-electric-500 to-electric-600',
  'from-teal-500 to-teal-600',
  'from-indigo-500 to-indigo-600',
  'from-purple-500 to-purple-600',
];

export default function WhyChooseUs() {
  const { t, isRTL } = useLanguage();
  const why = t.why;

  return (
    <section className="section-pad bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-mesh opacity-40" />
      <TechBackground variant="light" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <AnimatedSection className={`max-w-2xl ${isRTL ? 'text-right' : ''} mb-12`}>
          <SectionTag label={why.tag} />
          <h2 className="heading-lg text-navy-900 mt-4">{why.title}</h2>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {why.items.map((item, i) => (
            <AnimatedItem key={i} index={i}>
              <div
                className={`group relative bg-white rounded-2xl border border-slate-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden ${isRTL ? 'text-right' : ''}`}
              >
                {/* Top gradient bar — expands on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[i]} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                {/* Glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[i]} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                  {icons[i]}
                </div>

                {/*
                  Number watermark: use end-4 (logical property = inset-inline-end).
                  LTR: end-4 → right corner (icon is on left) — no overlap.
                  RTL: end-4 → left corner (icon is on right) — no overlap.
                */}
                <div className="text-slate-200 font-black text-5xl absolute top-4 end-4 select-none group-hover:text-slate-100 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3 className="font-bold text-navy-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* CTA Banner */}
        <AnimatedSection delay={0.3}>
          <div className="relative rounded-3xl bg-navy-900 overflow-hidden px-5 py-8 sm:px-12 sm:py-14">
            <div className="absolute inset-0 hero-pattern" />
            <div className="absolute -top-16 -end-16 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%)' }} />
            <div className="absolute bottom-0 start-0 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.14) 0%, transparent 65%)' }} />

            {/*
              CTA row — no flex-row-reverse in RTL.
              With dir="rtl" on <html>, lg:flex-row already flows right→left:
                text div (first in DOM) → RIGHT side
                buttons div (second in DOM) → LEFT side
              Adding flex-row-reverse would cancel this and produce LTR order again.
            */}
            <div className={`relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 ${isRTL ? 'text-right' : ''}`}>
              <div>
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                  {isRTL ? 'هل أنت مستعد لبدء رحلتك الرقمية؟' : 'Ready to Start Your Digital Trust Journey?'}
                </h3>
                <p className="text-slate-300 text-base">
                  {isRTL
                    ? 'تحدث مع فريقنا حول احتياجات مؤسستك اليوم.'
                    : 'Talk to our team about your organization\'s needs today.'}
                </p>
              </div>
              {/* Buttons — no flex-row-reverse; natural RTL flex handles order */}
              <div className="flex flex-wrap gap-4 flex-shrink-0">
                <Link href="/contact" className="btn-primary px-8 py-3.5 shadow-glow">
                  {isRTL ? 'ابدأ المحادثة' : 'Start the Conversation'}
                </Link>
                <Link href="/solutions" className="btn-outline-white px-8 py-3.5">
                  {isRTL ? 'استكشف الحلول' : 'Explore Solutions'}
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
