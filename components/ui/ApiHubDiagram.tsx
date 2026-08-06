'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Node {
  en: string;
  ar: string;
  icon: React.ReactNode;
}

const nodes: Node[] = [
  {
    en: 'ePassport',
    ar: 'جواز إلكتروني',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 sm:w-6 sm:h-6">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="12" cy="10" r="3" />
        <path strokeLinecap="round" d="M8 17h8" />
      </svg>
    ),
  },
  {
    en: 'National ID',
    ar: 'بطاقة الهوية الوطنية',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 sm:w-6 sm:h-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="12" r="2.2" />
        <path strokeLinecap="round" d="M13 10h5M13 14h5" />
      </svg>
    ),
  },
  {
    en: 'Liveness',
    ar: 'فحص الحيوية',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 sm:w-6 sm:h-6">
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
  },
  {
    en: 'Face Match',
    ar: 'مطابقة الوجه',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 sm:w-6 sm:h-6">
        <circle cx="8.5" cy="10" r="3" />
        <circle cx="17" cy="14" r="2.6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19c.7-2.3 2.3-3.7 4-3.7s3.3 1.4 4 3.7M13.6 20.3c.5-1.7 1.7-2.7 3.4-2.7s2.9 1 3.4 2.7" />
      </svg>
    ),
  },
  {
    en: 'API',
    ar: 'API',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    en: 'Webhooks',
    ar: 'إشعارات Webhook',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    en: 'Dashboard',
    ar: 'لوحة التحكم',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 sm:w-6 sm:h-6">
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="3.5" width="7" height="4.5" rx="1.5" />
        <rect x="13.5" y="10.5" width="7" height="10" rx="1.5" />
        <rect x="3.5" y="13" width="7" height="7.5" rx="1.5" />
      </svg>
    ),
  },
  {
    en: 'Mobile App',
    ar: 'تطبيق الجوال',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 sm:w-6 sm:h-6">
        <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
        <path strokeLinecap="round" d="M11 18.2h2" />
      </svg>
    ),
  },
];

const RADIUS = 40;

function pos(i: number) {
  const angle = (-90 + i * (360 / nodes.length)) * (Math.PI / 180);
  return {
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  };
}

export default function ApiHubDiagram() {
  const { isRTL } = useLanguage();
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    if (mq.matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % nodes.length), 2200);
    return () => clearInterval(id);
  }, []);

  const activePos = pos(active);

  return (
    <>
    {/* Mobile fallback: a static grid — the radial layout doesn't have room to breathe below sm */}
    <div className="grid grid-cols-4 gap-3 sm:hidden max-w-sm mx-auto">
      {nodes.map((node, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5">
          <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-electric-600 flex items-center justify-center">
            {node.icon}
          </div>
          <span className="text-[10px] font-medium text-slate-500 text-center leading-tight">
            {isRTL ? node.ar : node.en}
          </span>
        </div>
      ))}
    </div>

    <div className="relative w-full max-w-[440px] sm:max-w-[520px] aspect-square mx-auto mt-8 sm:mt-10 hidden sm:block">
      {/* faint outer ring, slow ambient rotation */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#F1F5F9" strokeWidth="0.4" />
        <g className={reducedMotion ? '' : 'animate-spin-slow'} style={{ transformOrigin: '50% 50%', animationDuration: '50s' }}>
          <circle cx="50" cy="50" r="44.5" fill="none" stroke="#DBEAFE" strokeWidth="0.3" strokeDasharray="0.5 3.2" />
        </g>

        {nodes.map((_, i) => {
          const { x, y } = pos(i);
          return (
            <line
              key={i}
              x1="50" y1="50" x2={x} y2={y}
              stroke={i === active ? 'url(#hub-line-active)' : '#E5EAF3'}
              strokeWidth={i === active ? 0.7 : 0.4}
            />
          );
        })}

        <defs>
          <linearGradient id="hub-line-active" x1="50" y1="50" x2={activePos.x} y2={activePos.y} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#5EEAD4" />
          </linearGradient>
        </defs>

        {!reducedMotion && (
          <circle key={active} r="1.3" fill="#2563EB">
            <animateMotion
              path={`M50,50 L${activePos.x},${activePos.y}`}
              dur="1.1s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.3 0 0.7 1"
              keyTimes="0;1"
            />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.75;1" dur="1.1s" fill="freeze" />
          </circle>
        )}
      </svg>

      {/* center hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-electric-500 via-electric-600 to-teal-500 shadow-glow flex items-center justify-center">
          {/* Wathiq mark: broken ring + diagonal accent + center dot */}
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
            <circle cx="12" cy="12" r="6" fill="none" stroke="white" strokeWidth="3.7"
              strokeLinecap="butt" strokeDasharray="29.5 8.2" transform="rotate(-8 12 12)" />
            <rect x="14.2" y="3.6" width="2.9" height="7.2" rx="0.3" fill="#FBBF24" transform="rotate(24 15.6 7.2)" />
            <circle cx="12" cy="12" r="2.4" fill="#FBBF24" />
          </svg>
        </div>
        <span className="mt-2 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase whitespace-nowrap">
          WATHIQ API
        </span>
      </div>

      {/* nodes — icon is anchored exactly on the spoke's endpoint; the label sits on
          whichever side (above/below) points away from the hub, so it never sits on
          top of the connecting line for the diagonal nodes. */}
      {nodes.map((node, i) => {
        const { x, y } = pos(i);
        const isActive = i === active;
        const labelAbove = y < 49;
        return (
          <div key={i}>
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center border-2 shadow-sm transition-all duration-300 ${
                  isActive ? 'border-electric-500 text-electric-600 shadow-[0_0_0_5px_rgba(37,99,235,0.08)]' : 'border-slate-200 text-slate-400'
                }`}
              >
                {node.icon}
              </div>
            </div>
            <div
              className={`absolute -translate-x-1/2 ${
                labelAbove
                  ? 'translate-y-[calc(-100%-30px)] sm:translate-y-[calc(-100%-38px)]'
                  : 'translate-y-[30px] sm:translate-y-[38px]'
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className={`inline-block text-[11px] sm:text-xs font-medium whitespace-nowrap px-1.5 rounded transition-colors duration-300 ${
                  isActive ? 'text-navy-900 bg-white/70' : 'text-slate-500'
                }`}
              >
                {isRTL ? node.ar : node.en}
              </span>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}
