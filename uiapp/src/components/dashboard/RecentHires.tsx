'use client';

import { useState, useEffect } from 'react';

interface RecentHire {
  id: number;
  name: string;
  position: string;
  department: string;
  hireDate: string;
  avatar: string;
}

interface RecentHiresProps {
  locale: string;
}

export const RecentHires = ({ locale }: RecentHiresProps) => {
  const [hires, setHires] = useState<RecentHire[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی دریافت داده
    setTimeout(() => {
      setHires([
        {
          id: 1,
          name: 'علی محمدی',
          position: 'توسعه دهنده فرانت‌اند',
          department: 'فناوری اطلاعات',
          hireDate: '1402/10/15',
          avatar: 'AM'
        },
        {
          id: 2,
          name: 'فاطمه احمدی',
          position: 'مدیر بازاریابی',
          department: 'بازاریابی',
          hireDate: '1402/10/10',
          avatar: 'FA'
        },
        {
          id: 3,
          name: 'محمد رضایی',
          position: 'توسعه دهنده بک‌اند',
          department: 'فناوری اطلاعات',
          hireDate: '1402/10/05',
          avatar: 'MR'
        },
        {
          id: 4,
          name: 'زهرا حسینی',
          position: 'طراح UI/UX',
          department: 'فناوری اطلاعات',
          hireDate: '1402/10/01',
          avatar: 'ZH'
        },
        {
          id: 5,
          name: 'امیر عباسی',
          position: 'تحلیلگر کسب و کار',
          department: 'مالی',
          hireDate: '1402/09/28',
          avatar: 'AA'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {locale === 'fa' ? 'استخدام‌های اخیر' : 'Recent Hires'}
        </h2>
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {locale === 'fa' ? 'استخدام‌های اخیر' : 'Recent Hires'}
      </h2>
      
      <div className="space-y-4">
        {hires.map((hire) => (
          <div key={hire.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                {hire.avatar}
              </div>
              <div className="mr-3">
                <p className="text-sm font-medium text-gray-900">{hire.name}</p>
                <p className="text-xs text-gray-500">{hire.position}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">{hire.department}</p>
              <p className="text-xs text-gray-400">{hire.hireDate}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
        {locale === 'fa' ? 'مشاهده همه' : 'View All'}
      </button>
    </div>
  );
};