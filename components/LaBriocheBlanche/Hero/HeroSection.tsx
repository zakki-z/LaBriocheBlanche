// components/LaBriocheBlanche/Hero/HeroSection.tsx
"use client"
import React from 'react';
import { Utensils } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import OptimizedImage from '../../OptimizedImage';

interface HeroSectionProps {
    scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
    const { t, isRTL } = useLanguage();

    const backgroundPattern = `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="20" cy="20" r="2" fill="rgba(139,69,19,0.1)"></circle>
      <circle cx="80" cy="40" r="1.5" fill="rgba(139,69,19,0.1)"></circle>
      <circle cx="40" cy="80" r="1" fill="rgba(139,69,19,0.1)"></circle>
    </svg>
  `)}`;

    return (
        <header
            id="home"
            className="min-h-screen flex items-center bg-gradient-to-br from-yellow-50 to-orange-200 relative overflow-hidden"
            role="banner"
        >
            <div
                className="absolute inset-0 animate-pulse"
                style={{ backgroundImage: `url("${backgroundPattern}")` }}
                aria-hidden="true"
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isRTL ? 'lg:grid-cols-2' : ''
                }`}>
                    <section className={`space-y-8 ${isRTL ? 'lg:order-2 text-right' : ''}`}>
                        <h1 className="font-serif text-4xl lg:text-6xl font-bold text-amber-900 leading-tight">
                            {t('hero.title')}
                        </h1>
                        <p className="text-lg lg:text-xl text-amber-800 leading-relaxed">
                            {t('hero.description')}
                        </p>
                        <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`inline-flex items-center space-x-2 bg-amber-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2 ${
                                    isRTL ? 'flex-row-reverse space-x-reverse' : ''
                                }`}
                                type="button"
                                aria-label={`${t('hero.cta')} - Navigate to about section`}
                            >
                                <Utensils className="w-5 h-5" aria-hidden="true" />
                                <span>{t('hero.cta')}</span>
                            </button>
                        </div>
                    </section>

                    <aside className={`flex justify-center ${isRTL ? 'lg:order-1' : ''}`}>
                        <OptimizedImage
                            src="/images/hero-bakery.jpg"
                            alt="La Brioche Blanche - Fresh French pastries and bakery interior showcasing croissants, bread, and coffee"
                            width={600}
                            height={600}
                            priority={true}
                            className="w-60 h-60 lg:w-96 lg:h-96 rounded-full shadow-2xl"
                            sizes="(max-width: 768px) 240px, 384px"
                        />
                    </aside>
                </div>
            </div>

            {/* Schema.org markup for hero content */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPageElement",
                        "name": "Hero Section",
                        "description": "Main introduction to La Brioche Blanche bakery",
                        "isPartOf": {
                            "@type": "WebPage",
                            "url": "https://labriocheblanche.ma"
                        }
                    })
                }}
            />
        </header>
    );
};

export default HeroSection;
