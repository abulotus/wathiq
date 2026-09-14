'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';

export default function ServiceDataPage() {
  const { isRTL, href } = useLanguage();

  return (
    <>
      <PageHero
        title={isRTL ? 'بيانات خدمة التحقق' : 'Service Data Information'}
        subtitle={isRTL
          ? 'كيف يتعامل واثق مع بيانات الهوية والمستندات والقياسات الحيوية أثناء عملية التحقق.'
          : 'How Wathiq handles identity, document and biometric data during a verification.'}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-wide">
          <div className={`max-w-3xl mx-auto legal-content ${isRTL ? 'text-right' : ''}`}>
            <p>
              {isRTL
                ? 'توضح هذه الصفحة كيفية التعامل مع البيانات المُجمَّعة عبر تطبيق واثق أثناء التحقق من بطاقة الهوية أو جواز السفر، بشكل منفصل عن '
                : 'This page explains how data collected through the Wathiq mobile application is handled during an identity-card or passport verification, separately from '}
              <Link href={href('/privacy')}>{isRTL ? 'إشعار خصوصية زوار الموقع' : 'the website visitor Privacy Notice'}</Link>
              {isRTL ? '.' : '.'}
            </p>

            {isRTL ? (
              <>
                <h2>1. البيانات التي نجمعها</h2>
                <p>
                  قد تشمل الأدلة المُجمَّعة أثناء التحقق من الهوية ما يلي:
                </p>
                <ul>
                  <li>صور الوثائق الهوياتية والجوازات</li>
                  <li>بيانات التعرّف البصري على الأحرف (OCR) المستخرجة من الوثائق</li>
                  <li>بيانات المنطقة القابلة للقراءة آلياً (MRZ)</li>
                  <li>بيانات الباركود</li>
                  <li>بيانات شريحة جواز الإلكتروني (NFC) والتوقيعات الرقمية حيث ينطبق</li>
                  <li>لقطات فحص الحيوية (صور الفيديو من فحص الحيوية)</li>
                  <li>صور السيلفي والصورة المرجعية للوجه المستخرجة</li>
                  <li>نتائج مطابقة الوجه</li>
                </ul>
                <p>
                  يُطلب من المستخدم تأكيد موافقته قبل بدء جمع البيانات. لقطات فحص الحيوية تُبث مباشرةً إلى Amazon Rekognition لمعالجتها، بينما تُرسل الأدلة الأخرى إلى خوادم واثق عبر اتصال HTTPS مشفّر.
                </p>

                <h2>2. من يبدأ التحقق</h2>
                <p>
                  عملية التحقق من الهوية يتم بدؤها من قبل مؤسسة طالبة (العميل) لديها حساب مع واثق. قد تكون هذه المؤسسة مؤسسة مالية أو شركة متوافقة مع اللوائح أو أي كيان آخر يحتاج إلى التحقق من الهوية. تحدد المؤسسة الطالبة الأساس القانوني للمعالجة (مثل الامتثال لأنظمة مكافحة غسل الأموال (AML) والعناية الواجبة تجاه العملاء (KYC) أو فحوصات العقوبات).
                </p>

                <h2>3. ما يتم إرجاعه للمؤسسة الطالبة</h2>
                <p>
                  تتلقى المؤسسة الطالبة ما يلي:
                </p>
                <ul>
                  <li>قرار نهائي: نجح/فشل التحقق</li>
                  <li>البيانات المستخرجة من الوثيقة (الاسم، تاريخ الميلاد، جنسية، وغيرها)</li>
                  <li>نتيجة مطابقة الوجه (نسبة التطابق والقرار)</li>
                  <li>معلومات المصادر الأساسية المستخدمة في التحقق</li>
                </ul>
                <p>
                  لا تتلقى المؤسسة الطالبة ملفات الفيديو الخام لفحص الحيوية أو صور المرجعية المتوسطة إلا إذا طُلب منها تحديداً عبر اتفاقية الخدمة.
                </p>

                <h2>4. الأمان والتشفير</h2>
                <p>
                  تُشفَّر حقول الهوية الحساسة باستخدام AES-256-GCM. تُحفظ الملفات في مساحة تخزين خاصة محدودة الوصول. كل مؤسسة طالبة لديها عزل منطقي كامل عن بيانات المؤسسات الأخرى. القرار النهائي للتحقق يصدره الخادم فقط ولا يمكن تغييره من التطبيق. الاتصال بين التطبيق والخوادم يستخدم HTTPS مشفّر.
                </p>

                <h2>5. خدمات الطرف الثالث المستخدمة</h2>
                <p>
                  واثق تستخدم الخدمات التالية كمعالجين فرعيين:
                </p>
                <ul>
                  <li><strong>Amazon Web Services (AWS) Rekognition</strong> — للتعرف على الوجه ومطابقة الوجه وفحوصات الحيوية. تُبث لقطات الحيوية مباشرةً إلى AWS من التطبيق.</li>
                  <li><strong>Google Play Integrity</strong> — لمنع إساءة استخدام التطبيق والتحقق من صحة جهاز المستخدم.</li>
                  <li><strong>Firebase Crashlytics</strong> — لتشخيص أعطال التطبيق بعد موافقة المستخدم. صور الهوية وأرقام الوثائق وبيانات الشريحة والنتائج الحيوية لا تُرسل إلى Crashlytics.</li>
                </ul>

                <h2>6. مدة الاحتفاظ بالبيانات</h2>
                <p>
                  البيانات التالية يتم الاحتفاظ بها لمدة 2,555 يوماً (سبع سنوات) بعد اكتمال التحقق:
                </p>
                <ul>
                  <li>صور الوثائق</li>
                  <li>بيانات الباركود والمنطقة القابلة للقراءة آلياً</li>
                  <li>بيانات شريحة NFC والجواز الإلكتروني</li>
                  <li>لقطات فحص الحيوية</li>
                  <li>صور الوجه والصور المرجعية</li>
                  <li>ملفات المراجعة</li>
                </ul>
                <p>
                  بعد انقضاء هذه الفترة، يتم حذف الأدلة المؤهلة من التخزين تلقائياً وتسجيل عملية الحذف. البيانات الخاضعة لحجز قانوني قد يتم الاحتفاظ بها لفترة أطول. سجلات التدقيق محفوظة وفقاً لسياسة الأمان والمساءلة لدى واثق.
                </p>

                <h2>7. حذف البيانات</h2>
                <p>
                  يتم حذف الأدلة المؤهلة تلقائياً بعد انقضاء فترة الاحتفاظ (2,555 يوم). يتم تسجيل كل عملية حذف للتدقيق. في حالات معينة (الحجز القانوني أو الطلبات القانونية)، قد يتم الاحتفاظ ببعض البيانات لفترة أطول. للطلب المبكر للحذف، اتصل بالمؤسسة الطالبة أولاً أو راسل info@wathiq-sy.com.
                </p>

                <h2>8. موقع المعالجة والاستضافة</h2>
                <p>
                  بيانات التحقق يتم استضافتها وتخزينها في بنية تحتية آمنة. لمزيد من التفاصيل حول مواقع المعالجة المحددة، يرجى التواصل معنا على info@wathiq-sy.com.
                </p>

                <h2>9. أدوار مراقب البيانات والمعالج</h2>
                <p>
                  واثق تعمل كمعالج بيانات بموجب اتفاقية معالجة البيانات مع المؤسسة الطالبة. المؤسسة الطالبة هي مراقب البيانات الرئيسي وتحدد:
                </p>
                <ul>
                  <li>الأساس القانوني للمعالجة</li>
                  <li>نطاق البيانات المراد جمعها</li>
                  <li>الجهات المستقبلة للبيانات</li>
                </ul>
                <p>
                  واثق تنفذ تعليمات المؤسسة الطالبة وتمتثل لاتفاقية معالجة البيانات. واثق تطبق سياسة الاحتفاظ بالبيانات المُوثقة: يتم الاحتفاظ بأدلة التحقق لمدة 2,555 يوماً (سبع سنوات) بعد اكتمال التحقق، وذلك مع مراعاة القانون المعمول به والمتطلبات التعاقدية والحجوزات القانونية.
                </p>

                <h2>10. حقوق الأفراد</h2>
                <p>
                  لديك الحق في الوصول والتصحيح والحذف والتنقل البيانات وفقاً للقوانين المعمول بها. للتمتع بهذه الحقوق:
                </p>
                <ul>
                  <li>تواصل أولاً مع المؤسسة الطالبة التي بدأت طلب التحقق</li>
                  <li>إذا لم تستطع الوصول إلى المؤسسة الطالبة، راسل info@wathiq-sy.com</li>
                </ul>
                <p>
                  سيتم تقييم الطلبات وفقاً لالتزاماتنا القانونية وفترات الاحتفاظ المعمول بها.
                </p>

                <h2>11. البيانات غير الشخصية</h2>
                <p>
                  واثق قد تستخدم البيانات المجهّلة والإحصائيات المجمّعة لتحسين خدمات التحقق وكشف الاحتيال. لا تُباع البيانات الشخصية أو تُستخدم للإعلانات.
                </p>

                <h2>12. التحديثات على هذه الصفحة</h2>
                <p>
                  قد نحدّث هذه الصفحة لتعكس التغييرات في ممارسات معالجة البيانات أو الخدمات المستخدمة. سيتم نشر التحديثات على هذه الصفحة.
                </p>

                <p className="mt-8">
                  <Link href={href('/contact')} className="text-electric-600 font-semibold hover:underline">
                    تواصل مع فريقنا
                  </Link>
                </p>
              </>
            ) : (
              <>
                <h2>1. Data We Collect</h2>
                <p>
                  Evidence collected during identity verification may include:
                </p>
                <ul>
                  <li>Identity document and passport images</li>
                  <li>Optical character recognition (OCR) data extracted from documents</li>
                  <li>Machine-readable zone (MRZ) data</li>
                  <li>Barcode data</li>
                  <li>ePassport NFC chip data and digital signatures (where applicable)</li>
                  <li>Liveness capture footage (video frames from liveness checks)</li>
                  <li>Selfie images and extracted face reference images</li>
                  <li>Face-match results</li>
                </ul>
                <p>
                  Users are asked to confirm consent before data collection begins. Liveness capture is streamed directly to Amazon Rekognition for processing; other evidence is sent to Wathiq servers over encrypted HTTPS connections.
                </p>

                <h2>2. Who Initiates Verification</h2>
                <p>
                  Identity verification is initiated by a requesting organisation (our customer) with an account at Wathiq. This may be a financial institution, regulated compliance company, or any other entity requiring identity verification. The requesting organisation determines the lawful basis for processing (e.g., anti-money laundering (AML) compliance, know-your-customer (KYC) due diligence, or sanctions screening).
                </p>

                <h2>3. What Is Returned to the Requesting Organisation</h2>
                <p>
                  The requesting organisation receives:
                </p>
                <ul>
                  <li>Final verification decision: pass or fail</li>
                  <li>Extracted document data (name, date of birth, nationality, etc.)</li>
                  <li>Face-match result (match score and decision)</li>
                  <li>Primary source information used in verification</li>
                </ul>
                <p>
                  The requesting organisation does not receive raw liveness video frames or intermediate face reference images unless specifically requested under the service agreement.
                </p>

                <h2>4. Security and Encryption</h2>
                <p>
                  Sensitive identity fields are encrypted using AES-256-GCM. Files are kept in private, access-controlled storage. Each requesting organisation has complete logical isolation from other organisations' data. The final verification decision is determined only by the backend and cannot be altered from the mobile application. Communication between the app and our servers uses encrypted HTTPS.
                </p>

                <h2>5. Third-Party Processors Used</h2>
                <p>
                  Wathiq uses the following services as data subprocessors:
                </p>
                <ul>
                  <li><strong>Amazon Web Services (AWS) Rekognition</strong> — for facial recognition, face matching, and liveness checks. Liveness frames are streamed directly to AWS from the application.</li>
                  <li><strong>Google Play Integrity</strong> — to prevent application abuse and verify device authenticity.</li>
                  <li><strong>Firebase Crashlytics</strong> — for application crash diagnostics with user consent. Identity images, document numbers, chip data and biometric results are not sent to Crashlytics.</li>
                </ul>

                <h2>6. Data Retention Period</h2>
                <p>
                  The following data is retained for 2,555 days (seven years) after verification completion:
                </p>
                <ul>
                  <li>Document images</li>
                  <li>Barcode and machine-readable-zone data</li>
                  <li>ePassport NFC chip data and signatures</li>
                  <li>Liveness capture footage</li>
                  <li>Face images and reference photographs</li>
                  <li>Review files</li>
                </ul>
                <p>
                  After this period expires, eligible evidence is automatically deleted from storage and deletion is recorded. Data subject to legal hold may be retained longer. Audit records are retained in accordance with Wathiq's security and accountability policy.
                </p>

                <h2>7. Data Deletion</h2>
                <p>
                  Eligible evidence is automatically deleted after the retention period (2,555 days) expires. Each deletion is logged for audit purposes. In certain circumstances (legal hold or legal requests), some data may be retained longer. To request early deletion, contact the requesting organisation first or email info@wathiq-sy.com.
                </p>

                <h2>8. Processing Location and Hosting</h2>
                <p>
                  Verification data is hosted and stored in secure infrastructure. For details about specific processing locations, please contact us at info@wathiq-sy.com.
                </p>

                <h2>9. Data Controller and Processor Roles</h2>
                <p>
                  Wathiq acts as a data processor under a Data Processing Agreement with the requesting organisation. The requesting organisation is the primary data controller and determines:
                </p>
                <ul>
                  <li>The lawful basis for processing</li>
                  <li>Scope of data to be collected</li>
                  <li>Recipients of the data</li>
                </ul>
                <p>
                  Wathiq implements the requesting organisation's instructions and complies with the Data Processing Agreement. Wathiq applies its documented data retention policy: verification evidence is retained for 2,555 days (seven years) after verification completion, subject to applicable law, contractual requirements, and legal holds.
                </p>

                <h2>10. Individual Rights</h2>
                <p>
                  You have rights to access, correct, delete, and port your data in accordance with applicable law. To exercise these rights:
                </p>
                <ul>
                  <li>Contact the requesting organisation that initiated your verification request first</li>
                  <li>If you cannot reach the requesting organisation, email info@wathiq-sy.com</li>
                </ul>
                <p>
                  Requests will be assessed against our legal obligations and applicable retention periods.
                </p>

                <h2>11. Non-Personal Data</h2>
                <p>
                  Wathiq may use anonymised data and aggregated statistics to improve verification services and detect fraud. Personal data is not sold or used for advertising.
                </p>

                <h2>12. Updates to This Page</h2>
                <p>
                  We may update this page to reflect changes in data processing practices or services used. Updates will be published on this page.
                </p>

                <p className="mt-8">
                  <Link href={href('/contact')} className="text-electric-600 font-semibold hover:underline">
                    Contact our team
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
