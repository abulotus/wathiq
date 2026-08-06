'use client';

import { useState } from 'react';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import { useLanguage } from '@/contexts/LanguageContext';

const faqs = {
  en: [
    {
      q: 'What does Wathiq verify?',
      a: "For the Syrian market, Wathiq reads the PDF417 barcode on the Syrian national ID card and the older (non-electronic) Syrian passport, and verifies electronic passports for Syrian citizens and 140 countries worldwide. An organisation initiates a verification, the applicant completes document and biometric capture through Wathiq's mobile experience, and a decision — accepted, in review, or rejected — is returned to the organisation.",
    },
    {
      q: 'Which ePassports are supported?',
      a: 'Wathiq supports electronic passports issued by 140 countries, including EU member states, the United States, and most Middle Eastern countries, alongside the Syrian national ID card and older Syrian passport. Support can depend on the specific document version, so if you need to confirm a particular country or document, contact our team.',
    },
    {
      q: 'Does Wathiq check biometrics, not just documents?',
      a: "Yes. Alongside document data extraction (OCR) and barcode validation, Wathiq performs a biometric liveness check and matches the applicant's face against their document photo as part of the verification.",
    },
    {
      q: 'Is the experience available in Arabic?',
      a: 'Yes. Wathiq is Arabic-first — the interface, verification journey, and client dashboard are all available in Arabic, with a right-to-left experience designed as a first-class product, not a translated afterthought.',
    },
    {
      q: 'How does API integration work?',
      a: 'You connect your systems to Wathiq through our API to initiate verifications and retrieve results. Contact our team to request API access and documentation.',
    },
    {
      q: 'What information is provided through webhooks?',
      a: 'Wathiq sends webhook notifications so your systems are updated as a verification\'s status changes, without needing to poll the API.',
    },
    {
      q: 'Can results be reviewed in the dashboard?',
      a: 'Yes. The client dashboard lets your team review verification references, status, and details, and see webhook delivery status for each event.',
    },
    {
      q: 'What is the role of the mobile application?',
      a: "Wathiq's mobile application is where the applicant completes the verification journey — document capture, data extraction, and a biometric liveness and face-match check — in Arabic, from start through to a result.",
    },
    {
      q: 'Does Wathiq provide a mobile SDK?',
      a: "Wathiq does not currently provide a mobile SDK. Business systems can connect through the available API and webhooks, while Wathiq's mobile application provides the supported mobile verification experience.",
    },
    {
      q: 'How is verification information handled?',
      a: "Sensitive identity fields are encrypted with AES-256-GCM, and documents, selfies, and ePassport chip evidence are stored in private, access-controlled, time-limited storage. Each organisation's data is logically isolated, and the final decision is made by the backend only. Exact hosting locations and retention periods are still being finalized — see our Service Data Information page for details.",
    },
    {
      q: 'How can an organisation request access?',
      a: 'Request a demo or contact our team, and we will walk through your verification requirements and how Wathiq can connect to your systems.',
    },
  ],
  ar: [
    {
      q: 'ما الذي يتحقق منه واثق؟',
      a: 'للسوق السورية، يقرأ واثق باركود PDF417 على بطاقة الهوية الوطنية السورية وجواز السفر السوري القديم (غير الإلكتروني)، ويتحقق من جوازات السفر الإلكترونية للمواطنين السوريين ولـ140 دولة حول العالم. تبدأ المؤسسة عملية تحقق، ويكمل المتقدّم التقاط الوثيقة والبيانات الحيوية عبر تجربة واثق للجوال، ثم يصل قرار — مقبول أو قيد المراجعة أو مرفوض — إلى المؤسسة.',
    },
    {
      q: 'ما جوازات السفر الإلكترونية المدعومة؟',
      a: 'يدعم واثق جوازات السفر الإلكترونية الصادرة عن 140 دولة، منها دول الاتحاد الأوروبي والولايات المتحدة ومعظم دول الشرق الأوسط، إلى جانب بطاقة الهوية الوطنية السورية وجواز السفر السوري القديم. قد يعتمد الدعم على إصدار الوثيقة تحديداً، فإذا احتجت إلى تأكيد دعم دولة أو وثيقة معينة، تواصل مع فريقنا.',
    },
    {
      q: 'هل يفحص واثق البيانات الحيوية وليس المستندات فقط؟',
      a: 'نعم. إلى جانب استخراج بيانات المستند (OCR) والتحقق من الباركود، يجري واثق فحصاً حيوياً للتحقق من الحيوية ومطابقة وجه المتقدّم مع صورته في المستند كجزء من عملية التحقق.',
    },
    {
      q: 'هل التجربة متوفرة باللغة العربية؟',
      a: 'نعم. واثق منصة عربية أولاً — الواجهة ورحلة التحقق ولوحة تحكم العملاء متوفرة جميعها باللغة العربية، مع تجربة من اليمين إلى اليسار مصممة كميزة أساسية في المنتج، لا كترجمة لاحقة.',
    },
    {
      q: 'كيف يعمل التكامل عبر API؟',
      a: 'تربط أنظمتك بواثق من خلال واجهة برمجة التطبيقات لبدء عمليات التحقق واسترجاع النتائج. تواصل مع فريقنا لطلب الوصول إلى API والتوثيق الخاص به.',
    },
    {
      q: 'ما المعلومات التي تصل عبر Webhooks؟',
      a: 'يرسل واثق إشعارات Webhook لتحديث أنظمتك عند تغيّر حالة عملية التحقق، دون الحاجة إلى استعلام API بشكل متكرر.',
    },
    {
      q: 'هل يمكن مراجعة النتائج عبر لوحة التحكم؟',
      a: 'نعم. تتيح لوحة تحكم العملاء لفريقك مراجعة مراجع التحقق وحالتها وتفاصيلها، ومتابعة حالة تسليم إشعارات Webhook لكل عملية.',
    },
    {
      q: 'ما دور التطبيق الجوال؟',
      a: 'يُكمل المتقدّم عبر تطبيق واثق للجوال رحلة التحقق — التقاط الوثيقة واستخراج البيانات وفحص حيوي للتحقق من الحيوية ومطابقة الوجه — باللغة العربية، من البداية وحتى صدور النتيجة.',
    },
    {
      q: 'هل يوفر واثق SDK للجوال؟',
      a: 'لا يوفر واثق حالياً SDK للجوال. يمكن لأنظمة الأعمال الاتصال عبر API وWebhooks المتاحة، بينما يوفر تطبيق واثق للجوال تجربة التحقق المدعومة عبر الهاتف.',
    },
    {
      q: 'كيف تُعالَج معلومات التحقق؟',
      a: 'تُشفَّر حقول الهوية الحساسة باستخدام AES-256-GCM، وتُخزَّن المستندات والصور الذاتية وأدلة شريحة جواز السفر الإلكتروني في تخزين خاص محدود الوصول ومحدود المدة. بيانات كل مؤسسة معزولة منطقياً، والقرار النهائي يصدره الخادم فقط. لا تزال مواقع الاستضافة وفترات الاحتفاظ الدقيقة قيد التوثيق النهائي — راجع صفحة بيانات خدمة التحقق للتفاصيل.',
    },
    {
      q: 'كيف يمكن لمؤسسة طلب الوصول؟',
      a: 'اطلب عرضاً تجريبياً أو تواصل مع فريقنا، وسنستعرض معك متطلبات التحقق لديك وكيفية ربط واثق بأنظمتك.',
    },
  ],
};

export default function FAQ() {
  const { isRTL, href } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const items = isRTL ? faqs.ar : faqs.en;

  return (
    <section className="pt-14 sm:pt-20 lg:pt-28 pb-8 sm:pb-10 bg-white">
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
            <a href={href('/contact')} className="text-electric-600 font-semibold hover:underline">
              {isRTL ? 'تواصل مع فريقنا' : 'Talk to our team'}
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
