'use client';

interface AttendanceCalendarProps {
  locale: string;
}

export const AttendanceCalendar = ({ locale }: AttendanceCalendarProps) => {
  const days = locale === 'fa' 
    ? ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']
    : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  const getStatus = (date: number) => {
    if (date % 7 === 0) return 'absent';
    if (date % 5 === 0) return 'late';
    return 'present';
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map(day => (
          <div key={day} className="text-center font-medium text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {dates.map(date => {
          const status = getStatus(date);
          return (
            <div
              key={date}
              className={`h-12 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                status === 'present'
                  ? 'bg-green-100 text-green-800 hover:bg-green-200'
                  : status === 'late'
                  ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                  : 'bg-red-100 text-red-800 hover:bg-red-200'
              }`}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
};