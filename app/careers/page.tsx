'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';

const whyUsItems = {
  en: [
    {
      title: 'Meaningful Work',
      desc: 'You will work on technology that shapes how millions of people prove their identity online — with real consequences for security, privacy, and financial inclusion across the Middle East.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Remote-First Culture',
      desc: 'We are a distributed team operating across time zones. We believe the best talent should not be constrained by geography — we hire people, not locations.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
    },
    {
      title: 'Ownership & Impact',
      desc: 'Small team, high ownership. Every person here shapes the product, the culture, and the direction of the company. We move fast and trust people to make decisions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Competitive Compensation',
      desc: 'We offer competitive salaries benchmarked to your location, equity participation, health coverage, and a professional development budget for every team member.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ],
  ar: [
    {
      title: 'عمل ذو معنى',
      desc: 'ستعمل على تقنية تشكّل طريقة إثبات هوية الملايين عبر الإنترنت — بتأثيرات حقيقية على الأمن والخصوصية والشمول المالي في منطقة الشرق الأوسط.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'ثقافة العمل عن بُعد',
      desc: 'نحن فريق موزع يعمل عبر المناطق الزمنية المختلفة. نؤمن بأن أفضل المواهب لا ينبغي أن تُقيَّد بالموقع الجغرافي — نوظف الأشخاص، وليس المواقع.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
    },
    {
      title: 'الملكية والتأثير',
      desc: 'فريق صغير وملكية عالية. كل شخص هنا يشكّل المنتج والثقافة وتوجه الشركة. نتحرك بسرعة ونثق في الناس لاتخاذ القرارات.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'تعويض تنافسي',
      desc: 'نقدم رواتب تنافسية محددة وفقاً لموقعك، ومشاركة في حقوق الملكية، وتغطية صحية، وميزانية للتطوير المهني لكل عضو في الفريق.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ],
};

const openRoles = {
  en: [
    {
      title: 'Senior Backend Engineer',
      team: 'Engineering',
      location: 'Remote (MENA / EU)',
      type: 'Full-time',
      desc: 'Own the core API infrastructure that powers identity verification at scale. You will architect and build services handling millions of verification events, working closely with our product and compliance teams.',
      skills: ['Node.js / Python', 'REST & Webhooks', 'Distributed systems', 'PostgreSQL / Redis'],
    },
  ],
  ar: [
    {
      title: 'مهندس خلفية أول',
      team: 'الهندسة',
      location: 'عن بُعد (الشرق الأوسط / أوروبا)',
      type: 'دوام كامل',
      desc: 'امتلك البنية التحتية الأساسية لـ API التي تدعم التحقق من الهوية على نطاق واسع. ستقوم بتصميم وبناء خدمات تعالج ملايين أحداث التحقق، بالتعاون الوثيق مع فريق المنتج والامتثال.',
      skills: ['Node.js / Python', 'REST و Webhooks', 'الأنظمة الموزعة', 'PostgreSQL / Redis'],
    },
  ],
};

const teamColors = [
  'bg-electric-50 text-electric-700 border-electric-100',
];

export default function CareersPage() {
  const { isRTL } = useLanguage();
  const whyItems = isRTL ? whyUsItems.ar : whyUsItems.en;
  const roles = isRTL ? openRoles.ar : openRoles.en;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', website: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [fileError, setFileError] = useState('');

  const ACCEPTED = ['.pdf', '.doc', '.docx'];
  const MAX_MB = 5;

  function validateFile(file: File): string {
    const ext = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!ACCEPTED.includes(ext)) return isRTL ? 'الصيغ المقبولة: PDF, DOC, DOCX' : 'Accepted formats: PDF, DOC, DOCX';
    if (file.size > MAX_MB * 1024 * 1024) return isRTL ? `الحجم الأقصى ${MAX_MB}MB` : `Max file size is ${MAX_MB}MB`;
    return '';
  }

  function handleFile(file: File) {
    const err = validateFile(file);
    setFileError(err);
    if (!err) setCvFile(file);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!cvFile) { setFileError(isRTL ? 'يرجى إرفاق السيرة الذاتية' : 'Please attach your CV'); return; }
    setStatus('sending');
    try {
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('email', form.email);
      fd.append('phone', form.phone);
      fd.append('website', form.website);
      fd.append('message', form.message);
      fd.append('cv', cvFile);
      const res = await fetch('/api/apply', { method: 'POST', body: fd });
      if (!res.ok) throw new Error();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <PageHero
        tag={isRTL ? 'الوظائف' : 'Careers'}
        title={isRTL ? 'انضم إلى بناة الثقة الرقمية' : 'Join the Builders of Digital Trust'}
        subtitle={isRTL
          ? 'نحن فريق صغير ذو تأثير كبير، يعمل على تقنية تشكّل مستقبل الهوية الرقمية في المنطقة. هل أنت مستعد؟'
          : 'We are a small team with outsized impact, building technology that shapes the future of digital identity across the region. Ready to join?'}
      />

      {/* Why WATHIQ */}
      <section className="section-pad bg-white relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className={`text-center max-w-2xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
            <SectionTag label={isRTL ? 'لماذا وثيق' : 'Why WATHIQ'} />
            <h2 className="heading-lg text-navy-900 mt-4">
              {isRTL ? 'ما الذي يجعل العمل هنا مختلفاً' : 'What Makes Working Here Different'}
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyItems.map((item, i) => (
              <AnimatedItem key={i} index={i}>
                <div className={`group bg-white rounded-2xl border border-slate-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full ${isRTL ? 'text-right' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-electric-50 border border-electric-100 flex items-center justify-center text-electric-600 mb-4 group-hover:bg-electric-500 group-hover:text-white group-hover:border-electric-500 transition-all duration-200">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section-pad bg-slate-50">
        <div className="container-wide">
          <AnimatedSection className={`text-center max-w-2xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
            <SectionTag label={isRTL ? 'الفرص المتاحة' : 'Open Roles'} />
            <h2 className="heading-lg text-navy-900 mt-4">
              {isRTL ? 'نبحث عن أشخاص استثنائيين' : 'We Are Looking for Exceptional People'}
            </h2>
          </AnimatedSection>

          <div className="space-y-5 max-w-4xl mx-auto">
            {roles.map((role, i) => (
              <AnimatedItem key={i} index={i}>
                <div className={`bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-card ${isRTL ? 'text-right' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-navy-900 font-bold text-xl mb-1">{role.title}</h3>
                      <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${teamColors[i % teamColors.length]}`}>
                          {role.team}
                        </span>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-slate-100 bg-slate-50 text-slate-600">
                          {role.location}
                        </span>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-slate-100 bg-slate-50 text-slate-600">
                          {role.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href="#apply"
                      className="btn-primary text-sm py-2.5 px-5 shrink-0"
                    >
                      {isRTL ? 'تقدم الآن' : 'Apply Now'}
                      <svg className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{role.desc}</p>
                  <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                    {role.skills.map((skill, j) => (
                      <span key={j} className="text-xs text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="section-pad bg-white relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className={`text-center max-w-2xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
            <SectionTag label={isRTL ? 'التقديم' : 'Apply'} />
            <h2 className="heading-lg text-navy-900 mt-4">
              {isRTL ? 'قدّم طلبك الآن' : 'Submit Your Application'}
            </h2>
            <p className="body-lg text-slate-500 mt-4">
              {isRTL
                ? 'أرسل سيرتك الذاتية ونبذة عنك وسنرد عليك في أقرب وقت.'
                : 'Send us your CV and a brief note — we respond to every application within 5 business days.'}
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            {status === 'sent' ? (
              <div
                className="bg-teal-50 border border-teal-100 rounded-3xl p-10 text-center"
                style={{ animation: 'fadeSlideUp 0.4s ease-out both' }}
              >
                <div className="w-16 h-16 rounded-2xl bg-teal-500 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-navy-900 text-xl font-bold mb-2">
                  {isRTL ? 'تم إرسال طلبك!' : 'Application Received!'}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {isRTL
                    ? 'شكراً لتقديمك. سيراجع فريقنا طلبك ويتواصل معك قريباً.'
                    : "Thank you for applying. Our team will review your application and get back to you within 5 business days."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`bg-white rounded-3xl border border-slate-100 shadow-card p-6 sm:p-10 space-y-5 ${isRTL ? 'text-right' : ''}`}
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      {isRTL ? 'الاسم الكامل' : 'Full Name'} <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={isRTL ? 'الاسم الكامل' : 'Your full name'}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      {isRTL ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Phone + Website */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      {isRTL ? 'رقم الهاتف' : 'Phone Number'}
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 7547 044020"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      {isRTL ? 'الموقع الإلكتروني / LinkedIn' : 'Website / LinkedIn'}
                    </label>
                    <input
                      name="website"
                      type="url"
                      value={form.website}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourname"
                      className="input-field"
                    />
                  </div>
                </div>

                {/* CV Upload */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {isRTL ? 'السيرة الذاتية' : 'CV / Resume'} <span className="text-red-400">*</span>
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
                    className={`relative flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl px-6 py-8 cursor-pointer transition-all duration-200 ${
                      dragOver
                        ? 'border-electric-400 bg-electric-50'
                        : cvFile
                        ? 'border-teal-300 bg-teal-50'
                        : 'border-slate-200 bg-slate-50 hover:border-electric-300 hover:bg-electric-50/40'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
                    />
                    {cvFile ? (
                      <>
                        <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-semibold text-teal-700">{cvFile.name}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <button
                          type="button"
                          onClick={e => { e.stopPropagation(); setCvFile(null); setFileError(''); }}
                          className="text-xs text-slate-400 hover:text-red-500 transition-colors"
                        >
                          {isRTL ? 'إزالة' : 'Remove'}
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center">
                          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-semibold text-navy-900">
                            {isRTL ? 'اسحب ملفك هنا أو انقر للاختيار' : 'Drag & drop or click to upload'}
                          </p>
                          <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX — {isRTL ? 'حتى' : 'up to'} 5MB</p>
                        </div>
                      </>
                    )}
                  </div>
                  {fileError && (
                    <p className="text-red-500 text-xs mt-1.5">{fileError}</p>
                  )}
                </div>

                {/* Cover letter */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {isRTL ? 'رسالة التقديم (اختياري)' : 'Cover Letter (optional)'}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={isRTL
                      ? 'أخبرنا عن نفسك وما الذي يجعلك مناسباً لهذا الدور...'
                      : 'Tell us about yourself and why you would be a great fit for this role...'}
                    className="input-field resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">
                    {isRTL ? 'حدث خطأ. يرجى المحاولة مجدداً.' : 'Something went wrong. Please try again.'}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center py-3.5 text-base shadow-glow disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {isRTL ? 'جارٍ الإرسال...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      {isRTL ? 'إرسال الطلب' : 'Submit Application'}
                      <svg className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  {isRTL
                    ? 'سيُرسل طلبك مباشرةً إلى فريق التوظيف لدينا على career@wathiq.digital'
                    : 'Your application is sent directly to our hiring team at career@wathiq.digital'}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
