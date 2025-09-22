'use client';

import { useState } from 'react';

interface TimeTrackerProps {
  locale: string;
}

export const TimeTracker = ({ locale }: TimeTrackerProps) => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState<string | null>(null);

  const handleClockIn = () => {
    setIsClockedIn(true);
    setClockInTime(new Date().toLocaleTimeString('fa-IR'));
  };

  const handleClockOut = () => {
    setIsClockedIn(false);
    setClockInTime(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {locale === 'fa' ? 'ثبت زمان' : 'Time Tracking'}
      </h2>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">
            {locale === 'fa' ? 'وضعیت فعلی:' : 'Current Status:'}
          </p>
          <p className={`text-lg font-semibold ${isClockedIn ? 'text-green-600' : 'text-red-600'}`}>
            {isClockedIn 
              ? (locale === 'fa' ? 'در حال کار' : 'Clocked In') 
              : (locale === 'fa' ? 'غایب' : 'Clocked Out')}
          </p>
          {clockInTime && (
            <p className="text-sm text-gray-500 mt-1">
              {locale === 'fa' ? 'ساعت ورود: ' : 'Clock In Time: '} {clockInTime}
            </p>
          )}
        </div>
        
        <button
          onClick={isClockedIn ? handleClockOut : handleClockIn}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            isClockedIn
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          {isClockedIn 
            ? (locale === 'fa' ? 'خروج از کار' : 'Clock Out') 
            : (locale === 'fa' ? 'ورود به کار' : 'Clock In')}
        </button>
      </div>
    </div>
  );
};