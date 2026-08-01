'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';
import { validateContactForm, ValidationError } from '@/lib/validation';

const infoIcons = {
  location: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  email: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  hours: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function ContactPage() {
  const { t, isRTL } = useLanguage();
  const contact = t.contact;
  const form = contact.form;
  const info = contact.info;

  const [formState, setFormState] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
  });
  const [errors, setErrors] = useState<ValidationError>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('sent');
      setFormState({ company: '', name: '', email: '', phone: '', industry: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
      console.error('Contact form error:', err);
    }
  };

  const infoItems = [
    { key: 'location', ...info.location, icon: infoIcons.location },
    { key: 'email', ...info.email, icon: infoIcons.email },
    { key: 'phone', ...info.phone, icon: infoIcons.phone },
    { key: 'hours', ...info.hours, icon: infoIcons.hours },
  ];

  return (
    <>
      <PageHero tag={contact.hero.tag} title={contact.hero.title} subtitle={contact.hero.subtitle} />

      <section className="section-pad bg-white relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-1">
              <AnimatedSection className={isRTL ? 'text-right' : ''}>
                <SectionTag label={isRTL ? 'معلومات التواصل' : 'Contact Information'} />
                <h2 className="heading-sm text-navy-900 mt-4 mb-6">
                  {isRTL ? 'نحن هنا للمساعدة' : 'We\'re Here to Help'}
                </h2>
              </AnimatedSection>

              <div className="space-y-5 mb-10">
                {infoItems.map((item, i) => (
                  <AnimatedItem key={item.key} index={i}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-electric-50 border border-electric-100 flex items-center justify-center text-electric-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</div>
                        <div className="text-navy-900 font-medium text-sm">{item.value}</div>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>

              {/* Visual card */}
              <AnimatedSection delay={0.3}>
                <div className="relative bg-navy-900 rounded-3xl overflow-hidden p-6">
                  <div className="absolute inset-0 hero-pattern" />
                  <div className="absolute -end-5 -top-5 w-36 h-36 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%)' }} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                      <span className="text-teal-400 text-xs font-semibold">
                        {isRTL ? 'متاح الآن' : 'Available Now'}
                      </span>
                    </div>
                    <p className={`text-white text-sm leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                      {isRTL
                        ? 'فريقنا مستعد للإجابة على أسئلتك والمساعدة في تحديد الحل المناسب لمؤسستك.'
                        : 'Our team is ready to answer your questions and help identify the right solution for your organization.'}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                {status === 'sent' ? (
                  <div
                    className="bg-teal-50 border border-teal-200 rounded-3xl p-8 sm:p-12 text-center"
                    style={{ animation: 'fadeSlideUp 0.4s ease-out both' }}
                  >
                    <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-navy-900 font-bold text-2xl mb-2">
                      {isRTL ? 'شكراً لك!' : 'Thank You!'}
                    </h3>
                    <p className="text-slate-600">{form.success}</p>
                  </div>
                ) : status === 'error' ? (
                  <div
                    className="bg-red-50 border border-red-200 rounded-3xl p-8 sm:p-12 text-center"
                    style={{ animation: 'fadeSlideUp 0.4s ease-out both' }}
                  >
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h3 className="text-navy-900 font-bold text-2xl mb-2">
                      {isRTL ? 'حدث خطأ' : 'Error'}
                    </h3>
                    <p className="text-slate-600 mb-6">{errorMessage}</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary px-6 py-2"
                    >
                      {isRTL ? 'حاول مرة أخرى' : 'Try Again'}
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className={`bg-white rounded-3xl border border-slate-100 shadow-card p-5 sm:p-8 space-y-5 ${isRTL ? 'text-right' : ''}`}
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1.5">{form.company} *</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder={form.company}
                          className={`input-field ${errors.company ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                          dir={isRTL ? 'rtl' : 'ltr'}
                          aria-describedby={errors.company ? 'company-error' : undefined}
                        />
                        {errors.company && <p id="company-error" className="text-red-600 text-xs mt-1">{errors.company}</p>}
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">{form.name} *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder={form.name}
                          className={`input-field ${errors.name ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                          dir={isRTL ? 'rtl' : 'ltr'}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && <p id="name-error" className="text-red-600 text-xs mt-1">{errors.name}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">{form.email} *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className={`input-field ${errors.email ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                          dir="ltr"
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && <p id="email-error" className="text-red-600 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">{form.phone}</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+44 7547 044020"
                          className={`input-field ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                          dir="ltr"
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && <p id="phone-error" className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-semibold text-slate-700 mb-1.5">{form.industry}</label>
                      <select
                        id="industry"
                        name="industry"
                        value={formState.industry}
                        onChange={handleChange}
                        className="input-field"
                        dir={isRTL ? 'rtl' : 'ltr'}
                      >
                        {form.industries.map((opt, i) => (
                          <option key={i} value={i === 0 ? '' : opt} disabled={i === 0}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">{form.message} *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder={isRTL ? 'أخبرنا كيف يمكننا مساعدتك...' : 'Tell us how we can help your organization...'}
                        className={`input-field resize-none ${errors.message ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                        dir={isRTL ? 'rtl' : 'ltr'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && <p id="message-error" className="text-red-600 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-70 disabled:cursor-not-allowed shadow-glow"
                    >
                      {status === 'sending' ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          {form.sending}
                        </>
                      ) : (
                        <>
                          {form.submit}
                          <svg className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className={`text-xs text-slate-400 ${isRTL ? 'text-right' : ''}`}>
                      {isRTL
                        ? 'بتقديم هذا النموذج، أنت توافق على سياسة الخصوصية الخاصة بنا.'
                        : 'By submitting this form, you agree to our Privacy Policy.'}
                    </p>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
