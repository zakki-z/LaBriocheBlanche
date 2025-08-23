// app/page.tsx
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { LocalBusinessSchema, MenuSchema, OrganizationSchema } from '@/components/StructuredData/LocalBusinessSchema';
import { Analytics } from "@vercel/analytics/next"

// Dynamic imports for performance optimization
const LaBriocheBlanche = dynamic(() => import('@/components/LaBriocheBlanche/LaBriocheBlanche'), {
    loading: () => (
        <div className="min-h-screen flex items-center justify-center bg-yellow-50">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-amber-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-amber-900 font-medium">Chargement...</p>
            </div>
        </div>
    ),
    ssr: true, // Enable SSR for SEO
});

export const metadata: Metadata = {
    title: 'La Brioche Blanche - Authentic French Bakery & Coffee Shop in Oujda',
    description: 'Discover La Brioche Blanche, Oujda\'s premier French bakery since 2015. Fresh croissants, artisanal pastries, specialty coffee, and authentic French cuisine on Boulevard al Maqdis.',
    keywords: [
        'French bakery Oujda',
        'boulangerie française Maroc',
        'croissants Oujda',
        'pâtisserie française',
        'café Oujda',
        'Boulevard al Maqdis',
        'petit déjeuner français',
        'pain artisanal'
    ],
    openGraph: {
        title: 'La Brioche Blanche - Authentic French Bakery in Oujda',
        description: 'Fresh French pastries, artisanal bread, and specialty coffee since 2015. Visit us at Boulevard al Maqdis 38, Oujda.',
        url: 'https://labriocheblanche.ma',
        images: [
            {
                url: '/images/og-home.jpg',
                width: 1200,
                height: 630,
                alt: 'La Brioche Blanche bakery storefront and fresh pastries',
            },
        ],
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'La Brioche Blanche - Authentic French Bakery',
        description: 'Fresh French pastries and specialty coffee in Oujda since 2015.',
        images: ['/images/og-home.jpg'],
    },
    alternates: {
        canonical: 'https://labriocheblanche.ma',
        languages: {
            'fr': 'https://labriocheblanche.ma/fr',
            'en': 'https://labriocheblanche.ma/en',
            'ar': 'https://labriocheblanche.ma/ar',
            'es': 'https://labriocheblanche.ma/es',
        },
    },
    other: {
        'geo.region': 'MA-60',
        'geo.placename': 'Oujda',
        'geo.position': '34.6857;-1.9109',
        'ICBM': '34.6857, -1.9109',
    },
};

export default function HomePage() {
    return (
        <>
            {/* Structured Data */}
            <LocalBusinessSchema />
            <MenuSchema />
            <OrganizationSchema />

            <main role="main" className="min-h-screen">
                <LaBriocheBlanche />
                <Analytics />
            </main>
        </>
    );
}
