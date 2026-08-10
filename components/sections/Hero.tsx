'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import TechBackground from '@/components/ui/TechBackground';
import PassportVerifyIllustration from '@/components/ui/PassportVerifyIllustration';


const NetworkSVG = memo(function NetworkSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <circle cx="400" cy="300" r="5" fill="#60A5FA" opacity="0.9" />
      <circle cx="200" cy="150" r="3.5" fill="#60A5FA" opacity="0.7" />
      <circle cx="600" cy="150" r="3.5" fill="#60A5FA" opacity="0.7" />
      <circle cx="150" cy="350" r="2.5" fill="#2DD4BF" opacity="0.6" />
      <circle cx="650" cy="350" r="2.5" fill="#2DD4BF" opacity="0.6" />
      <circle cx="300" cy="480" r="3" fill="#60A5FA" opacity="0.5" />
      <circle cx="500" cy="480" r="3" fill="#60A5FA" opacity="0.5" />
      <line x1="400" y1="300" x2="200" y2="150" stroke="#3B82F6" strokeWidth="1" opacity="0.3" strokeDasharray="5 5" />
      <line x1="400" y1="300" x2="600" y2="150" stroke="#3B82F6" strokeWidth="1" opacity="0.3" strokeDasharray="5 5" />
      <line x1="400" y1="300" x2="150" y2="350" stroke="#2DD4BF" strokeWidth="1" opacity="0.25" strokeDasharray="5 5" />
      <line x1="400" y1="300" x2="650" y2="350" stroke="#2DD4BF" strokeWidth="1" opacity="0.25" strokeDasharray="5 5" />
      <line x1="400" y1="300" x2="300" y2="480" stroke="#3B82F6" strokeWidth="1" opacity="0.2" strokeDasharray="5 5" />
      <line x1="400" y1="300" x2="500" y2="480" stroke="#3B82F6" strokeWidth="1" opacity="0.2" strokeDasharray="5 5" />
      <circle cx="400" cy="300" r="28" stroke="#3B82F6" strokeWidth="0.8" opacity="0.25" fill="none" />
      <circle cx="400" cy="300" r="60" stroke="#3B82F6" strokeWidth="0.5" opacity="0.15" fill="none" />
    </svg>
  );
});

export default function Hero() {
  const { t, isRTL, href } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute inset-0 grid-mesh opacity-40" />
      {/* Aurora gradient blobs */}
      <div className="absolute w-[700px] h-[700px] rounded-full -top-40 -start-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)', animation: 'aurora-1 22s ease-in-out infinite', willChange: 'transform' }} />
      <div className="absolute w-[600px] h-[600px] rounded-full top-1/3 -end-32 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)', animation: 'aurora-2 28s ease-in-out infinite', willChange: 'transform' }} />
      <div className="absolute w-[450px] h-[450px] rounded-full -bottom-20 start-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', animation: 'aurora-3 19s ease-in-out infinite', willChange: 'transform' }} />
      <NetworkSVG />
      <TechBackground variant="light" />

      <div className="container-wide relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32">
        {/*
          Two-column grid.
          In LTR: [text col] [illustration col]
          In RTL:  browser automatically fills grid right→left, so:
                   [text col on RIGHT] [illustration col on LEFT]
          No order classes needed — dir="rtl" on <html> handles this.
        */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Text column ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span className="inline-flex items-center gap-2 bg-electric-50 border border-electric-100 text-electric-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse flex-shrink-0" />
                {h.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-900 tracking-tight mb-6 ${isRTL ? '!leading-[1.35] py-1' : '!leading-[1.1]'}`}
            >
              {h.headline1}{' '}
              <span className="gradient-text">{h.headline2}</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-base lg:text-lg text-slate-600 max-w-xl mb-10 ${isRTL ? 'leading-[2]' : 'leading-relaxed'}`}
            >
              {h.subheadline}
            </motion.p>

            {/* CTA buttons
                No flex-row-reverse — dir="rtl" on <html> already makes flex-row flow right→left.
                Arrow icons flip via rtl:rotate-180.
            */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href={href('/contact')} className="btn-primary text-sm sm:text-base px-6 py-3 shadow-glow">
                {h.cta1}
                <svg className="w-4 h-4 flex-shrink-0 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="#how-it-works" className="btn-secondary text-sm sm:text-base px-6 py-3">
                {h.cta2}
              </a>
            </motion.div>
          </motion.div>

          {/* ── Illustration column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative flex items-center justify-center"
          >
            <PassportVerifyIllustration isRTL={isRTL} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
