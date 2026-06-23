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
    description: {
      en: 'A real-time overview of all active verifications, risk scores, and team queue — giving compliance teams full visibility at a glance.',
      ar: 'نظرة عامة في الوقت الفعلي على جميع عمليات التحقق النشطة ودرجات المخاطرة وطابور الفريق.',
    },
  },
  {
    id: 'case',
    en: 'Case Management',
    ar: 'إدارة الحالات',
    description: {
      en: 'Review flagged cases, inspect submitted documents, and approve or escalate with a full audit trail — all in one place.',
      ar: 'مراجعة الحالات المُبلَّغ عنها وفحص المستندات المقدمة والموافقة أو التصعيد مع سجل تدقيق كامل.',
    },
  },
  {
    id: 'workflow',
    en: 'Verification Workflow',
    ar: 'سير عمل التحقق',
    description: {
      en: 'Configure step-by-step identity checks — document scan, liveness detection, database cross-check — tailored to your compliance requirements.',
      ar: 'تكوين خطوات التحقق من الهوية — مسح المستندات، كشف الحيوية، الفحص المتقاطع — وفقاً لمتطلبات الامتثال.',
    },
  },
];

function DashboardMockup() {
  return (
    <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl font-mono text-xs">
      {/* Top bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-slate-400 text-xs">Wathiq — Verification Dashboard</span>
      </div>
      {/* Content */}
      <div className="p-4 sm:p-6 space-y-4">
        {/* Stat row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Today\'s Verifications', value: '124', color: 'text-teal-400' },
            { label: 'Pending Review', value: '7', color: 'text-yellow-400' },
            { label: 'Flagged', value: '2', color: 'text-red-400' },
          ].map((s, i) => (
            <div key={i} className="bg-slate-800 rounded-lg p-3">
              <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
              <div className="text-slate-500 text-[10px] mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div className="bg-slate-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-4 px-4 py-2 border-b border-slate-700 text-slate-500 text-[10px] uppercase tracking-wider">
            <span>Applicant</span><span>Type</span><span>Status</span><span>Risk</span>
          </div>
          {[
            { name: 'A. Al-Farsi', type: 'KYC', status: 'Approved', statusColor: 'text-teal-400', risk: 'Low', riskColor: 'bg-teal-900/50 text-teal-300' },
            { name: 'M. Hassan', type: 'AML', status: 'Pending', statusColor: 'text-yellow-400', risk: 'Medium', riskColor: 'bg-yellow-900/50 text-yellow-300' },
            { name: 'S. Patel', type: 'KYC', status: 'Approved', statusColor: 'text-teal-400', risk: 'Low', riskColor: 'bg-teal-900/50 text-teal-300' },
            { name: 'R. Ibrahim', type: 'eKYC', status: 'Flagged', statusColor: 'text-red-400', risk: 'High', riskColor: 'bg-red-900/50 text-red-300' },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-4 px-4 py-2.5 border-b border-slate-700/50 text-[11px] items-center">
              <span className="text-slate-300 font-medium">{row.name}</span>
              <span className="text-slate-400">{row.type}</span>
              <span className={row.statusColor}>{row.status}</span>
              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold w-fit ${row.riskColor}`}>{row.risk}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseMockup() {
  return (
    <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl font-mono text-xs">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-slate-400 text-xs">Wathiq — Case #WQ-2041</span>
      </div>
      <div className="p-4 sm:p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-electric-600/30 border border-electric-500/40 flex items-center justify-center text-electric-300 font-bold flex-shrink-0">RI</div>
          <div>
            <div className="text-white font-semibold">Rania Ibrahim</div>
            <div className="text-slate-400 text-[11px]">Submitted: 14 Jun 2025 · 09:42 UTC</div>
            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-red-900/50 text-red-300 text-[10px] font-semibold">⚠ Flagged for review</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Document Type', value: 'National ID' },
            { label: 'Country', value: 'UAE' },
            { label: 'Liveness Check', value: '✓ Passed' },
            { label: 'Database Match', value: '⚠ Partial' },
          ].map((f, i) => (
            <div key={i} className="bg-slate-800 rounded-lg px-3 py-2">
              <div className="text-slate-500 text-[10px]">{f.label}</div>
              <div className="text-slate-200 text-[11px] font-medium mt-0.5">{f.value}</div>
            </div>
          ))}
        </div>
        <div className="bg-slate-800 rounded-lg px-4 py-3">
          <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-2">Audit Trail</div>
          {[
            { time: '09:42', event: 'Application submitted', color: 'bg-slate-500' },
            { time: '09:43', event: 'Document scan completed', color: 'bg-teal-500' },
            { time: '09:44', event: 'Partial database match — escalated', color: 'bg-yellow-500' },
          ].map((e, i) => (
            <div key={i} className="flex items-center gap-3 py-1">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${e.color}`} />
              <span className="text-slate-500 text-[10px] w-8">{e.time}</span>
              <span className="text-slate-300 text-[11px]">{e.event}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="flex-1 py-2 rounded-lg bg-teal-600 text-white text-[11px] font-semibold">Approve</button>
          <button className="flex-1 py-2 rounded-lg bg-slate-700 text-slate-300 text-[11px] font-semibold">Escalate</button>
          <button className="flex-1 py-2 rounded-lg bg-red-900/60 text-red-300 text-[11px] font-semibold">Reject</button>
        </div>
      </div>
    </div>
  );
}

function WorkflowMockup() {
  return (
    <div className="w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl font-mono text-xs">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-slate-400 text-xs">Wathiq — Workflow Builder</span>
      </div>
      <div className="p-4 sm:p-6 space-y-3">
        <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">KYC Flow — Banking Onboarding</div>
        {[
          { step: '01', title: 'Document Capture', detail: 'Passport · National ID · Driving Licence', status: 'active', color: 'border-electric-500 bg-electric-500/10' },
          { step: '02', title: 'Liveness Detection', detail: 'Passive liveness · Anti-spoofing', status: 'active', color: 'border-teal-500 bg-teal-500/10' },
          { step: '03', title: 'Data Extraction (OCR)', detail: 'Name · DOB · Document number', status: 'active', color: 'border-indigo-500 bg-indigo-500/10' },
          { step: '04', title: 'Sanctions & PEP Check', detail: 'Worldcheck · Dow Jones integration', status: 'active', color: 'border-purple-500 bg-purple-500/10' },
          { step: '05', title: 'Decision & Reporting', detail: 'Auto-approve · Escalate · Audit log', status: 'active', color: 'border-green-500 bg-green-500/10' },
        ].map((s, i) => (
          <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border ${s.color}`}>
            <span className="text-slate-500 text-[10px] font-bold w-5 flex-shrink-0">{s.step}</span>
            <div className="flex-1 min-w-0">
              <div className="text-slate-200 text-[11px] font-semibold">{s.title}</div>
              <div className="text-slate-500 text-[10px] truncate">{s.detail}</div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

const mockups: Record<string, React.ReactNode> = {
  dashboard: <DashboardMockup />,
  case: <CaseMockup />,
  workflow: <WorkflowMockup />,
};

export default function ProductPreview() {
  const { isRTL } = useLanguage();
  const [active, setActive] = useState('dashboard');
  const activeTab = tabs.find(t => t.id === active)!;

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
              ? 'أدوات واضحة مصممة لفرق الامتثال والمخاطر والعمليات في المؤسسات المنظمة.'
              : 'Purpose-built tools for compliance, risk, and operations teams at regulated organisations.'}
          </p>
        </AnimatedSection>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === tab.id
                  ? 'bg-electric-600 border-electric-600 text-white shadow-glow'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-electric-400 hover:text-electric-600'
              }`}
            >
              {isRTL ? tab.ar : tab.en}
            </button>
          ))}
        </div>

        {/* Description */}
        <p className="text-center text-slate-500 text-sm mb-8 max-w-lg mx-auto">
          {isRTL ? activeTab.description.ar : activeTab.description.en}
        </p>

        {/* Mockup */}
        <div className="max-w-3xl mx-auto">
          {mockups[active]}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
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
