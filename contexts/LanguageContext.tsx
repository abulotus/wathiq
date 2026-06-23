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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('wathiq-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => {
      const next = prev === 'en' ? 'ar' : 'en';
      localStorage.setItem('wathiq-lang', next);
      document.documentElement.lang = next;
      document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
      return next;
    });
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('wathiq-lang') as Language | null;
    if (stored && (stored === 'en' || stored === 'ar')) {
      setLanguage(stored);
    }
  }, [setLanguage]);

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
