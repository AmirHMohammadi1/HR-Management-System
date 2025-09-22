'use client';

import { useState } from 'react';
// import { useLocaleServer } from '@/hooks/useLocaleServer';
import { JobPostingCard } from '@/components/recruitment/JobPostingCard';
import { Modal } from '@/components/common/Modal';
import { JobPostingForm } from '@/components/recruitment/JobPostingForm';
import { useModal } from '@/hooks/useModal';
import { JobPosting } from '@/types';
import { createJobPosting, updateJobPosting } from '@/lib/api/recruitment';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';

interface JobsPageProps {
  params: Promise<{ locale: string }>;
}

export default function JobsPage({ params }: JobsPageProps) {
  const [paramsResolved] = useState(true);
  const [paramsData, setParamsData] = useState<{ locale: string }>({ locale: 'fa' });
  
  // Resolve async params
  if (!paramsResolved) {
    params.then(data => {
      setParamsData(data);
      setParamsResolved(true);
    });
    return <div>Loading...</div>;
  }

  const { locale } = paramsData;
  const currentLocale = useLocale(locale)
  // const currentLocale = useLocaleServer(locale);

  const { isOpen, openModal, closeModal } = useModal();
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

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
    }
  ];

  const handleCreateJob = () => {
    setEditingJob(null);
    openModal();
  };

  const handleEditJob = (job: JobPosting) => {
    setEditingJob(job);
    openModal();
  };

  const handleSubmit = async (data: Omit<JobPosting, 'id' | 'applications' | 'postedDate'>) => {
    try {
      if (editingJob) {
        await updateJobPosting(editingJob.id, data);
      } else {
        await createJobPosting(data);
      }
      setRefreshKey(prev => prev + 1);
      closeModal();
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {currentLocale === 'fa' ? 'آگهی‌های شغلی' : 'Job Postings'}
        </h1>
        <button 
          onClick={handleCreateJob}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          {currentLocale === 'fa' ? 'آگهی جدید' : 'New Job Posting'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobPostings.map(job => (
          <JobPostingCard 
            key={job.id} 
            job={job} 
            locale={currentLocale}
            onEdit={() => handleEditJob(job)}
          />
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={editingJob 
          ? (currentLocale === 'fa' ? 'ویرایش آگهی' : 'Edit Job Posting')
          : (currentLocale === 'fa' ? 'آگهی جدید' : 'New Job Posting')
        }
      >
        <JobPostingForm
          job={editingJob || undefined}
          locale={currentLocale}
          onSubmit={handleSubmit}
          onCancel={closeModal}
        />
      </Modal>
    </div>
  );
}