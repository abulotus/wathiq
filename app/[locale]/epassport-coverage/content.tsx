'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Link from 'next/link';

export default function EpassportCoveragePage() {
  const { isRTL, href } = useLanguage();

  return (
    <>
      <PageHero
        tag={isRTL ? 'تغطية جوازات السفر' : 'ePassport Coverage'}
        title={isRTL ? 'تغطية دولية. تجربة عربية أولاً.' : 'International passport coverage. Arabic-first experience.'}
        subtitle={isRTL
          ? 'يدعم واثق جوازات السفر الإلكترونية الصادرة عن 140 دولة.'
          : 'Wathiq supports electronic passports issued by 140 countries.'}
      />

      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
            <SectionTag label={isRTL ? 'التغطية' : 'Coverage'} />
            <div className="text-6xl sm:text-7xl font-black text-navy-900 my-6">140</div>
            <p className="text-slate-600 text-lg leading-relaxed">
              {isRTL
                ? 'يدعم واثق التحقق من جوازات السفر الإلكترونية الصادرة عن 140 دولة حول العالم، بما فيها جوازات السفر السورية.'
                : 'Wathiq supports verification of electronic passports issued by 140 countries worldwide, including Syrian ePassports.'}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mt-4">
              {isRTL ? 'للمستندات السورية غير الإلكترونية — بطاقة الهوية الوطنية وجواز السفر القديم — يتحقق واثق عبر قراءة باركود PDF417 بدلاً من التحقق الخاص بجوازات السفر الإلكترونية. راجع ' : "For non-electronic Syrian documents — the national ID card and the older passport — Wathiq verifies by reading the PDF417 barcode rather than ePassport verification. See the "}
              <Link href={href('/platform')} className="text-electric-600 font-semibold hover:underline">
                {isRTL ? 'صفحة المنصة' : 'Platform page'}
              </Link>
              {isRTL ? ' لمزيد من التفاصيل.' : ' for details.'}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="max-w-3xl mx-auto mb-10">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { region: isRTL ? 'الاتحاد الأوروبي' : 'European Union', desc: isRTL ? 'جوازات السفر الإلكترونية لدول الاتحاد الأوروبي' : 'ePassports from EU member states' },
                { region: isRTL ? 'الولايات المتحدة' : 'United States', desc: isRTL ? 'جواز السفر الإلكتروني الأمريكي' : 'The US ePassport' },
                { region: isRTL ? 'الشرق الأوسط' : 'Middle East', desc: isRTL ? 'معظم دول الشرق الأوسط' : 'Most Middle Eastern countries' },
              ].map((r, i) => (
                <div key={i} className={`rounded-2xl border border-slate-200 p-5 ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-navy-900 font-bold mb-1">{r.region}</div>
                  <div className="text-slate-500 text-sm">{r.desc}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-5">
              <div className={`flex items-start gap-3 ${isRTL ? 'text-right' : ''}`}>
                <svg className="w-5 h-5 text-electric-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {isRTL
                    ? 'سيُعرض هنا دليل تفصيلي قابل للبحث حسب الدولة بمجرد ربط الصفحة بمصدر البيانات المعتمد. حالياً تُعرض التغطية على مستوى المناطق أعلاه.'
                    : "A detailed, searchable per-country directory will appear here once it's connected to the approved data source. Coverage is shown at the regional level above for now."}
                </p>
              </div>
              <div className={`flex items-start gap-3 ${isRTL ? 'text-right' : ''}`}>
                <svg className="w-5 h-5 text-electric-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {isRTL
                    ? 'قد يعتمد الدعم على إصدار جواز السفر أو خصائصه التقنية تحديداً، وليس فقط على الدولة المُصدِرة.'
                    : 'Support can depend on the specific passport version or technical characteristics, not just the issuing country.'}
                </p>
              </div>
              <div className={`flex items-start gap-3 ${isRTL ? 'text-right' : ''}`}>
                <svg className="w-5 h-5 text-electric-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {isRTL
                    ? 'للتأكد من دعم دولة أو وثيقة معينة، تواصل مع فريقنا.'
                    : 'To confirm support for a specific country or document, contact our team.'}
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href={href('/contact')} className="btn-primary px-8 py-3.5 shadow-glow inline-flex">
                {isRTL ? 'تأكيد دعم جواز سفر محدد' : 'Confirm Support for a Specific Passport'}
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
