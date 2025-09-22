'use client';

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  type: 'meeting' | 'interview' | 'holiday' | 'deadline';
}

interface UpcomingEventsProps {
  locale: string;
}

export const UpcomingEvents = ({ locale }: UpcomingEventsProps) => {
  const events: UpcomingEvent[] = [
    {
      id: 1,
      title: 'مصاحبه استخدامی - علی محمدی',
      date: '1402/10/20',
      time: '10:00',
      type: 'interview'
    },
    {
      id: 2,
      title: 'جلسه بررسی عملکرد تیم فنی',
      date: '1402/10/21',
      time: '14:30',
      type: 'meeting'
    },
    {
      id: 3,
      title: 'تاریخ تحویل پروژه جدید',
      date: '1402/10/25',
      time: '23:59',
      type: 'deadline'
    },
    {
      id: 4,
      title: 'تعطیلی روز کارمند',
      date: '1402/10/28',
      time: 'تمام روز',
      type: 'holiday'
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'interview':
        return 'bg-blue-100 text-blue-800';
      case 'meeting':
        return 'bg-green-100 text-green-800';
      case 'deadline':
        return 'bg-red-100 text-red-800';
      case 'holiday':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'interview':
        return '👥';
      case 'meeting':
        return '📅';
      case 'deadline':
        return '⏰';
      case 'holiday':
        return '🎉';
      default:
        return '📌';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {locale === 'fa' ? 'رویدادهای پیش رو' : 'Upcoming Events'}
      </h2>
      
      <div className="space-y-3">
        {events.map((event) => (
          <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <span className={`text-sm px-2 py-1 rounded-full ${getEventColor(event.type)}`}>
                {getEventIcon(event.type)}
              </span>
              <div className="mr-3">
                <p className="text-sm font-medium text-gray-900">{event.title}</p>
                <p className="text-xs text-gray-500">
                  {event.date} - {event.time}
                </p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-xs">
              {locale === 'fa' ? 'مشاهده' : 'View'}
            </button>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
        {locale === 'fa' ? 'مشاهده همه رویدادها' : 'View All Events'}
      </button>
    </div>
  );
};