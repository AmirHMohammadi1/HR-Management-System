'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/lib/constants';
import { useLocale } from '@/hooks/useLocale';

export const Sidebar = () => {
  const pathname = usePathname();
  const { locale } = useLocale();

  return (
    <div className="w-64 bg-white shadow-md h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">HR System</h2>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-4 space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname.includes(item.href);
            
            return (
              <Link
                key={item.name}
                href={`/${locale}${item.href}`}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <span className="ml-3 text-lg">{item.icon}</span>
                <span className="mr-2">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">مدیر سیستم</p>
            <p className="text-sm text-gray-500 truncate">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};