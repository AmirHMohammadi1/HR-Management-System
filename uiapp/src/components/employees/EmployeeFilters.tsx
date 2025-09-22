'use client';

import { useState } from 'react';
import { departments, employmentStatus } from '@/lib/constants';
import { SearchBar } from '@/components/common/SearchBar';

interface EmployeeFiltersProps {
  locale: string;
}

export const EmployeeFilters = ({ locale }: EmployeeFiltersProps) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleSearch = (query: string) => {
    // Handle search logic
    console.log('Search query:', query);
  };

  const handleFilter = () => {
    // Handle filter logic
    console.log('Department:', selectedDepartment);
    console.log('Status:', selectedStatus);
  };

  const handleReset = () => {
    setSelectedDepartment('');
    setSelectedStatus('');
    // Reset other filters
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {locale === 'fa' ? 'دپارتمان' : 'Department'}
          </label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">{locale === 'fa' ? 'همه' : 'All'}</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {locale === 'fa' ? 'وضعیت' : 'Status'}
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">{locale === 'fa' ? 'همه' : 'All'}</option>
            {employmentStatus.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {locale === 'fa' ? 'جستجو' : 'Search'}
          </label>
          <SearchBar
            placeholder={locale === 'fa' ? 'جستجو بر اساس نام یا ایمیل...' : 'Search by name or email...'}
            onSearch={handleSearch}
            locale={locale}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3 mt-4">
        <button
          onClick={handleFilter}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          {locale === 'fa' ? 'اعمال فیلتر' : 'Apply Filters'}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200"
        >
          {locale === 'fa' ? 'حذف فیلترها' : 'Clear Filters'}
        </button>
      </div>
    </div>
  );
};