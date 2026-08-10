'use client';

import PhoneFrame from '@/components/ui/PhoneFrame';
import SecurityWeave from '@/components/ui/SecurityWeave';

/**
 * Hero visual: a phone mid-scan of a passport's data page, standing next to
 * the passport itself at roughly real proportions (closed booklet ~88x125mm,
 * so visibly shorter and wider than the phone rather than the same height).
 * The passport cover uses Wathiq's own mark (public/favicon.svg's broken
 * ring + bar + dot) as its emblem instead of any national seal, and carries
 * no country name — a generic "electronic passport" cover, not a
 * reproduction of a real one. The data page inside the phone is the same
 * generic redacted-fields treatment used elsewhere on the site.
 */

const FIELD_ROWS = [78, 60, 88, 66];
const MRZ_LINES = [
  'P<UTOWATHIQ<<VERIFICATION<<<<<<<<<<<<<<<<<<<',
  '0000000000UTO0001019M0001019<<<<<<<<<<<<<<06',
];

function EmblemMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="9"
        strokeDasharray="123 34" transform="rotate(-8 50 50)" />
      <rect x="59" y="15" width="7" height="18" rx="1" fill="currentColor" transform="rotate(24 65 30)" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
  );
}

function ChipGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2.5" />
      <path strokeLinecap="round" d="M8 6V4M12 6V4M16 6V4M8 20v-2M12 20v-2M16 20v-2" />
    </svg>
  );
}

function PassportCover({ isRTL }: { isRTL: boolean }) {
  return (
    <div
      className="relative aspect-[88/125] w-[135px] sm:w-[165px] -rotate-[7deg] overflow-hidden rounded-[10px] shadow-2xl ring-1 ring-white/10"
      style={{ background: 'linear-gradient(155deg, #071233 0%, #0A1A47 55%, #123068 100%)' }}
    >
      <SecurityWeave className="opacity-[0.14]" />
      <div className="absolute inset-3 flex flex-col items-center justify-between text-center">
        <p className="text-[6.5px] font-semibold uppercase tracking-[0.25em] text-gold-300/80">
          {isRTL ? 'جواز سفر إلكتروني' : 'Electronic Passport'}
        </p>
        <EmblemMark className="h-9 w-9 text-gold-300 sm:h-11 sm:w-11" />
        <div className="flex flex-col items-center gap-2.5">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-gold-300 sm:text-[15px]">
            {isRTL ? 'جواز سفر' : 'Passport'}
          </p>
          <ChipGlyph className="h-4 w-4 text-gold-300/70" />
        </div>
      </div>
    </div>
  );
}

