'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import { VerificationChecksCard } from '@/components/ui/RealProductUI';

export default function ProductShowcase() {
  const { isRTL, href } = useLanguage();

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <SectionTag label={isRTL ? 'المنتج' : 'Product'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'اطّلع على نتائج التحقق بوضوح' : 'See verification results clearly'}
          </h2>
          <p className="body-lg mt-4">
            {isRTL
              ? 'يعرض واثق فحوصات التحقق التي يديرها الخادم — بيانات الوثيقة، الباركود، والتحقق البيومتري — بنتائج واضحة لفريقك.'
              : "Wathiq shows the server-managed verification checks — document data, barcode, and biometric — with clear results for your team."}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <VerificationChecksCard isRTL={isRTL} />
          </div>
          <div className="text-center mt-6">
            <Link href={href('/client-dashboard')} className="inline-flex items-center gap-1.5 text-electric-600 font-semibold text-sm hover:text-electric-700">
              {isRTL ? 'استعرض لوحة تحكم العملاء' : 'Explore the client dashboard'}
              <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
