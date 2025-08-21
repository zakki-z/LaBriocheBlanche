import React from 'react';
import { Cake, Utensils } from 'lucide-react';

interface HeroSectionProps {
    scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
    const backgroundPattern = `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="20" cy="20" r="2" fill="rgba(139,69,19,0.1)"></circle>
      <circle cx="80" cy="40" r="1.5" fill="rgba(139,69,19,0.1)"></circle>
      <circle cx="40" cy="80" r="1" fill="rgba(139,69,19,0.1)"></circle>
    </svg>
  `)}`;

    return (
        <section
            id="home"
            className="min-h-screen flex items-center bg-gradient-to-br from-yellow-50 to-orange-200 relative overflow-hidden"
        >
            <div
                className="absolute inset-0 animate-pulse"
                style={{ backgroundImage: `url("${backgroundPattern}")` }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="font-serif text-4xl lg:text-6xl font-bold text-amber-900 leading-tight">
                            La Brioche Blanche
                        </h1>
                        <p className="text-lg lg:text-xl text-amber-800 leading-relaxed">
                            La Brioche Blanche a ouvert ses portes en 2015 offrant à ses clients la meilleure qualité de boulangerie, une cuisine savoureuse et un si joli café.
                        </p>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="inline-flex items-center space-x-2 bg-amber-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                            type="button"
                        >
                            <Utensils className="w-5 h-5" />
                            <span>À propos de nous</span>
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <Cake className="w-60 h-60 text-amber-900/30 animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