function ScanCard() {
  return (
    <div className="relative aspect-[85.6/54] w-full max-w-[188px] overflow-hidden rounded-lg">
      <div className="absolute inset-0 overflow-hidden rounded-lg bg-[#EDEFF3]">
        <div className="flex items-center gap-1.5 border-b border-slate-300/60 bg-gradient-to-r from-navy-800 to-electric-700 px-2 py-1.5">
          <div className="flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full border border-gold-300/80">
            <div className="h-1 w-1 rounded-full bg-gold-300" />
          </div>
          <div className="flex flex-1 flex-col gap-[3px]">
            <div className="h-[2.5px] w-2/5 rounded-full bg-white/50" />
            <div className="h-[2.5px] w-3/5 rounded-full bg-white/25" />
          </div>
        </div>
        <div className="flex gap-1.5 px-2 pt-1.5">
          <div className="flex h-10 w-7 flex-shrink-0 items-center justify-center rounded-[2px] border border-slate-300 bg-slate-200">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-400" fill="currentColor">
              <circle cx="12" cy="8" r="3.6" />
              <path d="M5 20c0-3.9 3.1-6.2 7-6.2s7 2.3 7 6.2v.4H5v-.4z" />
            </svg>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-1">
            {FIELD_ROWS.map((w, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="h-[1.5px] w-[1.5px] flex-shrink-0 rounded-full bg-electric-500/70" />
                <span className="h-[1.5px] rounded-full bg-slate-400/70" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-1.5 space-y-[2px] border-t border-dashed border-electric-400/60 bg-electric-500/10 px-2 py-1.5">
          {MRZ_LINES.map((l, i) => (
            <p key={i} className="truncate font-mono text-[5px] leading-none text-electric-700/80">{l}</p>
          ))}
        </div>
      </div>

      {(['tl', 'tr', 'bl', 'br'] as const).map((c) => (
        <span key={c} className={`absolute h-4 w-4 border-electric-300 ${
          c === 'tl' ? '-left-px -top-px rounded-tl-lg border-l-2 border-t-2' :
          c === 'tr' ? '-right-px -top-px rounded-tr-lg border-r-2 border-t-2' :
          c === 'bl' ? '-left-px -bottom-px rounded-bl-lg border-b-2 border-l-2' :
          '-right-px -bottom-px rounded-br-lg border-b-2 border-r-2'
        }`} />
      ))}

      <div
        className="passport-scan-sweep absolute inset-x-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #93C5FD, #5EEAD4, transparent)', boxShadow: '0 0 10px 1px rgba(94,234,212,0.6)' }}
      />
    </div>
  );
}

function FeatureBadge({
  label,
  icon,
  className = '',
  animation,
}: {
  label: string;
  icon: React.ReactNode;
  className?: string;
  animation: string;
}) {
  return (
    <div
      className={`absolute z-20 flex items-center gap-2 rounded-xl border border-slate-200 bg-white py-2 ps-2 pe-3 shadow-lg ${className}`}
      style={{ animation, willChange: 'transform' }}
    >
      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-electric-300">
        {icon}
      </span>
      <span className="text-xs font-semibold text-navy-900 whitespace-nowrap">{label}</span>
      <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function PassportVerifyIllustration({ isRTL }: { isRTL: boolean }) {
  return (
    <div className="relative mx-auto h-[460px] w-[300px] sm:h-[560px] sm:w-[380px]">
      {/* Passport, standing behind and to the start side */}
      <div className="absolute start-0 top-1/2 z-0 -translate-y-[58%]">
        <PassportCover isRTL={isRTL} />
      </div>

      {/* Phone, in front, anchored to the end side and bottom */}
      <div className="absolute bottom-0 end-0 z-10">
        <PhoneFrame size="sm">
          <div className="absolute inset-0 bg-gradient-to-b from-[#141C2C] via-[#0B0F1A] to-[#05070C]" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent px-4 pb-6 pt-6 text-center">
            <h4 className="text-[12px] font-bold text-white">
              {isRTL ? 'جارٍ مسح الجواز' : 'Scanning passport'}
            </h4>
            <p className="mt-1 text-[9.5px] leading-snug text-white/70">
              {isRTL ? 'ثبّت المستند قرب أعلى الهاتف' : 'Hold the document near the top of your device'}
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-5">
            <ScanCard />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 border-t border-white/10 bg-black/30 px-4 py-3">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <rect x="4" y="6" width="16" height="12" rx="2" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
            </span>
            <span className="text-[10px] font-medium leading-snug text-white/85">
              {isRTL ? 'التقط الصفحة الأولى داخل الإطار' : 'Capture first page inside the frame'}
            </span>
          </div>
        </PhoneFrame>
      </div>

      {/* Floating feature badges */}
      <FeatureBadge
        className="top-0 start-1/2 -translate-x-1/2 sm:start-[42%]"
        animation="tech-float 4.5s ease-in-out 0.3s infinite"
        label={isRTL ? 'فحص المستند' : 'Document Check'}
        icon={
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.5l2 2 4-4.5M6 6a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6z" />
          </svg>
        }
      />
      <FeatureBadge
        className="bottom-14 start-0 sm:bottom-16"
        animation="tech-float-down 5s ease-in-out 1s infinite"
        label={isRTL ? 'تحقّق NFC' : 'NFC Verified'}
        icon={
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5h.01" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 15.3a5 5 0 017 0" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 12.2a9 9 0 0113 0" />
          </svg>
        }
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes passportScanSweepKf { 0% { top: 8%; opacity: 0; } 10% { opacity: 1; } 90% { top: 88%; opacity: 1; } 100% { top: 88%; opacity: 0; } }
        .passport-scan-sweep { animation: passportScanSweepKf 2.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .passport-scan-sweep { animation: none; opacity: 0; }
        }
      `}} />
    </div>
  );
}
