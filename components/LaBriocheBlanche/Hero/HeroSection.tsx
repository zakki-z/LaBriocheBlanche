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
            className="min-h-screen flex items-center relative overflow-hidden"
            role="banner"
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0">
                <OptimizedImage
                    src="/images/photo1.png"
                    alt="La Brioche Blanche bakery interior with fresh pastries, elegant decor, and warm ambiance"
                    fill={true}
                    priority={true}
                    className="object-cover object-center"
                    sizes="100vw"
                />

                {/* SEO-friendly overlay gradients for text readability */}
                <div className={`absolute inset-0 ${
                    isRTL
                        ? 'bg-gradient-to-l from-black/70 via-black/50 to-transparent'
                        : 'bg-gradient-to-r from-black/70 via-black/50 to-transparent'
                }`}></div>

                {/* Additional subtle overlay for better contrast */}
                <div className="absolute inset-0 bg-amber-900/20"></div>
            </div>

            {/* Decorative pattern overlay */}
            <div
                className="absolute inset-0 opacity-30"
                style={{ backgroundImage: `url("${backgroundPattern}")` }}
                aria-hidden="true"
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isRTL ? 'lg:grid-cols-2' : ''
                }`}>
                    <section className={`space-y-8 ${isRTL ? 'lg:order-2 text-right' : ''}`}>
                        {/* Enhanced text with better contrast for readability */}
                        <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-tight">
                            {t('hero.title')}
                        </h1>
                        <p className="text-lg lg:text-xl text-yellow-100 leading-relaxed drop-shadow-lg">
                            {t('hero.description')}
                        </p>
                        <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transform hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-3xl backdrop-blur-sm border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${
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
                        {/* Enhanced circular image with better background integration */}
                        <div className="relative">
                            {/* Background glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-600/30 blur-2xl scale-110"></div>

                            {/* Main image container */}
                            <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-2">
                                <OptimizedImage
                                    src="/images/photo1.png"
                                    alt="La Brioche Blanche - Fresh French pastries and bakery interior showcasing croissants, bread, and coffee"
                                    width={600}
                                    height={600}
                                    priority={true}
                                    className="w-60 h-60 lg:w-96 lg:h-96 rounded-full shadow-2xl ring-2 ring-white/30"
                                    sizes="(max-width: 768px) 240px, 384px"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400/80 rounded-full blur-sm"></div>
                            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-orange-500/60 rounded-full blur-sm"></div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Enhanced Schema.org markup with background image context */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPageElement",
                        "name": "Hero Section",
                        "description": "Main introduction to La Brioche Blanche bakery with interior ambiance",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://labriocheblanche.ma/images/photo1.png",
                            "description": "La Brioche Blanche bakery interior with fresh pastries and elegant decor"
                        },
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
