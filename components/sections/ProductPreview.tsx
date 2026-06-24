'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';

const tabs = [
  {
    id: 'dashboard',
    en: 'Verification Dashboard',
    ar: 'لوحة التحقق',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM13 13a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6zM4 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    description: {
      en: 'A real-time overview of all active verifications, risk scores, and team queue — giving compliance teams full visibility at a glance.',
      ar: 'نظرة عامة في الوقت الفعلي على جميع عمليات التحقق النشطة ودرجات المخاطرة وطابور الفريق.',
    },
  },
  {
    id: 'case',
    en: 'Case Management',
    ar: 'إدارة الحالات',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
      </svg>
    ),
    description: {
      en: 'Review flagged cases, inspect submitted documents, and approve or escalate with a full audit trail — all in one place.',
      ar: 'مراجعة الحالات المُبلَّغ عنها وفحص المستندات المقدمة والموافقة أو التصعيد مع سجل تدقيق كامل.',
    },
  },
  {
    id: 'workflow',
    en: 'Verification Workflow',
    ar: 'سير عمل التحقق',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    description: {
      en: 'Configure step-by-step identity checks — document scan, liveness detection, database cross-check — tailored to your compliance requirements.',
      ar: 'تكوين خطوات التحقق من الهوية — مسح المستندات، كشف الحيوية، الفحص المتقاطع — وفقاً لمتطلبات الامتثال.',
    },
  },
];

/* ─── Shared chrome ─── */

const railItems = ['dashboard', 'case', 'workflow', 'reports', 'settings'] as const;
const railIcons: Record<string, JSX.Element> = {
  dashboard: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM13 13a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6zM4 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
    </svg>
  ),
  case: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
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

