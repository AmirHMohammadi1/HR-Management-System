'use client';

import { useState, useEffect } from 'react';
import { Employee } from '@/types';
import { Pagination } from '@/components/common/Pagination';

interface EmployeeTableProps {
  locale: string;
  page: number;
  department: string;
  status: string;
  searchQuery: string;
}

export const EmployeeTable = ({ locale, page, department, status, searchQuery }: EmployeeTableProps) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const mockEmployees: Employee[] = [
          {
            id: 1,
            name: 'علی محمدی',
            position: 'توسعه دهنده فرانت‌اند',
            department: 'فناوری اطلاعات',
            hireDate: '1402/01/15',
            email: 'ali.mohammadi@company.com',
            phone: '09123456789',
            status: 'active'
          },
          {
            id: 2,
            name: 'فاطمه احمدی',
            position: 'مدیر منابع انسانی',
            department: 'منابع انسانی',
            hireDate: '1401/08/22',
            email: 'fateme.ahmadi@company.com',
            phone: '09129876543',
            status: 'active'
          },
          {
            id: 3,
            name: 'محمد رضایی',
            position: 'توسعه دهنده بک‌اند',
            department: 'فناوری اطلاعات',
            hireDate: '1402/03/10',
            email: 'mohammad.rezaei@company.com',
            phone: '09127654321',
            status: 'on-leave'
          },
          {
            id: 4,
            name: 'زهرا حسینی',
            position: 'طراح UI/UX',
            department: 'فناوری اطلاعات',
            hireDate: '1402/05/20',
            email: 'zahra.hosseini@company.com',
            phone: '09121234567',
            status: 'active'
          },
          {
            id: 5,
            name: 'امیر عباسی',
            position: 'تحلیلگر کسب و کار',
            department: 'مالی',
            hireDate: '1402/02/18',
            email: 'amir.abbasi@company.com',
            phone: '09128765432',
            status: 'terminated'
          }
        ];

        setEmployees(mockEmployees);
        setTotalPages(3);
        setLoading(false);
      }, 1000);
    };

    fetchEmployees();
  }, [page, department, status, searchQuery]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'نام' : 'Name'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'سمت' : 'Position'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'دپارتمان' : 'Department'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'تاریخ استخدام' : 'Hire Date'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'وضعیت' : 'Status'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'عملیات' : 'Actions'}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {employee.name.charAt(0)}
                    </div>
                    <div className="mr-4">
                      <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.position}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.hireDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    employee.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : employee.status === 'on-leave'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {locale === 'fa' 
                      ? employee.status === 'active' 
                        ? 'فعال' 
                        : employee.status === 'on-leave' 
                        ? 'مرخصی' 
                        : 'ترک شده'
                      : employee.status
                    }
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    {locale === 'fa' ? 'ویرایش' : 'Edit'}
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    {locale === 'fa' ? 'حذف' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => {
            // Handle page change
            const url = new URL(window.location.href);
            url.searchParams.set('page', newPage.toString());
            window.location.href = url.toString();
          }}
          locale={locale}
        />
      </div>
    </div>
  );
};