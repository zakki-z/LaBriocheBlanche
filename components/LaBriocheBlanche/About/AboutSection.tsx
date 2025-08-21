// components/LaBriocheBlanche/About/AboutSection.tsx
"use client"
import React from 'react';
import { Heart, Leaf, Users, LucideIcon } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import AboutCard from './AboutCard';

interface AboutData {
    icon: LucideIcon;
    titleKey: string;
    descriptionKey: string;
}

const AboutSection: React.FC = () => {
    const { t, isRTL } = useLanguage();

    const aboutData: AboutData[] = [
        {
            icon: Heart,
            titleKey: 'about.cards.since2015.title',
            descriptionKey: 'about.cards.since2015.description'
        },
        {
            icon: Leaf,
            titleKey: 'about.cards.freshNatural.title',
            descriptionKey: 'about.cards.freshNatural.description'
        },
        {
            icon: Users,
            titleKey: 'about.cards.community.title',
            descriptionKey: 'about.cards.community.description'
        }
    ];

    return (
        <section id="about" className="py-20 bg-yellow-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`font-serif text-3xl lg:text-4xl font-bold text-center text-amber-900 mb-16 ${
                    isRTL ? 'text-right' : ''
                }`}>
                    {t('about.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {aboutData.map((item: AboutData, index: number) => (
                        <AboutCard
                            key={index}
                            icon={item.icon}
                            title={t(item.titleKey)}
                            description={t(item.descriptionKey)}
                            delay={index * 100}
                            isRTL={isRTL}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
