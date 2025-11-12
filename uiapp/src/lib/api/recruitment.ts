import { JobPosting, Candidate } from '@/types';

// شبیه‌سازی داده‌های آگهی‌های شغلی
const mockJobPostings: JobPosting[] = [
  {
    id: 1,
    title: 'توسعه دهنده فرانت‌اند',
    department: 'فناوری اطلاعات',
    location: 'تهران',
    applications: 24,
    status: 'open',
    postedDate: '1402/10/15',
    description: 'به دنبال توسعه دهنده فرانت‌اند با تجربه در React و Next.js هستیم.',
    requirements: ['تجربه 3 ساله در React', 'تسلط به TypeScript', 'آشنا به مفاهیم SEO'],
    salaryRange: '۱۵-۲۰ میلیون تومان'
  },
  {
    id: 2,
    title: 'مدیر بازاریابی',
    department: 'بازاریابی',
    location: 'اصفهان',
    applications: 18,
    status: 'open',
    postedDate: '1402/10/10',
    description: 'به دنبال مدیر بازاریابی با تجربه در زمینه دیجیتال مارکتینگ هستیم.',
    requirements: ['تجربه 5 ساله در بازاریابی', 'مدیریت تیم', 'تسلط به ابزارهای تحلیل'],
    salaryRange: '۲۰-۲۵ میلیون تومان'
  }
];

// شبیه‌سازی داده‌های متقاضیان
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
  }
];

export const getJobPostings = async (filters?: {
  status?: string;
  department?: string;
  search?: string;
  page?: number;
  limit?: number;
}): Promise<{ jobs: JobPosting[]; total: number }> => {
  // شبیه‌سازی تاخیر در پاسخ
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredJobs = [...mockJobPostings];
  
  if (filters?.status) {
    filteredJobs = filteredJobs.filter(job => job.status === filters.status);
  }
  
  if (filters?.department) {
    filteredJobs = filteredJobs.filter(job => job.department === filters.department);
  }
  
  if (filters?.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredJobs = filteredJobs.filter(job => 
      job.title.toLowerCase().includes(searchTerm) ||
      job.description.toLowerCase().includes(searchTerm) 
    );
  }
  
  const total = filteredJobs.length;
  const limit = filters?.limit || 10;
  const page = filters?.page || 1;
  const startIndex = (page - 1) * limit;
  
  return {
    jobs: filteredJobs.slice(startIndex, startIndex + limit),
    total
  };
};

export const getJobPostingById = async (id: number): Promise<JobPosting | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockJobPostings.find(job => job.id === id) || null;
};

export const createJobPosting = async (job: Omit<JobPosting, 'id' | 'applications' | 'postedDate'>): Promise<JobPosting> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newJob = {
    ...job,
    id: Math.max(...mockJobPostings.map(job => job.id)) + 1,
    applications: 0,
    postedDate: new Date().toLocaleDateString('fa-IR')
  };
  mockJobPostings.push(newJob);
  return newJob;
};

export const updateJobPosting = async (id: number, updates: Partial<JobPosting>): Promise<JobPosting | null> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockJobPostings.findIndex(job => job.id === id);
  if (index === -1) return null;
  
  mockJobPostings[index] = { ...mockJobPostings[index], ...updates };
  return mockJobPostings[index];
};

export const getCandidates = async (filters?: {
  status?: string;
  search?: string;
  page?: number;
  limit?: number;
}): Promise<{ candidates: Candidate[]; total: number }> => {
  // شبیه‌سازی تاخیر در پاسخ
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredCandidates = [...mockCandidates];
  
  if (filters?.status) {
    filteredCandidates = filteredCandidates.filter(candidate => candidate.status === filters.status);
  }
  
  if (filters?.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredCandidates = filteredCandidates.filter(candidate => 
      candidate.name.toLowerCase().includes(searchTerm) ||
      candidate.appliedFor.toLowerCase().includes(searchTerm)
    );
  }
  
  const total = filteredCandidates.length;
  const limit = filters?.limit || 10;
  const page = filters?.page || 1;
  const startIndex = (page - 1) * limit;
  
  return {
    candidates: filteredCandidates.slice(startIndex, startIndex + limit),
    total
  };
};

export const getCandidateById = async (id: number): Promise<Candidate | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockCandidates.find(candidate => candidate.id === id) || null;
};

export const updateCandidateStatus = async (id: number, status: Candidate['status']): Promise<Candidate | null> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockCandidates.findIndex(candidate => candidate.id === id);
  if (index === -1) return null;
  
  mockCandidates[index].status = status;
  return mockCandidates[index];
};