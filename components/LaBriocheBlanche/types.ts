import { LucideIcon } from 'lucide-react';

// Filter types for menu
export type FilterType = 'all' | 'breakfast' | 'drinks' | 'pastry' | 'dishes';

// Menu item interface
export interface MenuItemData {
    id: number;
    category: 'breakfast' | 'drinks' | 'pastry' | 'dishes';
    name: string;
    description: string;
    price: string;
    icon: LucideIcon;
}

// Gallery item interface
export interface GalleryItemData {
    id: number;
    icon: LucideIcon;
    gradient: string;
}

// About data interface
export interface AboutData {
    icon: LucideIcon;
    title: string;
    description: string;
}

// Schedule item interface
export interface ScheduleItem {
    day: string;
    hours: string;
}

// Navigation item interface
export interface NavigationItem {
    id: string;
    label: string;
}

// Form data interface
export interface FormData {
    email: string;
    phone: string;
    inquiry: string;
    message: string;
}

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
