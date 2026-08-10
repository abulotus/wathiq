'use client';

import SecurityWeave from '@/components/ui/SecurityWeave';

/**
 * The hero's signature visual: a four-beat verification story on loop —
 * (1) the checks that run under the hood, (2) capturing the document,
 * (3) the extracted fields confirming, (4) the verified result. One CSS
 * timeline drives all four stages so they cross-fade without any client
 * state or timers; prefers-reduced-motion collapses straight to the
 * verified end-state. All document/photo imagery stays generic and
 * redacted, never a real or web-sourced document.
 */

const CHECKS = {
  en: [
    { label: 'Document Check', filled: true },
    { label: 'MRZ Read', filled: true },
    { label: 'NFC Chip', filled: true },
    { label: 'Liveness', filled: true },
    { label: 'Face Match', filled: false },
    { label: 'Data Integrity', filled: false },
  ],
  ar: [
    { label: 'فحص المستند', filled: true },
    { label: 'قراءة MRZ', filled: true },
    { label: 'شريحة NFC', filled: true },
    { label: 'كشف الحيوية', filled: true },
    { label: 'مطابقة الوجه', filled: false },
    { label: 'سلامة البيانات', filled: false },
  ],
};

const FIELDS = {
  en: ['Photo', 'MRZ', 'Expiry Date', 'Nationality'],
  ar: ['الصورة', 'MRZ', 'تاريخ الانتهاء', 'الجنسية'],
};

const FIELD_ROWS = [72, 90, 58, 84, 66];
const BAR_WIDTHS = [3, 1, 2, 4, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3];

