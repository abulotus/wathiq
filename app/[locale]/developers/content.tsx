'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';
import Link from 'next/link';

const flowSteps = {
  en: ['Your backend', 'Wathiq API', 'Applicant capture', 'Signed webhook', 'Fetch result'],
  ar: ['نظام العميل', 'API واثق', 'التقاط بيانات المتقدّم', 'Webhook موقّع', 'استرجاع النتيجة'],
};

function CodeBlock({ children, label }: { children: string; label?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-800 bg-navy-950">
      {label && (
        <div className="px-4 py-2 border-b border-white/10 text-slate-400 text-[11px] font-mono">{label}</div>
      )}
      <pre className="p-4 overflow-x-auto text-[12px] leading-relaxed text-slate-200 font-mono" dir="ltr">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function DevelopersPage() {
  const { isRTL, href } = useLanguage();
  const flow = isRTL ? flowSteps.ar : flowSteps.en;

  return (
    <>
      <section className="relative bg-slate-50 pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-mesh opacity-40" />
        <TechBackground variant="light" />
        <div className="absolute -top-20 -start-20 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)' }} />

        <div className={`container-wide relative z-10 max-w-3xl ${isRTL ? 'text-right' : ''}`}>
          <SectionTag label={isRTL ? 'المطورون' : 'Developers'} variant="blue" />
          <h1 className="heading-xl text-navy-900 mt-4 mb-5">
            {isRTL ? 'تكامل مباشر عبر API وWebhooks' : 'Straightforward integration through API and webhooks'}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            {isRTL
              ? 'تدفق التحقق الموصى به: ينشئ نظامك عملية تحقق عبر واجهة برمجة التطبيقات، يكمل المتقدّم رحلة الالتقاط عبر واثق، ويستلم نظامك نتيجة موقّعة عبر Webhook.'
              : "The recommended flow: your backend creates a verification through the API, the applicant completes capture through Wathiq, and your backend receives a signed webhook with the result."}
          </p>
        </div>
      </section>

      {/* Flow diagram */}
      <section className="section-pad bg-white relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-2 max-w-5xl mx-auto">
            {flow.map((step, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-5 text-center">
                  <span className="text-navy-900 text-sm font-semibold">{step}</span>
                </div>
                {i < flow.length - 1 && (
                  <svg className={`w-5 h-5 text-electric-500 flex-shrink-0 hidden lg:block ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p className={`text-slate-500 text-xs text-center mt-6 max-w-xl mx-auto`}>
            {isRTL
              ? 'ما يظهر للمتقدّم مجرد تجربة استخدام، ولا يُعتمد كإثبات للنتيجة. النتيجة المعتمدة تصل عبر Webhook موقّع، ثم تُسترجع من واجهة برمجة التطبيقات.'
              : "What the applicant sees is UX only — never treat it as proof of a result. The authoritative result arrives via a signed webhook and is then fetched from the API."}
          </p>
        </div>
      </section>

      {/* Authentication */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <div className="container-wide relative z-10 max-w-3xl mx-auto">
          <AnimatedSection className={isRTL ? 'text-right' : ''}>
            <h2 className="heading-md text-navy-900 mb-4">{isRTL ? 'المصادقة' : 'Authentication'}</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {isRTL
                ? 'ترسل مفتاح API الخاص بك كـ Bearer token أو ترويسة X-API-Key. يُعرض المفتاح مرة واحدة فقط عند إنشائه — يجب حفظه في مدير أسرار من جانب الخادم، وليس في كود العميل أو الجوال.'
                : 'Send your API key as a Bearer token or an X-API-Key header. The secret is displayed only once at creation — keep it in a server-side secret manager, never in browser or mobile code.'}
            </p>
            <CodeBlock>{`Authorization: Bearer wk_live_<key-prefix>_<secret>
# or
X-API-Key: wk_live_<key-prefix>_<secret>`}</CodeBlock>
          </AnimatedSection>
        </div>
      </section>

      {/* Create a verification */}
      <section className="section-pad bg-white relative overflow-hidden">
        <div className="container-wide relative z-10 max-w-3xl mx-auto">
          <AnimatedSection className={isRTL ? 'text-right' : ''}>
            <h2 className="heading-md text-navy-900 mb-4">{isRTL ? 'إنشاء عملية تحقق' : 'Create a verification'}</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {isRTL
                ? 'تنشئ طلباً عبر واجهة برمجة التطبيقات وتستلم معرّف تحقق ورابط تحقق مُستضاف لإرساله إلى المتقدّم.'
                : 'Create a request through the API and receive a verification ID and a hosted verification URL to send to the applicant.'}
            </p>
            <CodeBlock label="POST /api/v1/client/verifications">{`{
  "verification_type": "national_id",
  "external_reference": "customer-829174",
  "expires_in_minutes": 1440
}`}</CodeBlock>
            <div className="h-3" />
            <CodeBlock label="201 Created">{`{
  "id": "c767ef96-2209-4fd6-9062-97e2687886e5",
  "status": "session_created",
  "decision": null,
  "verification_url": "https://<verify-domain>/verify#session_token=...",
  "expires_at": "2026-08-02T12:00:00Z"
}`}</CodeBlock>
            <p className="text-slate-500 text-xs leading-relaxed mt-4">
              {isRTL
                ? 'الأنواع المدعومة: الهوية الوطنية، جواز السفر القديم (غير الإلكتروني)، جواز السفر الإلكتروني، وأنواع عامة حسب الاتفاق مع واثق.'
                : 'Supported types: national ID, old (non-electronic) passport, ePassport, and generic types by agreement with Wathiq.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Result */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <div className="container-wide relative z-10 max-w-3xl mx-auto">
          <AnimatedSection className={isRTL ? 'text-right' : ''}>
            <h2 className="heading-md text-navy-900 mb-4">{isRTL ? 'استرجاع النتيجة' : 'Retrieve the result'}</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {isRTL
                ? 'بعد استلام Webhook القرار، استرجع النتيجة المعتمدة. القرار إما مقبول أو قيد المراجعة أو مرفوض — عامل حالة "قيد المراجعة" كحالة معلّقة، لا كرفض.'
                : "After receiving the decision webhook, fetch the authoritative result. The decision is accepted, review, or rejected — treat review as pending, not as a rejection."}
            </p>
            <CodeBlock label="GET /api/v1/client/verifications/{id}/result">{`{
  "status": "decided",
  "decision": "accepted",
  "assurance_level": "registry_matched",
  "risk_score": 0.08,
  "completed_at": "2026-08-01T12:08:31Z"
}`}</CodeBlock>
          </AnimatedSection>
        </div>
      </section>

      {/* Webhooks */}
      <section className="section-pad bg-white relative overflow-hidden">
        <div className="container-wide relative z-10 max-w-3xl mx-auto">
          <AnimatedSection className={isRTL ? 'text-right' : ''}>
            <h2 className="heading-md text-navy-900 mb-4">Webhooks</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {isRTL
                ? 'يرسل واثق طلبات HTTPS POST موقّعة بـ HMAC-SHA256. تحقق من التوقيع دائماً باستخدام النص الخام قبل تحليل JSON، وتحقق من الطابع الزمني، وامنع معالجة نفس الحدث مرتين.'
                : 'Wathiq sends HTTPS POST requests signed with HMAC-SHA256. Always verify the signature against the raw body before JSON parsing, check the timestamp, and deduplicate event IDs.'}
            </p>
            <CodeBlock label="Headers">{`X-Wathiq-Event: verification.decided
X-Wathiq-Event-Id: <event-uuid>
X-Wathiq-Timestamp: <unix-seconds>
X-Wathiq-Signature: v1=<hex-hmac-sha256>`}</CodeBlock>
            <div className="h-3" />
            <CodeBlock label="signature verification">{`signed_payload = event_id + "." + timestamp + "." + raw_body
expected = "v1=" + hex(HMAC-SHA256(signing_secret, signed_payload))
# use constant-time comparison`}</CodeBlock>
            <p className="text-slate-500 text-xs leading-relaxed mt-4">
              {isRTL
                ? 'إعادة المحاولة: حتى 3 محاولات لكل حدث، مع تأخير حوالي 30 ثم 60 ثانية بعد أول فشلين. التسليم "مرة واحدة على الأقل" — عالج التكرار بمفتاح فريد لمعرّف الحدث.'
                : 'Retries: up to 3 attempts per event, with roughly 30- then 60-second delays after the first two failures. Delivery is at-least-once — deduplicate using a unique constraint on the event ID.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AML screening */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <div className="container-wide relative z-10 max-w-3xl mx-auto">
          <AnimatedSection className={isRTL ? 'text-right' : ''}>
            <h2 className="heading-md text-navy-900 mb-4">{isRTL ? 'فحص AML' : 'AML screening'}</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {isRTL
                ? 'لعملاء البنوك والتقنية المالية، يتوفر فحص AML بنفس نمط API وWebhooks: أنشئ طلب فحص، واستلم النتيجة عبر Webhook موقّع أو استرجعها من واجهة برمجة التطبيقات.'
                : 'For banking and fintech clients, AML screening follows the same API and webhook pattern: create a screening request and receive the result through a signed webhook or by fetching it from the API.'}
            </p>
            <CodeBlock label="POST /api/v1/client/aml/screenings">{`{
  "verification_id": "c767ef96-2209-4fd6-9062-97e2687886e5"
}
# or a direct person profile, without a linked verification`}</CodeBlock>
            <p className="text-slate-500 text-xs leading-relaxed mt-4">
              {isRTL
                ? 'يعمل الفحص بشكل غير متزامن؛ استلم إشعار Webhook عند اكتمال الفحص ثم استرجع النتيجة. اطّلع على '
                : "Screening runs asynchronously — receive a webhook when it completes, then fetch the result. See the "}
              <Link href={href('/aml-screening')} className="text-electric-600 font-semibold hover:underline">
                {isRTL ? 'صفحة فحص AML' : 'AML Screening page'}
              </Link>
              {isRTL ? ' للتفاصيل حول حالة التحقيق والمراجعة.' : ' for details on the investigation and review workflow.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <p className="text-slate-600 text-sm mb-6 max-w-xl mx-auto">
              {isRTL
                ? 'هذا ملخص عملي، وليس التوثيق الكامل. اطلب الوصول للحصول على دليل التكامل الكامل ومواصفة OpenAPI.'
                : "This is a working summary, not the full documentation. Request access for the complete integration guide and OpenAPI specification."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={href('/contact')} className="btn-primary px-6 py-3">
                {isRTL ? 'اطلب الوصول إلى API' : 'Request API Access'}
              </Link>
              <Link href={href('/contact')} className="btn-secondary px-6 py-3">
                {isRTL ? 'تواصل مع دعم التكامل' : 'Contact Integration Support'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
