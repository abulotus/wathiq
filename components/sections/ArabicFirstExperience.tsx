'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';

const points = {
  en: [
    { title: 'A real Arabic interface', desc: 'The product itself is built in Arabic — not just the marketing pages.' },
    { title: 'Proper right-to-left journeys', desc: 'Verification flows and the dashboard follow correct RTL structure and reading order.' },
    { title: 'Consistent across platforms', desc: 'The same Arabic-first experience carries through the mobile app and client dashboard.' },
  ],
  ar: [
    { title: 'واجهة عربية حقيقية', desc: 'المنتج نفسه مبني بالعربية — وليس فقط صفحات التسويق.' },
    { title: 'رحلات صحيحة من اليمين إلى اليسار', desc: 'تتبع مسارات التحقق ولوحة التحكم بنية RTL وترتيب قراءة صحيحين.' },
    { title: 'تجربة متسقة عبر المنصات', desc: 'التجربة العربية نفسها تمتد عبر تطبيق الجوال ولوحة تحكم العملاء.' },
  ],
};

export default function ArabicFirstExperience() {
  const { isRTL } = useLanguage();
  const items = isRTL ? points.ar : points.en;

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag label={isRTL ? 'تجربة عربية أولاً' : 'Arabic-First Experience'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'مصممة حول المستخدمين الناطقين بالعربية' : 'Designed around Arabic-speaking users'}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <AnimatedItem key={i} index={i}>
              <div className={`text-center ${isRTL ? 'sm:text-right' : ''}`}>
                <h3 className="text-navy-900 font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
