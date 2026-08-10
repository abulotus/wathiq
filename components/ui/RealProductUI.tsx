import PhoneFrame from '@/components/ui/PhoneFrame';

/**
 * Faithful, code-based recreations of real Wathiq product UI — not
 * screenshots. Structure, labels, and status colors are taken directly from
 * the real client-dashboard and verify-web apps (VerificationControlPanel,
 * Badge, StepChecklist), rendered with fictional sample data only.
 */

const stages = {
  en: [
    { label: 'Card capture', desc: 'Front and back images stored', status: 'complete' as const },
    { label: 'Document evidence', desc: 'Image, OCR and registry processing', status: 'complete' as const },
    { label: 'PDF417 evidence', desc: 'Raw barcode parsed and compared by the backend', status: 'complete' as const },
    { label: 'Biometrics', desc: 'Liveness and card-photo face matching', status: 'complete' as const },
  ],
  ar: [
    { label: 'التقاط البطاقة', desc: 'تخزين صور الوجه والظهر', status: 'complete' as const },
    { label: 'بيانات المستند', desc: 'معالجة الصورة والتعرف الضوئي والسجل', status: 'complete' as const },
    { label: 'بيانات الباركود PDF417', desc: 'تحليل الباركود الخام ومقارنته من قبل الخادم', status: 'complete' as const },
    { label: 'القياسات الحيوية', desc: 'التحقق من الحيوية ومطابقة الوجه مع صورة البطاقة', status: 'complete' as const },
  ],
};

const checks = {
  en: [
    'Document data consistency', 'Barcode validity', 'Image quality', 'Face match',
    'ID back capture', 'Liveness check', 'ID front capture', 'Text extraction (OCR)',
    'Registry lookup', 'OCR & barcode match',
  ],
  ar: [
    'اتساق بيانات المستند', 'صلاحية الباركود', 'جودة الصورة', 'مطابقة الوجه',
    'التقاط الوجه الخلفي للبطاقة', 'التحقق من الحيوية', 'التقاط الوجه الأمامي للبطاقة', 'استخراج النص (OCR)',
    'التحقق من السجل', 'تطابق OCR والباركود',
  ],
};

