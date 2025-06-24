import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localeDetection: routing.localeDetection, 
  localePrefix: 'always' 
});

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};