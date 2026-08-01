import type { Metadata } from 'next';
import { Language } from '@/lib/translations';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://wathiq.digital';

/**
 * Builds canonical + hreflang metadata for a localized page.
 * `path` is the locale-less path, e.g. '/platform' or '' for the homepage.
 */
export function localizedMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Language;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const clean = path === '/' ? '' : path;
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}${clean}`,
      languages: {
        en: `${SITE_URL}/en${clean}`,
        ar: `${SITE_URL}/ar${clean}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}${clean}`,
    },
  };
}
