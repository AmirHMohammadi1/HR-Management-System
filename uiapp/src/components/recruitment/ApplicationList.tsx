'use client';

import { useState } from 'react';

interface Application {
  id: number;
  jobTitle: string;
  candidateName: string;
  appliedDate: string;
  status: 'pending' | 'reviewed' | 'interview' | 'rejected' | 'hired';
}

interface ApplicationListProps {
  locale: string;
}

export const ApplicationList = ({ locale }: ApplicationListProps) => {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      jobTitle: 'توسعه دهنده فرانت‌اند',
      candidateName: 'علی محمدی',
      appliedDate: '1402/10/15',
      status: 'pending'
    },
    {
      id: 2,
      jobTitle: 'طراح UI/UX',
      candidateName: 'زهرا حسینی',
      appliedDate: '1402/10/12',
      status: 'reviewed'
    },
    {
      id: 3,
      jobTitle: 'تحلیلگر کسب و کار',
      candidateName: 'امیر عباسی',
      appliedDate: '1402/10/10',
      status: 'interview'
    },
    {
      id: 4,
      jobTitle: 'مدیر بازاریابی',
      candidateName: 'مریم قاسمی',
      appliedDate: '1402/10/05',
      status: 'hired'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      case 'reviewed':
        return 'bg-yellow-100 text-yellow-800';
      case 'interview':
        return 'bg-purple-100 text-purple-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'hired':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return locale === 'fa' ? 'در انتظار بررسی' : 'Pending';
      case 'reviewed':
        return locale === 'fa' ? 'بررسی شده' : 'Reviewed';
      case 'interview':
        return locale === 'fa' ? 'مصاحبه' : 'Interview';
      case 'rejected':
        return locale === 'fa' ? 'رد شده' : 'Rejected';
      case 'hired':
        return locale === 'fa' ? 'استخدام شده' : 'Hired';
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {locale === 'fa' ? 'لیست درخواست‌ها' : 'Applications List'}
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'نام متقاضی' : 'Candidate'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'موقعیت شغلی' : 'Job Title'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'تاریخ ارسال' : 'Applied Date'}
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
            {applications.map((application) => (
              <tr key={application.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {application.candidateName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {application.jobTitle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {application.appliedDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(application.status)}`}>
                    {getStatusText(application.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    {locale === 'fa' ? 'مشاهده' : 'View'}
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    {locale === 'fa' ? 'تغییر وضعیت' : 'Change Status'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};