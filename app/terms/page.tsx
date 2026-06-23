import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Wathiq Digital',
  description: 'Wathiq Digital terms of service — the legal agreement governing use of our website and services.',
};

export default function TermsPage() {
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
          <h1 className="heading-xl text-white mb-3">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Last updated: 1 June 2025</p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto legal-content">
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
              Our website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that the website will be available, uninterrupted, or error-free, or that information on the website is complete, accurate, or up to date.
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
              We reserve the right to modify these Terms at any time by posting the updated version on this page with a revised "last updated" date. Continued use of the website after changes constitutes acceptance of the new Terms.
            </p>

            <h2>9. Contact</h2>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:legal@wathiq.digital">legal@wathiq.digital</a></li>
              <li><strong>Post:</strong> Wathiq Digital Ltd, 71-75 Shelton Street, London, WC2H 9JQ, United Kingdom</li>
              <li><strong>Phone:</strong> +44 7547 044020</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
