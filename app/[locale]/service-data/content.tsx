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
                ? 'أثناء عملية التحقق، يجمع واثق صور الوثيقة والصورة الذاتية، وأدلة جواز السفر الإلكتروني عند وجودها (بيانات الشريحة الموقّعة)، إضافة إلى البيانات المستخرجة من OCR والمنطقة القابلة للقراءة آلياً والباركود. تُشفَّر حقول الهوية الحساسة باستخدام AES-256-GCM، وتُحفَظ المستندات والصور الذاتية وأدلة الشريحة في مساحة تخزين خاصة، محدودة الوصول والمدة.'
                : "During a verification, Wathiq collects document images, a selfie, and — where applicable — ePassport chip evidence (signed chip data), along with data extracted via OCR, the machine-readable zone, and barcodes. Sensitive identity fields are encrypted with AES-256-GCM, and documents, selfies, and chip evidence are stored in private, access-controlled, time-limited storage."}
            </p>
            <p>
              {isRTL
                ? 'بيانات كل مؤسسة معزولة منطقياً عن بيانات المؤسسات الأخرى، والقرار النهائي للتحقق يصدره الخادم فقط — لا يملك تطبيق الجوال أو لوحة التحكم صلاحية تغييره. لا تزال تفاصيل دقيقة — مواقع الاستضافة، وفترات الاحتفاظ بالبيانات، والجهات المعالجة الفرعية إن وُجدت — قيد التوثيق النهائي وستُنشر هنا فور اكتمالها.'
                : "Each organisation's data is logically isolated from other organisations', and the final verification decision is made by the backend only — the mobile app and dashboard cannot override it. Exact specifics — hosting locations, data retention periods, and any subprocessors — are still being finalized and will be published here once complete."}
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
