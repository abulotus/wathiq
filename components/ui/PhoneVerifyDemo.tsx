'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PhoneFrame from '@/components/ui/PhoneFrame';

type StageKind = 'document' | 'barcode' | 'selfie' | 'processing' | 'result';

interface Stage {
  kind: StageKind;
  title: { en: string; ar: string };
  instruction: { en: string; ar: string };
}

const STAGES: Stage[] = [
  {
    kind: 'document',
    title: { en: 'Capture the front of your ID', ar: 'صوّر الوجه الأمامي للهوية' },
    instruction: {
      en: 'Place the front of your ID inside the frame, then tap to capture.',
      ar: 'ضع الوجه الأمامي للهوية داخل الإطار، ثم اضغط زر الالتقاط.',
    },
  },
  {
    kind: 'barcode',
    title: { en: 'Scan the barcode', ar: 'امسح الباركود' },
    instruction: {
      en: 'Move closer until the barcode fills the frame — it reads automatically.',
      ar: 'اقترب حتى يملأ الباركود الإطار — سيُقرأ تلقائياً.',
    },
  },
  {
    kind: 'selfie',
    title: { en: 'Take a selfie', ar: 'التقط صورة ذاتية' },
    instruction: {
      en: 'Place your face inside the oval, then tap to capture.',
      ar: 'ضع وجهك داخل الشكل البيضاوي، ثم اضغط زر الالتقاط.',
    },
  },
  {
    kind: 'processing',
    title: { en: 'Processing your document', ar: 'جارٍ معالجة مستندك' },
    instruction: {
      en: "The Wathiq server is reviewing the submitted evidence.",
      ar: 'يُراجع خادم واثق الأدلة المرسلة.',
    },
  },
  {
    kind: 'result',
    title: { en: 'Verified successfully', ar: 'تم التحقّق بنجاح' },
    instruction: {
      en: 'Your identity has been confirmed and the request is complete.',
      ar: 'تم تأكيد هويتك وإكمال طلب التحقّق.',
    },
  },
];

const STAGE_DURATION_MS = 2800;
const CAMERA_KINDS: StageKind[] = ['document', 'barcode', 'selfie'];

// Dense, deterministic (not Math.random — must match between server and
// client render) bar-width pattern standing in for a real PDF417 barcode.
// 50 bars/row at ~2px avg width + 1px gaps fills the ~150px printable
// width edge-to-edge (26 bars previously left half the row blank).
const PDF417_ROWS: number[][] = Array.from({ length: 9 }, (_, r) =>
  Array.from({ length: 50 }, (_, i) => ((i * 5 + r * 7) % 3) + 1)
);