function DesktopApp({
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
      {/* Windows title bar */}
      <div className="flex items-center justify-between bg-slate-100 border-b border-slate-200 h-9 select-none">
        <div className="flex items-center gap-2 ps-3">
          <div className="w-4 h-4 rounded bg-gradient-to-br from-electric-500 to-teal-500 flex items-center justify-center text-white text-[8px] font-black">W</div>
          <span className="text-slate-500 text-[11px] font-medium">{isRTL ? 'وثيق — منصة التحقق' : 'Wathiq — Verification Platform'}</span>
        </div>
        <WinControls />
      </div>

      <div className="flex">
        {/* Dark branded sidebar */}
        <div className="w-14 bg-navy-900 flex flex-col items-center py-3 gap-1 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-500 to-teal-500 flex items-center justify-center text-white text-sm font-black mb-2">W</div>
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

        {/* Main canvas */}
        <div className="flex-1 min-w-0 bg-slate-50 text-xs">
          {/* In-app top bar */}
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
          {/* Content */}
          <div className="p-4 sm:p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Avatar({ initials, from, to }: { initials: string; from: string; to: string }) {
  return (
    <span className={`w-6 h-6 rounded-full bg-gradient-to-br ${from} ${to} flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0`}>
      {initials}
    </span>
  );
}

function DashboardMockup({ isRTL }: { isRTL: boolean }) {
  const bars = [42, 58, 35, 70, 52, 84, 61];
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <DesktopApp pageTitle={isRTL ? 'لوحة التحقق' : 'Verification Dashboard'} active="dashboard" isRTL={isRTL}>
      <div className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
        {/* Stat cards */}
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

        {/* Mini chart */}
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

        {/* Table */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
            <span className="text-slate-700 text-[11px] font-semibold">{isRTL ? 'أحدث العمليات' : 'Recent Verifications'}</span>
            <span className="text-electric-600 text-[10px] font-semibold">{isRTL ? 'عرض الكل' : 'View all'}</span>
          </div>
          {[
            { name: isRTL ? 'أحمد الفارسي' : 'Ahmed Al-Farsi', initials: 'AF', from: 'from-electric-500', to: 'to-electric-700', type: 'KYC', status: isRTL ? 'مقبول' : 'Approved', statusColor: 'text-teal-700 bg-teal-50 ring-teal-100', risk: isRTL ? 'منخفضة' : 'Low', riskColor: 'text-teal-700' },
            { name: isRTL ? 'منى حسن' : 'Mona Hassan', initials: 'MH', from: 'from-indigo-500', to: 'to-indigo-700', type: 'AML', status: isRTL ? 'معلّق' : 'Pending', statusColor: 'text-amber-700 bg-amber-50 ring-amber-100', risk: isRTL ? 'متوسطة' : 'Medium', riskColor: 'text-amber-700' },
            { name: isRTL ? 'سامي باتيل' : 'Sami Patel', initials: 'SP', from: 'from-teal-500', to: 'to-teal-700', type: 'KYC', status: isRTL ? 'مقبول' : 'Approved', statusColor: 'text-teal-700 bg-teal-50 ring-teal-100', risk: isRTL ? 'منخفضة' : 'Low', riskColor: 'text-teal-700' },
            { name: isRTL ? 'رانيا إبراهيم' : 'Rania Ibrahim', initials: 'RI', from: 'from-rose-500', to: 'to-rose-700', type: 'eKYC', status: isRTL ? 'موسوم' : 'Flagged', statusColor: 'text-red-700 bg-red-50 ring-red-100', risk: isRTL ? 'عالية' : 'High', riskColor: 'text-red-700' },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-50 last:border-0">
              <Avatar initials={row.initials} from={row.from} to={row.to} />
              <div className="flex-1 min-w-0">
                <div className="text-slate-700 text-[11px] font-medium truncate">{row.name}</div>
                <div className="text-slate-400 text-[9px]">{row.type}</div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold ring-1 ${row.statusColor}`}>{row.status}</span>
              <span className={`text-[10px] font-semibold w-12 text-end ${row.riskColor}`}>{row.risk}</span>
            </div>
          ))}
        </div>
      </div>
    </DesktopApp>
  );
}

function CaseMockup({ isRTL }: { isRTL: boolean }) {
  return (
    <DesktopApp pageTitle={isRTL ? 'إدارة الحالات · #WQ-2041' : 'Case Management · #WQ-2041'} active="case" isRTL={isRTL}>
      <div className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
        {/* Header card */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-start gap-4">
          <Avatar initials="RI" from="from-electric-500" to="to-teal-500" />
          <div className="flex-1">
            <div className="text-slate-800 font-semibold text-[13px]">{isRTL ? 'رانيا إبراهيم' : 'Rania Ibrahim'}</div>
            <div className="text-slate-400 text-[10px]">{isRTL ? 'تم الإرسال: 14 يونيو 2025 · 09:42' : 'Submitted: 14 Jun 2025 · 09:42 UTC'}</div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-600 ring-1 ring-red-100 text-[10px] font-semibold">⚠ {isRTL ? 'موسومة' : 'Flagged'}</span>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: isRTL ? 'نوع الوثيقة' : 'Document Type', value: isRTL ? 'الهوية الوطنية' : 'National ID', ok: true },
            { label: isRTL ? 'الدولة' : 'Country', value: isRTL ? 'سوريا' : 'Syria', ok: true },
            { label: isRTL ? 'فحص الحيوية' : 'Liveness Check', value: isRTL ? 'ناجح' : 'Passed', ok: true },
            { label: isRTL ? 'مطابقة قاعدة البيانات' : 'Database Match', value: isRTL ? 'جزئية' : 'Partial', ok: false },
          ].map((f, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl px-3 py-2.5 shadow-sm">
              <div className="text-slate-400 text-[10px] mb-0.5">{f.label}</div>
              <div className={`flex items-center gap-1.5 text-[11px] font-semibold ${f.ok ? 'text-slate-700' : 'text-amber-600'}`}>
                <svg className={`w-3 h-3 ${f.ok ? 'text-teal-500' : 'text-amber-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.ok ? 'M5 13l4 4L19 7' : 'M12 9v2m0 4h.01'} />
                </svg>
                {f.value}
              </div>
            </div>
          ))}
        </div>

        {/* Audit trail */}
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
          <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-3">{isRTL ? 'سجل التدقيق' : 'Audit Trail'}</div>
          <div className="relative ps-3">
            <span className="absolute top-1 bottom-1 start-[3px] w-px bg-slate-200" />
            {[
              { time: '09:42', event: isRTL ? 'تم إرسال الطلب' : 'Application submitted', color: 'bg-slate-400' },
              { time: '09:43', event: isRTL ? 'اكتمل مسح الوثيقة' : 'Document scan completed', color: 'bg-teal-500' },
              { time: '09:44', event: isRTL ? 'مطابقة جزئية — تم التصعيد' : 'Partial match — escalated', color: 'bg-amber-500' },
            ].map((e, i) => (
              <div key={i} className="relative flex items-center gap-3 py-1">
                <span className={`absolute -start-3 w-2 h-2 rounded-full ring-2 ring-white ${e.color}`} />
                <span className="text-slate-400 text-[10px] w-8 ms-1">{e.time}</span>
                <span className="text-slate-600 text-[11px]">{e.event}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 py-2 rounded-lg bg-teal-600 text-white text-[11px] font-semibold shadow-sm">{isRTL ? 'موافقة' : 'Approve'}</button>
          <button className="flex-1 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">{isRTL ? 'تصعيد' : 'Escalate'}</button>
          <button className="flex-1 py-2 rounded-lg bg-red-50 text-red-600 ring-1 ring-red-100 text-[11px] font-semibold">{isRTL ? 'رفض' : 'Reject'}</button>
        </div>
      </div>
    </DesktopApp>
  );
}

function WorkflowMockup({ isRTL }: { isRTL: boolean }) {
  const steps = [
    { step: '1', title: isRTL ? 'التقاط الوثيقة' : 'Document Capture', detail: isRTL ? 'جواز · هوية · رخصة قيادة' : 'Passport · ID · Driving Licence', chip: 'bg-electric-100 text-electric-600' },
    { step: '2', title: isRTL ? 'كشف الحيوية' : 'Liveness Detection', detail: isRTL ? 'حيوية سلبية · مكافحة الانتحال' : 'Passive liveness · Anti-spoofing', chip: 'bg-teal-100 text-teal-600' },
    { step: '3', title: isRTL ? 'استخراج البيانات (OCR)' : 'Data Extraction (OCR)', detail: isRTL ? 'الاسم · تاريخ الميلاد · الرقم' : 'Name · DOB · Document number', chip: 'bg-indigo-100 text-indigo-600' },
    { step: '4', title: isRTL ? 'فحص العقوبات و PEP' : 'Sanctions & PEP Check', detail: isRTL ? 'تكامل Worldcheck · Dow Jones' : 'Worldcheck · Dow Jones', chip: 'bg-purple-100 text-purple-600' },
    { step: '5', title: isRTL ? 'القرار والتقارير' : 'Decision & Reporting', detail: isRTL ? 'موافقة آلية · سجل تدقيق' : 'Auto-approve · Audit log', chip: 'bg-green-100 text-green-600' },
  ];
  return (
    <DesktopApp pageTitle={isRTL ? 'منشئ سير العمل' : 'Workflow Builder'} active="workflow" isRTL={isRTL}>
      <div className={isRTL ? 'text-right' : ''}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-700 text-[11px] font-semibold">{isRTL ? 'تدفق KYC — إعداد العملاء المصرفيين' : 'KYC Flow — Banking Onboarding'}</span>
          <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-100 text-[9px] font-semibold">{isRTL ? 'نشط' : 'Active'}</span>
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
      </div>
    </DesktopApp>
  );
}

function NfcMockup({ isRTL, compact = false }: { isRTL: boolean; compact?: boolean }) {
  const steps = [isRTL ? 'التقاط' : 'Capture', isRTL ? 'الشريحة' : 'Chip', isRTL ? 'التحقق' : 'Verify'];
  return (
    <div className="flex justify-center">
      <div className={`relative ${compact ? 'w-[235px]' : 'w-[300px]'} rounded-[2.5rem] bg-slate-900 border-[7px] border-slate-900 shadow-2xl ring-1 ring-slate-900/10 overflow-hidden`}>
        {/* screen */}
        <div className="bg-slate-50 overflow-hidden rounded-[1.9rem]" dir={isRTL ? 'rtl' : 'ltr'}>
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-2.5 pb-1 text-navy-900">
            <span className="text-[10px] font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h2v-8H2v8zm6 0h2V10H8v12zm6 0h2V6h-2v16zm6 0h2V2h-2v20z" /></svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4C7 4 2.7 6.1 0 9.4L12 24 24 9.4C21.3 6.1 17 4 12 4z" /></svg>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><rect x="2" y="7" width="18" height="10" rx="2" /><rect x="4" y="9" width="12" height="6" rx="1" fill="currentColor" /><line x1="22" y1="10" x2="22" y2="14" /></svg>
            </div>
          </div>

          {/* app header */}
          <div className="flex items-center justify-between px-4 h-11 bg-white border-b border-slate-100">
            <svg className="w-4 h-4 text-slate-500 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            <span className="text-navy-900 text-[12px] font-bold">{isRTL ? 'تأكيد الهوية' : 'Verify Identity'}</span>
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>

          <div className="px-5 pt-4 pb-6 text-center">
            {/* stepper */}
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

            {/* NFC scan visual */}
            <div className="relative mx-auto w-36 h-36 mb-5 flex items-center justify-center">
              <span className="absolute inset-0 rounded-full border-2 border-teal-500/40 animate-ping" style={{ animationDuration: '2s' }} />
              <span className="absolute inset-4 rounded-full border-2 border-teal-500/25" />
              <span className="absolute inset-8 rounded-full border border-teal-500/15" />
              <div className="relative z-10 w-[72px] h-24 rounded-lg bg-gradient-to-br from-electric-600 to-electric-800 shadow-lg flex flex-col items-center justify-center gap-1.5">
                <div className="w-7 h-7 rounded-full border-2 border-gold-400/80 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="w-10 h-0.5 bg-gold-400/50 rounded-full" />
                <div className="w-8 h-0.5 bg-gold-400/30 rounded-full" />
                <div className="absolute -bottom-1 -end-1 w-6 h-6 rounded-md bg-gold-400 flex items-center justify-center shadow">
                  <svg className="w-3.5 h-3.5 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 010-7.778m7.778 0a5.5 5.5 0 010 7.778M5.282 19.232a9.5 9.5 0 010-13.434m13.436 0a9.5 9.5 0 010 13.434M12 12h.01" /></svg>
                </div>
              </div>
            </div>

            {/* status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 mb-4">
              <svg className="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span className="text-teal-700 text-[11px] font-semibold">{isRTL ? 'الشريحة أصلية وموثّقة' : 'Chip authentic & verified'}</span>
            </div>

            {/* data card */}
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

            {/* primary button */}
            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-electric-600 to-teal-500 text-white text-[12px] font-semibold shadow-md">
              {isRTL ? 'متابعة' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const capabilities = [
  {
    en: 'ePassport & national eID chip reading',
    ar: 'قراءة شريحة الجواز والهوية الوطنية',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 010-7.778m7.778 0a5.5 5.5 0 010 7.778M5.282 19.232a9.5 9.5 0 010-13.434m13.436 0a9.5 9.5 0 010 13.434M12 12h.01" />
      </svg>
    ),
  },
  {
    en: 'ICAO 9303 · NFC / eMRTD',
    ar: 'معيار ICAO 9303 · NFC / eMRTD',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    en: 'Liveness & anti-spoofing',
    ar: 'كشف الحيوية ومكافحة الانتحال',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    en: 'Sanctions & PEP screening',
    ar: 'فحص العقوبات والأشخاص المعرضين سياسياً',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-3 9 3M4 10h16M6 10v8m4-8v8m4-8v8m4-8v8M3 21h18" />
      </svg>
    ),
  },
];

export default function ProductPreview() {
  const { isRTL } = useLanguage();
  const [active, setActive] = useState('dashboard');
  const activeTab = tabs.find(t => t.id === active)!;

  const renderDesktop = () => {
    switch (active) {
      case 'dashboard': return <DashboardMockup isRTL={isRTL} />;
      case 'case': return <CaseMockup isRTL={isRTL} />;
      case 'workflow': return <WorkflowMockup isRTL={isRTL} />;
      default: return null;
    }
  };

  return (
    <section className="section-pad bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-mesh opacity-20" />
      <TechBackground variant="light" />

      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-12">
          <SectionTag label={isRTL ? 'المنتج' : 'Product'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'تعرّف على وثيق من الداخل' : 'See Wathiq in Action'}
          </h2>
          <p className="body-lg mt-4 max-w-xl mx-auto">
            {isRTL
              ? 'من تطبيق الهاتف الذي يقرأ شريحة الجواز إلى لوحة التحكم لفرق الامتثال — منصة واحدة متكاملة.'
              : 'From the mobile app that reads a passport chip to the desktop console for compliance teams — one connected platform.'}
          </p>
        </AnimatedSection>

        {/* Connected-platform composition */}
        <AnimatedSection delay={0.1}>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-x-10 -inset-y-8 bg-gradient-to-tr from-electric-500/15 via-teal-400/10 to-transparent blur-2xl rounded-[2.5rem] pointer-events-none" />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-center">
              {/* Desktop console */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActive(tab.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 ${
                        active === tab.id
                          ? 'bg-electric-600 border-electric-600 text-white shadow-glow'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-electric-400 hover:text-electric-600'
                      }`}
                    >
                      {tab.icon}
                      {isRTL ? tab.ar : tab.en}
                    </button>
                  ))}
                </div>
                {renderDesktop()}
                <p className="text-slate-500 text-sm mt-4 max-w-md">
                  {isRTL ? activeTab.description.ar : activeTab.description.en}
                </p>
              </div>

              {/* Mobile NFC app */}
              <div className="flex flex-col items-center">
                <NfcMockup isRTL={isRTL} compact />
                <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-slate-600 text-xs font-semibold">
                    {isRTL ? 'تطبيق الجوال · مسح NFC' : 'Mobile app · NFC scan'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Capability chips */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-4xl mx-auto">
            {capabilities.map((c, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm"
              >
                <span className="text-electric-600">{c.icon}</span>
                {isRTL ? c.ar : c.en}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 btn-primary text-sm px-6 py-3 shadow-glow"
          >
            {isRTL ? 'احجز عرضاً تجريبياً حقيقياً' : 'Book a Live Demo'}
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
