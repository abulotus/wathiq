import Link from 'next/link';
import { Language } from '@/lib/translations';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import ApiHubDiagram from '@/components/ui/ApiHubDiagram';

// Two separate, independently-enabled services. Not to be presented as
// interchangeable "features" alongside API/dashboard, which are shared
// infrastructure rather than services in their own right.
const services = {
  en: [
    { tag: 'Service 1 — ePassport Verification', title: 'Verify modern ePassports (with chip)', body: 'Verify modern electronic passports with a chip, issued by multiple countries worldwide, through an Arabic-first journey.', path: '/epassport-coverage', linkLabel: 'See coverage' },
    { tag: 'Add-on — AML Screening', title: 'Screen against sanctions & watchlists', body: 'Add sanctions and watchlist screening on top of ePassport verification. Once enabled, screening runs automatically whenever a verification is accepted, or your team can run it manually from the dashboard.', path: '/aml-screening', linkLabel: 'View AML Screening' },
  ],
  ar: [
    { tag: 'الخدمة 1 — التحقق من جوازات السفر الإلكترونية', title: 'تحقّق من جوازات السفر الإلكترونية الحديثة المزوّدة بشريحة', body: 'تحقّق من جوازات السفر الإلكترونية الحديثة المزوّدة بشريحة والصادرة عن دول متعددة حول العالم، عبر تجربة مصمّمة بالعربية من الأساس.', path: '/epassport-coverage', linkLabel: 'اطّلع على الدول والوثائق المدعومة' },
    { tag: 'إضافة — فحص AML', title: 'فحص العقوبات وقوائم الحظر', body: 'أضف فحص العقوبات وقوائم الحظر فوق خدمة التحقق من جواز السفر الإلكتروني. بعد التفعيل، يعمل الفحص تلقائياً عند قبول كل طلب تحقق، أو يمكن لفريقك تشغيله يدوياً من لوحة التحكم.', path: '/aml-screening', linkLabel: 'استعرض فحص AML' },
  ],
};

const icons = [
  // Verification: ID/document with a check badge
  <svg key="a" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <rect x="3" y="4" width="14" height="16" rx="2" />
    <path strokeLinecap="round" d="M7 8.5h6M7 12h4" />
    <circle cx="17" cy="17" r="5" fill="white" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17l1.5 1.5L19.5 15" />
  </svg>,
  // AML Screening: shield with check
  <svg key="b" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>,
];

export default function PlatformOverview({ locale }: { locale: Language }) {
  const isRTL = locale === 'ar';
  const href = (path: string) => `/${locale}${path}`;
  const items = isRTL ? services.ar : services.en;

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag label={isRTL ? 'خدماتنا' : 'Our Services'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'التحقق من الهوية، مع فحص AML كإضافة' : 'ID verification, with AML screening as an add-on'}
          </h2>
          <p className="body-md mt-3">
            {isRTL
              ? 'اشترك في التحقق من جواز السفر الإلكتروني وحده، أو أضف فحص AML فوقه لمؤسستك.'
              : 'Subscribe to ePassport verification on its own, or add AML screening on top of it for your organisation.'}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <AnimatedItem key={i} index={i}>
              <div className={`h-full rounded-2xl bg-white border border-slate-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${isRTL ? 'text-right' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center mb-5">
                  {icons[i]}
                </div>
                <div className="text-electric-600 text-xs font-bold uppercase tracking-wider mb-2">{item.tag}</div>
                <h3 className="text-navy-900 font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.body}</p>
                <Link href={href(item.path)} className="inline-flex items-center gap-1.5 text-electric-600 font-semibold text-sm hover:text-electric-700">
                  {item.linkLabel}
                  <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedItem>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-slate-100">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <h3 className="heading-md text-navy-900">
              {isRTL ? 'كلتا الخدمتين عبر منصة واحدة' : 'Both services, one shared platform'}
            </h3>
            <p className="body-md mt-3">
              {isRTL
                ? 'سواء اشتركت بالتحقق من الهوية وحده أو أضفت فحص AML فوقه، تدير كلتا الخدمتين عبر نفس واجهة برمجة التطبيقات وإشعارات Webhook ولوحة تحكم العملاء.'
                : "Whether you subscribe to ID verification alone or add AML screening on top of it, you manage both through the same API, webhooks, and client dashboard."}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
          <ApiHubDiagram isRTL={isRTL} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
