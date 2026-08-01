import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://wathiq.digital';

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

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Language = params.locale === 'ar' ? 'ar' : 'en';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Tajawal:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }} />
          </>
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
