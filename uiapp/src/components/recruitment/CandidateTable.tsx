'use client';

import { useState, useEffect } from 'react';
import { Candidate } from '@/types';
import { Pagination } from '@/components/common/Pagination';

interface CandidateTableProps {
  locale: string;
  page: number;
  status: string;
  searchQuery: string;
}

export const CandidateTable = ({ locale, page, status, searchQuery }: CandidateTableProps) => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidates = async () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const mockCandidates: Candidate[] = [
          {
            id: 1,
            name: 'علی محمدی',
            appliedFor: 'توسعه دهنده فرانت‌اند',
            status: 'applied',
            appliedDate: '1402/10/15',
            interviewer: 'فاطمه احمدی',
            resume: '/resumes/ali-mohammadi.pdf',
            email: 'ali.mohammadi@email.com',
            phone: '09123456789',
            rating: 4
          },
          {
            id: 2,
            name: 'زهرا حسینی',
            appliedFor: 'طراح UI/UX',
            status: 'interview',
            appliedDate: '1402/10/12',
            interviewer: 'محمد رضایی',
            resume: '/resumes/zahra-hosseini.pdf',
            email: 'zahra.hosseini@email.com',
            phone: '09129876543',
            rating: 5
          },
          {
            id: 3,
            name: 'امیر عباسی',
            appliedFor: 'تحلیلگر کسب و کار',
            status: 'rejected',
            appliedDate: '1402/10/10',
            interviewer: 'زهرا حسینی',
            resume: '/resumes/amir-abbasi.pdf',
            email: 'amir.abbasi@email.com',
            phone: '09127654321',
            rating: 3
          },
          {
            id: 4,
            name: 'مریم قاسمی',
            appliedFor: 'مدیر بازاریابی',
            status: 'hired',
            appliedDate: '1402/10/05',
            interviewer: 'امیر عباسی',
            resume: '/resumes/maryam-ghasemi.pdf',
            email: 'maryam.ghasemi@email.com',
            phone: '09121234567',
            rating: 4
          }
        ];

        setCandidates(mockCandidates);
        setTotalPages(2);
        setLoading(false);
      }, 1000);
    };

    fetchCandidates();
  }, [page, status, searchQuery]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied':
        return 'bg-blue-100 text-blue-800';
      case 'interview':
        return 'bg-yellow-100 text-yellow-800';
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
      case 'applied':
        return locale === 'fa' ? 'ارسال شده' : 'Applied';
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
                {locale === 'fa' ? 'موقعیت شغلی' : 'Applied For'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'وضعیت' : 'Status'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'تاریخ ارسال' : 'Applied Date'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'مصاحبه‌کننده' : 'Interviewer'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'امتیاز' : 'Rating'}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {locale === 'fa' ? 'عملیات' : 'Actions'}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {candidate.name.charAt(0)}
                    </div>
                    <div className="mr-4">
                      <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                      <div className="text-sm text-gray-500">{candidate.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{candidate.appliedFor}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(candidate.status)}`}>
                    {getStatusText(candidate.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{candidate.appliedDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{candidate.interviewer}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < (candidate.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    {locale === 'fa' ? 'مشاهده' : 'View'}
                  </button>
                  <a href={candidate.resume} className="text-green-600 hover:text-green-900 mr-3" download>
                    {locale === 'fa' ? 'دانلود رزومه' : 'Download CV'}
                  </a>
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