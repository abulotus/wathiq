import { Language } from '@/lib/translations';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';

const points = {
  en: [
    { title: 'An easy Arabic interface', desc: 'The product itself is built in Arabic, not just the marketing pages.' },
    { title: 'Simple, clear steps', desc: 'Clear instructions guide the user to complete the verification process smoothly.' },
    { title: 'Consistent across platforms', desc: 'The same Arabic-first experience carries through the mobile app and client dashboard.' },
  ],
  ar: [
    { title: 'واجهة عربية سهلة الاستخدام', desc: 'العربية جزء أصيل من تصميم المنصة، وليست مجرد ترجمة لصفحاتها التسويقية.' },
    { title: 'خطوات بسيطة وواضحة', desc: 'تعليمات واضحة تساعد المستخدم على إكمال عملية التحقق بسهولة وسلاسة.' },
    { title: 'تجربة متسقة عبر المنصات', desc: 'تتوفر واجهة عربية متسقة عبر تطبيق الجوال والمتصفح ولوحة تحكم العملاء.' },
  ],
};

export default function ArabicFirstExperience({ locale }: { locale: Language }) {
  const isRTL = locale === 'ar';
  const items = isRTL ? points.ar : points.en;

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag label={isRTL ? 'تجربة عربية من الأساس' : 'Arabic-First Experience'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'مصمّمة خصيصًا للمستخدمين الناطقين بالعربية' : 'Designed specifically for Arabic-speaking users'}
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
