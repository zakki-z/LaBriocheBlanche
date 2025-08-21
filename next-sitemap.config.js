// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://labriocheblanche.ma',
    generateRobotsTxt: true,
    exclude: ['/admin/*', '/api/*', '/_next/*'],
    alternateRefs: [
        {
            href: 'https://labriocheblanche.ma/fr',
            hreflang: 'fr',
        },
        {
            href: 'https://labriocheblanche.ma/en',
            hreflang: 'en',
        },
        {
            href: 'https://labriocheblanche.ma/ar',
            hreflang: 'ar',
        },
        {
            href: 'https://labriocheblanche.ma/es',
            hreflang: 'es',
        },
        {
            href: 'https://labriocheblanche.ma',
            hreflang: 'x-default',
        },
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/api'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/admin', '/api'],
            },
        ],
        additionalSitemaps: [
            'https://labriocheblanche.ma/sitemap.xml',
        ],
    },
    priority: 1.0,
    changefreq: 'daily',
    additionalPaths: async (config) => [
        {
            loc: '/',
            changefreq: 'daily',
            priority: 1.0,
            lastmod: new Date().toISOString(),
        },
        {
            loc: '/menu',
            changefreq: 'weekly',
            priority: 0.9,
            lastmod: new Date().toISOString(),
        },
        {
            loc: '/about',
            changefreq: 'monthly',
            priority: 0.8,
            lastmod: new Date().toISOString(),
        },
        {
            loc: '/contact',
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        },
    ],
};
