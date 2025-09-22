import { useLocaleServer } from '@/hooks/useLocaleServer';

interface SettingsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function SettingsPage({ params }: SettingsPageProps) {
  const { locale } = await params;
  const currentLocale = useLocaleServer(locale);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        {currentLocale === 'fa' ? 'تنظیمات سیستم' : 'System Settings'}
      </h1>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {currentLocale === 'fa' ? 'تنظیمات عمومی' : 'General Settings'}
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              {currentLocale === 'fa' ? 'اعلان‌های ایمیلی' : 'Email Notifications'}
            </label>
            <input type="checkbox" className="toggle" checked />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              {currentLocale === 'fa' ? 'قالب تاریک' : 'Dark Mode'}
            </label>
            <input type="checkbox" className="toggle" />
          </div>
        </div>
      </div>
    </div>
  );
}