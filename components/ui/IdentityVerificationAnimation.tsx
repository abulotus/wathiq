'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SecurityWeave from '@/components/ui/SecurityWeave';

/**
 * A premium, looping "document verification" hero animation: a fictional ID
 * card is detected, scanned, its fields extracted, validated, its portrait
 * checked, then marked verified, before resetting. Built entirely with
 * Framer Motion + SVG — no video/GIF/canvas capture. The document is wholly
 * invented (fictional country, generic abstract emblem, silhouette
 * portrait, "Alex Morgan" sample data) and never implies a real government
 * document, consistent with every other document mockup on this site.
 *
 * A single stage machine drives every child's animation so the sequence
 * stays coordinated from one place instead of scattered timers.
 */

type Stage =
  | 'entering'
  | 'detected'
  | 'scanning'
  | 'extracting'
  | 'validating'
  | 'portraitChecking'
  | 'verified'
  | 'reset';

const STAGE_ORDER: Stage[] = [
  'entering', 'detected', 'scanning', 'extracting', 'validating', 'portraitChecking', 'verified', 'reset',
];

// Central timing config (ms) — the one place to retune the loop.
const TIMING: Record<Stage, number> = {
  entering: 800,
  detected: 500,
  scanning: 1800,
  extracting: 1200,
  validating: 1300,
  portraitChecking: 1000,
  verified: 1500,
  reset: 700,
};

const EASE = [0.22, 1, 0.36, 1] as const;

const copy = {
  en: {
    detectedLabel: 'Document detected',
    scanTitle: 'Scanning document',
    fields: { name: 'Full Name', dob: 'Date of Birth', docNumber: 'Document Number', expiry: 'Expiry Date' },
    steps: ['Document detected', 'Data extracted', 'MRZ validated', 'Security features checked', 'Portrait detected', 'Document authentic'],
    portraitMatch: 'Portrait match',
    verified: 'Identity verified',
  },
  ar: {
    detectedLabel: 'تم اكتشاف المستند',
    scanTitle: 'جارٍ مسح المستند',
    fields: { name: 'الاسم الكامل', dob: 'تاريخ الميلاد', docNumber: 'رقم الوثيقة', expiry: 'تاريخ الانتهاء' },
    steps: ['تم اكتشاف المستند', 'تم استخراج البيانات', 'تم التحقق من MRZ', 'تم فحص ميزات الأمان', 'تم اكتشاف الصورة', 'المستند أصلي'],
    portraitMatch: 'مطابقة الصورة',
    verified: 'تم التحقق من الهوية',
  },
};

// Fictional sample data — printed document content stays fixed regardless
// of UI language, exactly like a real document's own printed fields would.
const SAMPLE = {
  name: 'Alex Morgan',
  dob: '14 May 1995',
  nationality: 'NOVARAN',
  docNumber: 'XG438291',
  expiry: '14 May 2031',
  mrzLine1: 'IDNVA<<MORGAN<<ALEX<<<<<<<<<<<<<<<<<<<<<<<<',
  mrzLine2: 'XG4382919NVA9505149M3105146<<<<<<<<<<<<<<06',
};

function useStageMachine(reducedMotion: boolean) {
  const [stage, setStage] = useState<Stage>('entering');

  useEffect(() => {
    if (reducedMotion) return;
    const idx = STAGE_ORDER.indexOf(stage);
    const next = STAGE_ORDER[(idx + 1) % STAGE_ORDER.length];
    const t = setTimeout(() => setStage(next), TIMING[stage]);
    return () => clearTimeout(t);
  }, [stage, reducedMotion]);

  return reducedMotion ? 'verified' : stage;
}

/* ---------------------------------- Icons --------------------------------- */

function CheckGlyph({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <motion.path
        d="M3.5 8.3l2.8 2.8 6.2-6.6"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay, ease: EASE }}
      />
    </svg>
  );
}

function PortraitSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 130" className={className} preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <circle cx="50" cy="46" r="25" fill="#94A3B8" />
      <path d="M6 132C6 97 24 78 50 78C76 78 94 97 94 132Z" fill="#94A3B8" />
    </svg>
  );
}

/** Abstract, wholly invented emblem — not a coat of arms, not the Wathiq mark. */
function AbstractEmblem({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 7l4.7 9.5L35 18l-7.5 7 1.8 10.3L20 30.5l-9.3 4.8L12.5 25 5 18l10.3-1.5L20 7z"
        fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

/* -------------------------------- DocumentField ---------------------------- */

/** A bounding rectangle over one field on the card, used by the scan pass. */
export function DocumentField({
  x, y, w, h, active, delay,
}: { x: number; y: number; w: number; h: number; active: boolean; delay: number }) {
  return (
    <motion.span
      className="pointer-events-none absolute rounded-[3px] border border-electric-300"
      style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` }}
      initial={{ opacity: 0 }}
      animate={active ? { opacity: [0, 1, 0], transition: { duration: 0.9, delay, ease: EASE } } : { opacity: 0 }}
      aria-hidden="true"
    />
  );
}

/* -------------------------------- ScanningLine ------------------------------ */

export function ScanningLine({ visible, duration }: { visible: boolean; duration: number }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, #60A5FA, #5EEAD4, transparent)', boxShadow: '0 0 14px 2px rgba(94,234,212,0.55)' }}
          initial={{ top: '2%', opacity: 0 }}
          animate={{ top: ['2%', '98%'], opacity: [0, 1, 1, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration / 1000, ease: 'easeInOut', times: [0, 0.08, 0.92, 1] }}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
}

/* ------------------------------- DetectionCorners ---------------------------- */

export function DetectionCorners({ stage }: { stage: Stage }) {
  const show = stage !== 'entering' && stage !== 'reset';
  const verified = stage === 'verified';
  const color = verified ? '#2DD4BF' : '#60A5FA';
  const corners = [
    { key: 'tl', path: 'M0 14V4a4 4 0 014-4h10', pos: 'left-0 top-0' },
    { key: 'tr', path: 'M0 0h10a4 4 0 014 4v10', pos: 'right-0 top-0' },
    { key: 'bl', path: 'M0 0v10a4 4 0 004 4h10', pos: 'left-0 bottom-0' },
    { key: 'br', path: 'M14 0h-10a4 4 0 00-4 4v10', pos: 'right-0 bottom-0' },
  ] as const;

  return (
    <>
      {show && (
        <div
          className="pointer-events-none absolute -inset-2 rounded-2xl transition-shadow duration-500"
          style={{ boxShadow: `0 0 0 1px ${verified ? 'rgba(45,212,191,0.35)' : 'rgba(96,165,250,0.3)'}, 0 0 24px 2px ${verified ? 'rgba(45,212,191,0.18)' : 'rgba(96,165,250,0.16)'}` }}
          aria-hidden="true"
        />
      )}
      {corners.map((c) => (
        <svg key={c.key} viewBox="0 0 18 18" className={`pointer-events-none absolute h-5 w-5 ${c.pos}`} aria-hidden="true">
          <motion.path
            d={c.path} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={show ? { pathLength: 1, opacity: 1, stroke: color } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          />
        </svg>
      ))}
    </>
  );
}

/* -------------------------------- DocumentCard ------------------------------- */

const SCAN_FIELDS = [
  { id: 'photo', x: 6, y: 16, w: 26, h: 40 },
  { id: 'name', x: 36, y: 18, w: 58, h: 8 },
  { id: 'dob', x: 36, y: 30, w: 40, h: 6 },
  { id: 'docNumber', x: 36, y: 40, w: 46, h: 6 },
  { id: 'expiry', x: 36, y: 50, w: 34, h: 6 },
  { id: 'nationality', x: 36, y: 60, w: 30, h: 6 },
  { id: 'signature', x: 6, y: 74, w: 26, h: 12 },
  { id: 'mrz', x: 6, y: 88, w: 88, h: 10 },
] as const;

export function DocumentCard({ stage, isRTL }: { stage: Stage; isRTL: boolean }) {
  const t = isRTL ? copy.ar : copy.en;
  const settled = stage !== 'entering';
  const scanning = stage === 'scanning';
  const verified = stage === 'verified';

  return (
    <motion.div
      className="relative aspect-[85.6/54] w-full overflow-visible"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-[18px] border border-slate-200 bg-white"
        style={{ transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, scale: 0.94, y: 25, rotateX: 4, rotateY: -7 }}
        animate={{
          opacity: stage === 'reset' ? 0 : 1,
          scale: stage === 'reset' ? 0.96 : verified ? [1, 1.015, 1] : 1,
          y: stage === 'reset' ? 20 : verified ? [0, -3, 0] : 0,
          rotateX: settled ? 0 : 4,
          rotateY: settled ? 0 : -7,
          boxShadow: settled
            ? '0 30px 60px -20px rgba(7,17,48,0.28), 0 10px 24px -12px rgba(7,17,48,0.18)'
            : '0 14px 30px -16px rgba(7,17,48,0.16)',
        }}
        transition={{ duration: TIMING.entering / 1000, ease: EASE }}
      >
        <SecurityWeave className="opacity-[0.08]" />

        {/* Header: fictional country + abstract emblem */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/70 px-[3%] py-[2.2%]">
          <AbstractEmblem className="h-4 w-4 flex-shrink-0 text-navy-700 sm:h-5 sm:w-5" />
          <div className="flex flex-col leading-tight">
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-navy-800 sm:text-[11px]">Republic of Novara</span>
            <span className="text-[6.5px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-[7.5px]">Identification Card</span>
          </div>
        </div>

        <div className="flex gap-[3%] px-[3%] pt-[3%]" style={{ height: '58%' }}>
          <div className="h-full w-[22%] flex-shrink-0 overflow-hidden rounded-[4px] border border-slate-200 bg-slate-100">
            <PortraitSilhouette className="h-full w-full" />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-[6%]">
            <Field label={t.fields.name} value={SAMPLE.name} big />
            <Field label={t.fields.dob} value={SAMPLE.dob} />
            <Field label={t.fields.docNumber} value={SAMPLE.docNumber} />
            <Field label={t.fields.expiry} value={SAMPLE.expiry} />
          </div>
        </div>

        <div className="flex items-end justify-between px-[3%] pb-[2%]" style={{ height: '14%' }}>
          <SignatureSquiggle className="h-[70%] w-[20%] text-navy-600" />
          <span className="text-[6px] uppercase tracking-[0.14em] text-slate-400 sm:text-[7px]">{SAMPLE.nationality}</span>
        </div>

        <div className="space-y-[3%] border-t border-dashed border-slate-200 bg-slate-50/60 px-[3%] py-[2.5%]">
          <p className="truncate font-mono text-[6px] leading-none tracking-tight text-slate-500 sm:text-[7px]">{SAMPLE.mrzLine1}</p>
          <p className="truncate font-mono text-[6px] leading-none tracking-tight text-slate-500 sm:text-[7px]">{SAMPLE.mrzLine2}</p>
        </div>

        {/* Scan field highlights */}
        {SCAN_FIELDS.map((f, i) => (
          <DocumentField key={f.id} x={f.x} y={f.y} w={f.w} h={f.h} active={scanning} delay={(i / SCAN_FIELDS.length) * (TIMING.scanning / 1000)} />
        ))}

        <ScanningLine visible={scanning} duration={TIMING.scanning} />
      </motion.div>

      <DetectionCorners stage={stage} />

      <AnimatePresence>
        {stage === 'detected' && (
          <motion.span
            className="absolute -top-8 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 whitespace-nowrap rounded-full bg-navy-900 px-3 py-1 text-[10px] font-semibold text-white"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
          >
            {t.detectedLabel}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Field({ label, value, big }: { label: string; value: string; big?: boolean }) {
  return (
    <div className="flex flex-col gap-[1px]">
      <span className="text-[6px] uppercase tracking-[0.1em] text-slate-400 sm:text-[7px]">{label}</span>
      <span className={`truncate font-semibold text-navy-900 ${big ? 'text-[10px] sm:text-[12px]' : 'text-[8px] sm:text-[9.5px]'}`}>{value}</span>
    </div>
  );
}

function SignatureSquiggle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 20" className={className} fill="none" aria-hidden="true">
      <path d="M2 14c3-6 6-9 8-6s1 9 4 8 4-10 7-9 2 7 5 6 3-6 6-5 2 5 5 4 3-7 6-6 2 5 5 4"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
    </svg>
  );
}

/* ---------------------------- DataExtractionPanel ---------------------------- */

const EXTRACT_PANELS = [
  { id: 'name', corner: 'start-0 top-[6%] sm:top-[10%]', side: 'start' as const },
  { id: 'dob', corner: 'end-0 top-[6%] sm:top-[10%]', side: 'end' as const },
  { id: 'docNumber', corner: 'start-0 bottom-[6%] sm:bottom-[10%]', side: 'start' as const },
  { id: 'expiry', corner: 'end-0 bottom-[6%] sm:bottom-[10%]', side: 'end' as const },
] as const;

/** A short animated leader-line on the panel's inward edge, pointing back toward the document. */
function ConnectorStub({ side, delay }: { side: 'start' | 'end'; delay: number }) {
  const pointsRight = side === 'start';
  return (
    <svg viewBox="0 0 28 2" className={`absolute top-1/2 h-[2px] w-7 -translate-y-1/2 ${pointsRight ? 'end-full' : 'start-full'}`} aria-hidden="true">
      <motion.line
        x1={pointsRight ? 0 : 28} y1="1" x2={pointsRight ? 28 : 0} y2="1"
        stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay, ease: EASE }}
      />
    </svg>
  );
}

export function DataExtractionPanel({
  id, label, value, delay, className, side,
}: { id: string; label: string; value: string; delay: number; className: string; side: 'start' | 'end' }) {
  return (
    <motion.div
      className={`absolute z-20 hidden w-[132px] rounded-xl border border-slate-200/80 bg-white/85 px-3 py-2 shadow-lg backdrop-blur-md sm:block ${className}`}
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.4, delay, ease: EASE }}
      data-field={id}
    >
      <ConnectorStub side={side} delay={delay + 0.1} />
      <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-slate-400">{label}</p>
      <div className="mt-0.5 flex items-center justify-between gap-2">
        <p className="truncate text-[12px] font-semibold text-navy-900">{value}</p>
        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          <CheckGlyph className="h-2.5 w-2.5" delay={delay + 0.25} />
        </span>
      </div>
    </motion.div>
  );
}

/* ------------------------------- VerificationStep ---------------------------- */

export function VerificationStep({ label, delay, active }: { label: string; delay: number; active: boolean }) {
  return (
    <motion.li
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: 8 }}
      animate={active ? { opacity: 1, x: 0 } : { opacity: 0.35, x: 0 }}
      transition={{ duration: 0.3, delay, ease: EASE }}
    >
      <span className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-slate-300">
        {active && (
          <motion.span
            className="absolute inset-0 rounded-full bg-teal-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25, delay: delay + 0.15 }}
          />
        )}
        {active && <CheckGlyph className="relative h-2.5 w-2.5 text-white" delay={delay + 0.2} />}
      </span>
      <span className="text-[11px] font-medium text-slate-600">{label}</span>
    </motion.li>
  );
}

/* ------------------------------- VerificationPanel ---------------------------- */

export function VerificationPanel({ stage, isRTL }: { stage: Stage; isRTL: boolean }) {
  const t = isRTL ? copy.ar : copy.en;
  const visible = ['validating', 'portraitChecking', 'verified'].includes(stage);
  const activeCount = stage === 'validating' ? 4 : stage === 'portraitChecking' ? 5 : stage === 'verified' ? 6 : 0;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute start-1/2 top-full z-20 mt-10 w-[280px] -translate-x-1/2 rtl:translate-x-1/2 rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-lg backdrop-blur-md sm:mt-12 sm:w-[320px]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
            {t.steps.map((label, i) => (
              <VerificationStep key={label} label={label} active={i < activeCount} delay={i * 0.18} />
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* --------------------------------- PortraitScan ------------------------------- */

export function PortraitScan({ stage, isRTL }: { stage: Stage; isRTL: boolean }) {
  const t = isRTL ? copy.ar : copy.en;
  const visible = stage === 'portraitChecking' || stage === 'verified';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute -top-20 start-1/2 z-20 flex -translate-x-1/2 rtl:translate-x-1/2 flex-col items-center gap-1.5 sm:-top-24"
          initial={{ opacity: 0, scale: 0.85, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <div className="relative flex h-12 w-12 items-center justify-center">
            <svg viewBox="0 0 44 44" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
              <motion.circle
                cx="22" cy="22" r="19" fill="none" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease: EASE }}
              />
            </svg>
            <div className="h-9 w-9 overflow-hidden rounded-full bg-slate-100">
              <PortraitSilhouette className="h-full w-full" />
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-navy-900 shadow-md">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-teal-100 text-teal-600">
              <CheckGlyph className="h-2 w-2" delay={0.3} />
            </span>
            {t.portraitMatch}
            <span className="text-slate-400">99.7%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* --------------------------------- SuccessBadge ------------------------------- */

export function SuccessBadge({ visible, label }: { visible: boolean; label: string }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute bottom-[-9%] start-1/2 z-20 flex -translate-x-1/2 rtl:translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-xl"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 6 }}
          transition={{ type: 'spring', stiffness: 340, damping: 26 }}
        >
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
            <CheckGlyph className="h-3.5 w-3.5" delay={0.1} />
          </span>
          <span className="text-sm font-bold text-navy-900">{label}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ----------------------------------- Root ------------------------------------ */

export default function IdentityVerificationAnimation({ isRTL }: { isRTL: boolean }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const stage = useStageMachine(reducedMotion);
  const t = isRTL ? copy.ar : copy.en;

  const extracting = ['extracting', 'validating', 'portraitChecking', 'verified'].includes(stage);
  const panels = useMemo(() => EXTRACT_PANELS.map((p, i) => ({
    ...p,
    label: [t.fields.name, t.fields.dob, t.fields.docNumber, t.fields.expiry][i],
    value: [SAMPLE.name, SAMPLE.dob, SAMPLE.docNumber, SAMPLE.expiry][i],
    delay: i * 0.15,
  })), [t]);

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[300px] sm:h-[440px] sm:max-w-[560px] lg:h-[500px] lg:max-w-[680px]">
      <div
        className="absolute inset-0 -z-10 rounded-[32px]"
        style={{ background: 'radial-gradient(circle at 50% 45%, rgba(37,99,235,0.06), transparent 62%)' }}
        aria-hidden="true"
      />

      <div className="absolute start-1/2 top-1/2 w-[78%] -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 sm:w-[46%]">
        <DocumentCard stage={stage} isRTL={isRTL} />

        <AnimatePresence>
          {extracting && panels.map((p) => (
            <DataExtractionPanel key={p.id} id={p.id} label={p.label} value={p.value} delay={p.delay} className={p.corner} side={p.side} />
          ))}
        </AnimatePresence>

        <VerificationPanel stage={stage} isRTL={isRTL} />
        <PortraitScan stage={stage} isRTL={isRTL} />
        <SuccessBadge visible={stage === 'verified'} label={t.verified} />
      </div>
    </div>
  );
}
