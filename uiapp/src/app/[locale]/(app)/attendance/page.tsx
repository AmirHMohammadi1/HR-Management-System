import { useLocaleServer } from '@/hooks/useLocaleServer';
import { AttendanceCalendar } from '@/components/attendance/AttendanceCalendar';
import { TimeTracker } from '@/components/attendance/TimeTracker';

interface AttendancePageProps {
  params: Promise<{ locale: string }>;
}

export default async function AttendancePage({ params }: AttendancePageProps) {
  const { locale } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentLocale = await useLocaleServer(locale);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        { currentLocale === 'fa' ? 'حضور و غیاب' : 'Attendance'}
      </h1>
      
      <TimeTracker locale={currentLocale} />
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {currentLocale === 'fa' ? 'تقویم حضور و غیاب' : 'Attendance Calendar'}
        </h2>
        <AttendanceCalendar locale={currentLocale} />
      </div>
    </div>
  );
}