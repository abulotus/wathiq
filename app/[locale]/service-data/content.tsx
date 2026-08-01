'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function ServiceDataPage() {
  const { isRTL, href } = useLanguage();

  return (
    <>
      <PageHero
        tag={isRTL ? 'قانوني' : 'Legal'}
        title={isRTL ? 'بيانات خدمة التحقق' : 'Service Data Information'}
        subtitle={isRTL
          ? 'كيف يتعامل واثق مع البيانات المستخدمة أثناء عملية التحقق من جواز السفر الإلكتروني — بشكل منفصل عن خصوصية زوار الموقع.'
          : "How Wathiq handles data used during ePassport verification — distinct from website visitor privacy."}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-wide">
          <div className={`max-w-3xl mx-auto legal-content ${isRTL ? 'text-right' : ''}`}>
            <p>
              {isRTL
                ? 'توضح هذه الصفحة تحديداً كيفية التعامل مع البيانات المُجمَّعة أثناء عملية التحقق من جواز السفر الإلكتروني (مثل بيانات الوثيقة المقدَّمة)، بشكل منفصل عن '
                : 'This page is specifically about data collected during an ePassport verification (such as submitted document data), distinct from '}
              <Link href={href('/privacy')}>{isRTL ? 'إشعار خصوصية زوار الموقع' : 'the website visitor Privacy Notice'}</Link>
              {isRTL ? '.' : '.'}
            </p>
            <p>
              {isRTL
                ? 'نعمل حالياً على استكمال المراجعة الفنية والقانونية الكاملة لكيفية جمع بيانات التحقق ونقلها وتخزينها والاحتفاظ بها وحذفها، والجهات التي قد تعالجها نيابةً عنا، ومسؤوليات العميل المرتبطة بها. سننشر تفاصيل دقيقة هنا فور اكتمال هذه المراجعة والتحقق منها.'
                : "We are completing a full technical and legal review of how verification data is collected, transmitted, stored, retained, and deleted, which subprocessors (if any) may handle it, and the client responsibilities involved. We'll publish precise details here once that review is complete and verified."}
            </p>
            <p>
              {isRTL
                ? 'إذا احتجت إلى إجابات محددة الآن — على سبيل المثال لتقييم أمني من طرفك — تواصل معنا مباشرةً.'
                : "If you need specific answers now — for example for your own security assessment — contact us directly."}
            </p>
            <p>
              <Link href={href('/contact')} className="text-electric-600 font-semibold hover:underline">
                {isRTL ? 'تواصل مع فريقنا' : 'Contact our team'}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
