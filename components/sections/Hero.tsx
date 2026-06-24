'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import TechBackground from '@/components/ui/TechBackground';


const NetworkSVG = memo(function NetworkSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
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

function HeroIllustration({ isRTL }: { isRTL: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="relative z-10"
        style={{ animation: 'tech-float 6s ease-in-out infinite', willChange: 'transform' }}
      >
        <svg className="w-24 sm:w-[220px] h-auto" viewBox="0 0 260 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="130" cy="200" rx="90" ry="18" fill="#2563EB" opacity="0.12" />
          <path d="M130 20L220 60V160C220 210 180 255 130 270C80 255 40 210 40 160V60L130 20Z" fill="url(#shieldGrad)" opacity="0.95" />
          <path d="M130 35L205 70V160C205 205 170 245 130 258C90 245 55 205 55 160V70L130 35Z" fill="url(#shieldInner)" opacity="0.5" />
          <path d="M110 145C110 133 119 124 130 124C141 124 150 133 150 145V158H110V145Z" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
          <rect x="104" y="155" width="52" height="38" rx="6" fill="white" opacity="0.9" />
          <circle cx="130" cy="172" r="5" fill="url(#shieldGrad)" />
          <rect x="128" y="172" width="4" height="10" rx="2" fill="url(#shieldGrad)" />
          <defs>
            <linearGradient id="shieldGrad" x1="40" y1="20" x2="220" y2="270" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
            <linearGradient id="shieldInner" x1="55" y1="35" x2="205" y2="258" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" stopOpacity="0.35" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating cards — CSS animations, no Framer Motion, no backdrop-blur */}
      <div
        className="absolute top-10 start-0 bg-navy-800/85 border border-white/20 rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg"
        style={{ animation: 'tech-float 4.5s ease-in-out 0.3s infinite', willChange: 'transform' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse flex-shrink-0" />
          <span className="text-white font-semibold text-xs whitespace-nowrap">
            {isRTL ? 'تم التحقق من الهوية ✓' : 'Identity Verified ✓'}
          </span>
        </div>
        <div className="text-white/55 text-xs mt-1">
          {isRTL ? 'التحقق من المستخدم' : 'User authentication'}
        </div>
      </div>

      <div
        className="absolute top-28 end-0 bg-navy-800/85 border border-white/20 rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg"
        style={{ animation: 'tech-float-down 5s ease-in-out 1s infinite', willChange: 'transform' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span className="text-white font-semibold text-xs whitespace-nowrap">
            {isRTL ? 'تم حجب الاحتيال' : 'Fraud Blocked'}
          </span>
        </div>
        <div className="text-white/55 text-xs mt-1">
          {isRTL ? 'درجة المخاطرة: منخفضة' : 'Risk score: Low'}
        </div>
      </div>

      <div
        className="absolute bottom-16 start-2 bg-navy-800/85 border border-white/20 rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg"
        style={{ animation: 'tech-float 5.5s ease-in-out 2s infinite', willChange: 'transform' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse flex-shrink-0" />
          <span className="text-white font-semibold text-xs whitespace-nowrap">
            {isRTL ? 'درجة الثقة: 98%' : 'Trust Score: 98%'}
          </span>
        </div>
        <div className="text-white/55 text-xs mt-1">
          {isRTL ? 'اتصال آمن' : 'Secure connection'}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t, isRTL } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute inset-0 grid-mesh opacity-20" />
      {/* Aurora gradient blobs */}
      <div className="absolute w-[700px] h-[700px] rounded-full -top-40 -start-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)', animation: 'aurora-1 22s ease-in-out infinite', willChange: 'transform' }} />
      <div className="absolute w-[600px] h-[600px] rounded-full top-1/3 -end-32 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.13) 0%, transparent 70%)', animation: 'aurora-2 28s ease-in-out infinite', willChange: 'transform' }} />
      <div className="absolute w-[450px] h-[450px] rounded-full -bottom-20 start-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', animation: 'aurora-3 19s ease-in-out infinite', willChange: 'transform' }} />
      <NetworkSVG />
      <TechBackground variant="dark" />

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
            {/* Badge — inline-flex; in RTL the dot (first child) sits at inline-end naturally */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span className="inline-flex items-center gap-2 bg-electric-500/20 border border-electric-400/30 text-electric-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse flex-shrink-0" />
                {h.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 ${isRTL ? '!leading-[1.35] py-1' : '!leading-[1.1]'}`}
            >
              {h.headline1}{' '}
              <span className={isRTL ? 'text-teal-400' : 'gradient-text'}>{h.headline2}</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-base lg:text-lg text-slate-300 max-w-xl mb-10 ${isRTL ? 'leading-[2]' : 'leading-relaxed'}`}
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
              <Link href="/contact" className="btn-primary text-sm sm:text-base px-6 py-3 shadow-glow">
                {h.cta1}
                <svg className="w-4 h-4 flex-shrink-0 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-outline-white text-sm sm:text-base px-6 py-3">
                {h.cta2}
              </Link>
            </motion.div>

          </motion.div>

          {/* ── Illustration column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative h-72 lg:h-[480px]"
          >
            <HeroIllustration isRTL={isRTL} />
          </motion.div>
        </div>
      </div>

      {/* Section divider — diagonal geometric cut, fills with TrustedBy's white background */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Main diagonal fill */}
          <path d="M0 72L1440 10V72H0Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
