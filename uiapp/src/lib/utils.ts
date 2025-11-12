export const formatDate = (date: Date, locale: string = 'fa'): string => {
  if (locale === 'fa') {
    // تبدیل تاریخ به تقویم فارسی (ساده شده)
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const year = date.getFullYear() - 621; // تقریبی
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return `${persianNumbers[day]} ${getPersianMonthName(month)} ${year}`;
  }
  return new Intl.DateTimeFormat('en-US').format(date);
};

const getPersianMonthName = (month: number): string => {
  const months = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ];
  return months[month - 1] || '';
};

export const formatCurrency = (amount: number, locale: string = 'fa'): string => {
  if (locale === 'fa') {
    const formatter = new Intl.NumberFormat('fa-IR');
    return `${formatter.format(amount)} تومان`;
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    // eslint-disable-next-line prefer-spread
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^09[0-9]{9}$/;
  return phoneRegex.test(phone);
};

export const generateId = (): number => {
  return Math.floor(Math.random() * 1000000);
};