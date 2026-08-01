'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import TechBackground from '@/components/ui/TechBackground';

const content = {
  en: {
    tag: 'Pricing',
    title: 'Pricing',
    subtitle: 'Based on your verification requirements and volume.',
    body: 'Pricing is based on verification requirements, expected volume and integration needs. Contact Wathiq for a tailored proposal.',
    cta: 'Contact Us',
  },
  ar: {
    tag: 'التسعير',
    title: 'التسعير',
    subtitle: 'يعتمد على متطلبات التحقق وحجم الاستخدام لديك.',
    body: 'يعتمد التسعير على متطلبات التحقق والحجم المتوقع واحتياجات التكامل. تواصل مع واثق للحصول على عرض مخصص.',
    cta: 'تواصل معنا',
  },
};

export default function PricingPage() {
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
