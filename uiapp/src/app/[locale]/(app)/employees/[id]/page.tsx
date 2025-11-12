import { useLocaleServer } from '@/hooks/useLocaleServer';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface EmployeeDetailPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function EmployeeDetailPage({ params }: EmployeeDetailPageProps) {
  const { locale, id } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentLocale = await useLocaleServer(locale);
  
  // شبیه‌سازی داده‌های کارمند
  const employee = {
    id: parseInt(id),
    name: 'علی محمدی',
    position: 'توسعه دهنده فرانت‌اند',
    department: 'فناوری اطلاعات',
    hireDate: '1402/01/15',
    email: 'ali.mohammadi@company.com',
    phone: '09123456789',
    status: 'active' as const,
    salary: 15000000,
    address: 'تهران، خیابان ولیعصر، پلاک ۱۲۳'
  };

  if (!employee) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {currentLocale === 'fa' ? 'جزئیات کارمند' : 'Employee Details'}
        </h1>
        <Link 
          href={`/${locale}/employees`}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
        >
          {currentLocale === 'fa' ? 'بازگشت' : 'Back'}
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-6">
          <div className="h-20 w-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
            {employee.name.charAt(0)}
          </div>
          <div className="mr-4">
            <h2 className="text-xl font-semibold text-gray-800">{employee.name}</h2>
            <p className="text-gray-600">{employee.position}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              {currentLocale === 'fa' ? 'اطلاعات شخصی' : 'Personal Information'}
            </h3>
            <div className="space-y-2">
              <p><span className="font-medium">ایمیل:</span> {employee.email}</p>
              <p><span className="font-medium">تلفن:</span> {employee.phone}</p>
              <p><span className="font-medium">آدرس:</span> {employee.address}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              {currentLocale === 'fa' ? 'اطلاعات شغلی' : 'Employment Information'}
            </h3>
            <div className="space-y-2">
              <p><span className="font-medium">دپارتمان:</span> {employee.department}</p>
              <p><span className="font-medium">تاریخ استخدام:</span> {employee.hireDate}</p>
              <p><span className="font-medium">وضعیت:</span> 
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ml-2 ${
                  employee.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {currentLocale === 'fa' ? 'فعال' : 'Active'}
                </span>
              </p>
              <p><span className="font-medium">حقوق پایه:</span> {employee.salary?.toLocaleString()} تومان</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}