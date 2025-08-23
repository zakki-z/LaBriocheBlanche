// Import polyfills FIRST - before any other imports
import '@/lib/polyfills';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "La Brioche Blanche - Boulangerie Française à Oujda",
        template: "%s | La Brioche Blanche"
    },
    description: "La Brioche Blanche, boulangerie française authentique depuis 2015 à Oujda. Découvrez nos viennoiseries, pâtisseries et plats français dans une ambiance chaleureuse. Boulevard al Maqdis 38, Oujda.",
    keywords: ["boulangerie", "pâtisserie", "Oujda", "française", "viennoiserie", "croissant", "pain", "café", "restaurant"],
    authors: [{ name: "La Brioche Blanche" }],
    creator: "La Brioche Blanche",
    publisher: "La Brioche Blanche",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://labriocheblanche.ma'), // Replace with your actual domain
    alternates: {
        canonical: '/',
        languages: {
            'fr': '/fr',
            'en': '/en',
            'ar': '/ar',
            'es': '/es',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'fr_MA',
        url: 'https://labriocheblanche.ma',
        title: 'La Brioche Blanche - Boulangerie Française à Oujda',
        description: 'La Brioche Blanche, boulangerie française authentique depuis 2015 à Oujda. Découvrez nos viennoiseries, pâtisseries et plats français.',
        siteName: 'La Brioche Blanche',
        images: [
            {
                url: '/og-image.jpg', // You need to create this image
                width: 1200,
                height: 630,
                alt: 'La Brioche Blanche - Boulangerie Française à Oujda',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'La Brioche Blanche - Boulangerie Française à Oujda',
        description: 'Boulangerie française authentique depuis 2015 à Oujda. Viennoiseries, pâtisseries et plats français.',
        images: ['/twitter-image.jpg'], // You need to create this image
        creator: '@labriocheblanche', // Replace with actual Twitter handle
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code', // Replace with actual verification code
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
