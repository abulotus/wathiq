'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { VerificationChecksCard } from '@/components/ui/RealProductUI';

const features = {
  en: [
    'Verification references & decisions (accepted / review / rejected)',
    'Assurance level per verification',
    'Verified identities directory',
    'Identity risk flags',
    'Team review queue',
    'Search and filtering by status, document type, or assurance level',
    'Audit log of verification activity',
    'Webhook delivery status',
    'Billing and credit balance',
    'Owner/Admin access controls',
  ],
  ar: [
    'مراجع التحقق والقرارات (مقبول / قيد المراجعة / مرفوض)',
    'مستوى الضمان لكل عملية تحقق',
    'دليل الهويات الموثّقة',
    'مؤشرات مخاطر الهوية',
    'قائمة مراجعة للفريق',
    'البحث والتصفية حسب الحالة أو نوع المستند أو مستوى الضمان',
    'سجل تدقيق لنشاط التحقق',
    'حالة تسليم Webhook',
    'الفوترة ورصيد الحساب',
    'صلاحيات وصول لمالك/مسؤول الحساب',
  ],
};

export default function ClientDashboardPage() {
  const { isRTL, href } = useLanguage();

  return (
    <>
      <PageHero
        tag={isRTL ? 'لوحة تحكم العملاء' : 'Client Dashboard'}
        title={isRTL ? 'أدر نشاط التحقق من مكان واحد' : 'Manage verification activity from one place'}
        subtitle={isRTL
          ? 'يراجع فريقك مراجع التحقق وحالتها من خلال لوحة تحكم مركزية.'
          : 'Your team reviews verification references and status through a central dashboard.'}
      />

      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className="max-w-4xl mx-auto mb-10">
            <VerificationChecksCard isRTL={isRTL} />
            <p className="text-slate-400 text-xs text-center mt-4">
              {isRTL
                ? 'إعادة بناء دقيقة لبنية لوحة التحكم الفعلية وتصنيفاتها، ببيانات افتراضية.'
                : "A faithful recreation of the real dashboard's structure and labels, with fictional sample data."}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="max-w-3xl mx-auto">
            <h2 className={`text-navy-900 font-bold text-lg mb-5 ${isRTL ? 'text-right' : ''}`}>
              {isRTL ? 'ما توفره لوحة التحكم اليوم' : "What the dashboard provides today"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {(isRTL ? features.ar : features.en).map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700 text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href={href('/contact')} className="btn-primary px-8 py-3.5 shadow-glow inline-flex">
                {isRTL ? 'اطلب عرضاً تجريبياً' : 'Request a Demo'}
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
