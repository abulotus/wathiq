'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';

const certifications = [
  {
    label: 'GDPR Compliant',
    labelAr: 'متوافق مع اللائحة الأوروبية لحماية البيانات',
    desc: 'Full compliance with EU General Data Protection Regulation for handling personal data.',
    descAr: 'امتثال كامل للائحة الأوروبية العامة لحماية البيانات في التعامل مع البيانات الشخصية.',
    color: 'border-teal-500/30 bg-teal-500/5',
    iconColor: 'text-teal-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: 'ICO Registered',
    labelAr: 'مسجل لدى مكتب مفوض المعلومات',
    desc: 'Registered with the UK Information Commissioner\'s Office as a data controller.',
    descAr: 'مسجل لدى مكتب مفوض المعلومات في المملكة المتحدة بصفة متحكم في البيانات.',
    color: 'border-slate-500/30 bg-slate-500/5',
    iconColor: 'text-slate-300',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: 'eIDAS Compliant',
    labelAr: 'متوافق مع eIDAS',
    desc: 'Aligned with the EU Electronic Identification and Trust Services regulation.',
    descAr: 'متوافق مع لائحة الهوية الإلكترونية وخدمات الثقة الأوروبية.',
    color: 'border-purple-500/30 bg-purple-500/5',
    iconColor: 'text-purple-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'SOC 2 Type II',
    labelAr: 'معيار SOC 2 من النوع الثاني',
    desc: 'Independent audit of security, availability, and confidentiality controls.',
    descAr: 'تدقيق مستقل على ضوابط الأمان والتوافر والسرية.',
    color: 'border-indigo-500/30 bg-indigo-500/5',
    iconColor: 'text-indigo-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const practices = [
  {
    en: 'AES-256 encryption at rest and in transit',
    ar: 'تشفير AES-256 للبيانات المخزنة والمنقولة',
  },
  {
    en: 'Zero-knowledge architecture — we cannot read your data',
    ar: 'معمارية عدم المعرفة — لا نستطيع قراءة بياناتك',
  },
  {
    en: 'EU/UK data residency options available',
    ar: 'خيارات إقامة البيانات في الاتحاد الأوروبي والمملكة المتحدة',
  },
  {
    en: 'Role-based access control (RBAC)',
    ar: 'التحكم في الوصول القائم على الأدوار',
  },
  {
    en: 'Full audit logs for every action',
    ar: 'سجلات تدقيق كاملة لكل إجراء',
  },
  {
    en: 'Penetration tested annually by independent third parties',
    ar: 'اختبار اختراق سنوي من قِبل جهات مستقلة',
  },
];

export default function SecurityCompliance() {
  const { isRTL } = useLanguage();

  return (
    <section className="section-pad bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-mesh opacity-20" />
      <TechBackground variant="dark" />
      <div className="absolute -end-40 top-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)' }} />

      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-14">
          <SectionTag label={isRTL ? 'الأمان والامتثال' : 'Security & Compliance'} variant="white" />
          <h2 className="heading-lg text-white mt-4">
            {isRTL ? 'مبني للمؤسسات التي تخضع للتنظيم' : 'Built for Regulated Environments'}
          </h2>
          <p className="body-lg text-slate-300 mt-4 max-w-xl mx-auto">
            {isRTL
              ? 'يضع مشترو المؤسسات الامتثال في المقام الأول. إليك كيف نلبي متطلباتك.'
              : 'Enterprise buyers put compliance first. Here is how we meet your requirements.'}
          </p>
        </AnimatedSection>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {certifications.map((c, i) => (
            <AnimatedItem key={i} index={i}>
              <div className={`h-full rounded-2xl border p-5 ${c.color} flex flex-col gap-3`}>
                <div className={`w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center ${c.iconColor} bg-white/5`}>
                  {c.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-1">{isRTL ? c.labelAr : c.label}</div>
                  <p className="text-slate-400 text-xs leading-relaxed">{isRTL ? c.descAr : c.desc}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Security practices */}
        <AnimatedSection delay={0.3}>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-lg mb-6">
              {isRTL ? 'ممارسات الأمان' : 'Security Practices'}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {practices.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300 text-sm">{isRTL ? p.ar : p.en}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <span className="text-slate-400 text-sm">
                {isRTL ? 'هل لديك متطلبات امتثال محددة؟' : 'Have specific compliance requirements?'}
              </span>
              <a
                href="/security"
                className="inline-flex items-center gap-1.5 text-electric-400 font-semibold text-sm hover:text-electric-300 transition-colors"
              >
                {isRTL ? 'اقرأ وثيقة الأمان الكاملة' : 'Read our full security documentation'}
                <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 72L1440 10V72H0Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
