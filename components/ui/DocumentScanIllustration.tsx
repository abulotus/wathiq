'use client';

import { useEffect, useState } from 'react';
import SecurityWeave from '@/components/ui/SecurityWeave';

/**
 * The hero's signature visual: an ID document being actively verified —
 * corner brackets, a sweeping scan-line, a PDF417-style barcode strip, then
 * a verified badge pops in and the cycle repeats. Grounded in the site's own
 * established guided-capture visual language (same brackets/scan-line
 * pattern used in the phone demo and ePassport screens) rather than a
 * generic shield-and-padlock, so the hero and the rest of the product share
 * one visual thread instead of a stock security icon.
 */
export default function DocumentScanIllustration() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const barWidths = [3, 1, 2, 4, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3];

  return (
    <div className="relative w-[220px] sm:w-[300px]" style={{ transform: 'rotate(-5deg)' }}>
      {/* Card */}
      <div
        className="relative aspect-[85.6/54] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
        style={{ background: 'linear-gradient(135deg, #0A1A47 0%, #1D4ED8 100%)' }}
      >
        <SecurityWeave className="opacity-[0.18]" />

        <div className="absolute inset-0 flex flex-col p-4 sm:p-5">
          <div className="flex gap-3">
            <div className="h-12 w-9 flex-shrink-0 rounded-[3px] border border-white/25 bg-white/15 sm:h-16 sm:w-12" />
            <div className="flex flex-1 flex-col justify-center gap-1.5 sm:gap-2">
              <div className="h-1.5 w-3/5 rounded-full bg-white/45 sm:h-2" />
              <div className="h-1.5 w-4/5 rounded-full bg-white/25 sm:h-2" />
              <div className="h-1.5 w-2/5 rounded-full bg-white/25 sm:h-2" />
            </div>
          </div>
          <div className="mt-auto flex h-6 items-end gap-[2.5px] sm:h-8">
            {barWidths.map((w, i) => (
              <span key={i} className="bg-white/40" style={{ width: `${w}px`, height: '100%' }} />
            ))}
          </div>
        </div>

        {/* Scan-line sweep */}
        {!reducedMotion && (
          <div
            className="hero-scan-sweep absolute inset-x-0 h-[3px]"
            style={{ background: 'linear-gradient(90deg, transparent, #93C5FD, #5EEAD4, transparent)', boxShadow: '0 0 12px 1px rgba(94,234,212,0.6)' }}
          />
        )}

        {/* Verified badge */}
        <div className="hero-badge-pop absolute inset-0 flex items-center justify-center bg-navy-950/55">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-400 shadow-lg sm:h-14 sm:w-14">
            <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Corner brackets, echoing the guided-capture frame used elsewhere on the site */}
      {(['tl', 'tr', 'bl', 'br'] as const).map((corner) => (
        <span
          key={corner}
          className={`hero-corner-pulse absolute h-6 w-6 sm:h-8 sm:w-8 border-electric-300 ${
            corner === 'tl' ? '-left-2 -top-2 rounded-tl-xl border-l-[3px] border-t-[3px]' :
            corner === 'tr' ? '-right-2 -top-2 rounded-tr-xl border-r-[3px] border-t-[3px]' :
            corner === 'bl' ? '-left-2 -bottom-2 rounded-bl-xl border-b-[3px] border-l-[3px]' :
            '-right-2 -bottom-2 rounded-br-xl border-b-[3px] border-r-[3px]'
          }`}
        />
      ))}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroScanKf {
          0% { top: 6%; opacity: 0; }
          8% { opacity: 1; }
          55% { top: 90%; opacity: 1; }
          63%, 100% { top: 90%; opacity: 0; }
        }
        .hero-scan-sweep { animation: heroScanKf 4.2s ease-in-out infinite; }

        @keyframes heroBadgePopKf {
          0%, 63% { opacity: 0; transform: scale(0.6); }
          75% { opacity: 1; transform: scale(1.06); }
          85%, 95% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.6); }
        }
        .hero-badge-pop { animation: heroBadgePopKf 4.2s ease-in-out infinite; }

        @keyframes heroCornerPulseKf { 0%, 100% { opacity: 1; } 50% { opacity: .4; } }
        .hero-corner-pulse { animation: heroCornerPulseKf 2s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .hero-corner-pulse { animation: none; }
          .hero-badge-pop { animation: none; opacity: 1; transform: scale(1); }
        }
      `}} />
    </div>
  );
}
