import { useLocaleServer } from '@/hooks/useLocaleServer';
import { PerformanceChart } from '@/components/performance/PerformanceChart';
import { ReviewForm } from '@/components/performance/ReviewForm';

interface PerformancePageProps {
  params: Promise<{ locale: string }>;
}

export default async function PerformancePage({ params }: PerformancePageProps) {
  const { locale } = await params;
  const currentLocale = useLocaleServer(locale);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        {currentLocale === 'fa' ? 'ارزیابی عملکرد' : 'Performance Evaluation'}
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart locale={currentLocale} />
        <ReviewForm locale={currentLocale} />
      </div>
    </div>
  );
}