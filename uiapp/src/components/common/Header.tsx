'use client';

import { useLocale } from '@/hooks/useLocale';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  locale: string;
}

export const Header = ({ locale }: HeaderProps) => {
  const { changeLocale } = useLocale(locale);
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          سیستم مدیریت منابع انسانی
        </h1>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher currentLocale={locale} onChangeLocale={changeLocale} />
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              ادمین
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};