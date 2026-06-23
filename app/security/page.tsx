'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';

const layerIcons = [
  /* Identity Layer — fingerprint */
  <svg key="id" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
  </svg>,
  /* Access Layer — key */
  <svg key="acc" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </svg>,
  /* Monitoring Layer — activity/pulse */
  <svg key="mon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  /* Compliance Layer — clipboard check */
  <svg key="comp" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>,
];

const principleIcons = [
  <svg key="dp" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>,
  <svg key="priv" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>,
  <svg key="dev" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg key="resp" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  <svg key="biz" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
  <svg key="comp" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
];

export default function SecurityPage() {
  const { t, isRTL } = useLanguage();
  const sec = t.security;

  return (
    <>
      <PageHero tag={sec.hero.tag} title={sec.hero.title} subtitle={sec.hero.subtitle} />

      {/* Main principles */}
      <section className="section-pad bg-white relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className={`max-w-2xl ${isRTL ? 'text-right' : ''} mb-14`}>
            <SectionTag label={isRTL ? 'مبادئنا' : 'Our Principles'} />
            <h2 className="heading-md text-navy-900 mt-4">
              {isRTL ? 'مبني على أسس الأمن والثقة' : 'Built on Security and Trust Foundations'}
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sec.principles.map((principle, i) => (
              <AnimatedItem key={i} index={i}>
                <div className={`group bg-white rounded-2xl border border-slate-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full ${isRTL ? 'text-right' : ''}`}>
                  <div className="w-14 h-14 rounded-2xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-700 mb-5 group-hover:bg-electric-50 group-hover:text-electric-600 group-hover:border-electric-100 transition-colors duration-200 self-start">
                    {principleIcons[i]}
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-3">{principle.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{principle.body}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
        {/* Diagonal divider → navy-950 */}
        <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 72L1440 10V72H0Z" fill="#04091C" />
          </svg>
        </div>
      </section>

      {/* Security architecture visual */}
      <section className="section-pad bg-navy-950">
        <div className="container-wide">
          <AnimatedSection className={`text-center mb-14 ${isRTL ? 'text-right' : ''}`}>
            <SectionTag label={isRTL ? 'البنية الأمنية' : 'Security Architecture'} variant="white" />
            <h2 className="heading-lg text-white mt-4">
              {isRTL ? 'حماية متعددة الطبقات' : 'Multi-Layer Protection Approach'}
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                layer: isRTL ? 'طبقة الهوية' : 'Identity Layer',
                desc: isRTL ? 'التحقق من كل مستخدم وكيان' : 'Verify every user and entity',
                color: 'border-electric-500/30 bg-electric-500/10',
                iconBg: 'bg-electric-500/20 border-electric-400/40 text-electric-300',
              },
              {
                layer: isRTL ? 'طبقة الوصول' : 'Access Layer',
                desc: isRTL ? 'التحكم الدقيق في الصلاحيات' : 'Fine-grained permission controls',
                color: 'border-teal-500/30 bg-teal-500/10',
                iconBg: 'bg-teal-500/20 border-teal-400/40 text-teal-300',
              },
              {
                layer: isRTL ? 'طبقة الرصد' : 'Monitoring Layer',
                desc: isRTL ? 'مراقبة مستمرة وتنبيه فوري' : 'Continuous monitoring & alerting',
                color: 'border-indigo-500/30 bg-indigo-500/10',
                iconBg: 'bg-indigo-500/20 border-indigo-400/40 text-indigo-300',
              },
              {
                layer: isRTL ? 'طبقة الامتثال' : 'Compliance Layer',
                desc: isRTL ? 'الامتثال للمعايير واللوائح' : 'Standards & regulatory alignment',
                color: 'border-amber-400/30 bg-amber-400/10',
                iconBg: 'bg-amber-400/20 border-amber-300/40 text-amber-300',
              },
            ].map((item, i) => (
              <AnimatedItem key={i} index={i}>
                <div className={`rounded-2xl border ${item.color} p-6 text-center hover:-translate-y-1 transition-transform duration-200`}>
                  <div className={`w-12 h-12 rounded-xl border ${item.iconBg} flex items-center justify-center mx-auto mb-4`}>
                    {layerIcons[i]}
                  </div>
                  <h3 className="text-white font-bold mb-2">{item.layer}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>

          {/* Encryption commitment */}
          <AnimatedSection delay={0.4} className="mt-12">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <div className={`grid sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x ${isRTL ? 'sm:divide-x-reverse' : ''} divide-white/10`}>
                {[
                  { title: isRTL ? 'التشفير' : 'Encryption', val: 'AES-256', desc: isRTL ? 'لجميع البيانات' : 'For all data at rest' },
                  { title: isRTL ? 'النقل الآمن' : 'Secure Transit', val: 'TLS 1.3', desc: isRTL ? 'لجميع الاتصالات' : 'For all communications' },
                  { title: isRTL ? 'الخصوصية' : 'Privacy', val: 'GDPR', desc: isRTL ? 'مُراعى في التصميم' : 'Aligned by design' },
                ].map((item, i) => (
                  <div key={i} className={`text-center pt-6 sm:pt-0 ${i > 0 ? 'sm:pl-8' : ''} ${isRTL && i > 0 ? 'sm:pr-8 sm:pl-0' : ''}`}>
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{item.title}</div>
                    <div className="text-white text-3xl font-black mb-1">{item.val}</div>
                    <div className="text-slate-500 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
