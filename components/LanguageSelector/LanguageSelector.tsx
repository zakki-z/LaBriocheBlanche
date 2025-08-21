// components/LanguageSelector/LanguageSelector.tsx
"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../../contexts/LanguageContext';

interface LanguageOption {
    code: Language;
    name: string;
    flag: string;
    flagAlt: string;
}

const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages: LanguageOption[] = [
        {
            code: 'en',
            name: 'English',
            flag: '🇬🇧',
            flagAlt: 'UK Flag'
        },
        {
            code: 'fr',
            name: 'Français',
            flag: '🇫🇷',
            flagAlt: 'French Flag'
        },
        {
            code: 'ar',
            name: 'العربية',
            flag: '🇲🇦',
            flagAlt: 'Moroccan Flag'
        },
        {
            code: 'es',
            name: 'Español',
            flag: '🇪🇸',
            flagAlt: 'Spanish Flag'
        }
    ];

    const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (newLanguage: Language) => {
        setLanguage(newLanguage);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/20"
                type="button"
                aria-label="Select language"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <span className="text-lg" role="img" aria-label={currentLanguage.flagAlt}>
                    {currentLanguage.flag}
                </span>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                    {currentLanguage.name}
                </span>
                <ChevronDown
                    className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[160px] z-50">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                        Select Language
                    </div>

                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors duration-150 ${
                                language === lang.code
                                    ? 'bg-amber-50 text-amber-900 font-semibold'
                                    : 'text-gray-700'
                            }`}
                            type="button"
                            role="option"
                            aria-selected={language === lang.code}
                        >
                            <span className="text-lg" role="img" aria-label={lang.flagAlt}>
                                {lang.flag}
                            </span>
                            <span className="text-sm">{lang.name}</span>
                            {language === lang.code && (
                                <span className="ml-auto text-amber-600">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