export default function PhoneVerifyDemo() {
  const { isRTL } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    timerRef.current = setTimeout(() => setIndex((i) => (i + 1) % STAGES.length), STAGE_DURATION_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, paused, reducedMotion]);

  const stage = STAGES[index];
  const isCamera = stage.kind === 'document' || stage.kind === 'barcode' || stage.kind === 'selfie';

  return (
    <div className="relative mx-auto w-fit">
      <PhoneFrame>
          {/* Camera-mode stages */}
          {isCamera && (
            <div key={stage.kind} className="absolute inset-0 stage-fade">
              {/* Dim viewfinder backdrop + soft center vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#141C2C] via-[#0B0F1A] to-[#05070C]" />
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(59,130,246,0.14), transparent 62%)' }} />

              {/* Guide frame */}
              <div className="absolute inset-0 flex items-center justify-center px-8">
                {stage.kind === 'selfie' ? (
                  <div className="relative flex aspect-[3/4] w-[70%] max-h-[64%] items-center justify-center rounded-[50%]"
                    style={{ boxShadow: '0 0 0 1px rgba(147,197,253,0.15), 0 0 60px 12px rgba(59,130,246,0.16)' }}
                  >
                    <div className="oval-glow absolute inset-0 rounded-[50%] border-[2.5px] border-electric-300/90" />
                    {/* Soft studio-lit generic silhouette — gradient-modeled for depth, no
                        drawn facial features (avoids reading as a cartoon/emoji), and never
                        a real or web-sourced photo. */}
                    <div className="face-breathe absolute inset-[3px] overflow-hidden rounded-[50%]">
                      <svg viewBox="0 0 100 130" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMax slice">
                        <defs>
                          <linearGradient id="faceBase" x1="0.15" y1="0" x2="0.85" y2="1">
                            <stop offset="0%" stopColor="#B8C2D0" />
                            <stop offset="50%" stopColor="#94A3B8" />
                            <stop offset="100%" stopColor="#6B7B92" />
                          </linearGradient>
                          <radialGradient id="faceSheen" cx="36%" cy="26%" r="50%">
                            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <rect width="100" height="130" fill="url(#faceBase)" />
                        <circle cx="50" cy="45" r="25" fill="#7C8CA1" />
                        <path d="M6 132C6 96 24 77 50 77C76 77 94 96 94 132Z" fill="#7C8CA1" />
                        <circle cx="50" cy="45" r="25" fill="url(#faceSheen)" />
                        <path d="M6 132C6 96 24 77 50 77C76 77 94 96 94 132Z" fill="url(#faceSheen)" />
                      </svg>
                    </div>
                  </div>
                ) : stage.kind === 'barcode' ? (
                  <div className="relative aspect-[85.6/54] w-full max-w-[210px] rounded-xl">
                    <span className="corner-pulse absolute -left-0.5 -top-0.5 h-7 w-7 rounded-tl-xl border-l-[3px] border-t-[3px] border-white" />
                    <span className="corner-pulse absolute -right-0.5 -top-0.5 h-7 w-7 rounded-tr-xl border-r-[3px] border-t-[3px] border-white" />
                    <span className="corner-pulse absolute -bottom-0.5 -left-0.5 h-7 w-7 rounded-bl-xl border-b-[3px] border-l-[3px] border-white" />
                    <span className="corner-pulse absolute -bottom-0.5 -right-0.5 h-7 w-7 rounded-br-xl border-b-[3px] border-r-[3px] border-white" />
                    {/* Back-of-card layout: header band matching the front side, then the
                        barcode printed dark-on-light the way PDF417 actually appears on a
                        physical card, not white bars floating on a dark viewfinder. */}
                    <div className="absolute inset-2.5 overflow-hidden rounded-lg bg-[#EDEFF3]">
                      <div className="flex items-center gap-1.5 border-b border-slate-300/60 bg-gradient-to-r from-navy-800 to-electric-700 px-2.5 py-1.5">
                        <div className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full border border-gold-300/80">
                          <div className="h-1 w-1 rounded-full bg-gold-300" />
                        </div>
                        <div className="h-[3px] w-2/5 rounded-full bg-white/50" />
                      </div>
                      <div className="flex flex-col items-center gap-2 px-3 py-2.5">
                        <div className="flex w-full flex-col gap-[1.5px] rounded-[3px] bg-white p-2 ring-1 ring-slate-300/70">
                          {PDF417_ROWS.map((row, r) => (
                            <div key={r} className="flex h-[5px] gap-[1px]">
                              {row.map((w, i) => (
                                <span key={i} className="bg-slate-800" style={{ width: `${w}px` }} />
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="flex w-full items-center gap-1">
                          <span className="h-[2px] w-[2px] flex-shrink-0 rounded-full bg-electric-500/70" />
                          <span className="h-[2px] w-3/5 rounded-full bg-slate-400/70" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-x-3 h-px scan-sweep bg-gradient-to-r from-transparent via-electric-300 to-transparent" />
                  </div>
                ) : (
                  <div className="relative aspect-[85.6/54] w-full max-w-[220px] rounded-xl">
                    <span className="corner-pulse absolute -left-0.5 -top-0.5 h-7 w-7 rounded-tl-xl border-l-[3px] border-t-[3px] border-white" />
                    <span className="corner-pulse absolute -right-0.5 -top-0.5 h-7 w-7 rounded-tr-xl border-r-[3px] border-t-[3px] border-white" />
                    <span className="corner-pulse absolute -bottom-0.5 -left-0.5 h-7 w-7 rounded-bl-xl border-b-[3px] border-l-[3px] border-white" />
                    <span className="corner-pulse absolute -bottom-0.5 -right-0.5 h-7 w-7 rounded-br-xl border-b-[3px] border-r-[3px] border-white" />
                    {/* Illustrative generic ID-card layout — not a real or copied document design */}
                    <div className="absolute inset-2.5 overflow-hidden rounded-lg bg-[#EDEFF3]">
                      {/* Header band: generic seal + redacted authority lines, no real emblem/text */}
                      <div className="flex items-center gap-1.5 border-b border-slate-300/60 bg-gradient-to-r from-navy-800 to-electric-700 px-2.5 py-1.5">
                        <div className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full border border-gold-300/80">
                          <div className="h-1 w-1 rounded-full bg-gold-300" />
                        </div>
                        <div className="flex flex-1 flex-col gap-[3px]">
                          <div className="h-[3px] w-2/5 rounded-full bg-white/50" />
                          <div className="h-[3px] w-3/5 rounded-full bg-white/25" />
                        </div>
                      </div>
                      <div className="flex gap-2 px-2.5 pt-2">
                        <div className="flex h-14 w-9 flex-shrink-0 items-center justify-center rounded-[3px] border border-slate-300 bg-slate-200">
                          <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" fill="currentColor">
                            <circle cx="12" cy="8" r="3.6" />
                            <path d="M5 20c0-3.9 3.1-6.2 7-6.2s7 2.3 7 6.2v.4H5v-.4z" />
                          </svg>
                        </div>
                        <div className="flex flex-1 flex-col justify-center gap-[3.5px]">
                          {[75, 90, 60, 85].map((w, i) => (
                            <div key={i} className="flex items-center gap-1">
                              <span className="h-[2px] w-[2px] flex-shrink-0 rounded-full bg-electric-500/70" />
                              <span className="h-[2px] rounded-full bg-slate-400/70" style={{ width: `${w}%` }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-x-3 h-px scan-sweep bg-gradient-to-r from-transparent via-electric-300 to-transparent" />
                  </div>
                )}
              </div>

              {/* Top chrome: flash / tips buttons flanking the instruction bar */}
              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent px-4 pb-8 pt-6 text-center">
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/70">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor"><path d="M11 2L4 14h5l-1 8 9-12h-5l1-8z" /></svg>
                  </span>
                  <div className="flex justify-center gap-1">
                    {CAMERA_KINDS.map((kind, i) => {
                      const currentDot = CAMERA_KINDS.indexOf(stage.kind);
                      return (
                        <span key={kind} className={`h-1 rounded-full transition-all duration-300 ${
                          i === currentDot ? 'w-4 bg-white' : i < currentDot ? 'w-1 bg-white/70' : 'w-1 bg-white/25'
                        }`} />
                      );
                    })}
                  </div>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/70">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" strokeLinecap="round" /></svg>
                  </span>
                </div>
                <p className="text-[11px] font-semibold leading-tight text-white">{isRTL ? stage.title.ar : stage.title.en}</p>
              </div>

              {/* Bottom hint + shutter */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2.5 bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-8">
                <p className="text-center text-[10px] leading-snug text-white/80">{isRTL ? stage.instruction.ar : stage.instruction.en}</p>
                <div className="h-9 w-9 rounded-full border-[3px] border-white bg-white/90" />
              </div>
            </div>
          )}

          {/* Processing stage */}
          {stage.kind === 'processing' && (
            <div key="processing" className="stage-fade absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white px-6 text-center">
              <div className="h-9 w-9 animate-spin rounded-full border-[3px] border-slate-200 border-t-electric-500" />
              <div>
                <p className="text-sm font-bold text-navy-900">{isRTL ? stage.title.ar : stage.title.en}</p>
                <p className="mt-1.5 text-[11px] leading-snug text-slate-500">{isRTL ? stage.instruction.ar : stage.instruction.en}</p>
              </div>
              <div className="h-1 w-32 overflow-hidden rounded-full bg-slate-100">
                <div className="progress-slide h-full w-1/3 rounded-full bg-electric-500" />
              </div>
            </div>
          )}

          {/* Result stage */}
          {stage.kind === 'result' && (
            <div key="result" className="stage-fade absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#F8FAFF] to-[#EEF4FF] px-6 text-center">
              <div className="result-pop flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 shadow-[0_0_0_10px_rgba(20,184,166,0.12)]">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900">{isRTL ? stage.title.ar : stage.title.en}</p>
                <p className="mt-1.5 text-[11px] leading-snug text-slate-500 max-w-[180px] mx-auto">{isRTL ? stage.instruction.ar : stage.instruction.en}</p>
              </div>
            </div>
          )}
      </PhoneFrame>

      {/* Play/pause control */}
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? (isRTL ? 'تشغيل' : 'Play') : (isRTL ? 'إيقاف مؤقت' : 'Pause')}
        className="absolute -bottom-3 start-2 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:text-navy-900"
      >
        {paused ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-[1px]" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" /></svg>
        )}
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes stageFade { from { opacity: 0; } to { opacity: 1; } }
        .stage-fade { animation: stageFade .4s ease-out both; }
        @keyframes cornerPulseKf { 0%, 100% { opacity: 1; } 50% { opacity: .45; } }
        .corner-pulse { animation: cornerPulseKf 1.6s ease-in-out infinite; }
        @keyframes ovalGlowKf { 0%, 100% { box-shadow: 0 0 0 0 rgba(147,197,253,0.35); } 50% { box-shadow: 0 0 0 8px rgba(147,197,253,0); } }
        .oval-glow { animation: ovalGlowKf 2s ease-out infinite; }
        @keyframes faceBreatheKf { 0%, 100% { transform: scale(1); opacity: .92; } 50% { transform: scale(1.03); opacity: 1; } }
        .face-breathe { animation: faceBreatheKf 2.4s ease-in-out infinite; }
        @keyframes scanSweepKf { 0% { top: 8%; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { top: 88%; opacity: 0; } }
        .scan-sweep { animation: scanSweepKf 1.9s ease-in-out infinite; }
        @keyframes progressSlideKf { 0% { transform: translateX(-100%); } 100% { transform: translateX(300%); } }
        .progress-slide { animation: progressSlideKf 1.3s ease-in-out infinite; }
        @keyframes resultPopKf { 0% { transform: scale(.4); opacity: 0; } 60% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
        .result-pop { animation: resultPopKf .4s cubic-bezier(.2,.8,.2,1) both; }
      `}} />
    </div>
  );
}
