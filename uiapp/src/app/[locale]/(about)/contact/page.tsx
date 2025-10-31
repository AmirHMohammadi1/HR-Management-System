// app/contact/page.tsx
'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    department: 'support'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "ایمیل",
      details: "info@hrpro.ir",
      description: "برای سوالات عمومی و اطلاعات بیشتر"
    },
    {
      icon: "📞",
      title: "تلفن",
      details: "۰۲۱-۱۲۳۴۵۶۷۸",
      description: "شنبه تا چهارشنبه ۹ صبح تا ۵ عصر"
    },
    {
      icon: "💬",
      title: "چت آنلاین",
      details: "شروع گفتگو",
      description: "پشتیبانی فوری از طریق چت آنلاین"
    },
    {
      icon: "📍",
      title: "آدرس",
      details: "تهران، خیابان ولیعصر",
      description: "دفتر مرکزی شرکت"
    }
  ];

  const departments = [
    {
      value: "support",
      label: "پشتیبانی فنی",
      description: "برای مشکلات فنی و سوالات کاربری"
    },
    {
      value: "sales",
      label: "فروش و بازاریابی",
      description: "برای اطلاعات بیشتر درباره تعرفه‌ها و خدمات"
    },
    {
      value: "partnership",
      label: "همکاری و شراکت",
      description: "برای پیشنهادات همکاری و مشارکت"
    },
    {
      value: "careers",
      label: "فرصت‌های شغلی",
      description: "برای ارسال رزومه و همکاری با ما"
    }
  ];

  return (
    <>
      <Head>
        <title>تماس با ما | HR Pro</title>
        <meta name="description" content="تماس با تیم پشتیبانی HR Pro - ما اینجا هستیم تا به شما کمک کنیم" />
        <meta name="keywords" content="تماس با ما, پشتیبانی HR Pro, اطلاعات تماس, فرم تماس" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* نوار ناوبری */}
        <nav className="flex justify-between items-center p-6 bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="text-2xl font-bold text-blue-600">HR Pro</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">صفحه اصلی</Link>
            <Link href="/fa/about" className="text-gray-700 hover:text-blue-600 transition-colors">درباره ما</Link>
            <Link href="/fa/contact" className="text-blue-600 font-medium">تماس با ما</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/login" className="px-4 py-2 text-blue-600 font-medium">ورود</Link>
            <Link href="/signup" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              شروع رایگان
            </Link>
          </div>
        </nav>

        {/* بخش هدر */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">در تماس باشید</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              ما اینجا هستیم تا به سوالات شما پاسخ دهیم و در مسیر موفقیت همراهتان باشیم
            </p>
          </div>
        </section>

        {/* بخش روش‌های تماس */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">روش‌های ارتباط با ما</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                از طریق روش‌های مختلف می‌توانید با تیم ما در ارتباط باشید
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-4">{method.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{method.details}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* بخش فرم تماس */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* اطلاعات تماس */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">اطلاعات تماس</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">دفتر مرکزی</h3>
                    <p className="text-gray-600">تهران، خیابان ولیعصر، پلاک ۱۲۳۴</p>
                    <p className="text-gray-600">کد پستی: ۱۲۳۴۵۶۷۸۹۰</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">ساعات کاری</h3>
                    <p className="text-gray-600">شنبه تا چهارشنبه: ۹:۰۰ - ۱۷:۰۰</p>
                    <p className="text-gray-600">پنجشنبه: ۹:۰۰ - ۱۳:۰۰</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">اطلاعات بیشتر</h3>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">تلفن:</span> ۰۲۱-۱۲۳۴۵۶۷۸
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">فکس:</span> ۰۲۱-۱۲۳۴۵۶۷۹
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">ایمیل:</span> info@hrpro.ir
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-4">پشتیبانی فوری</h3>
                    <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                      شروع چت آنلاین
                    </button>
                    <p className="text-gray-600 text-sm mt-2 text-center">
                      پاسخگویی ۲۴/۷ در چت آنلاین
                    </p>
                  </div>
                </div>
              </div>

              {/* فرم تماس */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">پیام خود را ارسال کنید</h2>
                  
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            نام و نام خانوادگی *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            ایمیل *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            نام سازمان
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            تلفن همراه
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                          بخش مربوطه *
                        </label>
                        <select
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          required
                        >
                          {departments.map((dept) => (
                            <option key={dept.value} value={dept.value}>
                              {dept.label}
                            </option>
                          ))}
                        </select>
                        <p className="text-gray-500 text-sm mt-1">
                          {departments.find(d => d.value === formData.department)?.description}
                        </p>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          موضوع *
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          پیام شما *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                      >
                        ارسال پیام
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl text-green-600">✓</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">پیام شما ارسال شد!</h3>
                      <p className="text-gray-600 mb-6">
                        با تشکر از تماس شما. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
                      </p>
                      <div className="space-y-4">
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          ارسال پیام جدید
                        </button>
                        <Link
                          href="/"
                          className="block w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
                        >
                          بازگشت به صفحه اصلی
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* بخش نقشه و اطلاعات بیشتر */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">دفتر مرکزی ما</h2>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🗺️</div>
                      <p className="text-gray-600">نمایش نقشه گوگل</p>
                      <p className="text-gray-500 text-sm mt-2">تهران، خیابان ولیعصر</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start">
                      <span className="ml-3 text-gray-400">📍</span>
                      <div>
                        <p className="font-medium text-gray-900">آدرس</p>
                        <p className="text-gray-600">تهران، خیابان ولیعصر، پلاک ۱۲۳۴، طبقه ۵</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="ml-3 text-gray-400">🚇</span>
                      <div>
                        <p className="font-medium text-gray-900">دسترسی مترو</p>
                        <p className="text-gray-600">ایستگاه مترو ولیعصر - ۵ دقیقه پیاده‌روی</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="ml-3 text-gray-400">🅿️</span>
                      <div>
                        <p className="font-medium text-gray-900">پارکینگ</p>
                        <p className="text-gray-600">پارکینگ اختصاصی برای مراجعین</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">سوالات متداول</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "مدت زمان پاسخگویی به پیام‌ها چقدر است؟",
                      answer: "معمولاً در کمتر از ۲۴ ساعت کاری به پیام‌های شما پاسخ می‌دهیم."
                    },
                    {
                      question: "آیا امکان بازدید از دفتر شما وجود دارد؟",
                      answer: "بله، با هماهنگی قبلی می‌توانید از دفتر ما بازدید کنید."
                    },
                    {
                      question: "چطور می‌توانم با بخش فنی در ارتباط باشم؟",
                      answer: "از طریق تیکت پشتیبانی در پنل کاربری یا تماس تلفنی با بخش پشتیبانی."
                    },
                    {
                      question: "آیا خدمات شما به شهرستان‌ها هم ارائه می‌شود؟",
                      answer: "بله، خدمات ما به صورت کامل در سراسر ایران قابل استفاده است."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* پاورقی */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">HR Pro</h3>
                <p className="text-gray-400">
                  سامانه جامع مدیریت منابع انسانی برای سازمان‌های ایرانی
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">لینک‌های مفید</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/" className="hover:text-white transition-colors">صفحه اصلی</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">درباره ما</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">تماس با ما</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">خدمات</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">مدیریت استخدام</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">حقوق و دستمزد</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">ارزیابی عملکرد</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">تماس با ما</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>تهران، خیابان ولیعصر</li>
                  <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
                  <li>ایمیل: info@hrpro.ir</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} HR Pro. تمامی حقوق محفوظ است.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}