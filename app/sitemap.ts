import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://wathiq.digital';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/',            priority: 1.0, changeFrequency: 'monthly' },
    { path: '/solutions',   priority: 0.9, changeFrequency: 'monthly' },
    { path: '/industries',  priority: 0.9, changeFrequency: 'monthly' },
    { path: '/security',    priority: 0.8, changeFrequency: 'monthly' },
    { path: '/partnership', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about',       priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact',     priority: 0.8, changeFrequency: 'yearly' },
    { path: '/careers',     priority: 0.6, changeFrequency: 'weekly' },
    { path: '/privacy',     priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms',       priority: 0.3, changeFrequency: 'yearly' },
    { path: '/cookies',     priority: 0.3, changeFrequency: 'yearly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
