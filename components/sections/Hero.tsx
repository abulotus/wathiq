import Link from 'next/link';
import { translations, Language } from '@/lib/translations';
import TechBackground from '@/components/ui/TechBackground';


function NetworkSVG() {
  return (
    <svg
      className="bandwidth-decorative absolute inset-0 w-full h-full opacity-15 pointer-events-none"
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
}

export default function Hero({ locale }: { locale: Language }) {
  const isRTL = locale === 'ar';
  const t = translations[locale];
  const href = (path: string) => `/${locale}${path === '/' ? '' : path}`;
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      <div className="bandwidth-decorative absolute inset-0 hero-pattern" />
      <div className="bandwidth-decorative absolute inset-0 grid-mesh opacity-40" />
      {/* Aurora gradient blobs */}
      <div className="bandwidth-decorative absolute w-[700px] h-[700px] rounded-full -top-40 -start-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)', animation: 'aurora-1 22s ease-in-out infinite', willChange: 'transform' }} />
      <div className="bandwidth-decorative absolute w-[600px] h-[600px] rounded-full top-1/3 -end-32 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)', animation: 'aurora-2 28s ease-in-out infinite', willChange: 'transform' }} />
      <div className="bandwidth-decorative absolute w-[450px] h-[450px] rounded-full -bottom-20 start-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', animation: 'aurora-3 19s ease-in-out infinite', willChange: 'transform' }} />
      <NetworkSVG />
      <TechBackground variant="light" />

      <div className="container-wide relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32">
        <div className="hero-enter max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-enter hero-delay-1">
            <span className="inline-flex items-center gap-2 bg-electric-50 border border-electric-100 text-electric-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse flex-shrink-0" />
              {h.badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-900 tracking-tight mb-6 ${isRTL ? '!leading-[1.35] py-1' : '!leading-[1.1]'}`}
          >
            {h.headline1}{' '}
            <span className="gradient-text">{h.headline2}</span>
          </h1>

          {/* Sub */}
          <p
            className={`text-base lg:text-lg text-slate-600 max-w-xl mx-auto mb-10 ${isRTL ? 'leading-[2]' : 'leading-relaxed'}`}
          >
            {h.subheadline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={href('/contact')} className="btn-primary text-sm sm:text-base px-6 py-3 shadow-glow">
              {h.cta1}
              <svg className="w-4 h-4 flex-shrink-0 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="#how-it-works" className="btn-secondary text-sm sm:text-base px-6 py-3">
              {h.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
