'use client';

import PhoneFrame from '@/components/ui/PhoneFrame';

/**
 * Faithful, code-based recreations of two real screens from the mobile app's
 * ePassport flow (VERIFY/src/components/id/EpassportDocumentStep.tsx and
 * EpassportChipStep.tsx) — not screenshots, since there's no simulator
 * available to capture real ones. Structure and copy are taken directly from
 * the real source; document/chip imagery is generic placeholder shapes, not
 * a real or web-sourced photo.
 */

const copy = {
  en: {
    step1Label: 'Step 1 of 3',
    step1Title: "Photograph the passport's data page",
    step1Instruction: 'Show the whole page, including the photo and both MRZ lines, uncropped and unreflected.',
    mrzLabel: 'MRZ & data zone',
    step2Title: 'Hold the passport against your phone',
    step2Subtitle: "Open the passport to the data page, then hold the cover flat against the back of your phone. The reader antenna is usually in the phone's upper third.",
    steps: [
      'Remove any thick phone case, if present.',
      "Place the passport on the upper part of your phone's back.",
      'Keep the phone and passport still until the read completes.',
    ],
    cta: 'Start chip read',
  },
  ar: {
    step1Label: 'الخطوة ١ من ٣',
    step1Title: 'صوّر صفحة بيانات الجواز',
    step1Instruction: 'أظهر الصفحة كاملة مع الصورة وسطرَي MRZ دون قص أو انعكاس.',
    mrzLabel: 'منطقة MRZ والبيانات',
    step2Title: 'ثبّت الجواز خلف الهاتف',
    step2Subtitle: 'افتح الجواز على صفحة البيانات، ثم ضع الغلاف ملاصقًا لظهر الهاتف. تقع هوائيات القراءة عادةً في الثلث العلوي من ظهر الهاتف.',
    steps: [
      'انزع غطاء الهاتف السميك إن وجد.',
      'ضع الجواز على الجزء العلوي من ظهر الهاتف.',
      'ثبّت الهاتف والجواز حتى تكتمل القراءة.',
    ],
    cta: 'ابدأ قراءة الشريحة',
  },
};


/** Screen 1: passport data-page capture, with the MRZ band the national-ID guide doesn't have. */
function PassportCaptureScreen({ isRTL }: { isRTL: boolean }) {
  const t = isRTL ? copy.ar : copy.en;
  return (
    <PhoneFrame size="sm">
      <div className="absolute inset-0 bg-gradient-to-b from-[#141C2C] via-[#0B0F1A] to-[#05070C]" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="relative aspect-[1.42/1] w-full max-w-[190px] rounded-lg">
          <span className="absolute -left-0.5 -top-0.5 h-6 w-6 rounded-tl-lg border-l-[2.5px] border-t-[2.5px] border-white" />
          <span className="absolute -right-0.5 -top-0.5 h-6 w-6 rounded-tr-lg border-r-[2.5px] border-t-[2.5px] border-white" />
          <span className="absolute -bottom-0.5 -left-0.5 h-6 w-6 rounded-bl-lg border-b-[2.5px] border-l-[2.5px] border-white" />
          <span className="absolute -bottom-0.5 -right-0.5 h-6 w-6 rounded-br-lg border-b-[2.5px] border-r-[2.5px] border-white" />
          {/* Illustrative generic passport-page layout */}
          <div className="absolute inset-2 overflow-hidden rounded-[3px] bg-[#EDEFF3]">
            <div className="flex gap-2 p-2 pb-0" style={{ height: '62%' }}>
              <div className="flex h-full w-[26%] flex-shrink-0 items-center justify-center rounded-[2px] border border-slate-300 bg-slate-200">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-400" fill="currentColor"><circle cx="12" cy="9" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7v1H4v-1z" /></svg>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-1">
                <div className="h-[3px] w-4/5 rounded-full bg-slate-400/70" />
                <div className="h-[3px] w-3/5 rounded-full bg-slate-300" />
                <div className="h-[3px] w-3/5 rounded-full bg-slate-300" />
                <div className="h-[3px] w-2/5 rounded-full bg-slate-300" />
              </div>
            </div>
            {/* MRZ band */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-center gap-[3px] border-t border-dashed border-electric-400 bg-electric-500/15 px-2" style={{ height: '30%' }}>
              <div className="font-mono text-[5px] leading-none text-electric-700/80">P&lt;SYR&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
              <div className="font-mono text-[5px] leading-none text-electric-700/80">SY0000000&lt;0SYR0001019M&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;4</div>
            </div>
          </div>
          <span className="absolute inset-x-0 bg-navy-950/80 px-1 py-[3px] text-center text-[7px] font-medium text-electric-200" style={{ bottom: '30%' }}>
            {t.mrzLabel}
          </span>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent px-3 pb-6 pt-5 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-white/60">{t.step1Label}</p>
        <h4 className="mt-1 text-[11px] font-bold leading-tight text-white">{t.step1Title}</h4>
        <p className="mt-1 text-[9px] leading-snug text-white/75">{t.step1Instruction}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/75 to-transparent px-5 pb-4 pt-8">
        <div className="h-8 w-8 rounded-full border-[3px] border-white bg-white/90" />
      </div>
    </PhoneFrame>
  );
}

/** Screen 2: NFC chip read — a non-camera guidance screen, the headline ePassport-only step. */
function NfcChipScreen({ isRTL }: { isRTL: boolean }) {
  const t = isRTL ? copy.ar : copy.en;
  return (
    <PhoneFrame size="sm">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1526] to-[#05070C]" />
      <div className="relative flex h-full flex-col items-center px-4 pt-14 text-center">
        <h4 className="text-[13px] font-bold leading-tight text-white">{t.step2Title}</h4>
        <p className="mt-2 text-[9.5px] leading-snug text-white/60">{t.step2Subtitle}</p>

        {/* Phone-and-antenna illustration */}
        <div className="relative mt-5 flex h-24 w-16 flex-shrink-0 items-center justify-center rounded-xl border-2 border-white/70">
          <div className="nfc-pulse absolute top-3 h-9 w-9 rounded-full border border-electric-300/70 bg-electric-400/10" />
          <svg viewBox="0 0 24 24" className="absolute top-4 h-5 w-5 text-electric-200" fill="currentColor">
            <path d="M4 5a2 2 0 012-2h9a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2 1v3h9V6H6zm0 5v7h9v-7H6z" />
          </svg>
        </div>

        <ol className="mt-6 w-full space-y-2 text-start">
          {t.steps.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-[1px] flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-[8px] font-bold text-white">
                {isRTL ? ['١', '٢', '٣'][i] : i + 1}
              </span>
              <span className="text-[9px] leading-snug text-white/70">{s}</span>
            </li>
          ))}
        </ol>

        <div className="mt-auto mb-6 w-full rounded-full bg-electric-500 py-2.5 text-[10px] font-semibold text-white">
          {t.cta}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes nfcPulseKf { 0% { transform: scale(0.7); opacity: .55; } 100% { transform: scale(2.1); opacity: 0; } }
        .nfc-pulse { animation: nfcPulseKf 1.8s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) { .nfc-pulse { animation: none; opacity: .25; } }
      `}} />
    </PhoneFrame>
  );
}

export function EpassportFlowShowcase({ isRTL }: { isRTL: boolean }) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-8">
      <PassportCaptureScreen isRTL={isRTL} />
      <NfcChipScreen isRTL={isRTL} />
    </div>
  );
}
