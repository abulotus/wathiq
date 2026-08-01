'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';

const points = {
  en: [
    { title: 'Arabic user interface', desc: 'The interface, not just the marketing pages, is built in Arabic.' },
    { title: 'Right-to-left journeys', desc: 'Verification flows and dashboard layouts follow proper RTL structure.' },
    { title: 'Arabic instructions and messages', desc: 'Users see Arabic guidance and error handling throughout the journey.' },
    { title: 'Arabic dashboard experience', desc: 'Your team can work in the client dashboard in Arabic.' },
    { title: 'Mobile-friendly interaction', desc: 'The verification journey is designed for mobile use.' },
    { title: 'Consistency across platforms', desc: 'The Arabic experience is consistent across supported platforms.' },
  ],
  ar: [
    { title: 'واجهة مستخدم عربية', desc: 'الواجهة نفسها، وليس فقط صفحات التسويق، مبنية بالعربية.' },
    { title: 'رحلات من اليمين إلى اليسار', desc: 'تتبع مسارات التحقق ولوحة التحكم بنية RTL صحيحة.' },
    { title: 'تعليمات ورسائل بالعربية', desc: 'يرى المستخدمون إرشادات ومعالجة أخطاء بالعربية طوال الرحلة.' },
    { title: 'تجربة لوحة تحكم عربية', desc: 'يمكن لفريقك العمل في لوحة تحكم العملاء بالعربية.' },
    { title: 'تفاعل ملائم للجوال', desc: 'رحلة التحقق مصممة للاستخدام عبر الجوال.' },
    { title: 'اتساق عبر المنصات', desc: 'التجربة العربية متسقة عبر المنصات المدعومة.' },
  ],
};

export default function ArabicFirstExperience() {
  const { isRTL } = useLanguage();
  const items = isRTL ? points.ar : points.en;

  return (
    <section className="section-pad bg-slate-50 relative overflow-hidden">
      <TechBackground variant="light" />
      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag label={isRTL ? 'تجربة عربية أولاً' : 'Arabic-First Experience'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'مصممة حول المستخدمين الناطقين بالعربية' : 'Designed around Arabic-speaking users'}
          </h2>
          <p className="body-lg mt-4">
            {isRTL
              ? 'العربية عندنا ميزة أساسية في المنتج، وليست مجرد صفحة تسويقية مترجمة.'
              : "Arabic is a first-class product experience for us, not merely a translated marketing page."}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AnimatedItem key={i} index={i}>
              <div className={`h-full bg-white rounded-2xl border border-slate-100 p-6 shadow-card ${isRTL ? 'text-right' : ''}`}>
                <svg className="w-5 h-5 text-teal-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                <h3 className="text-navy-900 font-bold text-sm mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
