import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      name: "علی محمدی",
      position: "بنیان‌گذار و مدیرعامل",
      description: "با ۱۵ سال تجربه در حوزه مدیریت منابع انسانی و فناوری اطلاعات",
      image: "/team/ali.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "سارا احمدی",
      position: "مدیر فنی",
      description: "متخصص در توسعه پلتفرم‌های ابری و معماری نرم‌افزار",
      image: "/team/sara.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "محمد رضایی",
      position: "مدیر محصول",
      description: "تخصص در طراحی تجربه کاربری و مدیریت محصولات نرم‌افزاری",
      image: "/team/mohammad.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "فاطمه کریمی",
      position: "رئیس بخش منابع انسانی",
      description: "مشاور ارشد منابع انسانی با سابقه کار در سازمان‌های بزرگ",
      image: "/team/fatemeh.jpg",
      social: {
        linkedin: "#"
      }
    }
  ];

  const milestones = [
    {
      year: "۱۴۰۰",
      title: "تأسیس شرکت",
      description: "شروع فعالیت با تیمی ۵ نفره و ارائه اولین نسخه سامانه"
    },
    {
      year: "۱۴۰۱",
      title: "رشد سریع",
      description: "جذب ۱۰۰ شرکت اول و توسعه ماژول‌های جدید"
    },
    {
      year: "۱۴۰۲",
      title: "توسعه بین‌المللی",
      description: "ورود به بازارهای منطقه و دریافت گواهی‌های بین‌المللی"
    },
    {
      year: "۱۴۰۳",
      title: "پلتفرم کامل",
      description: "تکمیل تمامی ماژول‌ها و خدمات به ۵۰۰+ شرکت"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "تمرکز بر مشتری",
      description: "رضایت مشتریان اولویت اول ماست و تمام تلاش خود را برای ارائه بهترین خدمات می‌کنیم"
    },
    {
      icon: "🚀",
      title: "نوآوری مستمر",
      description: "همواره در حال توسعه و بهبود سامانه هستیم تا جدیدترین تکنولوژی‌ها را ارائه دهیم"
    },
    {
      icon: "🤝",
      title: "همکاری تیمی",
      description: "باور داریم که موفقیت در همکاری و هماهنگی بین اعضای تیم ایجاد می‌شود"
    },
    {
      icon: "🔒",
      title: "امنیت و حریم خصوصی",
      description: "حفاظت از اطلاعات مشتریان برای ما بسیار مهم است و استانداردهای بالای امنیتی را رعایت می‌کنیم"
    }
  ];

  return (
    <>
      <Head>
        <title>درباره ما | HR Pro</title>
        <meta name="description" content="درباره تیم HR Pro و ماموریت ما در تحول مدیریت منابع انسانی" />
        <meta name="keywords" content="درباره ما, تیم HR Pro, ماموریت, چشم‌انداز, ارزش‌ها" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* نوار ناوبری */}
        <nav className="flex justify-between items-center p-6 bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="text-2xl font-bold text-blue-600">HR Pro</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">صفحه اصلی</Link>
            <Link href="/fa/about" className="text-blue-600 font-medium">درباره ما</Link>
            <Link href="/fa/contact" className="text-gray-700 hover:text-blue-600 transition-colors">تماس با ما</Link>
            <Link href="#values" className="text-gray-700 hover:text-blue-600 transition-colors">ارزش‌ها</Link>
            <Link href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">تیم ما</Link>
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">درباره HR Pro</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              ما در حال تحول مدیریت منابع انسانی با تکنولوژی‌های پیشرفته و تجربه‌ای کاربرپسند هستیم
            </p>
          </div>
        </section>

        {/* بخش داستان ما */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">داستان ما</h2>
                <p className="text-lg text-gray-600 mb-6">
                  HR Pro در سال ۱۴۰۰ با یک مأموریت ساده اما قدرتمند تأسیس شد: 
                  <strong> ساده‌سازی فرآیندهای پیچیده منابع انسانی برای سازمان‌های ایرانی.</strong>
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  ما متوجه شدیم که بسیاری از سازمان‌ها زمان و منابع زیادی را صرف کارهای تکراری و دستی می‌کنند 
                  که به راحتی قابل اتوماسیون هستند. این باعث شد تا پلتفرم جامع HR Pro را توسعه دهیم.
                </p>
                <p className="text-lg text-gray-600">
                  امروز، با افتخار به بیش از ۵۰۰ شرکت در سراسر ایران خدمات ارائه می‌دهیم و 
                  روزانه به آن‌ها کمک می‌کنیم تا روی توسعه کسب‌وکارشان تمرکز کنند.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">۵۰۰+</div>
                    <div className="text-gray-600">شرکت فعال</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">۵۰,۰۰۰+</div>
                    <div className="text-gray-600">کاربر روزانه</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">۹۸%</div>
                    <div className="text-gray-600">رضایت مشتری</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">۲۴/۷</div>
                    <div className="text-gray-600">پشتیبانی</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* بخش ارزش‌ها */}
        <section id="values" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ارزش‌های ما</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                اصول و باورهایی که راهنمای کارهای روزمره ما هستند
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* بخش مسیر رشد */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">مسیر رشد ما</h2>
              <p className="text-xl text-gray-600 mt-4">
                از ابتدا تا امروز، قدم‌به‌قدم در مسیر پیشرفت
              </p>
            </div>

            <div className="relative">
              {/* خط زمان */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
              
              {/* نقاط عطف */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 px-8">
                      <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* بخش تیم */}
        <section id="team" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">با تیم ما آشنا شوید</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                متخصصان باانگیزه‌ای که پشت موفقیت HR Pro قرار دارند
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-300 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                    <div className="flex justify-center space-x-3">
                      <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                        <span className="text-sm">in</span>
                      </button>
                      <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                        <span className="text-sm">𝕏</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* بخش CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">به جمع ما بپیوندید</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              آماده‌اید تا مدیریت منابع انسانی سازمان خود را متحول کنید؟
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/signup" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                شروع دوره آزمایشی رایگان
              </Link>
              <Link href="/contact" className="px-8 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                تماس با ما
              </Link>
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