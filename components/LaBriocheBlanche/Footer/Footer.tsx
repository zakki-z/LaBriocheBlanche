// components/LaBriocheBlanche/Footer/Footer.tsx
"use client"
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface FooterProps {
    scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
    const { t, isRTL } = useLanguage();

    const quickLinks = [
        { id: 'home', labelKey: 'navigation.home' },
        { id: 'about', labelKey: 'navigation.about' },
        { id: 'menu', labelKey: 'navigation.menu' },
        { id: 'contact', labelKey: 'navigation.contact' }
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid md:grid-cols-3 gap-8 ${
                    isRTL ? 'md:grid-cols-3' : ''
                }`}>
                    <div className={isRTL ? 'text-right' : ''}>
                        <h5 className="font-serif text-xl font-semibold mb-4">La Brioche Blanche</h5>
                        <p className="text-gray-400">{t('footer.tagline')}</p>
                    </div>

                    <div className={isRTL ? 'text-right' : ''}>
                        <h5 className="font-semibold mb-4">{t('footer.quickLinks')}</h5>
                        <ul className="space-y-2 text-gray-400">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="hover:text-white transition-colors"
                                    >
                                        {t(link.labelKey)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={isRTL ? 'text-right' : ''}>
                        <h5 className="font-semibold mb-4">{t('footer.followUs')}</h5>
                        <div className={`flex space-x-4 ${
                            isRTL ? 'flex-row-reverse space-x-reverse justify-end' : ''
                        }`}>
                            <a
                                href="https://www.facebook.com/labriocheblanche/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-orange-400 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/labriocheblanche/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-orange-400 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className={`text-center text-gray-400 ${
                    isRTL ? 'text-right' : ''
                }`}>
                    <p>&copy; 2025 La Brioche Blanche. {t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
