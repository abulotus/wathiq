import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import EpassportCoveragePage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/epassport-coverage', title: 'تغطية جوازات السفر الإلكترونية', description: 'يدعم واثق جوازات السفر الإلكترونية الصادرة عن 140 دولة.' })
    : localizedMetadata({ locale, path: '/epassport-coverage', title: 'ePassport Coverage', description: 'Wathiq supports electronic passports issued by 140 countries.' });
}

export default function Page() {
  return <EpassportCoveragePage />;
}
