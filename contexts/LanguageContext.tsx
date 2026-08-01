'use client';

import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { translations, Language, Translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  locale: Language;
  t: Translations;
  isRTL: boolean;
  /** Build a same-locale href for an internal path, e.g. href('/contact') -> '/en/contact'. */
  href: (path: string) => string;
  /** Path to the current page under the other locale, for the language switcher. */
  otherLocaleHref: (currentPathname: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Language;
}) {
  const isRTL = locale === 'ar';
  const t = translations[locale];

  const href = useCallback(
    (path: string) => {
      const clean = path === '/' ? '' : path;
      return `/${locale}${clean}`;
    },
    [locale]
  );

  const otherLocaleHref = useCallback(
    (currentPathname: string) => {
      const other: Language = locale === 'en' ? 'ar' : 'en';
      const withoutLocale = currentPathname.replace(/^\/(en|ar)/, '') || '';
      return `/${other}${withoutLocale}`;
    },
    [locale]
  );

  const value = useMemo(
    () => ({ language: locale, locale, t, isRTL, href, otherLocaleHref }),
    [locale, t, isRTL, href, otherLocaleHref]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
