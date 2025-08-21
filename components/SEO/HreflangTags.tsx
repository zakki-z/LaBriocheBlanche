// components/SEO/HreflangTags.tsx
import React from 'react';
import Head from 'next/head';

interface HreflangTagsProps {
    currentLanguage: string;
    currentPath?: string;
}

const HreflangTags: React.FC<HreflangTagsProps> = ({
                                                       currentLanguage,
                                                       currentPath = ''
                                                   }) => {
    const baseUrl = 'https://labriocheblanche.ma';

    const languages = [
        { code: 'fr', locale: 'fr-MA' },
        { code: 'en', locale: 'en-US' },
        { code: 'ar', locale: 'ar-MA' },
        { code: 'es', locale: 'es-ES' },
    ];

    return (
        <Head>
            {/* Self-referencing canonical */}
            <link
                rel="canonical"
                href={`${baseUrl}${currentPath ? `/${currentLanguage}${currentPath}` : ''}`}
            />

            {/* Hreflang tags */}
            {languages.map((lang) => (
                <link
                    key={lang.code}
                    rel="alternate"
                    hrefLang={lang.locale}
                    href={`${baseUrl}${currentPath ? `/${lang.code}${currentPath}` : `/${lang.code}`}`}
                />
            ))}

            {/* Default language (x-default) */}
            <link
                rel="alternate"
                hrefLang="x-default"
                href={`${baseUrl}${currentPath || ''}`}
            />

            {/* Geographic targeting */}
            <meta name="geo.region" content="MA" />
            <meta name="geo.placename" content="Oujda" />
            <meta name="geo.position" content="34.6857344;-1.9109573" />
            <meta name="ICBM" content="34.6857344, -1.9109573" />
        </Head>
    );
};

export default HreflangTags;
