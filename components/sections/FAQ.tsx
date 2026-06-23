'use client';

import { useState } from 'react';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import { useLanguage } from '@/contexts/LanguageContext';

const faqs = {
  en: [
    {
      q: 'What is digital identity verification and why does my business need it?',
      a: 'Digital identity verification is the process of confirming that a person is who they claim to be online — using document checks, biometric matching, and behavioural signals. Businesses in finance, e-commerce, healthcare, and government use it to prevent fraud, meet KYC/AML regulations, and build trusted customer relationships from the very first interaction.',
    },
    {
      q: 'How quickly can we integrate WATHIQ into our existing platform?',
      a: 'Most integrations are live within 24–48 hours. We provide a RESTful API, pre-built SDKs for all major languages, a no-code configuration dashboard, and a full sandbox environment for testing. Our integration team provides dedicated support from day one — no lengthy procurement cycles or months of setup.',
    },
    {
      q: 'Which countries and regions does WATHIQ serve?',
      a: 'We are headquartered in London (UK) with a primary focus on the Middle East and North Africa region — including Saudi Arabia, UAE, Egypt, Jordan, Iraq, and the wider GCC. Our platform is built to handle the regulatory, linguistic, and document requirements across these markets, with English and Arabic support throughout.',
    },
    {
      q: 'What compliance and regulatory standards does WATHIQ align with?',
      a: 'WATHIQ is built with compliance by design. Our platform aligns with GDPR (EU), UK data protection law, and major regional frameworks. We apply AES-256 encryption for data at rest, TLS 1.3 for all data in transit, and our processes are structured around KYC, AML, and eKYC requirements common across MENA financial regulators.',
    },
    {
      q: "How is our data and our customers' data protected?",
      a: 'Security is not an afterthought — it is the foundation of everything we build. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We follow a zero-trust architecture, apply strict data minimisation principles, and maintain clear data residency controls. We do not sell or share customer data with third parties.',
    },
    {
      q: 'Can WATHIQ work for our specific industry?',
      a: 'Yes. We serve financial services, e-commerce, telecommunications, healthcare, government, and enterprise clients. Each industry has distinct verification requirements, regulatory obligations, and risk profiles — and our platform is configurable to meet them. Speak with our team for a vertical-specific assessment.',
    },
    {
      q: 'Is there a demo or trial available before committing?',
      a: 'Absolutely. We offer a live product demo with a member of our team and access to a full sandbox environment so your technical team can evaluate the API before any commitment. Contact us to arrange a session — typically within 1–2 business days.',
    },
    {
      q: 'What kind of ongoing support does WATHIQ provide?',
      a: 'Every client receives dedicated onboarding support, access to comprehensive documentation, and direct communication with our technical team. We offer 24/7 monitoring of platform availability, proactive incident notification, and regular check-ins to ensure the integration continues to perform at your required scale.',
    },
  ],
  ar: [
    {
      q: 'ما هو التحقق من الهوية الرقمية ولماذا يحتاجه عملي؟',
      a: 'التحقق من الهوية الرقمية هو عملية التأكد من أن الشخص هو فعلاً من يدّعي أنه هو عبر الإنترنت — باستخدام التحقق من المستندات والمطابقة البيومترية والإشارات السلوكية. تستخدمه الشركات في مجالات المال والتجارة الإلكترونية والرعاية الصحية والحكومة لمنع الاحتيال والامتثال لمتطلبات KYC/AML وبناء علاقات موثوقة مع العملاء منذ أول تفاعل.',
    },
    {
      q: 'كم يستغرق التكامل مع وثيق؟',
      a: 'معظم عمليات التكامل تكون جاهزة للعمل خلال 24–48 ساعة. نوفر REST API وحزم SDK جاهزة لجميع اللغات الرئيسية، ولوحة تحكم بدون كود لإعدادات الإطار، وبيئة اختبار كاملة. يقدم فريق التكامل لدينا دعماً مخصصاً من اليوم الأول.',
    },
    {
      q: 'ما الدول والمناطق التي تخدمها وثيق؟',
      a: 'مقرنا في لندن (المملكة المتحدة) مع تركيز أساسي على منطقة الشرق الأوسط وشمال أفريقيا — بما فيها السعودية والإمارات ومصر والأردن والعراق ودول الخليج العربي. تم بناء منصتنا لتلبية المتطلبات التنظيمية واللغوية والوثائقية في هذه الأسواق، مع دعم كامل للعربية والإنجليزية.',
    },
    {
      q: 'ما معايير الامتثال التي يتوافق معها وثيق؟',
      a: 'بُني وثيق بالامتثال كأساس. منصتنا متوافقة مع GDPR (الاتحاد الأوروبي) وقانون حماية البيانات البريطاني والأطر الإقليمية الرئيسية. نطبق تشفير AES-256 للبيانات المخزنة وTLS 1.3 لجميع البيانات المنقولة، وعملياتنا مبنية حول متطلبات KYC وAML وeKYC الشائعة لدى الجهات التنظيمية المالية في منطقة الشرق الأوسط.',
    },
    {
      q: 'كيف تُحمى بياناتنا وبيانات عملائنا؟',
      a: 'الأمن ليس فكرة لاحقة — بل هو الأساس الذي نبني عليه كل شيء. جميع البيانات مشفرة في حالة السكون (AES-256) وفي حالة النقل (TLS 1.3). نتبع معمارية الثقة الصفرية، ونطبق مبادئ الحد الأدنى من البيانات، ونحافظ على ضوابط واضحة لإقامة البيانات. لا نبيع أو نشارك بيانات العملاء مع أطراف ثالثة.',
    },
    {
      q: 'هل تعمل منصة وثيق مع قطاعنا المحدد؟',
      a: 'نعم. نخدم عملاء في الخدمات المالية والتجارة الإلكترونية والاتصالات والرعاية الصحية والحكومة والمؤسسات الكبرى. لكل قطاع متطلبات تحقق وإلزامات تنظيمية وملفات مخاطر مختلفة — ومنصتنا قابلة للتهيئة لتلبيتها. تحدث مع فريقنا للحصول على تقييم خاص بقطاعك.',
    },
    {
      q: 'هل يتوفر عرض توضيحي أو تجربة مجانية؟',
      a: 'بالتأكيد. نقدم عرضاً تجريبياً حياً مع أحد أعضاء فريقنا وإمكانية الوصول إلى بيئة اختبار كاملة لتمكين فريقك التقني من تقييم API قبل أي التزام. تواصل معنا لترتيب جلسة — عادةً خلال 1–2 أيام عمل.',
    },
    {
      q: 'ما نوع الدعم المستمر الذي يقدمه وثيق؟',
      a: 'يحصل كل عميل على دعم تأهيل مخصص والوصول إلى توثيق شامل والتواصل المباشر مع فريقنا التقني. نوفر مراقبة على مدار الساعة لتوفر المنصة وإشعاراً فورياً بالحوادث واجتماعات دورية لضمان استمرار أداء التكامل بالحجم المطلوب.',
    },
  ],
};

