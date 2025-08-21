// components/LaBriocheBlanche/Menu/MenuSection.tsx
"use client"
import React, { useState } from 'react';
import { Coffee, Cookie, Cake, UtensilsCrossed, Pizza, Salad, Sandwich, X, Eye } from 'lucide-react';
import { MenuItemData, FilterType } from '../types';
import { useLanguage } from '../../../contexts/LanguageContext';

interface MenuSectionProps {
    activeFilter: FilterType;
    setActiveFilter: (filter: FilterType) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ activeFilter, setActiveFilter }) => {
    const { t, isRTL } = useLanguage();
    const [showFullMenu, setShowFullMenu] = useState(false);
    const [popupFilter, setPopupFilter] = useState<FilterType>('all');

    // All menu items with translation keys
    const allMenuItems: MenuItemData[] = [
        // Petit Déjeuner (Breakfast)
        { id: 1, category: 'breakfast', nameKey: 'menu.items.frenchBreakfast.name', descriptionKey: 'menu.items.frenchBreakfast.description', price: '23,00 MAD', icon: Coffee },
        { id: 2, category: 'breakfast', nameKey: 'menu.items.continentalBreakfast.name', descriptionKey: 'menu.items.continentalBreakfast.description', price: '28,00 MAD', icon: Coffee },
        { id: 3, category: 'breakfast', nameKey: 'menu.items.completeBreakfast.name', descriptionKey: 'menu.items.completeBreakfast.description', price: '38,00 MAD', icon: Coffee },
        { id: 4, category: 'breakfast', nameKey: 'menu.items.msemenHoney.name', descriptionKey: 'menu.items.msemenHoney.description', price: '21,00 MAD', icon: Cookie },
        { id: 5, category: 'breakfast', nameKey: 'menu.items.fruitCrepes.name', descriptionKey: 'menu.items.fruitCrepes.description', price: '32,00 MAD', icon: Cake },
        { id: 6, category: 'breakfast', nameKey: 'menu.items.chebakia.name', descriptionKey: 'menu.items.chebakia.description', price: '25,00 MAD', icon: Cookie },

        // Boissons (Drinks)
        { id: 7, category: 'drinks', nameKey: 'menu.items.espresso.name', descriptionKey: 'menu.items.espresso.description', price: '11,00 MAD', icon: Coffee },
        { id: 8, category: 'drinks', nameKey: 'menu.items.cappuccino.name', descriptionKey: 'menu.items.cappuccino.description', price: '16,00 MAD', icon: Coffee },
        { id: 9, category: 'drinks', nameKey: 'menu.items.mintTea.name', descriptionKey: 'menu.items.mintTea.description', price: '13,00 MAD', icon: Coffee },
        { id: 10, category: 'drinks', nameKey: 'menu.items.freshOrange.name', descriptionKey: 'menu.items.freshOrange.description', price: '18,00 MAD', icon: Coffee },
        { id: 11, category: 'drinks', nameKey: 'menu.items.fruitSmoothie.name', descriptionKey: 'menu.items.fruitSmoothie.description', price: '26,00 MAD', icon: Coffee },
        { id: 12, category: 'drinks', nameKey: 'menu.items.vanillaMilkshake.name', descriptionKey: 'menu.items.vanillaMilkshake.description', price: '28,00 MAD', icon: Coffee },

        // Pâtisserie (Pastry)
        { id: 13, category: 'pastry', nameKey: 'menu.items.butterCroissant.name', descriptionKey: 'menu.items.butterCroissant.description', price: '8,00 MAD', icon: Cookie },
        { id: 14, category: 'pastry', nameKey: 'menu.items.painChocolat.name', descriptionKey: 'menu.items.painChocolat.description', price: '10,00 MAD', icon: Cookie },
        { id: 15, category: 'pastry', nameKey: 'menu.items.chocolateEclair.name', descriptionKey: 'menu.items.chocolateEclair.description', price: '15,00 MAD', icon: Cake },
        { id: 16, category: 'pastry', nameKey: 'menu.items.milleFeuille.name', descriptionKey: 'menu.items.milleFeuille.description', price: '18,00 MAD', icon: Cake },
        { id: 17, category: 'pastry', nameKey: 'menu.items.fruitTart.name', descriptionKey: 'menu.items.fruitTart.description', price: '22,00 MAD', icon: Cake },
        { id: 18, category: 'pastry', nameKey: 'menu.items.chouquettes.name', descriptionKey: 'menu.items.chouquettes.description', price: '12,00 MAD', icon: Cookie },

        // Plats (Main Dishes)
        { id: 19, category: 'dishes', nameKey: 'menu.items.caesarSalad.name', descriptionKey: 'menu.items.caesarSalad.description', price: '35,00 MAD', icon: Salad },
        { id: 20, category: 'dishes', nameKey: 'menu.items.clubSandwich.name', descriptionKey: 'menu.items.clubSandwich.description', price: '40,00 MAD', icon: Sandwich },
        { id: 21, category: 'dishes', nameKey: 'menu.items.margheritaPizza.name', descriptionKey: 'menu.items.margheritaPizza.description', price: '45,00 MAD', icon: Pizza },
        { id: 22, category: 'dishes', nameKey: 'menu.items.carbonaraPasta.name', descriptionKey: 'menu.items.carbonaraPasta.description', price: '50,00 MAD', icon: UtensilsCrossed },
        { id: 23, category: 'dishes', nameKey: 'menu.items.briocheBurger.name', descriptionKey: 'menu.items.briocheBurger.description', price: '43,00 MAD', icon: Sandwich },
        { id: 24, category: 'dishes', nameKey: 'menu.items.quicheLorraine.name', descriptionKey: 'menu.items.quicheLorraine.description', price: '30,00 MAD', icon: UtensilsCrossed }
    ];

    // Top picks - most popular items from each category
    const topPicksItems: MenuItemData[] = [
        allMenuItems[2], // Petit Déjeuner Complet
        allMenuItems[7], // Cappuccino
        allMenuItems[12], // Croissant au Beurre
        allMenuItems[13], // Pain au Chocolat
        allMenuItems[20], // Pizza Margherita
        allMenuItems[22] // Burger Brioche
    ];

    const filters = [
        { key: 'all' as const, labelKey: 'menu.filters.all' },
        { key: 'breakfast' as const, labelKey: 'menu.filters.breakfast' },
        { key: 'drinks' as const, labelKey: 'menu.filters.drinks' },
        { key: 'pastry' as const, labelKey: 'menu.filters.pastry' },
        { key: 'dishes' as const, labelKey: 'menu.filters.dishes' }
    ];

    const filteredPopupItems = popupFilter === 'all'
        ? allMenuItems
        : allMenuItems.filter(item => item.category === popupFilter);

    const MenuItem: React.FC<{ item: MenuItemData; isTopPick?: boolean }> = ({ item, isTopPick = false }) => {
        const IconComponent = item.icon;

        return (
            <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 ${isTopPick ? 'border-2 border-amber-200 relative' : ''}`}>
                {isTopPick && (
                    <div className={`absolute -top-2 bg-amber-900 text-white text-xs font-semibold px-3 py-1 rounded-full ${
                        isRTL ? 'right-4' : 'left-4'
                    }`}>
                        ⭐ {t('menu.topPick')}
                    </div>
                )}
                <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} ${isTopPick ? 'mt-2' : ''}`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-900 to-orange-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                        <h5 className="text-xl font-semibold text-amber-900 mb-2">{t(item.nameKey)}</h5>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">{t(item.descriptionKey)}</p>
                        <div className="text-xl font-bold text-orange-700">{item.price}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <section id="menu" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className={`font-serif text-3xl lg:text-4xl font-bold text-center text-amber-900 mb-8 ${
                        isRTL ? 'text-right' : ''
                    }`}>
                        {t('menu.title')}
                    </h2>

                    <p className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto ${
                        isRTL ? 'text-right' : ''
                    }`}>
                        {t('menu.subtitle')}
                    </p>

                    {/* Top Picks Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {topPicksItems.map((item) => (
                            <MenuItem key={item.id} item={item} isTopPick={true} />
                        ))}
                    </div>

                    {/* See All Button */}
                    <div className="text-center">
                        <button
                            onClick={() => setShowFullMenu(true)}
                            className={`inline-flex items-center space-x-3 bg-amber-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl ${
                                isRTL ? 'flex-row-reverse space-x-reverse' : ''
                            }`}
                            type="button"
                        >
                            <Eye className="w-5 h-5" />
                            <span>{t('menu.seeAll')}</span>
                            <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                                {allMenuItems.length} {t('menu.articles')}
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Full Menu Popup */}
            {showFullMenu && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
                        {/* Popup Header */}
                        <div className={`bg-amber-900 text-white p-6 flex justify-between items-center ${
                            isRTL ? 'flex-row-reverse' : ''
                        }`}>
                            <div className={isRTL ? 'text-right' : ''}>
                                <h3 className="text-2xl font-bold font-serif">{t('menu.fullMenu')}</h3>
                                <p className="text-amber-100">La Brioche Blanche - Oujda</p>
                            </div>
                            <button
                                onClick={() => setShowFullMenu(false)}
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                                type="button"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Popup Filters */}
                        <div className="p-6 border-b border-gray-200">
                            <div className={`flex flex-wrap justify-center gap-3 ${
                                isRTL ? 'flex-row-reverse' : ''
                            }`}>
                                {filters.map((filter) => (
                                    <button
                                        key={filter.key}
                                        onClick={() => setPopupFilter(filter.key)}
                                        className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm ${
                                            popupFilter === filter.key
                                                ? 'bg-amber-900 text-white shadow-md'
                                                : 'border border-amber-900 text-amber-900 hover:bg-amber-50'
                                        }`}
                                        type="button"
                                    >
                                        {t(filter.labelKey)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Popup Menu Items */}
                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredPopupItems.map((item) => (
                                    <div key={item.id} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                                        <div className={`flex items-start space-x-3 ${
                                            isRTL ? 'flex-row-reverse space-x-reverse' : ''
                                        }`}>
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-900 to-orange-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : ''}`}>
                                                <h6 className="font-semibold text-amber-900 mb-1 text-sm">{t(item.nameKey)}</h6>
                                                <p className="text-gray-600 text-xs mb-2 line-clamp-2">{t(item.descriptionKey)}</p>
                                                <div className="font-bold text-orange-700 text-sm">{item.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Popup Footer */}
                        <div className={`bg-gray-50 p-6 text-center border-t border-gray-200 ${
                            isRTL ? 'text-right' : ''
                        }`}>
                            <p className="text-gray-600 text-sm mb-3">
                                {t('menu.orderCall')}{' '}
                                <a href="tel:+2125365004931" className="text-amber-900 font-semibold hover:underline">
                                    (+212) 536-500-4931
                                </a>
                            </p>
                            <button
                                onClick={() => setShowFullMenu(false)}
                                className="bg-amber-900 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors duration-200"
                                type="button"
                            >
                                {t('menu.closeMenu')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuSection;
