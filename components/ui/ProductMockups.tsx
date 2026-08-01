'use client';

const railItems = ['dashboard', 'workflow', 'reports', 'settings'] as const;
const railIcons: Record<string, JSX.Element> = {
  dashboard: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM13 13a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6zM4 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
    </svg>
  ),
  workflow: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  reports: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a1 1 0 011-1h0a1 1 0 011 1v6m4 0v-3a1 1 0 011-1h0a1 1 0 011 1v3M5 19V9a1 1 0 011-1h0a1 1 0 011 1v10M3 21h18" />
    </svg>
  ),
  settings: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

function WinControls() {
  return (
    <div className="flex items-stretch h-full text-slate-400">
      <span className="w-11 flex items-center justify-center hover:bg-slate-200 transition-colors">
        <svg width="11" height="11" viewBox="0 0 11 11"><line x1="1" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="1" /></svg>
      </span>
      <span className="w-11 flex items-center justify-center hover:bg-slate-200 transition-colors">
        <svg width="11" height="11" viewBox="0 0 11 11"><rect x="1.5" y="1.5" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
      </span>
      <span className="w-11 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
        <svg width="11" height="11" viewBox="0 0 11 11"><line x1="1.5" y1="1.5" x2="9.5" y2="9.5" stroke="currentColor" strokeWidth="1" /><line x1="9.5" y1="1.5" x2="1.5" y2="9.5" stroke="currentColor" strokeWidth="1" /></svg>
      </span>
    </div>
  );
}

