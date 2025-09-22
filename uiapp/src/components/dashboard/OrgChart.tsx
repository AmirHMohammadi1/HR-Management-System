'use client';

interface Department {
  id: number;
  name: string;
  manager: string;
  employeeCount: number;
}

interface OrgChartProps {
  locale: string;
}

export const OrgChart = ({ locale }: OrgChartProps) => {
  const departments: Department[] = [
    {
      id: 1,
      name: 'فناوری اطلاعات',
      manager: 'علی محمدی',
      employeeCount: 15
    },
    {
      id: 2,
      name: 'منابع انسانی',
      manager: 'فاطمه احمدی',
      employeeCount: 8
    },
    {
      id: 3,
      name: 'بازاریابی',
      manager: 'محمد رضایی',
      employeeCount: 12
    },
    {
      id: 4,
      name: 'مالی',
      manager: 'زهرا حسینی',
      employeeCount: 10
    },
    {
      id: 5,
      name: 'فروش',
      manager: 'امیر عباسی',
      employeeCount: 20
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {locale === 'fa' ? 'ساختار سازمانی' : 'Organization Chart'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">{dept.name}</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-blue-600">
                {locale === 'fa' ? 'مدیر:' : 'Manager:'}
              </span>
              <span className="text-sm font-medium text-blue-800">{dept.manager}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-600">
                {locale === 'fa' ? 'تعداد کارمندان:' : 'Employees:'}
              </span>
              <span className="text-sm font-medium text-blue-800">{dept.employeeCount}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
        {locale === 'fa' ? 'مشاهده ساختار کامل' : 'View Full Chart'}
      </button>
    </div>
  );
};