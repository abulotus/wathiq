import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.wathiq-sy.com';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Wathiq | واثق',
    template: '%s | Wathiq',
  },
  description: 'Wathiq verifies supported electronic passports through an Arabic-first experience, connected to your systems via API, webhooks, a client dashboard, and a mobile app.',
  keywords: 'ePassport verification, electronic passport, identity verification, Arabic-first, Syria, واثق, API, webhooks',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Wathiq — Arabic-First ePassport Verification',
    description: 'Verify supported electronic passports with an Arabic-first experience, connected via API, webhooks, a client dashboard, and a mobile app.',
    type: 'website',
    siteName: 'Wathiq',
  },
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      en: `${SITE_URL}/en`,
      ar: `${SITE_URL}/ar`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0A1A47',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Language = localeParam === 'ar' ? 'ar' : 'en';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gaIdJson = JSON.stringify(gaId || '');

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
              var slow = !!(c && (c.saveData || c.effectiveType === 'slow-2g' || c.effectiveType === '2g'));
              if (slow) document.documentElement.classList.add('low-bandwidth');
            })();
          `,
        }} />
        {gaId && (
          <script dangerouslySetInnerHTML={{
            __html: `
              (function () {
                if (document.documentElement.classList.contains('low-bandwidth')) return;
                var id = ${gaIdJson};
                function loadAnalytics() {
                  window.dataLayer = window.dataLayer || [];
                  window.gtag = function(){window.dataLayer.push(arguments);};
                  window.gtag('js', new Date());
                  window.gtag('config', id, { page_path: window.location.pathname });
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
                  document.head.appendChild(script);
                }
                if ('requestIdleCallback' in window) window.requestIdleCallback(loadAnalytics, { timeout: 4000 });
                else window.addEventListener('load', function(){ setTimeout(loadAnalytics, 1500); }, { once: true });
              })();
            `,
          }} />
        )}
      </head>
      <body className="antialiased overflow-x-hidden">
        <LanguageProvider locale={locale}>
          <Header />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
