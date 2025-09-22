import { cookies } from 'next/headers';
import { defaultLocale } from '@/lib/constants';

export const useLocaleServer = async (initialLocale: string = 'fa') => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale');
  
  return localeCookie?.value || initialLocale || defaultLocale;
};