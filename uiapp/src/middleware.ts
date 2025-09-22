import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // بررسی و تنظیم زبان
  const { pathname } = request.nextUrl;
  const locale = pathname.split('/')[1];
  
  // اگر زبان معتبر نیست، به زبان پیش‌فرض هدایت کن
  if (!['fa', 'en'].includes(locale)) {
    const url = request.nextUrl.clone();
    url.pathname = `/fa${pathname}`;
    return NextResponse.redirect(url);
  }
  
  // اضافه کردن هدرهای امنیتی
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};