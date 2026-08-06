'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

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
    <div className="relative mx-auto w-[260px] sm:w-[290px]">
      {/* Phone bezel */}
      <div className="relative rounded-[2.75rem] bg-navy-950 p-3 shadow-[0_30px_80px_-20px_rgba(4,9,28,0.6)] ring-1 ring-white/10">
        {/* Dynamic-island notch */}
        <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-navy-950" />

        {/* Screen */}
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-[#0B0F1A]">
          {/* Camera-mode stages */}
          {isCamera && (
            <div key={stage.kind} className="absolute inset-0 stage-fade">
              {/* Dim viewfinder backdrop + soft center vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#141C2C] via-[#0B0F1A] to-[#05070C]" />
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(59,130,246,0.14), transparent 62%)' }} />

              {/* Guide frame */}
              <div className="absolute inset-0 flex items-center justify-center px-8">
                {stage.kind === 'selfie' ? (
                  <div className="relative flex h-[62%] w-[68%] items-center justify-center rounded-full">
                    <div className="oval-glow absolute inset-0 rounded-full border-2 border-white/85" />
                    <svg viewBox="0 0 24 24" className="face-breathe h-14 w-14 text-white/30" fill="currentColor">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7v1H4v-1z" />
                    </svg>
                  </div>
                ) : stage.kind === 'barcode' ? (
                  <div className="relative aspect-[85.6/54] w-full max-w-[210px] rounded-xl">
                    <span className="corner-pulse absolute -left-0.5 -top-0.5 h-7 w-7 rounded-tl-xl border-l-[3px] border-t-[3px] border-white" />
                    <span className="corner-pulse absolute -right-0.5 -top-0.5 h-7 w-7 rounded-tr-xl border-r-[3px] border-t-[3px] border-white" />
                    <span className="corner-pulse absolute -bottom-0.5 -left-0.5 h-7 w-7 rounded-bl-xl border-b-[3px] border-l-[3px] border-white" />
                    <span className="corner-pulse absolute -bottom-0.5 -right-0.5 h-7 w-7 rounded-br-xl border-b-[3px] border-r-[3px] border-white" />
                    <div className="absolute inset-3 flex items-center justify-center gap-[3px] rounded-md bg-white/[0.06] px-4">
                      {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 1].map((w, i) => (
                        <span key={i} className="h-9 bg-white/35" style={{ width: `${w}px` }} />
                      ))}
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
                      <div className="h-[22%] w-full bg-gradient-to-r from-navy-800 to-electric-700" />
                      <div className="flex gap-2.5 px-3 pt-2.5">
                        <div className="flex h-11 w-9 flex-shrink-0 items-center justify-center rounded-[3px] border border-slate-300 bg-slate-200">
                          <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" fill="currentColor">
                            <circle cx="12" cy="8" r="3.6" />
                            <path d="M5 20c0-3.9 3.1-6.2 7-6.2s7 2.3 7 6.2v.4H5v-.4z" />
                          </svg>
                        </div>
                        <div className="flex flex-1 flex-col justify-center gap-1.5 pt-0.5">
                          <div className="h-1.5 w-3/5 rounded-full bg-slate-400/70" />
                          <div className="h-1.5 w-4/5 rounded-full bg-slate-300" />
                          <div className="h-1.5 w-2/5 rounded-full bg-slate-300" />
                        </div>
                      </div>
                      <div className="mt-2 space-y-1 px-3">
                        <div className="h-1 w-full rounded-full bg-slate-300/70" />
                        <div className="h-1 w-5/6 rounded-full bg-slate-300/70" />
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
        </div>
      </div>

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
        @keyframes faceBreatheKf { 0%, 100% { transform: scale(1); opacity: .3; } 50% { transform: scale(1.06); opacity: .45; } }
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
