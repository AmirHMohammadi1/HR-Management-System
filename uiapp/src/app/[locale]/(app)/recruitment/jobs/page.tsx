import { useLocaleServer } from '@/hooks/useLocaleServer';
import { JobPostingCard } from '@/components/recruitment/JobPostingCard';
import Link from 'next/link';

interface JobsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function JobsPage({ params }: JobsPageProps) {
  const { locale } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentLocale = await useLocaleServer(locale);

  const jobPostings = [
    {
      id: 1,
      title: 'توسعه دهنده فرانت‌اند',
      department: 'فناوری اطلاعات',
      location: 'تهران',
      applications: 24,
      status: 'open' as const,
      postedDate: '1402/10/15',
      description: 'به دنبال توسعه دهنده فرانت‌اند با تجربه در React و Next.js هستیم.',
      requirements: ['تجربه 3 ساله در React', 'تسلط به TypeScript', 'آشنا به مفاهیم SEO']
    },
    {
      id: 2,
      title: 'مدیر بازاریابی',
      department: 'بازاریابی',
      location: 'اصفهان',
      applications: 18,
      status: 'open' as const,
      postedDate: '1402/10/10',
      description: 'به دنبال مدیر بازاریابی با تجربه در زمینه دیجیتال مارکتینگ هستیم.',
      requirements: ['تجربه 5 ساله در بازاریابی', 'مدیریت تیم', 'تسلط به ابزارهای تحلیل']
    },
    {
      id: 3,
      title: 'متخصص سئو',
      department: 'بازاریابی',
      location: 'مشهد',
      applications: 32,
      status: 'closed' as const,
      postedDate: '1402/09/20',
      description: 'به دنبال متخصص سئو با تجربه در بهینه‌سازی سایت‌های بزرگ هستیم.',
      requirements: ['تجربه 4 ساله در سئو', 'تسلط به ابزارهای analytics', 'آشنا با technical SEO']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {currentLocale === 'fa' ? 'آگهی‌های شغلی' : 'Job Postings'}
        </h1>
        <Link 
          href={`/${locale}/recruitment/jobs/new`}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          {currentLocale === 'fa' ? 'آگهی جدید' : 'New Job Posting'}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobPostings.map(job => (
          <JobPostingCard key={job.id} job={job} locale={currentLocale} />
        ))}
      </div>
    </div>
  );
}