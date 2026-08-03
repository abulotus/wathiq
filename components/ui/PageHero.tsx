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
    <section className="relative bg-slate-50 pt-28 pb-20 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute inset-0 grid-mesh opacity-40" />
      <div className="absolute -top-20 -start-20 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 end-10 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 65%)' }} />

      <div className="container-wide relative z-10">
        <div
          className={`max-w-3xl ${isRTL ? 'mr-0 text-right' : ''}`}
          style={{ animation: 'fadeSlideUp 0.6s ease-out both' }}
        >
          <SectionTag label={tag} variant="blue" />
          <h1 className="heading-xl text-navy-900 mt-4 mb-3">{title}</h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">{subtitle}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
