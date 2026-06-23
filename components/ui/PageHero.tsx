'use client';

import SectionTag from '@/components/ui/SectionTag';
import { useLanguage } from '@/contexts/LanguageContext';

interface PageHeroProps {
  tag: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function PageHero({ tag, title, subtitle, children }: PageHeroProps) {
  const { isRTL } = useLanguage();

  return (
    <section className="relative bg-navy-900 pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute inset-0 grid-mesh opacity-25" />
      <div className="absolute -top-20 -start-20 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 end-10 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 65%)' }} />

      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 72L1440 10V72H0Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <div
          className={`max-w-3xl ${isRTL ? 'mr-0 text-right' : ''}`}
          style={{ animation: 'fadeSlideUp 0.6s ease-out both' }}
        >
          <SectionTag label={tag} variant="white" />
          <h1 className="heading-xl text-white mt-4 mb-5">{title}</h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">{subtitle}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
