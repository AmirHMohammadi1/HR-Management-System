'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';

export default function VerifyEmail() {
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || 'example@company.com';

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResend = () => {
    // Handle resend logic here
    setCountdown(60);
    setCanResend(false);
  };

  return (
    <>
      <Head>
        <title>تایید ایمیل | HR Pro</title>
        <meta name="description" content="تایید ایمیل سامانه مدیریت منابع انسانی HR Pro" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Link href="/" className="text-2xl font-bold text-blue-600">HR Pro</Link>
              <h1 className="text-2xl font-bold text-gray-900 mt-4">تایید ایمیل</h1>
              <p className="text-gray-600 mt-2">لینک تایید به ایمیل شما ارسال شد</p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">✉️</span>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  لینک تایید به آدرس <strong>{email}</strong> ارسال شد.
                  لطفاً ایمیل خود را بررسی کرده و روی لینک تایید کلیک کنید.
                </p>
                
                <p className="text-sm text-gray-500">
                  اگر ایمیلی دریافت نکرده‌اید، پوشه اسپم خود را بررسی کنید.
                </p>
              </div>

              <div className="space-y-4">
                {canResend ? (
                  <button
                    onClick={handleResend}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    ارسال مجدد لینک تایید
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-400 text-white py-3 px-4 rounded-lg font-medium cursor-not-allowed"
                  >
                    ارسال مجدد ({countdown} ثانیه)
                  </button>
                )}
                
                <Link
                  href="/fa/login"
                  className="block w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
                >
                  بازگشت به صفحه ورود
                </Link>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="text-center space-y-3">
                <p className="text-sm text-gray-600">
                  مشکل در تایید ایمیل؟
                </p>
                <div className="flex justify-center space-x-4 text-xs">
                  <Link href="/contact" className="text-blue-600 hover:text-blue-500">
                    تماس با پشتیبانی
                  </Link>
                  <span className="text-gray-300">|</span>
                  <button 
                    onClick={() => console.log('Change email')}
                    className="text-blue-600 hover:text-blue-500"
                  >
                    تغییر ایمیل
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}