# HR Management System

یک سیستم جامع و مدرن مدیریت منابع انسانی (HR) با معماری Full-Stack. این سیستم برای ساده‌سازی و خودکارسازی فرآیندهای کلیدی منابع انسانی مانند مدیریت کارمندان، مرخصی‌ها، حقوق و مزایا طراحی شده است.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ ویژگی‌های کلیدی

-   **مدیریت کارمندان:** ثبت، مشاهده، ویرایش و جستجوی اطلاعات کامل پرسنل
-   **مدیریت دپارتمان‌ها:** ایجاد و مدیریت بخش‌ها و واحدهای سازمانی
-   **سیستم مرخصی و حضور و غیاب:** درخواست مرخصی، تایید یا رد توسط مدیران و رهگیری وضعیت
-   **مدیریت حقوق و مزایا:** ثبت و محاسبه حقوق، پاداش و کسورات
-   **احراز هویت امن:** سیستم احراز هویت مبتنی بر JWT با سطوح دسترسی مختلف
-   **داشبورد مدیریت:** نمودارها و آمارهای خلاصه برای تصمیم‌گیری بهتر
-   **رابط کاربری مدرن:** طراحی زیبا و واکنش‌گرا با Tailwind CSS
-   **رندرینگ سمت سرور:** عملکرد بهینه و SEO-friendly با Next.js

## 🛠 تکنولوژی‌های استفاده شده

### Frontend:
- **Next.js 14** - فریمورک کامل React با قابلیت SSR و SSG
- **React 18** - کتابخانه اصلی رابط کاربری
- **Tailwind CSS** - فریمورک CSS برای استایل‌دهی
- **Axios** - مدیریت درخواست‌های HTTP
- **NextAuth.js** (اختیاری) - سیستم احراز هویت

### Backend:
- **Node.js** - محیط اجرای سرور
- **Nest.js** - فریمورک پیشرفته برای ساخت اپلیکیشن‌های کارآمد و مقیاس‌پذیر
- **MongoDB** - پایگاه داده NoSQL
- **Mongoose** - ODM برای MongoDB
- **JWT** - احراز هویت و مدیریت session
- **RESTful API** - معماری API

## 📦 پیش‌نیازها

قبل از نصب، مطمئن شوید نرم‌افزارهای زیر روی سیستم شما نصب هستند:

-   Node.js (version 18 یا بالاتر)
-   npm یا yarn
-   MongoDB (محلی یا cloud instance)
-   Git

## 🚀 راهنمای نصب و اجرا

### 1. کلون کردن ریپوزیتوری
```bash
git clone https://github.com/AmirHMohammadi1/HR-Management-System.git
cd HR-Management-System
```

### 2. راه‌اندازی Backend
```bash
# ورود به دایرکتوری backend
cd backend

# نصب dependencies
npm install

# کپی کردن فایل محیطی
cp .env.example .env
```

فایل `.env` را ویرایش کرده و متغیرهای محیطی را تنظیم کنید:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=30d
PORT=3001
NODE_ENV=development
```

### 3. راه‌اندازی Frontend (Next.js)
```bash
# بازگشت به دایرکتوری اصلی و ورود به frontend
cd ../frontend

# نصب dependencies
npm install

# کپی کردن فایل محیطی
cp .env.example .env
```

فایل `.env` را ویرایش کرده و آدرس API را تنظیم کنید:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. اجرای برنامه

**ترمینال ۱ - اجرای Backend:**
```bash
cd backend
npm run start:dev
```

**ترمینال ۲ - اجرای Frontend:**
```bash
cd frontend
npm run dev
```

### 5. دسترسی به برنامه
- Frontend (Next.js): `http://localhost:3000`
- Backend API: `http://localhost:3001`

## 👤 حساب‌های پیش‌فرض

-   **ادمین (Admin):**
    -   ایمیل: `admin@hr.com`
    -   رمز عبور: `password`

-   **کاربر عادی (User):**
    -   ایمیل: `user@hr.com`
    -   رمز عبور: `password`

## 📖 نحوه استفاده

1.  با استفاده از یکی از حساب‌های بالا وارد سیستم شوید
2.  از منوی ناوبری برای دسترسی به بخش‌های مختلف استفاده کنید
3.  ادمین می‌تواند تمامی اطلاعات را مدیریت کند
4.  کاربران عادی می‌توانند پروفایل خود را مشاهده و درخواست مرخصی ثبت کنند
5.  از قابلیت جستجو و فیلتر برای یافتن سریع اطلاعات استفاده کنید

## 🗄 ساختار پروژه

```
HR-Management-System/
├── backend/                 # Nest.js backend
│   ├── src/
│   │   ├── modules/        # ماژول‌های مختلف (users, departments, leaves, etc.)
│   │   ├── auth/           # احراز هویت و JWT
│   │   ├── common/         # middleware, filters, guards
│   │   └── config/         # تنظیمات پایگاه داده
│   └── package.json
├── frontend/               # Next.js frontend
│   ├── src/
│   │   ├── app/           # ساختار App Router (Next.js 13+)
│   │   ├── components/    # کامپوننت‌های قابل استفاده مجدد
│   │   ├── lib/           # utilities و configuration
│   │   ├── store/         # state management (Zustand/Redux)
│   │   └── types/         # TypeScript definitions
│   ├── public/            # فایل‌های استاتیک
│   └── package.json
└── README.md
```

## 🎯 مزایای استفاده از Next.js

-   **رندرینگ سمت سرور (SSR):** بهبود عملکرد و سئو
-   **تولید صفحات استاتیک (SSG):** بارگذاری فوق‌العاده سریع
-   **API Routes:** امکان ساخت API درون خود Next.js
-   **بهینه‌سازی خودکار:** Image Optimization, Code Splitting
-   **توسعه سریع:** Hot Reloading و تجربه توسعه عالی

## 🤝 مشارکت در پروژه

مشارکت‌ها، گزارش باگ و پیشنهادات جدید همیشه مورد استقبال هستند!

1.  روی پروژه Fork کنید
2.  یک Branch برای ویژگی جدید خود ایجاد کنید (`git checkout -b feature/AmazingFeature`)
3.  تغییرات خود را Commit کنید (`git commit -m 'Add some AmazingFeature'`)
4.  تغییرات را به Branch خود Push کنید (`git push origin feature/AmazingFeature`)
5.  یک Pull Request باز کنید

## 📄 مجوز (License)

این پروژه تحت مجوز MIT منتشر شده است. برای اطلاعات بیشتر فایل `LICENSE` را مطالعه کنید.

## 📞 پشتیبانی و ارتباط

اگر سوال یا پیشنهادی دارید، می‌توانید از طریق راه‌های زیر با من در ارتباط باشید:

-   **ایجاد Issue:** از بخش [Issues](https://github.com/AmirHMohammadi1/HR-Management-System/issues) در گیت‌هاب استفاده کنید
-   **ایمیل:** [a.h.mohammadi5@gmail.com](mailto:a.h.mohammadi5@gmail.com)
-   **پروفایل گیت‌هاب:** [AmirHMohammadi1](https://github.com/AmirHMohammadi1)

---

**اگر این پروژه برای شما مفید بود، دادن یک ستاره (⭐) به ریپوزیتوری را فراموش نکنید!**
