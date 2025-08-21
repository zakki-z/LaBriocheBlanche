// components/LaBriocheBlanche/LaBriocheBlanche.tsx
"use client"
import React, { useState, useEffect } from 'react';

// Import context
import { LanguageProvider } from '../../contexts/LanguageContext';

// Import types
import { FilterType } from './types';

// Import components
import Navigation from './Navigation/Navigation';
import HeroSection from './Hero/HeroSection';
import AboutSection from "./About/AboutSection";
import MenuSection from './Menu/MenuSection';
import GallerySection from './Gallery/GallerySection';
import MapSection from './Map/MapSection';
import HoursSection from './Hours/HoursSection';
import ContactSection from './Contact/ContactSection';
import Footer from './Footer/Footer';
import ScrollToTopButton from './ScrollToTop/ScrollToTopButton';

const LaBriocheBlancheContent: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
    const [navbarScrolled, setNavbarScrolled] = useState<boolean>(false);

    // Scroll effects
    useEffect(() => {
        const handleScroll = (): void => {
            const scrollY = window.scrollY;
            setNavbarScrolled(scrollY > 100);
            setShowScrollTop(scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll function
    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // Handle form submission
    const handleFormSubmit = (): void => {
        setIsFormSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsFormSubmitting(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navigation
                navbarScrolled={navbarScrolled}
                scrollToSection={scrollToSection}
            />
            <HeroSection scrollToSection={scrollToSection} />
            <AboutSection />
            <MenuSection
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <GallerySection />
            <MapSection />
            <HoursSection />
            <ContactSection
                isFormSubmitting={isFormSubmitting}
                handleFormSubmit={handleFormSubmit}
            />
            <Footer scrollToSection={scrollToSection} />
            <ScrollToTopButton showScrollTop={showScrollTop} />
        </div>
    );
};

const LaBriocheBlanche: React.FC = () => {
    return (
        <LanguageProvider>
            <LaBriocheBlancheContent />
        </LanguageProvider>
    );
};

export default LaBriocheBlanche;
