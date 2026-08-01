import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import BlogPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/blog', title: 'المدونة', description: 'مقالات واثق حول التحقق من جوازات السفر الإلكترونية والهوية الرقمية.' })
    : localizedMetadata({ locale, path: '/blog', title: 'Blog', description: "Wathiq's articles on ePassport verification and digital identity." });
}

export default function Page() {
  return <BlogPage />;
}
