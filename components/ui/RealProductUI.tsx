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
