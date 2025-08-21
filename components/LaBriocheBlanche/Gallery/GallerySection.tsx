// components/LaBriocheBlanche/Gallery/GallerySection.tsx
import React from 'react';
import { Store, Coffee, Cake, Cookie, Users } from 'lucide-react';
import GalleryItem from './GalleryItem';
import { GalleryItemData } from '../types';

const GallerySection: React.FC = () => {
    const galleryItems: GalleryItemData[] = [
        { id: 1, icon: Store, gradient: 'from-amber-900 to-orange-700' },
        { id: 2, icon: Coffee, gradient: 'from-orange-700 to-orange-400' },
        { id: 3, icon: Cake, gradient: 'from-orange-400 to-yellow-100' },
        { id: 4, icon: Cookie, gradient: 'from-amber-900 to-orange-400' },
        { id: 5, icon: Coffee, gradient: 'from-orange-700 to-amber-900' },
        { id: 6, icon: Users, gradient: 'from-orange-400 to-orange-700' }
    ];

    return (
        <section id="gallery" className="py-20 bg-yellow-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center text-amber-900 mb-16">
                    Galerie
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item: GalleryItemData) => (
                        <GalleryItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