function IdCard({ withScan }: { withScan: boolean }) {
  return (
    <div
      className="relative aspect-[85.6/54] w-full max-w-[220px] overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10"
      style={{ background: 'linear-gradient(160deg, #0A1A47 0%, #123068 55%, #1D4ED8 100%)' }}
    >
      <SecurityWeave className="opacity-[0.18]" />

      <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-white/10 bg-black/15 px-2.5 py-1.5">
        <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-gold-300/70">
          <div className="h-1.5 w-1.5 rounded-full bg-gold-300/80" />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <div className="h-[3px] w-2/5 rounded-full bg-white/50" />
          <div className="h-[3px] w-3/5 rounded-full bg-white/25" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 top-[28%] flex flex-col p-2.5 pt-2">
        <div className="flex flex-1 gap-2">
          <div className="h-full w-7 flex-shrink-0 rounded-[3px] border border-white/25 bg-white/15" />
          <div className="flex flex-1 flex-col justify-center gap-1">
            {FIELD_ROWS.map((w, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="h-[2px] w-[2px] flex-shrink-0 rounded-full bg-electric-300/70" />
                <span className="h-[2px] rounded-full bg-white/30" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-1.5 flex h-3.5 items-end gap-[2px]">
          {BAR_WIDTHS.map((w, i) => (
            <span key={i} className="bg-white/40" style={{ width: `${w}px`, height: '100%' }} />
          ))}
        </div>
      </div>

      {(['tl', 'tr', 'bl', 'br'] as const).map((corner) => (
        <span
          key={corner}
          className={`absolute h-4 w-4 border-electric-200 ${
            corner === 'tl' ? '-left-px -top-px rounded-tl-xl border-l-2 border-t-2' :
            corner === 'tr' ? '-right-px -top-px rounded-tr-xl border-r-2 border-t-2' :
            corner === 'bl' ? '-left-px -bottom-px rounded-bl-xl border-b-2 border-l-2' :
            '-right-px -bottom-px rounded-br-xl border-b-2 border-r-2'
          }`}
        />
      ))}

      {withScan && (
        <div
          className="journey-scan-sweep absolute inset-x-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, #93C5FD, #5EEAD4, transparent)', boxShadow: '0 0 10px 1px rgba(94,234,212,0.6)' }}
        />
      )}
    </div>
  );
}

export default function VerificationJourneyIllustration({ isRTL }: { isRTL: boolean }) {
  const checks = isRTL ? CHECKS.ar : CHECKS.en;
  const fields = isRTL ? FIELDS.ar : FIELDS.en;

  return (
    <div
      className="relative w-[260px] sm:w-[330px] aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-navy-900/10"
      style={{ background: 'linear-gradient(175deg, #071233 0%, #0A1A47 100%)' }}
    >
      {/* Stage 1: the checks running underneath, at a glance */}
      <div className="journey-stage journey-stage-1 absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-5">
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {checks.map((c, i) => (
            <span
              key={i}
              className={`journey-pill-in rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                c.filled ? 'bg-teal-400/90 text-navy-950' : 'border border-white/25 text-white/60'
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {c.label}
            </span>
          ))}
        </div>
        <p className="mt-2 text-center text-[11px] font-medium leading-snug text-white/70">
          {isRTL ? 'فحوصات شاملة، تحقّق واحد' : 'Every check. One verification.'}
        </p>
      </div>

      {/* Stage 2: capturing the document */}
      <div className="journey-stage journey-stage-2 absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
        <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium text-white/80">
          {isRTL ? 'ثبّت المستند داخل الإطار' : 'Hold document in frame'}
        </span>
        <IdCard withScan />
      </div>

      {/* Stage 3: fields extracted and confirmed */}
      <div className="journey-stage journey-stage-3 absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
        <IdCard withScan={false} />
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {fields.map((f, i) => (
            <span
              key={i}
              className="journey-pill-in inline-flex items-center gap-1 rounded-full bg-teal-400/90 px-2.5 py-1 text-[10px] font-semibold text-navy-950"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Stage 4: verified */}
      <div className="journey-stage journey-stage-4 absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="relative flex h-16 w-16 items-center justify-center">
          {[0, 1, 2].map((r) => (
            <span key={r} className="journey-pulse-ring absolute inset-0 rounded-full border border-teal-300/60" style={{ animationDelay: `${r * 0.9}s` }} />
          ))}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-teal-400 shadow-lg">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <p className="text-sm font-bold text-white">{isRTL ? 'تم التحقق' : 'Verified'}</p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes journeyStage1Kf { 0%, 21% { opacity: 1; } 25%, 100% { opacity: 0; } }
        @keyframes journeyStage2Kf { 0%, 23% { opacity: 0; } 27%, 46% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes journeyStage3Kf { 0%, 48% { opacity: 0; } 52%, 71% { opacity: 1; } 75%, 100% { opacity: 0; } }
        @keyframes journeyStage4Kf { 0%, 73% { opacity: 0; } 77%, 98% { opacity: 1; } 100% { opacity: 0; } }
        .journey-stage { animation-duration: 16s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
        .journey-stage-1 { animation-name: journeyStage1Kf; }
        .journey-stage-2 { animation-name: journeyStage2Kf; }
        .journey-stage-3 { animation-name: journeyStage3Kf; }
        .journey-stage-4 { animation-name: journeyStage4Kf; }

        @keyframes journeyPillInKf { 0% { opacity: 0; transform: translateY(4px) scale(0.9); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        .journey-pill-in { animation: journeyPillInKf 0.5s ease-out both; }

        @keyframes journeyScanSweepKf { 0% { top: 8%; opacity: 0; } 10% { opacity: 1; } 90% { top: 88%; opacity: 1; } 100% { top: 88%; opacity: 0; } }
        .journey-scan-sweep { animation: journeyScanSweepKf 2.6s ease-in-out infinite; }

        @keyframes journeyPulseRingKf { 0% { transform: scale(0.8); opacity: 0.7; } 100% { transform: scale(2.4); opacity: 0; } }
        .journey-pulse-ring { animation: journeyPulseRingKf 2.4s ease-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .journey-stage, .journey-pill-in, .journey-scan-sweep, .journey-pulse-ring { animation: none !important; }
          .journey-stage-1, .journey-stage-2, .journey-stage-3 { display: none; }
          .journey-stage-4 { opacity: 1; }
        }
      `}} />
    </div>
  );
}
