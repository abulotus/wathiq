'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  en: {
    meta: { label: 'Legal', title: 'Terms of Service', updated: 'Last updated: 1 June 2025' },
    body: (
      <>
        <p>
          These Terms of Service ("<strong>Terms</strong>") govern your access to and use of the website at <a href="https://wathiq.digital">wathiq.digital</a> and any related services provided by Wathiq Digital Ltd ("<strong>Wathiq</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"), incorporated in England and Wales, registered address: 71-75 Shelton Street, London, WC2H 9JQ.
        </p>
        <p>By accessing or using our website, you agree to be bound by these Terms.</p>

        <h2>1. Use of the Website</h2>
        <p>You agree to use our website only for lawful purposes. You must not:</p>
        <ul>
          <li>Use the website in any way that violates applicable local, national, or international law or regulation</li>
          <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
          <li>Knowingly transmit data that contains viruses, trojans, worms, or other harmful code</li>
          <li>Attempt to gain unauthorised access to any part of the website, server, or database</li>
          <li>Attack the website via a denial-of-service or distributed denial-of-service attack</li>
          <li>Collect or harvest personally identifiable information from the website</li>
        </ul>

        <h2>2. Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, icons, images, and software — is the property of Wathiq Digital Ltd or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
        </p>
        <p>
          The Wathiq name, logo, and all related marks are trademarks of Wathiq Digital Ltd. Nothing in these Terms grants you any right to use our trademarks without prior written permission.
        </p>

        <h2>3. Disclaimer of Warranties</h2>
        <p>
          Our website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied. We do not warrant that the website will be available, uninterrupted, or error-free, or that information on the website is complete, accurate, or up to date.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Wathiq Digital Ltd and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website. Our total liability for any claim shall not exceed £100 or the amount paid to us in the preceding twelve months, whichever is greater.
        </p>

        <h2>5. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
        </p>

        <h2>6. Privacy</h2>
        <p>
          Your use of this website is also governed by our <a href="/privacy">Privacy Policy</a>, incorporated into these Terms by reference.
        </p>

        <h2>7. Governing Law and Jurisdiction</h2>
        <p>
          These Terms shall be governed by the laws of England and Wales. Any dispute shall be subject to the exclusive jurisdiction of the courts of England and Wales, except where you are a consumer in another jurisdiction entitled to bring proceedings in your local courts.
        </p>

        <h2>8. Changes to These Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time by posting the updated version on this page with a revised &ldquo;last updated&rdquo; date. Continued use of the website after changes constitutes acceptance of the new Terms.
        </p>

        <h2>9. Contact</h2>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:legal@wathiq.digital">legal@wathiq.digital</a></li>
          <li><strong>Post:</strong> Wathiq Digital Ltd, 71-75 Shelton Street, London, WC2H 9JQ, United Kingdom</li>
          <li><strong>Phone:</strong> +44 7547 044020</li>
        </ul>
      </>
    ),
  },
  ar: {
    meta: { label: 'قانوني', title: 'شروط الخدمة', updated: 'آخر تحديث: 1 يونيو 2025' },
    body: (
      <>
        <p>
          تحكم شروط الخدمة هذه ("<strong>الشروط</strong>") وصولك إلى موقع <a href="https://wathiq.digital">wathiq.digital</a> واستخدامه وأي خدمات ذات صلة تقدمها وثيق ديجيتال المحدودة ("<strong>وثيق</strong>"، "<strong>نحن</strong>"، "<strong>لنا</strong>"، أو "<strong>خاصتنا</strong>")، المسجلة في إنجلترا وويلز، العنوان المسجل: 71-75 شيلتون ستريت، لندن، WC2H 9JQ.
        </p>
        <p>بالوصول إلى موقعنا أو استخدامه، فأنت توافق على الالتزام بهذه الشروط.</p>

        <h2>١. استخدام الموقع</h2>
        <p>توافق على استخدام موقعنا لأغراض مشروعة فقط. يجب ألا:</p>
        <ul>
          <li>تستخدم الموقع بأي طريقة تنتهك القانون أو اللوائح المحلية أو الوطنية أو الدولية المعمول بها</li>
          <li>ترسل أي مواد إعلانية أو ترويجية غير مرغوب فيها أو غير مصرح بها</li>
          <li>ترسل عن علم بيانات تحتوي على فيروسات أو أحصنة طروادة أو ديدان أو أكواد ضارة أخرى</li>
          <li>تحاول الوصول غير المصرح به إلى أي جزء من الموقع أو الخادم أو قاعدة البيانات</li>
          <li>تهاجم الموقع عبر هجوم حجب الخدمة أو الحجب الموزع للخدمة</li>
          <li>تجمع أو تحصد معلومات تعريف شخصية من الموقع</li>
        </ul>

        <h2>٢. الملكية الفكرية</h2>
        <p>
          جميع المحتوى على هذا الموقع — بما في ذلك النصوص والرسومات والشعارات والأيقونات والصور والبرامج — هو ملك لوثيق ديجيتال المحدودة أو موردي محتواها ومحمي بموجب قوانين الملكية الفكرية المعمول بها. لا يجوز لك إعادة إنتاج أو توزيع أو تعديل أي محتوى دون موافقتنا الكتابية المسبقة.
        </p>
        <p>
          اسم وثيق وشعاره وجميع العلامات المرتبطة به هي علامات تجارية لوثيق ديجيتال المحدودة. لا يمنحك أي شيء في هذه الشروط أي حق في استخدام علاماتنا التجارية دون إذن كتابي مسبق.
        </p>

        <h2>٣. إخلاء مسؤولية الضمانات</h2>
        <p>
          يتم توفير موقعنا ومحتواه على أساس &ldquo;كما هو&rdquo; و&ldquo;كما هو متاح&rdquo; دون أي ضمانات من أي نوع، صريحة أو ضمنية. لا نضمن أن الموقع سيكون متاحاً أو غير منقطع أو خالياً من الأخطاء، أو أن المعلومات الواردة على الموقع مكتملة أو دقيقة أو محدثة.
        </p>

        <h2>٤. تحديد المسؤولية</h2>
        <p>
          إلى أقصى حد يسمح به القانون، لن تكون وثيق ديجيتال المحدودة ومديروها وموظفوها ووكلاؤها مسؤولين عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ناشئة عن أو مرتبطة باستخدامك للموقع. لن تتجاوز مسؤوليتنا الإجمالية عن أي مطالبة مبلغ 100 جنيه إسترليني أو المبلغ المدفوع لنا في الأشهر الاثني عشر السابقة، أيهما أكبر.
        </p>

        <h2>٥. روابط الطرف الثالث</h2>
        <p>
          قد يحتوي موقعنا على روابط لمواقع إلكترونية تابعة لجهات خارجية. ليس لدينا سيطرة على محتوى تلك المواقع ولا نتحمل أي مسؤولية عنها أو عن أي خسارة أو ضرر قد ينشأ عن استخدامك لها.
        </p>

        <h2>٦. الخصوصية</h2>
        <p>
          يخضع استخدامك لهذا الموقع أيضاً لـ<a href="/privacy">سياسة الخصوصية</a> الخاصة بنا، المدرجة في هذه الشروط بالإشارة.
        </p>

        <h2>٧. القانون الحاكم والاختصاص القضائي</h2>
        <p>
          تخضع هذه الشروط لقوانين إنجلترا وويلز. يخضع أي نزاع للاختصاص القضائي الحصري لمحاكم إنجلترا وويلز، إلا إذا كنت مستهلكاً في ولاية قضائية أخرى يحق لك فيها رفع دعوى في محاكمك المحلية.
        </p>

        <h2>٨. التغييرات على هذه الشروط</h2>
        <p>
          نحتفظ بالحق في تعديل هذه الشروط في أي وقت بنشر النسخة المحدثة على هذه الصفحة مع تاريخ &ldquo;آخر تحديث&rdquo; منقح. الاستمرار في استخدام الموقع بعد التغييرات يُعدّ قبولاً للشروط الجديدة.
        </p>

        <h2>٩. اتصل بنا</h2>
        <ul>
          <li><strong>البريد الإلكتروني:</strong> <a href="mailto:legal@wathiq.digital">legal@wathiq.digital</a></li>
          <li><strong>البريد العادي:</strong> وثيق ديجيتال المحدودة، 71-75 شيلتون ستريت، لندن، WC2H 9JQ، المملكة المتحدة</li>
          <li><strong>الهاتف:</strong> +44 7547 044020</li>
        </ul>
      </>
    ),
  },
};

export default function TermsPage() {
  const { isRTL } = useLanguage();
  const c = isRTL ? content.ar : content.en;

  return (
    <>
      <section className="relative bg-navy-900 pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute -top-20 -start-20 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none" style={{ height: 72 }}>
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 72L1440 10V72H0Z" fill="#ffffff" />
          </svg>
        </div>
        <div className={`container-wide relative z-10 ${isRTL ? 'text-right' : ''}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-electric-400 uppercase tracking-widest mb-4">
            {c.meta.label}
          </span>
          <h1 className="heading-xl text-white mb-3">{c.meta.title}</h1>
          <p className="text-slate-400 text-sm">{c.meta.updated}</p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-wide">
          <div className={`max-w-3xl mx-auto legal-content ${isRTL ? 'text-right' : ''}`}>
            {c.body}
          </div>
        </div>
      </section>
    </>
  );
}
