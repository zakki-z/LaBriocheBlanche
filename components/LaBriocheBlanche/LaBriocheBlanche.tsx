// components/LaBriocheBlanche/LaBriocheBlanche.tsx
"use client"
import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
// Remove unused Image import

// Import context
import { LanguageProvider } from '@/contexts/LanguageContext';

// Import types
import { FilterType } from './types';

// Core components (loaded immediately)
import Navigation from './Navigation/Navigation';
import HeroSection from './Hero/HeroSection';
import ScrollToTopButton from './ScrollToTop/ScrollToTopButton';
import StructuredData from "@/StructuredData/StructuredData";

// Lazy-loaded components (loaded when needed)
const AboutSection = dynamic(() => import("./About/AboutSection"), {
    loading: () => <div className="h-96 bg-yellow-50 animate-pulse" />
});

const MenuSection = dynamic(() => import('./Menu/MenuSection'), {
    loading: () => <div className="h-96 bg-white animate-pulse" />
});

const GallerySection = dynamic(() => import('./Gallery/GallerySection'), {
    loading: () => <div className="h-96 bg-yellow-50 animate-pulse" />
});

const MapSection = dynamic(() => import('./Map/MapSection'), {
    loading: () => <div className="h-96 bg-white animate-pulse" />
});

const HoursSection = dynamic(() => import('./Hours/HoursSection'), {
    loading: () => <div className="h-96 bg-yellow-50 animate-pulse" />
});

const ContactSection = dynamic(() => import('./Contact/ContactSection'), {
    loading: () => <div className="h-96 bg-amber-900 animate-pulse" />
});

const Footer = dynamic(() => import('./Footer/Footer'), {
    loading: () => <div className="h-48 bg-gray-900 animate-pulse" />
});

const LaBriocheBlancheContent: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
    const [navbarScrolled, setNavbarScrolled] = useState<boolean>(false);

    // Scroll effects
    useEffect(() => {
        const handleScroll = (): void => {
            const scrollY = window.scrollY;
            setNavbarScrolled(scrollY > 100);
            setShowScrollTop(scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
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

    return (
        <>
            {/* Structured Data */}
            <StructuredData type="organization" />
            <StructuredData type="localBusiness" />
            <StructuredData type="menu" />

            <div className="min-h-screen bg-white">
                <Navigation
                    navbarScrolled={navbarScrolled}
                    scrollToSection={scrollToSection}
                />
                <HeroSection scrollToSection={scrollToSection} />

                <Suspense fallback={<div className="h-96 bg-yellow-50 animate-pulse" />}>
                    <AboutSection />
                </Suspense>

                <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
                    <MenuSection
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    />
                </Suspense>

                <Suspense fallback={<div className="h-96 bg-yellow-50 animate-pulse" />}>
                    <GallerySection />
                </Suspense>

                <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
                    <MapSection />
                </Suspense>

                <Suspense fallback={<div className="h-96 bg-yellow-50 animate-pulse" />}>
                    <HoursSection />
                </Suspense>

                <Suspense fallback={<div className="h-96 bg-amber-900 animate-pulse" />}>
                    <ContactSection />
                </Suspense>

                <Suspense fallback={<div className="h-48 bg-gray-900 animate-pulse" />}>
                    <Footer scrollToSection={scrollToSection} />
                </Suspense>

                <ScrollToTopButton showScrollTop={showScrollTop} />
            </div>
        </>
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
