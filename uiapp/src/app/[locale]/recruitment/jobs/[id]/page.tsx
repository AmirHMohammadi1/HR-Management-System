import { useLocaleServer } from '@/hooks/useLocaleServer';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface JobDetailPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { locale, id } = await params;
  const currentLocale = useLocaleServer(locale);
  
  // شبیه‌سازی داده‌های آگهی شغلی
  const job = {
    id: parseInt(id),
    title: 'توسعه دهنده فرانت‌اند',
    department: 'فناوری اطلاعات',
    location: 'تهران',
    applications: 24,
    status: 'open' as const,
    postedDate: '1402/10/15',
    description: 'به دنبال توسعه دهنده فرانت‌اند با تجربه در React و Next.js هستیم. فرد مناسب باید توانایی کار در تیم را داشته باشد و به فناوری‌های روز مسلط باشد.',
    requirements: [
      'تجربه 3 ساله در React',
      'تسلط به TypeScript',
      'آشنا به مفاهیم SEO',
      'تجربه کار با Next.js',
      'آشنا به مفاهیم UI/UX'
    ],
    salaryRange: '۱۵-۲۰ میلیون تومان'
  };

  if (!job) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {currentLocale === 'fa' ? 'جزئیات آگهی شغلی' : 'Job Details'}
        </h1>
        <Link 
          href={`/${locale}/recruitment/jobs`}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
        >
          {currentLocale === 'fa' ? 'بازگشت' : 'Back'}
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <div className="flex items-center mt-2 space-x-4">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {job.department}
              </span>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                {job.location}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm ${
                job.status === 'open' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {job.status === 'open' 
                  ? (currentLocale === 'fa' ? 'باز' : 'Open') 
                  : (currentLocale === 'fa' ? 'بسته' : 'Closed')}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600">{currentLocale === 'fa' ? 'تعداد متقاضیان:' : 'Applicants:'} {job.applications}</p>
            <p className="text-sm text-gray-500">
              {currentLocale === 'fa' ? 'ارسال شده در: ' : 'Posted: '} {job.postedDate}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              {currentLocale === 'fa' ? 'شرح موقعیت شغلی' : 'Job Description'}
            </h3>
            <p className="text-gray-700">{job.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              {currentLocale === 'fa' ? 'الزامات' : 'Requirements'}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            {currentLocale === 'fa' ? 'حقوق و مزایا' : 'Salary & Benefits'}
          </h3>
          <p className="text-gray-700">
            {currentLocale === 'fa' ? 'حقوق: ' : 'Salary: '} {job.salaryRange}
          </p>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
            {currentLocale === 'fa' ? 'ویرایش آگهی' : 'Edit Job'}
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200">
            {currentLocale === 'fa' ? 'مشاهده متقاضیان' : 'View Applicants'}
          </button>
        </div>
      </div>
    </div>
  );
}