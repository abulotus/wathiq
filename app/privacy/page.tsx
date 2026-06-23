import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Wathiq Digital',
  description: 'Wathiq Digital privacy policy — how we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
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
        <div className="container-wide relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-electric-400 uppercase tracking-widest mb-4">
            Legal
          </span>
          <h1 className="heading-xl text-white mb-3">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: 1 June 2025</p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto legal-content">
            <p>
              Wathiq Digital Ltd ("<strong>Wathiq</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") is a company registered in England and Wales (registered address: 71-75 Shelton Street, London, WC2H 9JQ, United Kingdom). This Privacy Policy explains how we collect, use, disclose, and safeguard personal data when you visit our website, use our services, or otherwise interact with us.
            </p>
            <p>
              We are committed to protecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and applicable data protection legislation.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect personal data in the following ways:</p>
            <ul>
              <li><strong>Information you provide directly</strong> — when you complete our contact form, request a demo, or apply for a position, we collect your name, business email address, phone number, company name, and the content of your message.</li>
              <li><strong>Usage and technical data</strong> — when you visit our website, we automatically collect your IP address, browser type and version, pages visited, time and date of access, and referring URLs.</li>
              <li><strong>Cookies and similar technologies</strong> — we use essential cookies to operate the website. See our <a href="/cookies">Cookie Policy</a> for details.</li>
            </ul>
            <p>We do not collect sensitive personal data (such as biometric data, health information, or financial account details) through this website.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the personal data we collect for the following purposes:</p>
            <ul>
              <li>To respond to your enquiries and provide the information or services you request</li>
              <li>To process and manage demo or partnership requests</li>
              <li>To improve and maintain our website and services</li>
              <li>To comply with legal obligations and regulatory requirements</li>
              <li>To detect and prevent fraud, security breaches, or other illegal activities</li>
              <li>To send administrative communications (e.g., updates to our terms or this policy)</li>
            </ul>
            <p>We rely on the following legal bases for processing:</p>
            <ul>
              <li><strong>Legitimate interests</strong> — operating our business, improving our services, and responding to enquiries</li>
              <li><strong>Contractual necessity</strong> — where processing is required to fulfil an agreement or take pre-contractual steps</li>
              <li><strong>Legal obligation</strong> — where we are required to process data to comply with applicable law</li>
              <li><strong>Consent</strong> — where you have provided specific, informed consent (e.g., for optional marketing communications)</li>
            </ul>

            <h2>3. How We Share Your Information</h2>
            <p>We do not sell, rent, or trade your personal data. We may share information with:</p>
            <ul>
              <li><strong>Service providers</strong> — third-party vendors who process data on our behalf (e.g., hosting, email delivery, analytics) under data processing agreements</li>
              <li><strong>Legal or regulatory authorities</strong> — where required by law, court order, or regulatory requirement</li>
              <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction</li>
            </ul>

            <h2>4. International Transfers</h2>
            <p>
              As a UK-based company primarily serving clients in the Middle East and North Africa, some of your personal data may be transferred to countries outside the UK or European Economic Area. Where such transfers occur, we ensure appropriate safeguards are in place — such as UK International Data Transfer Agreements (IDTAs) — to provide an adequate level of protection.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes set out in this policy. Contact form submissions are retained for up to 24 months. Website usage data is retained for up to 12 months. When data is no longer needed, it is securely deleted or anonymised.
            </p>

            <h2>6. Your Rights</h2>
            <p>Under UK GDPR and applicable law, you have the right to:</p>
            <ul>
              <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong>Rectification</strong> — request correction of inaccurate or incomplete data</li>
              <li><strong>Erasure</strong> — request deletion of your personal data in certain circumstances</li>
              <li><strong>Restriction</strong> — request that we restrict processing of your data</li>
              <li><strong>Portability</strong> — request transfer of your data in a structured, machine-readable format</li>
              <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
              <li><strong>Withdraw consent</strong> — where processing is based on consent, you may withdraw it at any time</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at <a href="mailto:privacy@wathiq.digital">privacy@wathiq.digital</a>. We will respond within one calendar month. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>

            <h2>7. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect personal data against unauthorised access — including TLS 1.3 encryption for all data in transit and AES-256 encryption for data at rest.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised "last updated" date.
            </p>

            <h2>10. Contact Us</h2>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:privacy@wathiq.digital">privacy@wathiq.digital</a></li>
              <li><strong>Post:</strong> Wathiq Digital Ltd, 71-75 Shelton Street, London, WC2H 9JQ, United Kingdom</li>
              <li><strong>Phone:</strong> +44 7547 044020</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
