// components/LaBriocheBlanche/Navigation/Navigation.tsx (Updated for better accessibility)
"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
// Remove unused Image import
import { useLanguage } from '@/contexts/LanguageContext';
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
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                navbarScrolled
                    ? 'bg-white/98 backdrop-blur-lg shadow-lg'
                    : 'bg-white/95 backdrop-blur-md shadow-md'
            }`}
            role="banner"
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Navigation principale">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <button
                        onClick={() => handleNavClick('home')}
                        className={`flex items-center space-x-2 text-amber-900 font-bold text-xl ${
                            isRTL ? 'flex-row-reverse space-x-reverse' : ''
                        }`}
                        type="button"
                        aria-label="Retour à l'accueil"
                    >
                        <span className="font-serif">La Brioche Blanche</span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <ul className={`flex space-x-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`} role="menubar">
                            {navigationItems.map((item: NavigationItem) => (
                                <li key={item.id} role="none">
                                    <button
                                        onClick={() => handleNavClick(item.id)}
                                        className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium"
                                        type="button"
                                        role="menuitem"
                                        aria-label={`Naviguer vers ${t(item.labelKey)}`}
                                    >
                                        {t(item.labelKey)}
                                    </button>
                                </li>
                            ))}
                        </ul>

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
                            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" aria-hidden="true" />
                            ) : (
                                <Menu className="w-6 h-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
                        id="mobile-menu"
                        role="menu"
                        aria-label="Menu mobile"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navigationItems.map((item: NavigationItem) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-900 hover:bg-amber-50 rounded-lg transition-colors duration-200 font-medium ${
                                        isRTL ? 'text-right' : 'text-left'
                                    }`}
                                    type="button"
                                    role="menuitem"
                                    aria-label={`Naviguer vers ${t(item.labelKey)}`}
                                >
                                    {t(item.labelKey)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navigation;
