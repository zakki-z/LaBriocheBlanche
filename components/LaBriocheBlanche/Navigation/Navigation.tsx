// components/LaBriocheBlanche/Navigation/Navigation.tsx
"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import LanguageSelector from '../../LanguageSelector/LanguageSelector';

interface NavigationItem {
    id: string;
    labelKey: string;
}

interface NavigationProps {
    navbarScrolled: boolean;
    scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ navbarScrolled, scrollToSection }) => {
    const { t, isRTL } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationItems: NavigationItem[] = [
        { id: 'home', labelKey: 'navigation.home' },
        { id: 'about', labelKey: 'navigation.about' },
        { id: 'menu', labelKey: 'navigation.menu' },
        { id: 'gallery', labelKey: 'navigation.gallery' },
        { id: 'map', labelKey: 'navigation.location' },
        { id: 'hours', labelKey: 'navigation.hours' },
        { id: 'contact', labelKey: 'navigation.contact' }
    ];

    const handleNavClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                navbarScrolled
                    ? 'bg-white/98 backdrop-blur-lg shadow-lg'
                    : 'bg-white/95 backdrop-blur-md shadow-md'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <button
                        onClick={() => handleNavClick('home')}
                        className={`flex items-center space-x-2 text-amber-900 font-bold text-xl ${
                            isRTL ? 'flex-row-reverse space-x-reverse' : ''
                        }`}
                        type="button"
                    >
                        <img
                            src="/labriocheblanche.jpg"
                            alt="La Brioche Blanche logo"
                            className="w-10 h-10 rounded-full shadow-lg"
                        />
                        <span className="font-serif">La Brioche Blanche</span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <div className={`flex space-x-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            {navigationItems.map((item: NavigationItem) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium"
                                    type="button"
                                >
                                    {t(item.labelKey)}
                                </button>
                            ))}
                        </div>

                        {/* Language Selector */}
                        <LanguageSelector />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center space-x-4">
                        <LanguageSelector />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-amber-900 transition-colors duration-200 p-2"
                            type="button"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
                        <div className="px-4 py-4 space-y-3">
                            {navigationItems.map((item: NavigationItem) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-900 hover:bg-amber-50 rounded-lg transition-colors duration-200 font-medium ${
                                        isRTL ? 'text-right' : 'text-left'
                                    }`}
                                    type="button"
                                >
                                    {t(item.labelKey)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
