import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface MenuItemData {
    id: number;
    category: 'coffee' | 'bakery' | 'desserts';
    name: string;
    description: string;
    price: string;
    icon: LucideIcon;
}

interface MenuItemProps {
    item: MenuItemData;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const IconComponent: LucideIcon = item.icon;

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-amber-900 to-orange-700 flex items-center justify-center">
                <IconComponent className="w-16 h-16 text-white" />
            </div>
            <div className="p-6">
                <h5 className="text-xl font-semibold text-amber-900 mb-2">{item.name}</h5>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-xl font-bold text-orange-700">{item.price}</div>
            </div>
        </div>
    );
};

export default MenuItem;