/** Faithful recreation of the real dashboard's verification-controls card. */
export function VerificationChecksCard({ isRTL }: { isRTL: boolean }) {
  const stageList = isRTL ? stages.ar : stages.en;
  const checkList = isRTL ? checks.ar : checks.en;
  const passedLabel = isRTL ? 'ناجح' : 'Passed';
  const completeLabel = isRTL ? 'مكتملة' : 'Complete';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className={isRTL ? 'text-right' : ''}>
          <h3 className="text-base font-semibold text-slate-900">
            {isRTL ? 'ضوابط التحقق' : 'Verification Controls'}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {isRTL ? 'تقدَّم الأدلة وجاهزية القرار كما يديرها الخادم.' : 'Evidence and decision readiness, as managed by the backend.'}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
            {isRTL ? 'الهوية الوطنية' : 'National ID'}
          </span>
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-xs font-medium bg-blue-50 text-blue-700">
            SY_NATIONAL_ID_V1
          </span>
        </div>
      </div>

      <ol className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stageList.map((stage, i) => (
          <li key={i} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {isRTL ? `الخطوة ${i + 1}` : `Step ${i + 1}`}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {completeLabel}
              </span>
            </div>
            <p className="mt-2 text-sm font-semibold text-slate-900">{stage.label}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">{stage.desc}</p>
          </li>
        ))}
      </ol>

      <div className="mt-5">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isRTL ? 'الفحوصات المطلوبة' : 'Required Checks'}
        </h4>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
          {checkList.map((c, i) => (
            <li key={i} className="flex min-w-0 items-center justify-between gap-2 rounded-md border border-slate-200 px-3 py-2">
              <span className="flex min-w-0 items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="truncate text-xs font-medium text-slate-900">{c}</span>
              </span>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800">
                {passedLabel}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// The real ePassport flow's actual step count (document -> chip -> selfie),
// distinct from the national-ID/barcode flow already shown on the homepage —
// this checklist should introduce the ePassport journey, not duplicate it.
const verifySteps = {
  en: [
    { label: "Photo of the passport's data page", icon: 'id' },
    { label: 'Read the chip over NFC', icon: 'nfc' },
    { label: 'Live selfie to verify', icon: 'selfie' },
  ],
  ar: [
    { label: 'صورة صفحة بيانات الجواز', icon: 'id' },
    { label: 'قراءة الشريحة عبر NFC', icon: 'nfc' },
    { label: 'صورة ذاتية للتحقّق', icon: 'selfie' },
  ],
};

// Matches the real app's actual icon set (Ionicons book-outline /
// radio-outline / person-circle-outline via @expo/vector-icons), redrawn as
// inline SVG since the web has no Ionicons dependency.
function StepIcon({ kind, className }: { kind: string; className?: string }) {
  if (kind === 'nfc') {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 15.3a5 5 0 017 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 12.2a9 9 0 0113 0" />
      </svg>
    );
  }
  if (kind === 'selfie') {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="9.8" r="2.6" />
        <path strokeLinecap="round" d="M6.3 18.2a6.3 6.3 0 0111.4 0" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.7c-1.5-1-4-1.4-6-1.15a1 1 0 00-.85 1v10.7a1 1 0 001.15.99c1.85-.28 4.1.1 5.7 1.26" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.7c1.5-1 4-1.4 6-1.15a1 1 0 01.85 1v10.7a1 1 0 01-1.15.99c-1.85-.28-4.1.1-5.7 1.26" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.7v12.8" />
    </svg>
  );
}

/**
 * Faithful recreation of the real app's intro checklist (StepChecklist in
 * DocumentStep.tsx), shown before anything has started — so the first step
 * reads as "current" (about to begin) and the rest as "pending" (numbered,
 * dimmed), matching the real component's own done/current/pending states.
 * Showing every step pre-checked while the button still says "Start" was a
 * contradiction the real screen never has.
 */
export function MobileVerifyChecklist({ isRTL }: { isRTL: boolean }) {
  const steps = isRTL ? verifySteps.ar : verifySteps.en;

  return (
    <PhoneFrame>
      <div className="absolute inset-0 flex flex-col bg-[#F6F8FC]" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="flex-1 px-5 pt-9">
          <h2 className="text-2xl font-bold leading-tight text-navy-900 text-center">
            {isRTL ? 'تحقّق من هويتك' : 'Verify your identity'}
          </h2>
          <p className="mt-1.5 text-sm leading-snug text-slate-500 text-center">
            {isRTL ? 'ثلاث خطوات — سنرشدك خلال كل خطوة عبر الكاميرا.' : "Three steps — we'll guide you through each one."}
          </p>

          <ol className="mt-5 space-y-3">
            {steps.map((s, i) => {
              const current = i === 0;
              return (
                <li
                  key={i}
                  className={`flex min-h-[72px] items-center gap-3 rounded-2xl border p-3 transition-colors ${
                    current
                      ? 'border-electric-300 bg-electric-50 shadow-[0_2px_8px_rgba(11,27,58,0.06)]'
                      : 'border-slate-100 bg-white opacity-[0.62]'
                  }`}
                >
                  <span className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl border ${
                    current ? 'border-electric-300 bg-white text-electric-500' : 'border-transparent bg-slate-100 text-slate-500'
                  }`}>
                    <StepIcon kind={s.icon} className="h-5 w-5" />
                  </span>
                  <span className={`flex-1 text-sm font-semibold ${current ? 'text-navy-900' : 'text-slate-500'}`}>{s.label}</span>
                  <span className={`shrink-0 text-xs font-semibold tabular-nums ${current ? 'text-electric-500' : 'text-slate-500'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-4">
          <button className="min-h-[56px] w-full rounded-2xl bg-gradient-to-br from-electric-500 to-electric-600 text-base font-bold text-white shadow-[0_2px_8px_rgba(11,27,58,0.06)]">
            {isRTL ? 'ابدأ' : 'Start'}
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}

/** Decorative QR pattern — visually a QR code, not a real encodable one (no real session exists). */
function SampleQrCode() {
  const size = 15;
  const inFinder = (x: number, y: number) =>
    (x < 4 && y < 4) || (x > size - 5 && y < 4) || (x < 4 && y > size - 5);
  const filled = (x: number, y: number) => (x * 3 + y * 7 + x * y) % 5 === 0;
  const cells: { x: number; y: number }[] = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!inFinder(x, y) && filled(x, y)) cells.push({ x, y });
    }
  }
  const finderOrigins = [
    [0, 0],
    [size - 4, 0],
    [0, size - 4],
  ];

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full" shapeRendering="crispEdges">
      <rect width={size} height={size} fill="white" />
      {cells.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width="1" height="1" fill="#0F172A" />
      ))}
      {finderOrigins.map(([fx, fy], i) => (
        <g key={i}>
          <rect x={fx} y={fy} width="4" height="4" fill="#0F172A" />
          <rect x={fx + 0.8} y={fy + 0.8} width="2.4" height="2.4" fill="white" />
          <rect x={fx + 1.4} y={fy + 1.4} width="1.2" height="1.2" fill="#0F172A" />
        </g>
      ))}
    </svg>
  );
}

const newVerificationCopy = {
  en: {
    title: 'Start a New Verification',
    desc: 'The client initiates a request; the applicant starts their session on the link, QR code, or activation code — whichever is easiest to hand off.',
    warning: 'Verification created. The activation code and link are one-time credentials shown only now — share them only with the applicant.',
    activationCode: 'Activation code',
    copyCode: 'Copy code',
    verificationLink: 'Verification link',
    copyLink: 'Copy link',
    done: 'Done',
    qrAlt: 'QR code for the verification link',
    sample: "Faithful recreation of the real dashboard's session-creation panel, with a sample code and link — no real session exists behind them.",
  },
  ar: {
    title: 'ابدأ طلب تحقّق جديد',
    desc: 'تبدأ المؤسسة الطلب، ويبدأ المتقدّم جلسته عبر الرابط أو رمز QR أو رمز التفعيل — أيهما أسهل لتسليمه.',
    warning: 'تم إنشاء التحقّق. رمز التفعيل والرابط بيانات اعتماد لمرة واحدة تظهر الآن فقط — شاركها مع مقدم الطلب فقط.',
    activationCode: 'رمز التفعيل',
    copyCode: 'نسخ الرمز',
    verificationLink: 'رابط التحقّق',
    copyLink: 'نسخ الرابط',
    done: 'تم',
    qrAlt: 'رمز QR لرابط التحقّق',
    sample: 'إعادة بناء دقيقة للوحة إنشاء الجلسة الفعلية، برمز ورابط افتراضيين — لا توجد جلسة حقيقية خلفهما.',
  },
};

/** Faithful recreation of the real dashboard's "verification created" panel (NewVerificationPanel.tsx). */
export function NewVerificationCard({ isRTL }: { isRTL: boolean }) {
  const t = isRTL ? newVerificationCopy.ar : newVerificationCopy.en;
  const sampleCode = '94870456'.split('');
  const sampleUrl = 'https://verify.wathiq-sy.com/verify#session_token=tDqCSiLsgP7HDJ_GrMK2…';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={isRTL ? 'text-right' : ''}>
        <h3 className="text-base font-semibold text-slate-900">{t.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{t.desc}</p>
      </div>

      <div className="mt-5 flex flex-wrap items-start gap-5">
        <div className="min-w-[240px] flex-1">
          <p className="rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-800">{t.warning}</p>

          <div className="mt-4">
            <p className="text-xs font-medium text-slate-500">{t.activationCode}</p>
            <div className="mt-1.5 flex items-center gap-2">
              <div aria-label="Activation code" dir="ltr" className="flex items-center gap-1.5">
                {sampleCode.map((digit, i) => (
                  <span key={i} className="flex h-11 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 font-mono text-lg font-semibold text-slate-900">
                    {digit}
                  </span>
                ))}
              </div>
              <span className="shrink-0 rounded-md border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                {t.copyCode}
              </span>
            </div>
          </div>

          <p className="mt-4 text-xs font-medium text-slate-500">{t.verificationLink}</p>
          <div className="mt-1.5 flex items-center gap-2">
            <code className="flex-1 truncate rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-xs text-slate-700" dir="ltr">
              {sampleUrl}
            </code>
            <span className="shrink-0 rounded-md border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
              {t.copyLink}
            </span>
          </div>

          <span className="mt-4 inline-block rounded-md border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
            {t.done}
          </span>
        </div>

        <div className="h-[150px] w-[150px] shrink-0 overflow-hidden rounded-md border border-slate-200 p-1.5" role="img" aria-label={t.qrAlt}>
          <SampleQrCode />
        </div>
      </div>

      <p className="mt-5 border-t border-slate-100 pt-3 text-xs text-slate-400">{t.sample}</p>
    </div>
  );
}
