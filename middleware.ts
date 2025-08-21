// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const locales = ['fr', 'en', 'ar', 'es'] as const;
const defaultLocale = 'fr'; // Changed to French as default for Morocco

type Locale = typeof locales[number];

// Get the preferred locale based on Accept-Language header
function getLocaleFromHeader(acceptLanguage: string): Locale {
    // Parse Accept-Language header (format: "fr-FR,fr;q=0.9,en;q=0.8")
    const languages = acceptLanguage
        .split(',')
        .map(lang => {
            const [code, qValue] = lang.trim().split(';');
            const quality = qValue ? parseFloat(qValue.split('=')[1]) : 1;
            return {
                code: code.split('-')[0].toLowerCase(),
                quality
            };
        })
        .sort((a, b) => b.quality - a.quality);

    // Find the first supported language
    for (const lang of languages) {
        if (locales.includes(lang.code as Locale)) {
            return lang.code as Locale;
        }
    }

    return defaultLocale;
}

// Get the preferred locale
function getLocale(request: NextRequest): Locale {
    // Check URL pathname first
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        // Check Accept-Language header
        const acceptLanguage = request.headers.get('accept-language');
        if (acceptLanguage) {
            return getLocaleFromHeader(acceptLanguage);
        }

        // Fallback: Check for Morocco-specific detection using other headers
        const cfCountry = request.headers.get('cf-ipcountry'); // Cloudflare
        const xCountry = request.headers.get('x-country-code'); // Generic country header

        if (cfCountry === 'MA' || xCountry === 'MA') {
            const acceptLanguage = request.headers.get('accept-language');
            if (acceptLanguage) {
                if (acceptLanguage.includes('ar')) return 'ar';
                if (acceptLanguage.includes('fr')) return 'fr';
            }
            return 'fr'; // Default to French for Morocco
        }
    }

    return defaultLocale;
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Skip middleware for API routes, static files, and Next.js internals
    if (
        pathname.startsWith('/api/') ||
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/favicon.ico') ||
        pathname.startsWith('/robots.txt') ||
        pathname.startsWith('/sitemap.xml') ||
        pathname.startsWith('/images/') ||
        pathname.startsWith('/icons/') ||
        pathname.includes('.') && !pathname.endsWith('/') // Skip files but not directories
    ) {
        return NextResponse.next();
    }

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        // Don't redirect root path, just add headers
        if (pathname === '/') {
            const response = NextResponse.next();
            response.headers.set('Content-Language', locale);

            // Add alternate language links for root
            locales.forEach(loc => {
                const alternateUrl = new URL(`/${loc}`, request.url);
                response.headers.append('Link', `<${alternateUrl}>; rel="alternate"; hreflang="${loc}"`);
            });

            // Add x-default
            response.headers.append('Link', `<${request.url}>; rel="alternate"; hreflang="x-default"`);

            return response;
        }

        // For other paths, redirect to localized version
        const url = new URL(`/${locale}${pathname}`, request.url);
        const response = NextResponse.redirect(url);
        response.headers.set('Content-Language', locale);
        return response;
    }

    // Extract current locale from pathname
    const currentLocale = pathname.split('/')[1] as Locale;

    // Validate that the locale is supported
    if (!locales.includes(currentLocale)) {
        // If invalid locale, redirect to default locale
        const correctedPath = pathname.replace(`/${pathname.split('/')[1]}`, `/${defaultLocale}`);
        return NextResponse.redirect(new URL(correctedPath, request.url));
    }

    // Add security and SEO headers for valid localized routes
    const response = NextResponse.next();

    // Add content language header
    response.headers.set('Content-Language', currentLocale);

    // Add alternate language links
    locales.forEach(locale => {
        const basePathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
        const alternateUrl = new URL(`/${locale}${basePathWithoutLocale}`, request.url);
        response.headers.append('Link', `<${alternateUrl}>; rel="alternate"; hreflang="${locale}"`);
    });

    // Add x-default (pointing to the non-localized version)
    const basePathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    const defaultUrl = new URL(basePathWithoutLocale, request.url);
    response.headers.append('Link', `<${defaultUrl}>; rel="alternate"; hreflang="x-default"`);

    // Add canonical URL (current page)
    const canonicalUrl = new URL(pathname, request.url);
    response.headers.set('Link', `<${canonicalUrl}>; rel="canonical"`);

    // Add security headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Add cache control for static content
    if (pathname.includes('/menu') || pathname.includes('/about')) {
        response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    }

    return response;
}

export const config = {
    matcher: [
        // Skip all internal paths (_next), API routes, and static files
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)',
    ],
};
