import { Suspense } from 'react';
import { useLocaleServer } from '@/hooks/useLocaleServer';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { RecentHires } from '@/components/dashboard/RecentHires';
import { UpcomingEvents } from '@/components/dashboard/UpcomingEvents';
import { OrgChart } from '@/components/dashboard/OrgChart';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

interface DashboardPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { locale } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentLocale = await useLocaleServer(locale);

  const statsData = [
    { title: 'تعداد کارمندان', value: '124', change: '+5%', icon: '👥' },
    { title: 'استخدام‌های جدید', value: '8', change: '+12%', icon: '🎯' },
    { title: 'مرخصی‌های فعال', value: '15', change: '-3%', icon: '📅' },
    { title: 'بازخوردها', value: '23', change: '+8%', icon: '💬' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        {currentLocale === 'fa' ? 'داشبورد' : 'Dashboard'}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Suspense fallback={<LoadingSpinner />}>
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
              locale={currentLocale}
            />
          ))}
        </Suspense>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<LoadingSpinner />}>
          <RecentHires locale={currentLocale} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <UpcomingEvents locale={currentLocale} />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Suspense fallback={<LoadingSpinner />}>
          <OrgChart locale={currentLocale} />
        </Suspense>
      </div>
    </div>
  );
}