import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import BlogPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/blog', title: 'المدونة', description: 'مقالات واثق حول التحقق من جوازات السفر الإلكترونية والهوية الرقمية.' })
    : localizedMetadata({ locale, path: '/blog', title: 'Blog', description: "Wathiq's articles on ePassport verification and digital identity." });
}

export default function Page() {
  return <BlogPage />;
}
