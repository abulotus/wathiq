import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import ClientDashboardPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/client-dashboard', title: 'لوحة تحكم العملاء', description: 'أدر نشاط التحقق من جوازات السفر الإلكترونية من مكان واحد.' })
    : localizedMetadata({ locale, path: '/client-dashboard', title: 'Client Dashboard', description: 'Manage ePassport verification activity from one place.' });
}

export default function Page() {
  return <ClientDashboardPage />;
}