export default function FAQ() {
  const { isRTL } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const items = isRTL ? faqs.ar : faqs.en;

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <AnimatedSection className={`text-center max-w-2xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
          <SectionTag label={isRTL ? 'الأسئلة الشائعة' : 'FAQ'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'أسئلة يسألها عملاؤنا' : 'Questions Our Clients Ask'}
          </h2>
          <p className="body-lg text-slate-500 mt-4">
            {isRTL
              ? 'إجابات واضحة حول منصتنا وطريقة عملنا وكيف يمكننا دعم مؤسستك.'
              : 'Clear answers about our platform, how we work, and how we can support your organisation.'}
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto divide-y divide-slate-100">
          {items.map((item, i) => (
            <AnimatedItem key={i} index={i}>
              <div>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`w-full flex items-start justify-between gap-4 py-5 text-start group ${isRTL ? 'text-right' : ''}`}
                  aria-expanded={open === i}
                >
                  <span className={`font-semibold text-navy-900 text-base leading-snug group-hover:text-electric-600 transition-colors ${open === i ? 'text-electric-600' : ''}`}>
                    {item.q}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 mt-0.5 ${
                    open === i
                      ? 'border-electric-500 bg-electric-500 text-white rotate-45'
                      : 'border-slate-300 text-slate-400 group-hover:border-electric-400'
                  }`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className={`text-slate-500 text-sm leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                    {item.a}
                  </p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            {isRTL ? 'لم تجد إجابة لسؤالك؟' : "Didn't find what you were looking for?"}
            {' '}
            <a href="/contact" className="text-electric-600 font-semibold hover:underline">
              {isRTL ? 'تواصل مع فريقنا' : 'Talk to our team'}
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
