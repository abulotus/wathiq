'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Link from 'next/link';
import TechBackground from '@/components/ui/TechBackground';

const valueIcons = [
  <svg key="sec" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="inn" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="trust" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  <svg key="simple" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
];

const valueColors = [
  { ring: 'ring-electric-200', bg: 'bg-electric-50', icon: 'text-electric-600', accent: 'bg-electric-500' },
  { ring: 'ring-teal-200', bg: 'bg-teal-50', icon: 'text-teal-600', accent: 'bg-teal-500' },
  { ring: 'ring-indigo-200', bg: 'bg-indigo-50', icon: 'text-indigo-600', accent: 'bg-indigo-500' },
  { ring: 'ring-gold-200', bg: 'bg-amber-50', icon: 'text-amber-600', accent: 'bg-gold-400' },
];

export default function AboutPage() {
  const { t, isRTL } = useLanguage();
  const about = t.about;

  return (
    <>
      <PageHero
        tag={isRTL ? 'من نحن' : 'About Us'}
        title={isRTL ? 'تقنية بُنيت للمنطقة' : 'Technology Built for the Region'}
        subtitle={isRTL
          ? 'شركة تقنية مسجلة في المملكة المتحدة، تساعد المؤسسات في الشرق الأوسط وخارجه على اعتماد حلول رقمية آمنة.'
          : 'A UK-registered technology company helping organisations across the Middle East and beyond adopt secure digital solutions.'}
      />

      {/* ── Who We Are ── */}
      <section className="section-pad bg-white relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionTag label={isRTL ? 'شركتنا' : 'Our Company'} />
              <h2 className="heading-lg text-navy-900 mt-4 mb-6">
                {isRTL ? 'نبني الثقة الرقمية للمستقبل' : 'Building Digital Trust for the Future'}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">{about.body}</p>
              <p className="text-slate-500 leading-relaxed">
                {isRTL
                  ? 'نجمع بين الخبرة التقنية الدولية والفهم العميق لاحتياجات السوق الإقليمية، لتقديم حلول موثوقة وعملية للمؤسسات التي تسعى إلى التحول الرقمي الآمن.'
                  : 'We combine international technical expertise with deep understanding of regional market needs, delivering reliable and practical solutions for organisations seeking safe digital transformation.'}
              </p>

              <div className="flex items-center gap-4 mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-electric-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">
                    {isRTL ? 'مسجل في المملكة المتحدة' : 'UK Registered Company'}
                  </div>
                  <div className="text-slate-500 text-sm">71-75 Shelton Street, London, WC2H 9JQ</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { val: '50+', label: isRTL ? 'شريك مؤسسي' : 'Enterprise Partners', color: 'bg-electric-50 border-electric-100' },
                  { val: '99.9%', label: isRTL ? 'وقت التشغيل' : 'Uptime Reliability', color: 'bg-teal-50 border-teal-100' },
                  { val: '10+', label: isRTL ? 'قطاع خدمي' : 'Industries Served', color: 'bg-indigo-50 border-indigo-100' },
                  { val: '5+', label: isRTL ? 'سنوات ابتكار' : 'Years of Innovation', color: 'bg-amber-50 border-amber-100' },
                ].map((s, i) => (
                  <AnimatedItem key={i} index={i}>
                    <div className={`p-6 rounded-2xl border ${s.color} text-center`}>
                      <div className="text-3xl font-black text-navy-900 mb-1">{s.val}</div>
                      <div className="text-slate-500 text-sm">{s.label}</div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
        {/* Diagonal divider → navy-950 */}
        <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 72L1440 10V72H0Z" fill="#04091C" />
          </svg>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section id="mission" className="section-pad bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-mesh opacity-20" />
        <div className="absolute -end-20 top-0 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)' }} />

        <div className="container-wide relative z-10">
          <AnimatedSection className="text-center mb-16">
            <SectionTag label={isRTL ? 'غايتنا' : 'Our Purpose'} variant="white" />
            <h2 className="heading-lg text-white mt-4">
              {isRTL ? 'مهمتنا ورؤيتنا' : 'Our Mission & Vision'}
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <AnimatedItem index={0}>
              <div className="h-full p-5 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-electric-500/20 border border-electric-500/30 flex items-center justify-center text-electric-400 font-black text-lg">
                    01
                  </div>
                  <h3 className="text-white text-xl font-bold">{about.mission.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-base">{about.mission.body}</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {isRTL
                      ? 'نسعى لتمكين المؤسسات من بناء علاقات رقمية موثوقة مع عملائها، عبر تقنيات التحقق والحماية الحديثة.'
                      : 'We strive to empower organisations to build trusted digital relationships with their customers through modern verification and protection technologies.'}
                  </p>
                </div>
              </div>
            </AnimatedItem>

            {/* Vision */}
            <AnimatedItem index={1}>
              <div className="h-full p-5 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-black text-lg">
                    02
                  </div>
                  <h3 className="text-white text-xl font-bold">{about.vision.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-base">{about.vision.body}</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {isRTL
                      ? 'نطمح أن نكون الشريك التقني الأول للمؤسسات في المنطقة الساعية إلى التحول الرقمي الآمن والمستدام.'
                      : 'We aspire to be the go-to technology partner for organisations across the region seeking secure and sustainable digital transformation.'}
                  </p>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
        {/* Diagonal divider → slate-50 */}
        <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 72L1440 10V72H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-mesh opacity-40" />
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="text-center mb-16">
            <SectionTag label={isRTL ? 'قيمنا' : 'Our Values'} />
            <h2 className="heading-lg text-navy-900 mt-4">
              {isRTL ? 'المبادئ التي نعمل بها' : 'The Principles We Work By'}
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.items.map((value, i) => (
              <AnimatedItem key={i} index={i}>
                <div className={`group p-6 rounded-2xl border ${valueColors[i].ring} ring-1 ${valueColors[i].bg} hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full`}>
                  <div className={`w-12 h-12 rounded-xl ${valueColors[i].bg} ring-1 ${valueColors[i].ring} flex items-center justify-center ${valueColors[i].icon} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    {valueIcons[i]}
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
        {/* Diagonal divider → white */}
        <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 72L1440 10V72H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection>
            <div className="relative rounded-3xl bg-navy-900 overflow-hidden px-5 py-10 sm:px-14 sm:py-14 text-center">
              <div className="absolute inset-0 hero-pattern" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)' }} />
              <div className="relative z-10">
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                  {isRTL ? 'مهتم بالعمل معنا؟' : 'Interested in Working With Us?'}
                </h2>
                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                  {isRTL
                    ? 'تواصل مع فريقنا لمناقشة كيف يمكن لحلولنا دعم مؤسستك.'
                    : 'Get in touch with our team to discuss how our solutions can support your organisation.'}
                </p>
                <Link href="/contact" className="btn-primary px-8 py-3.5 shadow-glow">
                  {isRTL ? 'تواصل معنا' : 'Contact Our Team'}
                  <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
