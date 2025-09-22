'use client';

import { useState } from 'react';

interface PerformanceChartProps {
  locale: string;
}

export const PerformanceChart = ({ locale }: PerformanceChartProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  
  const performanceData = {
    labels: locale === 'fa' 
      ? ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [85, 78, 92, 88, 95, 90]
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          {locale === 'fa' ? 'نمودار عملکرد' : 'Performance Chart'}
        </h3>
        <select 
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-md text-sm"
        >
          <option value="monthly">{locale === 'fa' ? 'ماهانه' : 'Monthly'}</option>
          <option value="quarterly">{locale === 'fa' ? 'فصلی' : 'Quarterly'}</option>
          <option value="yearly">{locale === 'fa' ? 'سالانه' : 'Yearly'}</option>
        </select>
      </div>

      <div className="h-64 flex items-end space-x-2 justify-center">
        {performanceData.values.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className="bg-blue-500 rounded-t w-10 transition-all duration-300 hover:bg-blue-600"
              style={{ height: `${value}%` }}
            />
            <span className="text-xs text-gray-600 mt-2">
              {performanceData.labels[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};