/** Illustrative recreation of the real product's structure. Fictional sample data only — not an actual screenshot. */
export function DesktopApp({
  pageTitle,
  active,
  isRTL,
  children,
}: {
  pageTitle: string;
  active: string;
  isRTL: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xl ring-1 ring-slate-900/5" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between bg-slate-100 border-b border-slate-200 h-9 select-none">
        <div className="flex items-center gap-2 ps-3">
          <div className="w-4 h-4 rounded bg-navy-950 flex items-center justify-center overflow-hidden flex-shrink-0">
            <svg viewBox="0 0 1254 1254" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M 328 376 L 308 398 L 295 418 L 284 442 L 276 472 L 274 492 L 274 635 L 276 653 L 284 682 L 292 699 L 302 714 L 315 728 L 405 811 L 430 826 L 457 833 L 570 833 L 577 826 L 577 818 L 575 814 L 433 684 L 422 666 L 417 648 L 417 517 L 426 491 L 443 471 L 463 459 L 484 454 L 816 454 L 837 459 L 857 471 L 875 492 L 883 514 L 884 841 L 878 867 L 872 880 L 860 897 L 849 908 L 833 919 L 808 928 L 425 928 L 405 924 L 383 916 L 355 899 L 196 757 L 189 753 L 179 754 L 173 762 L 174 931 L 178 939 L 260 1019 L 285 1038 L 320 1057 L 354 1069 L 400 1077 L 870 1077 L 911 1069 L 942 1056 L 973 1035 L 993 1015 L 1010 991 L 1023 963 L 1031 930 L 1031 904 L 1027 904 L 1009 922 L 988 933 L 974 937 L 944 940 L 943 937 L 972 924 L 996 904 L 1016 876 L 1028 843 L 1030 828 L 1031 484 L 1025 451 L 1019 434 L 1009 414 L 992 390 L 974 372 L 954 357 L 934 346 L 904 335 L 877 330 L 441 329 L 411 333 L 382 342 L 356 355 Z" fill="#FFFFFF" fillRule="evenodd" />
              <path d="M 526 705 L 526 711 L 528 716 L 533 719 L 637 820 L 652 832 L 659 834 L 800 834 L 807 831 L 811 826 L 812 765 L 810 760 L 749 701 L 744 698 L 737 696 L 537 696 L 530 699 Z M 414 242 L 417 251 L 425 256 L 855 256 L 867 250 L 925 191 L 927 181 L 925 176 L 918 171 L 469 171 L 417 198 L 414 205 Z" fill="#2563EB" fillRule="evenodd" />
            </svg>
          </div>
          <span className="text-slate-500 text-[11px] font-medium">{isRTL ? 'واثق — منصة التحقق' : 'Wathiq — Verification Platform'}</span>
        </div>
        <WinControls />
      </div>

      <div className="flex">
        <div className="w-14 bg-navy-900 flex flex-col items-center py-3 gap-1 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden mb-2 flex-shrink-0">
            <svg viewBox="0 0 1254 1254" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M 328 376 L 308 398 L 295 418 L 284 442 L 276 472 L 274 492 L 274 635 L 276 653 L 284 682 L 292 699 L 302 714 L 315 728 L 405 811 L 430 826 L 457 833 L 570 833 L 577 826 L 577 818 L 575 814 L 433 684 L 422 666 L 417 648 L 417 517 L 426 491 L 443 471 L 463 459 L 484 454 L 816 454 L 837 459 L 857 471 L 875 492 L 883 514 L 884 841 L 878 867 L 872 880 L 860 897 L 849 908 L 833 919 L 808 928 L 425 928 L 405 924 L 383 916 L 355 899 L 196 757 L 189 753 L 179 754 L 173 762 L 174 931 L 178 939 L 260 1019 L 285 1038 L 320 1057 L 354 1069 L 400 1077 L 870 1077 L 911 1069 L 942 1056 L 973 1035 L 993 1015 L 1010 991 L 1023 963 L 1031 930 L 1031 904 L 1027 904 L 1009 922 L 988 933 L 974 937 L 944 940 L 943 937 L 972 924 L 996 904 L 1016 876 L 1028 843 L 1030 828 L 1031 484 L 1025 451 L 1019 434 L 1009 414 L 992 390 L 974 372 L 954 357 L 934 346 L 904 335 L 877 330 L 441 329 L 411 333 L 382 342 L 356 355 Z" fill="#FFFFFF" fillRule="evenodd" />
              <path d="M 526 705 L 526 711 L 528 716 L 533 719 L 637 820 L 652 832 L 659 834 L 800 834 L 807 831 L 811 826 L 812 765 L 810 760 L 749 701 L 744 698 L 737 696 L 537 696 L 530 699 Z M 414 242 L 417 251 L 425 256 L 855 256 L 867 250 L 925 191 L 927 181 L 925 176 L 918 171 L 469 171 L 417 198 L 414 205 Z" fill="#60A5FA" fillRule="evenodd" />
            </svg>
          </div>
          <div className="w-7 h-px bg-white/10 mb-1" />
          {railItems.map((item) => (
            <span
              key={item}
              className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                item === active
                  ? 'bg-white/10 text-white'
                  : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {item === active && <span className="absolute start-0 inset-y-1.5 w-0.5 rounded-full bg-teal-400" />}
              {railIcons[item]}
            </span>
          ))}
          <div className="mt-auto w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white text-[10px] font-bold">FK</div>
        </div>

        <div className="flex-1 min-w-0 bg-slate-50 text-xs">
          <div className="flex items-center justify-between gap-3 px-4 h-11 bg-white border-b border-slate-200">
            <span className="text-slate-800 text-[13px] font-bold truncate">{pageTitle}</span>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-400 text-[10px]">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                {isRTL ? 'بحث' : 'Search'}
              </span>
              <span className="relative w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="absolute -top-0.5 -end-0.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
              </span>
            </div>
          </div>
          <div className="p-4 sm:p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Avatar({ initials, from, to }: { initials: string; from: string; to: string }) {
  return (
    <span className={`w-6 h-6 rounded-full bg-gradient-to-br ${from} ${to} flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0`}>
      {initials}
    </span>
  );
}

export function DashboardMockup({ isRTL }: { isRTL: boolean }) {
  const bars = [42, 58, 35, 70, 52, 84, 61];
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <DesktopApp pageTitle={isRTL ? 'لوحة التحقق' : 'Verification Dashboard'} active="dashboard" isRTL={isRTL}>
      <div className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: isRTL ? 'عمليات التحقق اليوم' : "Today's Verifications", value: '124', delta: '+12%', up: true, chip: 'bg-electric-50 text-electric-600', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { label: isRTL ? 'بانتظار المراجعة' : 'Pending Review', value: '7', delta: '-3', up: false, chip: 'bg-amber-50 text-amber-600', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
            { label: isRTL ? 'موسومة' : 'Flagged', value: '2', delta: '+1', up: false, chip: 'bg-red-50 text-red-600', icon: 'M12 9v2m0 4h.01M5.07 19h13.86a2 2 0 001.74-2.99l-6.93-12a2 2 0 00-3.48 0l-6.93 12A2 2 0 005.07 19z' },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${s.chip}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                </span>
                <span className={`text-[9px] font-semibold ${s.up ? 'text-green-600' : 'text-slate-400'}`}>{s.delta}</span>
              </div>
              <div className="text-xl font-bold text-slate-800">{s.value}</div>
              <div className="text-slate-400 text-[10px] mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-700 text-[11px] font-semibold">{isRTL ? 'عمليات التحقق · آخر ٧ أيام' : 'Verifications · Last 7 days'}</span>
            <span className="text-teal-600 text-[10px] font-semibold">↑ 18%</span>
          </div>
          <div dir="ltr">
            <div className="flex items-end justify-between gap-2 h-20">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-electric-500 to-teal-400" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between gap-2 mt-1.5">
              {days.map((d, i) => (
                <span key={i} className="flex-1 text-center text-slate-300 text-[8px]">{d}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
            <span className="text-slate-700 text-[11px] font-semibold">{isRTL ? 'أحدث التحقّقات' : 'Recent Verifications'}</span>
            <span className="text-electric-600 text-[10px] font-semibold">{isRTL ? 'عرض الكل' : 'View all'}</span>
          </div>
          {[
            { ref: 'a13f7c02', type: isRTL ? 'الهوية الوطنية' : 'National ID', status: isRTL ? 'بدأت الجلسة' : 'Session started', statusColor: 'text-slate-600 bg-slate-100 ring-slate-200' },
            { ref: '7d8e21b4', type: isRTL ? 'الهوية الوطنية' : 'National ID', status: isRTL ? 'مقبول' : 'Accepted', statusColor: 'text-teal-700 bg-teal-50 ring-teal-100' },
            { ref: '5c9a03f1', type: isRTL ? 'جواز السفر (الحديث)' : 'ePassport', status: isRTL ? 'مرفوض' : 'Rejected', statusColor: 'text-red-700 bg-red-50 ring-red-100' },
            { ref: '9f2b6e88', type: isRTL ? 'الهوية الوطنية' : 'National ID', status: isRTL ? 'قيد المراجعة' : 'Review', statusColor: 'text-amber-700 bg-amber-50 ring-amber-100' },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-50 last:border-0">
              <Avatar initials={row.ref.slice(0, 2).toUpperCase()} from="from-electric-500" to="to-electric-700" />
              <div className="flex-1 min-w-0">
                <div className="text-slate-700 text-[11px] font-medium truncate font-mono">{row.ref}</div>
                <div className="text-slate-400 text-[9px]">{row.type}</div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold ring-1 ${row.statusColor}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>
    </DesktopApp>
  );
}

export function WorkflowMockup({ isRTL }: { isRTL: boolean }) {
  const steps = [
    { step: '1', title: isRTL ? 'التقاط البطاقة' : 'Document Capture', detail: isRTL ? 'صور الوجه والظهر' : 'Front & back document images', chip: 'bg-electric-100 text-electric-600' },
    { step: '2', title: isRTL ? 'بيانات المستند' : 'Document Data', detail: isRTL ? 'التعرف الضوئي (OCR) ومطابقة السجل' : 'OCR extraction & registry match', chip: 'bg-indigo-100 text-indigo-600' },
    { step: '3', title: isRTL ? 'بيانات الباركود' : 'Barcode Data', detail: isRTL ? 'تحليل الباركود ومقارنته' : 'Barcode analysis & comparison', chip: 'bg-purple-100 text-purple-600' },
    { step: '4', title: isRTL ? 'القياسات الحيوية' : 'Biometric Check', detail: isRTL ? 'التحقق من الحيوية ومطابقة الوجه' : 'Liveness check & face match', chip: 'bg-teal-100 text-teal-600' },
  ];
  return (
    <DesktopApp pageTitle={isRTL ? 'ضوابط التحقق' : 'Verification Checks'} active="workflow" isRTL={isRTL}>
      <div className={isRTL ? 'text-right' : ''}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-700 text-[11px] font-semibold">{isRTL ? 'الهوية الوطنية' : 'National ID'}</span>
          <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-100 text-[9px] font-semibold">{isRTL ? 'مكتملة' : 'Complete'}</span>
        </div>
        <div className="relative ps-1">
          {steps.map((s, i) => (
            <div key={i} className="relative flex items-center gap-3 pb-3 last:pb-0">
              {i < steps.length - 1 && <span className="absolute top-9 start-[18px] h-[calc(100%-1.25rem)] w-px bg-slate-200" />}
              <span className={`relative z-10 w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-bold ${s.chip}`}>{s.step}</span>
              <div className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2.5 shadow-sm flex items-center justify-between">
                <div className="min-w-0">
                  <div className="text-slate-700 text-[11px] font-semibold">{s.title}</div>
                  <div className="text-slate-400 text-[10px] truncate">{s.detail}</div>
                </div>
                <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-2">{isRTL ? 'الفحوصات المطلوبة' : 'Required Checks'}</div>
          <div className="grid grid-cols-2 gap-1.5">
            {(isRTL
              ? ['اتساق بيانات المستند', 'صلاحية الباركود', 'جودة الصورة', 'مطابقة الوجه', 'التحقق من الحيوية', 'استخراج النص (OCR)', 'التطابق من السجل']
              : ['Document data consistency', 'Barcode validity', 'Image quality', 'Face match', 'Liveness check', 'OCR text extraction', 'Registry match']
            ).map((c, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-teal-50 rounded-md px-2 py-1">
                <svg className="w-3 h-3 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-teal-700 text-[9px] font-medium truncate">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DesktopApp>
  );
}

export function MobileMockup({ isRTL, compact = false }: { isRTL: boolean; compact?: boolean }) {
  const steps = [isRTL ? 'التقاط' : 'Capture', isRTL ? 'الإرسال' : 'Submit', isRTL ? 'النتيجة' : 'Result'];
  return (
    <div className="flex justify-center">
      <div className={`relative ${compact ? 'w-[235px]' : 'w-[300px]'} rounded-[2.5rem] bg-slate-900 border-[7px] border-slate-900 shadow-2xl ring-1 ring-slate-900/10 overflow-hidden`}>
        <div className="bg-slate-50 overflow-hidden rounded-[1.9rem]" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="flex items-center justify-between px-5 pt-2.5 pb-1 text-navy-900">
            <span className="text-[10px] font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h2v-8H2v8zm6 0h2V10H8v12zm6 0h2V6h-2v16zm6 0h2V2h-2v20z" /></svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4C7 4 2.7 6.1 0 9.4L12 24 24 9.4C21.3 6.1 17 4 12 4z" /></svg>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><rect x="2" y="7" width="18" height="10" rx="2" /><rect x="4" y="9" width="12" height="6" rx="1" fill="currentColor" /><line x1="22" y1="10" x2="22" y2="14" /></svg>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 h-11 bg-white border-b border-slate-100">
            <svg className="w-4 h-4 text-slate-500 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            <span className="text-navy-900 text-[12px] font-bold">{isRTL ? 'تأكيد الهوية' : 'Verify Identity'}</span>
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>

          <div className="px-5 pt-4 pb-6 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-5" dir="ltr">
              {steps.map((label, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="flex flex-col items-center gap-1">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${i <= 1 ? 'bg-teal-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                      {i < 1 ? '✓' : i + 1}
                    </span>
                    <span className={`text-[8px] ${i <= 1 ? 'text-teal-600 font-semibold' : 'text-slate-400'}`}>{label}</span>
                  </div>
                  {i < steps.length - 1 && <span className={`w-5 h-px ${i < 1 ? 'bg-teal-400' : 'bg-slate-200'} mb-3`} />}
                </div>
              ))}
            </div>

            <div className="relative mx-auto w-36 h-36 mb-5 flex items-center justify-center">
              <span className="absolute inset-0 rounded-full border-2 border-teal-500/40 animate-ping" style={{ animationDuration: '2s' }} />
              <span className="absolute inset-4 rounded-full border-2 border-teal-500/25" />
              <span className="absolute inset-8 rounded-full border border-teal-500/15" />
              <div className="relative z-10 w-[72px] h-24 rounded-lg bg-gradient-to-br from-electric-600 to-electric-800 shadow-lg flex flex-col items-center justify-center gap-1.5">
                <div className="w-7 h-7 rounded-full border-2 border-gold-400/80 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="w-10 h-0.5 bg-gold-400/50 rounded-full" />
                <div className="w-8 h-0.5 bg-gold-400/30 rounded-full" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 mb-4">
              <svg className="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span className="text-teal-700 text-[11px] font-semibold">{isRTL ? 'تم إرسال الطلب للتحقق' : 'Submitted for verification'}</span>
            </div>

            <div className={`bg-white border border-slate-200 rounded-xl p-3 space-y-2 shadow-sm mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {[
                { label: isRTL ? 'الاسم' : 'Name', value: isRTL ? 'أحمد الفارسي' : 'Ahmed Al-Farsi' },
                { label: isRTL ? 'رقم الوثيقة' : 'Document No.', value: 'P A1234567' },
                { label: isRTL ? 'الجنسية' : 'Nationality', value: isRTL ? 'سوريا' : 'Syria' },
              ].map((f, i) => (
                <div key={i} className="flex items-center justify-between gap-3">
                  <span className="text-slate-400 text-[10px]">{f.label}</span>
                  <span className="text-slate-700 text-[11px] font-medium">{f.value}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-electric-600 to-teal-500 text-white text-[12px] font-semibold shadow-md">
              {isRTL ? 'متابعة' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
