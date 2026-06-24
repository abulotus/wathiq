import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://wathiq.digital';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Wathiq Digital | وثيق ديجيتال',
    template: '%s | Wathiq Digital',
  },
  description: 'Helping organizations across the Middle East and beyond build digital trust through identity verification, fraud prevention, and digital transformation solutions.',
  keywords: 'digital identity, trust technology, Middle East, fraud prevention, identity verification, digital transformation, وثيق, London, UK',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Wathiq Digital — Building Digital Trust for the Future',
    description: 'Modern identity and security technology for businesses across the Middle East and beyond.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Wathiq Digital',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = cookies().get('wathiq-lang')?.value === 'ar' ? 'ar' : 'en';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
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
        <LanguageProvider initialLanguage={lang}>
          <Header />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
