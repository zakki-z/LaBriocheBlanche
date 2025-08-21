// contexts/LanguageContext.tsx
"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../data/translations.json';

export type Language = 'fr' | 'en' | 'ar' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to get nested translation
const getNestedTranslation = (obj: any, path: string): string => {
    const keys = path.split('.');
    let result = obj;

    for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
            result = result[key];
        } else {
            return path; // Return the key if translation not found
        }
    }

    return typeof result === 'string' ? result : path;
};

// Helper function to detect user's preferred language
const detectUserLanguage = (): Language => {
    if (typeof window === 'undefined') return 'en';

    const browserLang = navigator.language.toLowerCase();

    // Check for exact matches first
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('ar')) return 'ar';
    if (browserLang.startsWith('es')) return 'es';

    // Default to English for any other language
    return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        // Check localStorage first, then detect browser language
        const savedLanguage = localStorage.getItem('preferred-language') as Language;
        if (savedLanguage && ['fr', 'en', 'ar', 'es'].includes(savedLanguage)) {
            setLanguageState(savedLanguage);
        } else {
            const detectedLang = detectUserLanguage();
            setLanguageState(detectedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('preferred-language', lang);

        // Update document direction for RTL languages
        if (typeof document !== 'undefined') {
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
        }
    };

    const t = (key: string): string => {
        return getNestedTranslation(translations[language], key);
    };

    const isRTL = language === 'ar';

    // Set initial document direction
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
            document.documentElement.lang = language;
        }
    }, [language, isRTL]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
