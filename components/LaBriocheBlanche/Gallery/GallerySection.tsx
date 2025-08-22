"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

// Type definitions
interface GalleryItemData {
    id: number;
    src: string;
    alt: string;
    title: string;
}

interface ImageLoadState {
    [key: number]: boolean;
}

// Gallery data with your bakery photos - matching your working code
const galleryItems: GalleryItemData[] = [
    {
        id: 9,
        src: "/images/photo9.jpeg",
        alt: "Fresh gourmet salad with avocado and mixed vegetables at La Brioche Blanche bakery",
        title: "Healthy Gourmet Salads"
    },
    {
        id: 2,
        src: "/images/photo2.jpeg",
        alt: "Artisan chocolate cake with elegant chocolate decorations and nuts",
        title: "Premium Chocolate Cakes"
    },
    {
        id: 3,
        src: "/images/photo3.jpeg",
        alt: "Colorful French macarons with La Brioche Blanche branding",
        title: "French Macarons"
    },
    {
        id: 4,
        src: "/images/photo4.jpeg",
        alt: "Decorated birthday cake with caramel drip and golden decorations",
        title: "Custom Birthday Cakes"
    },
    {
        id: 5,
        src: "/images/photo5.jpeg",
        alt: "Professional pastry chef presenting artisan petit fours and pastries",
        title: "Master Pastry Chef"
    },
    {
        id: 6,
        src: "/images/photo6.jpeg",
        alt: "Gourmet burger with crispy fries served in modern bakery setting",
        title: "Gourmet Burgers & Fries"
    },
    {
        id: 7,
        src: "/images/photo7.jpeg",
        alt: "Elegant red glazed dessert with fresh berries and premium presentation",
        title: "Premium Glazed Desserts"
    },
    {
        id: 8,
        src: "/images/photo8.jpeg",
        alt: "Multi-tier wedding cake with white roses and golden decorations",
        title: "Wedding Cakes"
    }
];

const GallerySection: React.FC = () => {
    const { t, isRTL } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<GalleryItemData | null>(null);
    const [imageLoaded, setImageLoaded] = useState<ImageLoadState>({});
    const [isClient, setIsClient] = useState(false);

    // Fix hydration by ensuring client-side rendering
    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleImageLoad = (id: number): void => {
        setImageLoaded(prev => ({ ...prev, [id]: true }));
    };

    const openLightbox = (item: GalleryItemData): void => {
        setSelectedImage(item);
        if (typeof window !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    };

    const closeLightbox = (): void => {
        setSelectedImage(null);
        if (typeof window !== 'undefined') {
            document.body.style.overflow = 'unset';
        }
    };

    const navigateImage = (direction: 'next' | 'prev'): void => {
        if (!selectedImage) return;

        const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
        const newIndex = direction === 'next'
            ? (currentIndex + 1) % galleryItems.length
            : (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        setSelectedImage(galleryItems[newIndex]);
    };

    const handleVisitBakery = (): void => {
        if (typeof window !== 'undefined') {
            const locationSection = document.getElementById('location');
            if (locationSection) {
                locationSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Don't render dynamic content until client-side hydration is complete
    if (!isClient) {
        return (
            <section id="gallery" className="py-20 bg-yellow-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-amber-900 mb-6">
                            Gallery
                        </h2>
                        <p className="text-lg text-amber-800 max-w-2xl mx-auto">
                            Discover our exquisite collection of handcrafted pastries, artisan breads, and culinary masterpieces
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {galleryItems.map((item: GalleryItemData) => (
                            <div key={item.id} className="group cursor-pointer">
                                <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 animate-pulse flex items-center justify-center">
                                        <div className="w-12 h-12 border-4 border-amber-300 border-t-amber-600 rounded-full animate-spin"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section id="gallery" className="py-20 bg-yellow-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className={`font-serif text-3xl lg:text-4xl font-bold text-amber-900 mb-6 ${
                            isRTL ? 'text-right' : ''
                        }`}>
                            {t('gallery.title')}
                        </h2>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {galleryItems.map((item: GalleryItemData, index: number) => (
                            <div
                                key={item.id}
                                className="group cursor-pointer"
                                onClick={() => openLightbox(item)}
                            >
                                <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    {/* Loading placeholder */}
                                    {!imageLoaded[item.id] && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 animate-pulse flex items-center justify-center">
                                            <div className="w-12 h-12 border-4 border-amber-300 border-t-amber-600 rounded-full animate-spin"></div>
                                        </div>
                                    )}

                                    {/* Image with SEO attributes but no visible titles */}
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        title={item.title}
                                        className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
                                            imageLoaded[item.id] ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        loading={index < 4 ? "eager" : "lazy"}
                                        onLoad={() => handleImageLoad(item.id)}
                                    />

                                    {/* Hover overlay - clean and simple */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-6 text-white w-full">
                                            <div className="w-8 h-8 text-white text-2xl">🔍</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <div className="relative max-w-4xl max-h-full" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors z-10"
                            aria-label="Close image viewer"
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation buttons */}
                        <button
                            onClick={() => navigateImage('prev')}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={() => navigateImage('next')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Lightbox image */}
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default GallerySection;
