'use client';

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

const verifySteps = {
  en: [
    { label: 'Front photo of ID', icon: 'id' },
    { label: 'Scan the barcode', icon: 'barcode' },
    { label: 'Back photo of ID', icon: 'id' },
    { label: 'Live selfie to verify', icon: 'selfie' },
  ],
  ar: [
    { label: 'صورة الوجه الأمامي', icon: 'id' },
    { label: 'مسح الباركود', icon: 'barcode' },
    { label: 'صورة الوجه الخلفي', icon: 'id' },
    { label: 'صورة ذاتية للتحقّق', icon: 'selfie' },
  ],
};

function StepIcon({ kind, className }: { kind: string; className?: string }) {
  if (kind === 'barcode') {
    return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6v12M8 6v12M12 6v3m0 6v3M16 6v12M20 6v12" /></svg>;
  }
  if (kind === 'selfie') {
    return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
  }
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /><circle cx="9" cy="10" r="2" strokeWidth={1.8} /><path strokeLinecap="round" strokeLinejoin="round" d="M4 17l4-4 3 3 5-5 4 4" /></svg>;
}

/** Faithful recreation of the real verify-web app's step checklist, inside a phone frame. */
export function MobileVerifyChecklist({ isRTL }: { isRTL: boolean }) {
  const steps = isRTL ? verifySteps.ar : verifySteps.en;

  return (
    <div className="flex justify-center">
      <div className="relative w-[280px] rounded-[2.5rem] bg-slate-900 border-[7px] border-slate-900 shadow-2xl ring-1 ring-slate-900/10 overflow-hidden">
        <div className="bg-white overflow-hidden rounded-[1.9rem]" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="flex items-center justify-between px-5 pt-2.5 pb-1">
            <span className="text-[10px] font-semibold text-slate-900">9:41</span>
            <div className="flex items-center gap-1 text-slate-900">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h2v-8H2v8zm6 0h2V10H8v12zm6 0h2V6h-2v16zm6 0h2V2h-2v20z" /></svg>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><rect x="2" y="7" width="18" height="10" rx="2" /><rect x="4" y="9" width="12" height="6" rx="1" fill="currentColor" /></svg>
            </div>
          </div>

          <div className="px-5 pt-5 pb-7">
            <h2 className="text-lg font-bold text-slate-900 text-center">
              {isRTL ? 'تحقّق من هويتك' : 'Verify your identity'}
            </h2>
            <p className="mt-1.5 text-xs text-slate-500 text-center">
              {isRTL ? 'أربع خطوات سريعة — سنرشدك خلال كل خطوة عبر الكاميرا.' : "Four quick steps — we'll guide you through each one."}
            </p>

            <ol className="mt-5 space-y-2.5">
              {steps.map((s, i) => (
                <li key={i} className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
                    <StepIcon kind={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-xs font-semibold text-slate-800">{s.label}</span>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span>
                </li>
              ))}
            </ol>

            <button className="mt-6 w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
              {isRTL ? 'ابدأ' : 'Start'}
            </button>
          </div>
        </div>
      </div>
    </div>
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
