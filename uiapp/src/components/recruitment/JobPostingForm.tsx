'use client';

import { useState } from 'react';
import { JobPosting } from '@/types';
import { departments } from '@/lib/constants';

interface JobPostingFormProps {
  job?: JobPosting;
  locale: string;
  onSubmit: (data: Omit<JobPosting, 'id' | 'applications' | 'postedDate'>) => void;
  onCancel: () => void;
}

export const JobPostingForm = ({ job, locale, onSubmit, onCancel }: JobPostingFormProps) => {
  const [formData, setFormData] = useState({
    title: job?.title || '',
    department: job?.department || '',
    location: job?.location || '',
    status: job?.status || 'open',
    description: job?.description || '',
    requirements: job?.requirements?.join('\n') || '',
    salaryRange: job?.salaryRange || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requirements = formData.requirements.split('\n').filter(req => req.trim() !== '');
    
    onSubmit({
      ...formData,
      requirements
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {job 
          ? (locale === 'fa' ? 'ویرایش آگهی شغلی' : 'Edit Job Posting')
          : (locale === 'fa' ? 'آگهی شغلی جدید' : 'New Job Posting')
        }
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {locale === 'fa' ? 'عنوان شغلی' : 'Job Title'}
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {locale === 'fa' ? 'دپارتمان' : 'Department'}
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{locale === 'fa' ? 'انتخاب کنید' : 'Select'}</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {locale === 'fa' ? 'موقعیت مکانی' : 'Location'}
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {locale === 'fa' ? 'وضعیت' : 'Status'}
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="open">{locale === 'fa' ? 'باز' : 'Open'}</option>
              <option value="closed">{locale === 'fa' ? 'بسته' : 'Closed'}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {locale === 'fa' ? 'بازه حقوق' : 'Salary Range'}
            </label>
            <input
              type="text"
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={locale === 'fa' ? 'مثلاً: ۱۵-۲۰ میلیون تومان' : 'e.g., $50,000 - $70,000'}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {locale === 'fa' ? 'شرح موقعیت شغلی' : 'Job Description'}
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {locale === 'fa' ? 'الزامات (هر مورد در یک خط)' : 'Requirements (one per line)'}
          </label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={locale === 'fa' ? 'تجربه 3 ساله در React\nتسلط به TypeScript' : '3+ years experience with React\nProficiency in TypeScript'}
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200"
          >
            {locale === 'fa' ? 'لغو' : 'Cancel'}
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            {job 
              ? (locale === 'fa' ? 'ویرایش آگهی' : 'Edit Job')
              : (locale === 'fa' ? 'ایجاد آگهی' : 'Create Job')
            }
          </button>
        </div>
      </form>
    </div>
  );
};