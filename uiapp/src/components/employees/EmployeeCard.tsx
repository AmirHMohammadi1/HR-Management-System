import { Employee } from '@/types';
import Link from 'next/link';

interface EmployeeCardProps {
  employee: Employee;
  locale: string;
}

export const EmployeeCard = ({ employee, locale }: EmployeeCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center mb-4">
        <div className="h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
          {employee.name.charAt(0)}
        </div>
        <div className="mr-4">
          <h3 className="text-lg font-semibold text-gray-800">{employee.name}</h3>
          <p className="text-sm text-gray-600">{employee.position}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {employee.email}
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {employee.phone}
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2 0V9m0 0H5m14 0V3a2 2 0 00-2-2H7a2 2 0 00-2 2v6h14z" />
          </svg>
          {employee.department}
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className={`px-2 py-1 rounded-full text-xs ${
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
        
        <Link
          href={`/employees/${employee.id}`}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
        >
          {locale === 'fa' ? 'مشاهده جزئیات' : 'View Details'}
        </Link>
      </div>
    </div>
  );
};