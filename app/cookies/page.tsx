import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Wathiq Digital',
  description: 'Wathiq Digital cookie policy — how we use cookies and how to control them.',
};

export default function CookiesPage() {
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
          <h1 className="heading-xl text-white mb-3">Cookie Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: 1 June 2025</p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto legal-content">
            <p>
              This Cookie Policy explains how Wathiq Digital Ltd ("<strong>Wathiq</strong>") uses cookies and similar technologies on our website at <a href="https://wathiq.digital">wathiq.digital</a>. It should be read alongside our <a href="/privacy">Privacy Policy</a>.
            </p>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, remember your preferences, and provide information to website owners. Cookies cannot execute programs or deliver viruses to your device.
            </p>

            <h2>2. What Cookies We Use</h2>
            <p>We use the following categories of cookies:</p>

            <h3>Strictly Necessary Cookies</h3>
            <p>
              These cookies are required for the website to function. They cannot be disabled without affecting how the website operates. These cookies do not require your consent under UK law.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>lang</code></td>
                  <td>Stores your selected language (English / Arabic)</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td><code>__Host-next-auth.csrf-token</code></td>
                  <td>CSRF protection for form submissions</td>
                  <td>Session</td>
                </tr>
              </tbody>
            </table>

            <h3>Analytics Cookies</h3>
            <p>
              We currently use no third-party analytics cookies. If this changes, we will update this policy and obtain your consent where required before setting any such cookies.
            </p>

            <h3>Marketing Cookies</h3>
            <p>
              We do not currently use marketing or advertising cookies on this website.
            </p>

            <h2>3. How to Control Cookies</h2>
            <p>
              Most browsers allow you to refuse or delete cookies through their settings. Below are links to instructions for common browsers:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
            <p>
              Note that restricting strictly necessary cookies will affect website functionality.
            </p>

            <h2>4. Cookies and Personal Data</h2>
            <p>
              Where cookies process personal data (such as your IP address or device identifiers), this is governed by our <a href="/privacy">Privacy Policy</a>. We do not use cookies to identify you personally unless you have voluntarily provided us with personal information.
            </p>

            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. The "last updated" date at the top of this page indicates when the policy was last revised.
            </p>

            <h2>6. Contact Us</h2>
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
