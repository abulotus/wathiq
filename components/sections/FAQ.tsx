'use client';

import { useState } from 'react';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import { Language } from '@/lib/translations';

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
      q: 'Does Wathiq offer AML screening?',
      a: "Yes. For banks and fintechs, AML screening is an add-on you enable on top of ePassport verification. Once enabled, Wathiq screens individuals against your organisation's selected official sanctions and watchlist sources.",
    },
    {
      q: 'Is AML screening automatic or manual?',
      a: 'Both. You can enable automatic screening so it runs whenever a verification is accepted, and your team can also run a screening manually on any person from the dashboard at any time.',
    },
    {
      q: 'What happens when AML screening finds a potential match?',
      a: "A potential match opens a compliance investigation case with source-by-source evidence and a similarity score — it does not automatically reject the customer. Your team reviews the case and resolves it as a false positive, a confirmed match, or as needing more information.",
    },
    {
      q: 'How can an organisation request access?',
      a: 'Request a demo or contact our team, and we will walk through your verification requirements and how Wathiq can connect to your systems.',
    },
  ],
  ar: [
    {
      q: 'ما الوثائق والبيانات التي يتحقق منها واثق؟',
      a: 'بالنسبة إلى السوق السورية، يقرأ واثق رمز PDF417 الموجود على بطاقة الهوية الوطنية السورية وجواز السفر السوري القديم غير الإلكتروني. كما يدعم التحقق من جوازات السفر الإلكترونية السورية ومن جوازات السفر الصادرة عن 140 دولة حول العالم. تبدأ المؤسسة طلب التحقق، ثم يُكمل المتقدّم التقاط الوثيقة وإجراءات التحقق البيومتري عبر تجربة واثق على الجوال. وبعد ذلك تتلقى المؤسسة النتيجة بإحدى الحالات التالية: مقبول، أو قيد المراجعة، أو مرفوض.',
    },
    {
      q: 'ما جوازات السفر والوثائق المدعومة؟',
      a: 'يدعم واثق جوازات السفر الإلكترونية الصادرة عن 140 دولة، ومن بينها دول الاتحاد الأوروبي والولايات المتحدة ومعظم دول الشرق الأوسط. كما يدعم بطاقة الهوية الوطنية السورية وجواز السفر السوري القديم غير الإلكتروني. وقد يختلف الدعم باختلاف إصدار الوثيقة؛ لذا يُرجى التواصل مع فريقنا للتأكد من دعم دولة أو وثيقة محددة.',
    },
    {
      q: 'هل يجري واثق تحققًا بيومتريًا، أم يقتصر على فحص الوثائق؟',
      a: 'نعم. إلى جانب استخراج بيانات الوثيقة باستخدام تقنية التعرّف الضوئي على الحروف (OCR) والتحقق من الرمز الشريطي، يجري واثق فحصًا للحيوية ويطابق وجه المتقدّم مع صورته في الوثيقة ضمن عملية التحقق.',
    },
    {
      q: 'هل التجربة متوفرة باللغة العربية؟',
      a: 'نعم. صُمّمت منصة واثق بالعربية من الأساس؛ إذ تتوفر واجهة المنصة، ورحلة التحقق، ولوحة تحكم العملاء باللغة العربية، مع دعم كامل لاتجاه الكتابة من اليمين إلى اليسار. والعربية جزء أساسي من تصميم المنتج، وليست ترجمة أُضيفت لاحقًا.',
    },
    {
      q: 'كيف يعمل التكامل عبر واجهة برمجة التطبيقات (API)؟',
      a: 'يمكنك ربط أنظمتك بمنصة واثق عبر API لبدء طلبات التحقق واسترجاع النتائج. تواصل مع فريقنا لطلب صلاحية الوصول والوثائق الفنية.',
    },
    {
      q: 'ما التحديثات التي تُرسل عبر إشعارات Webhook؟',
      a: 'يرسل واثق إشعارات Webhook إلى أنظمتك عند تغيّر حالة طلب التحقق، ما يغني عن الاستعلام المتكرر عبر API.',
    },
    {
      q: 'هل يمكن مراجعة النتائج من لوحة التحكم؟',
      a: 'نعم. تتيح لوحة تحكم العملاء لفريقك مراجعة طلبات التحقق وحالاتها وتفاصيل نتائجها، إضافةً إلى متابعة حالة تسليم إشعارات Webhook لكل طلب.',
    },
    {
      q: 'ما دور تطبيق واثق للجوال؟',
      a: 'يُكمل المتقدّم عبر تطبيق واثق للجوال خطوات التحقق باللغة العربية، بما يشمل التقاط الوثيقة، واستخراج البيانات، وفحص الحيوية، ومطابقة الوجه، حتى صدور النتيجة.',
    },
    {
      q: 'هل يوفّر واثق حزمة تطوير برمجيات للجوال (SDK)؟',
      a: 'لا يوفّر واثق حاليًا حزمة تطوير برمجيات (SDK) للجوال. ويمكن لأنظمة المؤسسات التكامل عبر API وإشعارات Webhook، بينما يوفّر تطبيق واثق للجوال تجربة التحقق للمستخدمين.',
    },
    {
      q: 'كيف تُعالَج بيانات التحقق؟',
      a: 'تُشفَّر حقول الهوية الحساسة باستخدام AES-256-GCM، وتُحفظ الوثائق وصور الوجه والأدلة الناتجة عن قراءة شريحة جواز السفر الإلكتروني في مساحة تخزين خاصة ومحدودة الوصول، ولفترة زمنية محددة. كما تُعزل بيانات كل مؤسسة منطقيًا عن بيانات المؤسسات الأخرى، ولا تُصدر نتيجة التحقق النهائية إلا من الخادم.',
    },
    {
      q: 'هل يقدّم واثق فحص غسل الاموال؟',
      a: 'نعم. بالنسبة للبنوك وشركات التقنية المالية، فحص غسل الاموال إضافة تُفعَّل فوق خدمة التحقق من جواز السفر الإلكتروني. بعد التفعيل، يفحص واثق الأفراد مقابل مصادر العقوبات وقوائم الحظر الرسمية التي تختارها مؤسستك.',
    },
    {
      q: 'هل فحص غسل الاموال تلقائي أم يدوي؟',
      a: 'كلاهما. يمكنك تفعيل الفحص التلقائي ليعمل عند قبول كل طلب تحقق، كما يمكن لفريقك تشغيل فحص يدوي على أي شخص من لوحة التحكم في أي وقت.',
    },
    {
      q: 'ماذا يحدث عند العثور على مطابقة محتملة في فحص غسل الاموال؟',
      a: 'تفتح المطابقة المحتملة حالة تحقيق للامتثال مزودة بأدلة تفصيلية لكل مصدر ودرجة تشابه — دون رفض العميل تلقائياً. يراجع فريقك الحالة ويغلقها كمطابقة إيجابية زائفة، أو مطابقة مؤكدة، أو بحاجة لمزيد من المعلومات.',
    },
    {
      q: 'كيف يمكن للمؤسسة طلب الوصول إلى المنصة؟',
      a: 'اطلب عرضًا تجريبيًا أو تواصل مع فريقنا. سنراجع معك متطلبات التحقق وآلية تكامل واثق مع أنظمتك.',
    },
  ],
};

export default function FAQ({ locale }: { locale: Language }) {
  const isRTL = locale === 'ar';
  const href = (path: string) => `/${locale}${path}`;
  const [open, setOpen] = useState<number | null>(null);
  const items = isRTL ? faqs.ar : faqs.en;

  return (
    <section className="pt-14 sm:pt-20 lg:pt-28 pb-8 sm:pb-10 bg-white">
      <div className="container-wide">
        <AnimatedSection className={`text-center max-w-2xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
          <SectionTag label={isRTL ? 'الأسئلة الشائعة' : 'FAQ'} />
          <h2 className="heading-lg text-navy-900 mt-4">
            {isRTL ? 'أسئلة شائعة من عملائنا' : 'Questions Our Clients Ask'}
          </h2>
          <p className="body-lg text-slate-500 mt-4">
            {isRTL
              ? 'إجابات واضحة عن منصتنا، وآلية عملها، وكيف يمكنها دعم مؤسستك.'
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
            {isRTL ? 'لم تجد إجابة عن سؤالك؟' : "Didn't find what you were looking for?"}
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
