'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  en: {
    meta: { label: 'Legal', title: 'Terms of Service', updated: 'Last updated: 14 September 2026' },
    body: (
      <>
        <p>
          These Terms of Service ("<strong>Terms</strong>") govern your access to and use of: (i) the website at <a href="https://www.wathiq-sy.com">www.wathiq-sy.com</a>; (ii) the Wathiq mobile application (for iOS and Android); (iii) our identity verification service; and (iv) any related services provided by Thiqa Intelligence LTD ("<strong>Wathiq</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"), incorporated in England and Wales, Company No. 12576917, registered address: 71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ.
        </p>
        <p>By accessing or using our website, mobile application, or identity verification service, you agree to be bound by these Terms.</p>

        <h2>1. Use of Our Services</h2>
        <p>You agree to use our website, mobile application, and services only for lawful purposes. You must not:</p>
        <ul>
          <li>Use any of our services in any way that violates applicable local, national, or international law or regulation</li>
          <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
          <li>Knowingly transmit data that contains viruses, trojans, worms, or other harmful code</li>
          <li>Attempt to gain unauthorised access to any part of our services, server, or database</li>
          <li>Attack our services via a denial-of-service or distributed denial-of-service attack</li>
          <li>Collect or harvest personally identifiable information without authorisation</li>
        </ul>

        <h2>2. Identity Verification Sessions</h2>
        <p>
          Our identity verification service may be accessed through the mobile application using a QR code or activation code supplied by an authorised requesting organisation. By using a verification session:
        </p>
        <ul>
          <li>You confirm that you have been asked to complete identity verification by the requesting organisation</li>
          <li>You understand that the requesting organisation will receive the verification result and related data</li>
          <li>You consent to the collection and processing of identity and biometric data as described in our <a href="service-data">Service Data Information</a> page and <a href="privacy">Privacy Policy</a></li>
          <li>You confirm that all information you provide is accurate and truthful</li>
          <li>You confirm that you are not acting on behalf of someone else or providing another person's identity documents</li>
        </ul>
        <p>
          If you do not have an activation code or QR code from an authorised requesting organisation, you cannot access the identity verification service.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, icons, images, and software — is the property of Thiqa Intelligence LTD or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
        </p>
        <p>
          The Wathiq and Thiqa Intelligence names, logos, and all related marks are trademarks of Thiqa Intelligence LTD. Nothing in these Terms grants you any right to use our trademarks without prior written permission.
        </p>

        <h2>4. Disclaimer of Warranties</h2>
        <p>
          Our website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied. We do not warrant that the website will be available, uninterrupted, or error-free, or that information on the website is complete, accurate, or up to date.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Thiqa Intelligence LTD and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website. Our total liability for any claim shall not exceed £100 or the amount paid to us in the preceding twelve months, whichever is greater.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
        </p>

        <h2>7. Privacy</h2>
        <p>
          Your use of this website is also governed by our <a href="privacy">Privacy Policy</a>, incorporated into these Terms by reference.
        </p>

        <h2>8. Governing Law and Jurisdiction</h2>
        <p>
          These Terms shall be governed by the laws of England and Wales. Any dispute shall be subject to the exclusive jurisdiction of the courts of England and Wales, except where you are a consumer in another jurisdiction entitled to bring proceedings in your local courts.
        </p>

        <h2>9. Changes to These Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time by posting the updated version on this page with a revised &ldquo;last updated&rdquo; date. Continued use of the website after changes constitutes acceptance of the new Terms.
        </p>

        <h2>10. Contact</h2>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@wathiq-sy.com">info@wathiq-sy.com</a></li>
          <li><strong>Post:</strong> Thiqa Intelligence LTD, 71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ (Company No. 12576917)</li>
          <li dir="ltr"><strong>Phone:</strong> +44 7547 044020</li>
        </ul>
      </>
    ),
  },
  ar: {
    meta: { label: 'قانوني', title: 'شروط الخدمة', updated: 'آخر تحديث: 14 سبتمبر 2026' },
    body: (
      <>
        <p>
          تحكم شروط الخدمة هذه ("<strong>الشروط</strong>"): (i) وصولك إلى موقع <a href="https://www.wathiq-sy.com">www.wathiq-sy.com</a> واستخدامه؛ (ii) تطبيق واثق للهاتف المحمول (لنظام iOS و Android)؛ (iii) خدمة التحقق من الهوية لدينا؛ و(iv) أي خدمات ذات صلة تقدمها شركة ثقة انتلجنس ليمتيد ("<strong>واثق</strong>"، "<strong>نحن</strong>"، "<strong>لنا</strong>"، أو "<strong>خاصتنا</strong>")، المسجلة في إنجلترا وويلز، رقم الشركة: 12576917، العنوان المسجل: 71-75 شيلتون ستريت، لندن، جريتر لندن، المملكة المتحدة، WC2H 9JQ.
        </p>
        <p>بالوصول إلى موقعنا أو تطبيق الهاتف المحمول أو خدمة التحقق من الهوية أو استخدامها، فأنت توافق على الالتزام بهذه الشروط.</p>

        <h2>١. استخدام خدماتنا</h2>
        <p>توافق على استخدام موقعنا وتطبيق الهاتف المحمول والخدمات لأغراض مشروعة فقط. يجب ألا:</p>
        <ul>
          <li>تستخدم أي من خدماتنا بأي طريقة تنتهك القانون أو اللوائح المحلية أو الوطنية أو الدولية المعمول بها</li>
          <li>ترسل أي مواد إعلانية أو ترويجية غير مرغوب فيها أو غير مصرح بها</li>
          <li>ترسل عن علم بيانات تحتوي على فيروسات أو أحصنة طروادة أو ديدان أو أكواد ضارة أخرى</li>
          <li>تحاول الوصول غير المصرح به إلى أي جزء من خدماتنا أو الخادم أو قاعدة البيانات</li>
          <li>تهاجم خدماتنا عبر هجوم حجب الخدمة أو الحجب الموزع للخدمة</li>
          <li>تجمع أو تحصد معلومات تعريف شخصية دون تفويض</li>
        </ul>

        <h2>٢. جلسات التحقق من الهوية</h2>
        <p>
          قد يتم الوصول إلى خدمة التحقق من الهوية لدينا عبر تطبيق الهاتف المحمول باستخدام رمز QR أو كود تفعيل يوفره كيان طالب مرخص. باستخدام جلسة تحقق:
        </p>
        <ul>
          <li>تؤكد أن كيان طالب مرخص طلب منك إكمال التحقق من الهوية</li>
          <li>تفهم أن الكيان الطالب سيتلقى نتيجة التحقق والبيانات ذات الصلة</li>
          <li>توافق على جمع ومعالجة بيانات الهوية والبيانات البيومترية كما هو موضح في صفحة <a href="service-data">معلومات بيانات الخدمة</a> و<a href="privacy">سياسة الخصوصية</a> الخاصة بنا</li>
          <li>تؤكد أن جميع المعلومات التي تقدمها دقيقة وصحيحة</li>
          <li>تؤكد أنك لا تتصرف نيابة عن شخص آخر أو تقدم وثائق هوية شخص آخر</li>
        </ul>
        <p>
          إذا لم يكن لديك كود تفعيل أو رمز QR من كيان طالب مرخص، فلا يمكنك الوصول إلى خدمة التحقق من الهوية.
        </p>

        <h2>٣. الملكية الفكرية</h2>
        <p>
          جميع المحتوى على هذا الموقع — بما في ذلك النصوص والرسومات والشعارات والأيقونات والصور والبرامج — هو ملك لشركة ثقة انتلجنس ليمتيد أو موردي محتواها ومحمي بموجب قوانين الملكية الفكرية المعمول بها. لا يجوز لك إعادة إنتاج أو توزيع أو تعديل أي محتوى دون موافقتنا الكتابية المسبقة.
        </p>
        <p>
          اسم واثق وشعاراتها وجميع العلامات المرتبطة بهم هي علامات تجارية لشركة ثقة انتلجنس ليمتيد. ولا تمنحك هذه الشروط أي حق في استخدام علاماتنا التجارية دون إذن كتابي مسبق.
        </p>

        <h2>٤. إخلاء مسؤولية الضمانات</h2>
        <p>
          يتم توفير موقعنا ومحتواه على أساس &ldquo;كما هو&rdquo; و&ldquo;كما هو متاح&rdquo; دون أي ضمانات من أي نوع، صريحة أو ضمنية. لا نضمن أن الموقع سيكون متاحاً أو غير منقطع أو خالياً من الأخطاء، أو أن المعلومات الواردة على الموقع مكتملة أو دقيقة أو محدثة.
        </p>

        <h2>٥. تحديد المسؤولية</h2>
        <p>
          إلى أقصى حد يسمح به القانون، لن تكون شركة ثقة انتلجنس ليمتيد ومديروها وموظفوها ووكلاؤها مسؤولين عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ناشئة عن أو مرتبطة باستخدامك للموقع. لن تتجاوز مسؤوليتنا الإجمالية عن أي مطالبة مبلغ 100 جنيه إسترليني أو المبلغ المدفوع لنا في الأشهر الاثني عشر السابقة، أيهما أكبر.
        </p>

        <h2>٦. روابط الطرف الثالث</h2>
        <p>
          قد يحتوي موقعنا على روابط لمواقع إلكترونية تابعة لجهات خارجية. ليس لدينا سيطرة على محتوى تلك المواقع ولا نتحمل أي مسؤولية عنها أو عن أي خسارة أو ضرر قد ينشأ عن استخدامك لها.
        </p>

        <h2>٧. الخصوصية</h2>
        <p>
          يخضع استخدامك لهذا الموقع أيضاً لـ<a href="privacy">سياسة الخصوصية</a> الخاصة بنا، المدرجة في هذه الشروط بالإشارة.
        </p>

        <h2>٨. القانون الحاكم والاختصاص القضائي</h2>
        <p>
          تخضع هذه الشروط لقوانين إنجلترا وويلز. يخضع أي نزاع للاختصاص القضائي الحصري لمحاكم إنجلترا وويلز، إلا إذا كنت مستهلكاً في ولاية قضائية أخرى يحق لك فيها رفع دعوى في محاكمك المحلية.
        </p>

        <h2>٩. التغييرات على هذه الشروط</h2>
        <p>
          نحتفظ بالحق في تعديل هذه الشروط في أي وقت بنشر النسخة المحدثة على هذه الصفحة مع تاريخ &ldquo;آخر تحديث&rdquo; منقح. الاستمرار في استخدام الموقع بعد التغييرات يُعدّ قبولاً للشروط الجديدة.
        </p>

        <h2>١٠. اتصل بنا</h2>
        <ul>
          <li><strong>البريد الإلكتروني:</strong> <a href="mailto:info@wathiq-sy.com">info@wathiq-sy.com</a></li>
          <li><strong>البريد العادي:</strong> شركة ثقة انتلجنس ليمتيد، 71-75 شيلتون ستريت، لندن، جريتر لندن، المملكة المتحدة، WC2H 9JQ (رقم الشركة: 12576917)</li>
          <li dir="ltr"><strong>الهاتف:</strong> +44 7547 044020</li>
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
      <section className="relative bg-slate-50 pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute -top-20 -start-20 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)' }} />
        <div className={`container-wide relative z-10 ${isRTL ? 'text-right' : ''}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-electric-600 uppercase tracking-widest mb-4">
            {c.meta.label}
          </span>
          <h1 className="heading-xl text-navy-900 mb-3">{c.meta.title}</h1>
          <p className="text-slate-500 text-sm">{c.meta.updated}</p>
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
