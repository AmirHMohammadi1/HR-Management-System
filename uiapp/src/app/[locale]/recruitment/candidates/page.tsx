import { useLocaleServer } from '@/hooks/useLocaleServer';
import { CandidateTable } from '@/components/recruitment/CandidateTable';


interface CandidatesPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    page?: string;
    status?: string;
    search?: string;
  }>;
}

export default async function CandidatesPage({ params, searchParams }: CandidatesPageProps) {
  const { locale } = await params;
  const currentLocale = useLocaleServer(locale);
  const { page = '1', status = '', search = '' } = await searchParams;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        {currentLocale === 'fa' ? 'مدیریت متقاضیان' : 'Candidates Management'}
      </h1>

      <CandidateTable
        locale={currentLocale}
        page={parseInt(page)}
        status={status}
        searchQuery={search}
      />
    </div>
  );
}