import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.wathiq-sy.com';

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '',                     priority: 1.0, changeFrequency: 'monthly' },
  { path: '/platform',            priority: 0.9, changeFrequency: 'monthly' },
  { path: '/epassport-coverage',  priority: 0.9, changeFrequency: 'monthly' },
  { path: '/developers',          priority: 0.8, changeFrequency: 'monthly' },
  { path: '/client-dashboard',    priority: 0.8, changeFrequency: 'monthly' },
  { path: '/mobile-app',          priority: 0.8, changeFrequency: 'monthly' },
  { path: '/security',            priority: 0.8, changeFrequency: 'monthly' },
  { path: '/company',             priority: 0.7, changeFrequency: 'monthly' },
  { path: '/partnerships',        priority: 0.6, changeFrequency: 'monthly' },
  { path: '/industries',          priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact',             priority: 0.8, changeFrequency: 'yearly' },
  { path: '/careers',             priority: 0.5, changeFrequency: 'weekly' },
  { path: '/case-studies',        priority: 0.6, changeFrequency: 'monthly' },
  { path: '/pricing',             priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog',                priority: 0.6, changeFrequency: 'weekly' },
  { path: '/privacy',             priority: 0.3, changeFrequency: 'yearly' },
  { path: '/service-data',        priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms',               priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookies',             priority: 0.3, changeFrequency: 'yearly' },
];

const LOCALES = ['en', 'ar'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.flatMap(({ path, priority, changeFrequency }) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: `${SITE_URL}/en${path}`,
          ar: `${SITE_URL}/ar${path}`,
        },
      },
    }))
  );
}
