import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'سیستم مدیریت منابع انسانی',
  description: 'یک سیستم جامع برای مدیریت منابع انسانی',
  keywords: 'HR, Human Resources, Management, Employees, Recruitment',
  authors: [{ name: 'HR Team' }],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: 'سیستم مدیریت منابع انسانی',
    description: 'یک سیستم جامع برای مدیریت منابع انسانی',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}