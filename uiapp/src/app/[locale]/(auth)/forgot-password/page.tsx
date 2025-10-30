// app/forgot-password/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log({ email });
    setIsSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>بازیابی رمز عبور | HR Pro</title>
        <meta name="description" content="بازیابی رمز عبور سامانه مدیریت منابع انسانی HR Pro" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Link href="/" className="text-2xl font-bold text-blue-600">HR Pro</Link>
              <h1 className="text-2xl font-bold text-gray-900 mt-4">
                {isSubmitted ? 'ایمیل ارسال شد' : 'بازیابی رمز عبور'}
              </h1>
              <p className="text-gray-600 mt-2">
                {isSubmitted 
                  ? 'لینک بازیابی رمز عبور به ایمیل شما ارسال شد' 
                  : 'ایمیل خود را وارد کنید تا لینک بازیابی برای شما ارسال شود'
                }
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    ایمیل
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="example@company.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                >
                  ارسال لینک بازیابی
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">✓</span>
                </div>
                <p className="text-gray-600">
                  لینک بازیابی رمز عبور به آدرس <strong>{email}</strong> ارسال شد.
                  لطفاً صندوق ایمیل خود را بررسی کنید.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    ارسال مجدد لینک
                  </button>
                  <Link
                    href="/fa/login"
                    className="block w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
                  >
                    بازگشت به صفحه ورود
                  </Link>
                </div>
              </div>
            )}

            {!isSubmitted && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  <Link href="/fa/login" className="font-medium text-blue-600 hover:text-blue-500">
                    بازگشت به صفحه ورود
                  </Link>
                </p>
              </div>
            )}

            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  مشکل دیگری دارید؟{' '}
                  <Link href="/fa/contact" className="text-blue-600 hover:text-blue-500">
                    با پشتیبانی تماس بگیرید
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}