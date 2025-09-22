'use client';

import { useState, useEffect } from 'react';
import { getCookie, setCookie } from '@/lib/cookies';

export const useLocale = (defaultLocale: string = 'fa') => {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    const savedLocale = getCookie('locale');
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    setCookie('locale', newLocale, 365);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === 'fa' ? 'rtl' : 'ltr';
  };

  return { locale, changeLocale };
};