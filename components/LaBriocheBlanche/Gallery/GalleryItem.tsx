import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface GalleryItemData {
    id: number;
    icon: LucideIcon;
    gradient: string;
}

interface GalleryItemProps {
    item: GalleryItemData;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
    const IconComponent = item.icon;

    return (
        <div className="group cursor-pointer">
            <div className={`relative h-64 bg-gradient-to-br ${item.gradient} rounded-2xl overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-amber-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-8 h-8 text-white text-2xl">🔍</div>
                </div>
            </div>
        </div>
    );
};

export default GalleryItem;
