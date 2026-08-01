'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import TechBackground from '@/components/ui/TechBackground';

const content = {
  en: {
    tag: 'Blog',
    title: 'Blog',
    subtitle: "We're working on our first articles.",
    body: "We'll publish articles here once they're complete and reviewed — on topics like how electronic passports work, designing Arabic-first digital onboarding, and integrating identity verification through APIs and webhooks. Nothing is published yet, so there's nothing to show you but this note.",
    cta: 'Contact Our Team',
  },
  ar: {
    tag: 'المدونة',
    title: 'المدونة',
    subtitle: 'نعمل حالياً على أولى مقالاتنا.',
    body: 'سننشر المقالات هنا بمجرد اكتمالها ومراجعتها — حول مواضيع مثل كيفية عمل جوازات السفر الإلكترونية، وتصميم تجربة إعداد رقمية عربية أولاً، والتكامل مع التحقق من الهوية عبر API وWebhooks. لا يوجد شيء منشور بعد.',
    cta: 'تواصل مع فريقنا',
  },
};

export default function BlogPage() {
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
