'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import TechBackground from '@/components/ui/TechBackground';

const content = {
  en: {
    tag: 'Case Studies',
    title: 'Case Studies',
    subtitle: "We're gathering approved case studies to share here.",
    body: "We only publish case studies that represent genuine, documented projects with the customer's approval to share results. We don't have any published yet — check back soon, or contact us to discuss a reference relevant to your use case.",
    cta: 'Contact Our Team',
  },
  ar: {
    tag: 'دراسات الحالات',
    title: 'دراسات الحالات',
    subtitle: 'نعمل على جمع دراسات حالات معتمدة لنشرها هنا.',
    body: 'ننشر فقط دراسات الحالات التي تمثل مشاريع حقيقية وموثقة وبموافقة العميل على مشاركة نتائجها. لا توجد لدينا دراسات منشورة بعد — تابعنا قريباً، أو تواصل معنا لمناقشة مرجع مناسب لحالة استخدامك.',
    cta: 'تواصل مع فريقنا',
  },
};

export default function CaseStudiesPage() {
  const { isRTL, href } = useLanguage();
  const c = isRTL ? content.ar : content.en;

  return (
    <>
      <PageHero tag={c.tag} title={c.title} subtitle={c.subtitle} />

      <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <p className="text-slate-600 text-lg leading-relaxed mb-8">{c.body}</p>
            <a href={href('/contact')} className="btn-primary px-8 py-3.5 shadow-glow inline-flex">
              {c.cta}
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
