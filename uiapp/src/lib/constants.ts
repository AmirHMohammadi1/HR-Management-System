export const defaultLocale = 'fa';

export const navigationItems = [
  { name: 'داشبورد', href: '/dashboard', icon: '📊' },
  { name: 'کارمندان', href: '/employees', icon: '👥' },
  { name: 'استخدام', href: '/recruitment', icon: '🎯' },
  { name: 'حضور و غیاب', href: '/attendance', icon: '📅' },
  { name: 'حقوق و دستمزد', href: '/payroll', icon: '💰' },
  { name: 'ارزیابی عملکرد', href: '/performance', icon: '📈' },
  { name: 'تنظیمات', href: '/settings', icon: '⚙️' },
];

export const departments = [
  'فناوری اطلاعات',
  'منابع انسانی',
  'مالی',
  'بازاریابی',
  'فروش',
  'پشتیبانی',
  'تحقیق و توسعه'
];

export const employmentStatus = [
  { value: 'active', label: 'فعال' },
  { value: 'on-leave', label: 'مرخصی' },
  { value: 'terminated', label: 'ترک شده' }
];

export const candidateStatus = [
  { value: 'applied', label: 'ارسال شده' },
  { value: 'interview', label: 'مصاحبه' },
  { value: 'rejected', label: 'رد شده' },
  { value: 'hired', label: 'استخدام شده' }
];

export const attendanceStatus = [
  { value: 'present', label: 'حاضر' },
  { value: 'absent', label: 'غایب' },
  { value: 'late', label: 'تأخیر' },
  { value: 'early-leave', label: 'ترک زودهنگام' }
];