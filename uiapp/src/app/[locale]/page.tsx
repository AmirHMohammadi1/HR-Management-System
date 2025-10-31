// app/page.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>سامانه جامع مدیریت منابع انسانی | HR Pro</title>
        <meta name="description" content="سامانه هوشمند مدیریت منابع انسانی با قابلیت‌های کامل جذب، استخدام، ارزیابی و توسعه کارکنان" />
        <meta name="keywords" content="منابع انسانی, استخدام, جذب نیرو, HR, مدیریت پرسنل" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* نوار ناوبری */}
        <nav className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
          <div className="text-2xl font-bold text-blue-600">HR Pro</div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">امکانات</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">نحوه کار</a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">مزایا</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">تعرفه‌ها</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">نظرات</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">سوالات</a>
            <a href="/fa/about" className="text-gray-700 hover:text-blue-600 transition-colors">درباره ما</a>
            <a href="/fa/contact" className="text-gray-700 hover:text-blue-600 transition-colors">تماس با ما</a>
          </div>
          <div className="flex space-x-4">
            <Link href="/fa/login" className="px-4 py-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
              ورود
            </Link>
            <Link href="/fa/signup" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              شروع رایگان
            </Link>
          </div>
        </nav>

        {/* بخش اصلی */}
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              🚀 سامانه برتر مدیریت منابع انسانی
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              مدیریت منابع انسانی
              <span className="text-blue-600 block">به سبک حرفه‌ای</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 mb-8 max-w-lg">
              با سامانه جامع HR Pro، فرآیندهای منابع انسانی را به سادگی مدیریت کنید و روی توسعه کسب‌وکارتان تمرکز کنید.
              بیش از ۵۰۰ شرکت معتبر به ما اعتماد کرده‌اند.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/signup" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg text-center">
                شروع دوره آزمایشی رایگان
              </Link>
              <Link href={'/fa/dashboard'} className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium text-lg hover:bg-blue-50 transition-colors">
                مشاهده دمو و داشبورد
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-blue-600 font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mr-4">بیش از ۵۰۰ شرکت از خدمات ما استفاده می‌کنند</p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform rotate-3">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800">داشبورد مدیریت</h3>
                  <div className="text-blue-500">●</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-blue-50 p-3 rounded-lg">
                      <div className="h-2 bg-blue-200 rounded-full mb-2"></div>
                      <div className="h-2 bg-blue-200 rounded-full w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 absolute -bottom-10 -left-10 transform -rotate-3">
                <div className="flex space-x-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded-full"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* بخش آمار و ارقام */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "۵۰۰+", label: "شرکت فعال" },
                { number: "۵۰,۰۰۰+", label: "کاربر روزانه" },
                { number: "۹۸%", label: "رضایت مشتری" },
                { number: "۲۴/۷", label: "پشتیبانی" }
              ].map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* بخش امکانات */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">امکانات جامع سامانه</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                تمامی ابزارهای مورد نیاز برای مدیریت موثر منابع انسانی در یک پلتفرم
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "مدیریت استخدام",
                  desc: "سیستم جامع جذب و استخدام نیروی کار با قابلیت رهگیری مراحل، مدیریت مصاحبه و ارزیابی رزومه",
                  icon: "👥",
                  features: ["پنل مدیریت آگهی‌ها", "سیستم رهگیری متقاضیان", "برگزاری مصاحبه آنلاین"]
                },
                {
                  title: "مدیریت حضور و غیاب",
                  desc: "ثبت هوشمند تردد و مدیریت مرخصی‌ها با گزارش‌های تحلیلی پیشرفته",
                  icon: "⏱️",
                  features: ["ثبت تردد با موبایل", "مدیریت مرخصی و تعطیلات", "گزارش‌گیری تحلیلی"]
                },
                {
                  title: "حقوق و دستمزد",
                  desc: "محاسبه خودکار حقوق، بیمه و مالیات با قابلیت شخصی‌سازی کامل",
                  icon: "💰",
                  features: ["محاسبه خودکار حقوق", "مدیریت بیمه و مالیات", "صدور فیش حقوقی"]
                },
                {
                  title: "ارزیابی عملکرد",
                  desc: "سیستم ۳۶۰ درجه ارزیابی کارکنان با داشبوردهای تحلیلی پیشرفته",
                  icon: "📊",
                  features: ["ارزیابی ۳۶۰ درجه", "تعیین KPI", "گزارش‌های تحلیلی"]
                },
                {
                  title: "آموزش و توسعه",
                  desc: "مدیریت دوره‌های آموزشی و برنامه‌های توسعه شغلی کارکنان",
                  icon: "🎓",
                  features: ["سیستم LMS", "برنامه توسعه فردی", "گواهینامه‌های دیجیتال"]
                },
                {
                  title: "گزارش‌گیری پیشرفته",
                  desc: "تهیه گزارش‌های تحلیلی و سفارشی از تمامی فرآیندها",
                  icon: "📈",
                  features: ["داشبوردهای سفارشی", "گزارش‌های بلادرنگ", "تحلیل پیشرفته"]
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.desc}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* بخش نحوه کار */}
        <section id="how-it-works" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">نحوه کار با سامانه</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                در ۴ مرحله ساده، مدیریت منابع انسانی خود را متحول کنید
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "۱",
                  title: "ثبت‌نام و راه‌اندازی",
                  desc: "ثبت‌نام کنید و اطلاعات اولیه سازمان خود را وارد نمایید",
                  icon: "📝"
                },
                {
                  step: "۲",
                  title: "افزودن پرسنل",
                  desc: "اطلاعات کارکنان خود را وارد کرده و دسترسی‌ها را تعریف کنید",
                  icon: "👨‍💼"
                },
                {
                  step: "۳",
                  title: "پیکربندی سامانه",
                  desc: "ماژول‌های مورد نیاز را فعال و تنظیمات را انجام دهید",
                  icon: "⚙️"
                },
                {
                  step: "۴",
                  title: "شروع استفاده",
                  desc: "همین حالا استفاده از سامانه را آغاز کنید",
                  icon: "🚀"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* بخش مزایا */}
        <section id="benefits" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">چرا HR Pro را انتخاب کنیم؟</h2>
              <p className="text-xl opacity-90 mt-4 max-w-2xl mx-auto">
                با استفاده از سامانه ما، منابع انسانی سازمان خود را متحول کنید
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "۴۰٪", label: "کاهش زمان استخدام" },
                { value: "۹۵٪", label: "رضایت کاربران" },
                { value: "۳۰٪", label: "صرفه‌جویی در هزینه‌ها" },
                { value: "۱۰۰٪", label: "پشتیبانی آنلاین" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">مزایای کلیدی</h3>
                <ul className="space-y-4">
                  {[
                    "کاهش خطاهای محاسباتی حقوق و دستمزد تا ۹۹٪",
                    "افزایش ۴۰٪ی بهره‌وری تیم منابع انسانی",
                    "دسترسی آنی به اطلاعات و گزارش‌ها از هر مکان",
                    "امنیت بالا با رمزنگاری پیشرفته و پشتیبان‌گیری خودکار",
                    "قابلیت یکپارچه‌سازی با سایر سامانه‌های سازمانی",
                    "پشتیبانی ۲۴ ساعته توسط متخصصان منابع انسانی"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-300 ml-2 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">آماده شروع هستید؟</h3>
                <p className="mb-6 opacity-90">
                  همین امروز دوره آزمایشی رایگان ۳۰ روزه را شروع کنید و تفاوت را احساس کنید.
                  بدون نیاز به کارت اعتباری!
                </p>
                <Link href="/signup" className="block w-full py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-center">
                  شروع دوره آزمایشی رایگان
                </Link>
                <p className="text-center mt-4 text-sm opacity-80">
                  امکان کنسل کردن در هر زمان
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* بخش تعرفه‌ها */}
        <section id="pricing" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">تعرفه‌های مناسب</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                پلن‌های متنوع با توجه به اندازه سازمان و نیازهای شما
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "پایه",
                  price: "رایگان",
                  period: "همیشه",
                  features: ["تا ۱۰ پرسنل", "مدیریت حضور و غیاب", "گزارش‌های پایه", "پشتیبانی ایمیلی", "فضای ذخیره‌سازی ۱GB"],
                  cta: "شروع کنید",
                  popular: false
                },
                {
                  name: "حرفه‌ای",
                  price: "۲۹۰,۰۰۰",
                  period: "ماهیانه",
                  features: ["تا ۱۰۰ پرسنل", "تمامی امکانات پایه", "سیستم حقوق و دستمزد", "ارزیابی عملکرد", "پشتیبانی تلفنی", "فضای ذخیره‌سازی ۱۰GB"],
                  cta: "شروع آزمایشی",
                  popular: true
                },
                {
                  name: "سازمانی",
                  price: "تماس بگیرید",
                  period: "سفارشی",
                  features: ["نامحدود پرسنل", "تمامی امکانات", "یکپارچه‌سازی اختصاصی", "گزارش‌های پیشرفته", "پشتیبانی اختصاصی", "فضای ذخیره‌سازی نامحدود"],
                  cta: "درخواست دمو",
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`rounded-2xl border-2 p-8 ${plan.popular ? 'border-blue-500 bg-blue-50 relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">پرفروش</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{plan.name}</h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "رایگان" && <span className="text-gray-600"> تومان</span>}
                    <div className="text-gray-500 text-sm mt-1">{plan.period}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 ml-2 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={plan.popular ? "/signup" : "/contact"} 
                    className={`block w-full py-3 rounded-lg font-medium text-center ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* بخش نظرات کاربران */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">نظرات مشتریان ما</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                آنچه شرکت‌هایی مانند شما درباره HR Pro می‌گویند
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "نگین احمدی",
                  position: "مدیر منابع انسانی، شرکت فناوری داده",
                  content: "با استفاده از HR Pro توانستیم فرآیند استخدام را ۵۰٪ سریع‌تر انجام دهیم و خطاهای محاسباتی حقوق به صفر رسید. رابط کاربری بسیار intuitive است.",
                  avatar: "NA",
                  rating: 5
                },
                {
                  name: "محمد رضایی",
                  position: "مدیرعامل، استارتاپ نوآوران",
                  content: "داشبوردهای تحلیلی این سامانه به ما کمک کرد تصمیمات بهتری برای توسعه تیم بگیریم و رضایت کارکنان ۳۰٪ افزایش یافت. پشتیبانی عالی!",
                  avatar: "MR",
                  rating: 5
                },
                {
                  name: "سارا کریمی",
                  position: "سرپرست منابع انسانی، گروه صنعتی بهار",
                  content: "پشتیبانی عالی و رابط کاربری ساده باعث شد تمام پرسنل به راحتی با سیستم کار کنند و نیازی به آموزش پیچیده نبود. واقعا زندگی را ساده کرده‌اند!",
                  avatar: "SK",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="mr-4">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                  </div>
                  <p className="text-gray-700">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* بخش سوالات متداول */}
        <section id="faq" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">سوالات متداول</h2>
              <p className="text-xl text-gray-600 mt-4">
                پاسخ سوالات پرتکرار شما درباره سامانه
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "دوره آزمایشی رایگان چه مدت است؟",
                  answer: "دوره آزمایشی رایگان ۳۰ روزه است و تمامی امکانات سامانه در این دوره در دسترس خواهد بود."
                },
                {
                  question: "آیا امکان یکپارچه‌سازی با سایر سامانه‌ها وجود دارد؟",
                  answer: "بله، سامانه HR Pro از APIهای استاندارد پشتیبانی می‌کند و امکان یکپارچه‌سازی با اکثر نرم‌افزارهای مالی، حسابداری و CRM وجود دارد."
                },
                {
                  question: "اطلاعات ما چقدر امن خواهد بود؟",
                  answer: "اطلاعات شما با استانداردهای رمزنگاری پیشرفته محافظت می‌شود و پشتیبان‌گیری روزانه انجام می‌شود. سرورهای ما در دیتاسنترهای امن داخلی قرار دارند."
                },
                {
                  question: "آموزش استفاده از سامانه چگونه است؟",
                  answer: "پس از ثبت‌نام، دوره‌های آموزشی ویدیویی، مستندات کامل و پشتیبانی فنی در اختیار شما قرار می‌گیرد. همچنین کارگاه‌های آموزشی آنلاین برگزار می‌کنیم."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* فراخوان به اقدام نهایی */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده متحول کردن مدیریت منابع انسانی خود هستید؟</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              همین امروز شروع کنید و تفاوت یک سامانه حرفه‌ای را احساس کنید
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/signup" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                شروع دوره آزمایشی رایگان
              </Link>
              <button className="px-8 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                تماس با کارشناسان
              </button>
            </div>
            <p className="mt-6 text-sm opacity-80">
              بدون نیاز به کارت اعتباری • امکان کنسل کردن در هر زمان
            </p>
          </div>
        </section>

        {/* پاورقی */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">HR Pro</h3>
                <p className="text-gray-400 mb-4">
                  سامانه جامع مدیریت منابع انسانی برای سازمان‌های ایرانی
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">f</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-sm">t</span>
                  </div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-sm">i</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4">لینک‌های مفید</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#features" className="hover:text-white transition-colors">امکانات</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">تعرفه‌ها</a></li>
                  <li><a href="#testimonials" className="hover:text-white transition-colors">نظرات مشتریان</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors">سوالات متداول</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">پشتیبانی</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">تماس با ما</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">مستندات</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">وبلاگ</a></li>
                  <li><Link href="/login" className="hover:text-white transition-colors">ورود به سامانه</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">تماس با ما</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <span className="ml-2">📍</span>
                    تهران، خیابان ولیعصر، پلاک ۱۲۳۴
                  </li>
                  <li className="flex items-center">
                    <span className="ml-2">📞</span>
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </li>
                  <li className="flex items-center">
                    <span className="ml-2">✉️</span>
                    info@hrpro.ir
                  </li>
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