'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { translations, Language, Translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/** Persist the choice so the server can render the correct lang/dir on the next request. */
function persistLanguage(lang: Language) {
  localStorage.setItem('wathiq-lang', lang);
  // 1-year cookie, read server-side in app/layout.tsx to avoid first-paint flash.
  document.cookie = `wathiq-lang=${lang};path=/;max-age=31536000;samesite=lax`;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

export function LanguageProvider({
  children,
  initialLanguage = 'en',
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    persistLanguage(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => {
      const next = prev === 'en' ? 'ar' : 'en';
      persistLanguage(next);
      return next;
    });
  }, []);

  // Reconcile with a stored preference that predates the cookie (e.g. localStorage only).
  useEffect(() => {
    const stored = localStorage.getItem('wathiq-lang') as Language | null;
    if (stored && (stored === 'en' || stored === 'ar') && stored !== initialLanguage) {
      setLanguage(stored);
    }
  }, [setLanguage, initialLanguage]);

  const isRTL = language === 'ar';
  const t = translations[language];

  const value = useMemo(
    () => ({ language, setLanguage, t, isRTL, toggleLanguage }),
    [language, setLanguage, t, isRTL, toggleLanguage]
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
