import { NextRequest, NextResponse } from 'next/server';

const LOCALES = ['en', 'ar'] as const;
type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = 'en';

function detectLocale(req: NextRequest): Locale {
  const cookieLocale = req.cookies.get('wathiq-lang')?.value;
  if (cookieLocale === 'en' || cookieLocale === 'ar') return cookieLocale;

  const acceptLanguage = req.headers.get('accept-language') || '';
  if (acceptLanguage.toLowerCase().includes('ar')) return 'ar';

  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - api routes
     * - static files (_next/static, _next/image, favicon, images, etc.)
     * - robots.txt, sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|ico|webp|avif)$).*)',
  ],
};
