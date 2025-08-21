// components/LaBriocheBlanche/types.ts
import { LucideIcon } from 'lucide-react';

// Filter types for menu
export type FilterType = 'all' | 'breakfast' | 'drinks' | 'pastry' | 'dishes';

// Menu item interface with translation keys
export interface MenuItemData {
    id: number;
    category: 'breakfast' | 'drinks' | 'pastry' | 'dishes';
    nameKey: string;        // Translation key for name
    descriptionKey: string; // Translation key for description
    price: string;
    icon: LucideIcon;
}

// Gallery item interface
export interface GalleryItemData {
    id: number;
    icon: LucideIcon;
    gradient: string;
}

// About data interface with translation keys
export interface AboutData {
    icon: LucideIcon;
    titleKey: string;       // Translation key for title
    descriptionKey: string; // Translation key for description
}

// Schedule item interface with translation keys
export interface ScheduleItem {
    dayKey: string;    // Translation key for day
    hours: string;
}

// Navigation item interface with translation keys
export interface NavigationItem {
    id: string;
    labelKey: string;  // Translation key for label
}

// Form data interface
export interface FormData {
    email: string;
    phone: string;
    inquiry: string;
    message: string;
}

// Language types
export type Language = 'fr' | 'en' | 'ar' | 'es';

// Component prop interfaces
export interface NavigationProps {
    navbarScrolled: boolean;
    scrollToSection: (sectionId: string) => void;
}

export interface HeroSectionProps {
    scrollToSection: (sectionId: string) => void;
}

export interface AboutCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
    isRTL?: boolean;
}

export interface MenuFilterProps {
    activeFilter: FilterType;
    setActiveFilter: (filter: FilterType) => void;
}

export interface MenuItemProps {
    item: MenuItemData;
}

export interface MenuSectionProps {
    activeFilter: FilterType;
    setActiveFilter: (filter: FilterType) => void;
}

export interface GalleryItemProps {
    item: GalleryItemData;
}

export interface ContactFormProps {
    isFormSubmitting: boolean;
    handleFormSubmit: () => void;
}

export interface ContactInfoCardProps {
    icon: LucideIcon;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export interface ContactSectionProps {
    isFormSubmitting: boolean;
    handleFormSubmit: () => void;
}

export interface FooterProps {
    scrollToSection: (sectionId: string) => void;
}

export interface ScrollToTopButtonProps {
    showScrollTop: boolean;
}

// Language context interface
export interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isRTL: boolean;
}
