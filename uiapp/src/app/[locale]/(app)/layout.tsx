import { ReactNode } from 'react';
import { useLocaleServer } from '@/hooks/useLocaleServer';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Sidebar } from '@/components/common/Sidebar';
import { Breadcrumb } from '@/components/common/Breadcrumb';

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentLocale = await useLocaleServer(locale);

  // تعیین breadcrumb بر اساس مسیر
  const getBreadcrumbItems = () => {
    // این بخش باید بر اساس مسیر فعلی پیاده‌سازی شود
    return [
      { label: currentLocale === 'fa' ? 'داشبورد' : 'Dashboard', href: `/${locale}/dashboard` },
      { label: currentLocale === 'fa' ? 'کارمندان' : 'Employees', href: `/${locale}/employees` },
    ];
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header locale={currentLocale} />
        <main className="flex-1 p-6 overflow-auto">
          <Breadcrumb items={getBreadcrumbItems()} />
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}