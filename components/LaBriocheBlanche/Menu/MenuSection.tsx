import React, { useState } from 'react';
import { Coffee, Cookie, Cake, UtensilsCrossed, Pizza, Salad, Sandwich, X, Eye } from 'lucide-react';
import { MenuItemData, FilterType } from '../types';

interface MenuSectionProps {
    activeFilter: FilterType;
    setActiveFilter: (filter: FilterType) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ activeFilter, setActiveFilter }) => {
    const [showFullMenu, setShowFullMenu] = useState(false);
    const [popupFilter, setPopupFilter] = useState<FilterType>('all');

    // All menu items
    const allMenuItems: MenuItemData[] = [
        // Petit Déjeuner (Breakfast)
        { id: 1, category: 'breakfast', name: 'Petit Déjeuner Français', description: 'Croissant, confiture, beurre, café ou thé', price: '23,00 MAD', icon: Coffee },
        { id: 2, category: 'breakfast', name: 'Petit Déjeuner Continental', description: 'Pain, fromage, œuf, jus d\'orange', price: '28,00 MAD', icon: Coffee },
        { id: 3, category: 'breakfast', name: 'Petit Déjeuner Complet', description: 'Croissant, pain, confiture, fromage, œuf, boisson', price: '38,00 MAD', icon: Coffee },
        { id: 4, category: 'breakfast', name: 'Msemen au Miel', description: 'Msemen traditionnel servi avec miel et beurre', price: '21,00 MAD', icon: Cookie },
        { id: 5, category: 'breakfast', name: 'Crêpes aux Fruits', description: 'Crêpes fraîches avec fruits de saison', price: '32,00 MAD', icon: Cake },
        { id: 6, category: 'breakfast', name: 'Chebakia Maison', description: 'Pâtisserie traditionnelle au miel et sésame', price: '25,00 MAD', icon: Cookie },

        // Boissons (Drinks)
        { id: 7, category: 'drinks', name: 'Café Espresso', description: 'Café italien servi dans une tasse traditionnelle', price: '11,00 MAD', icon: Coffee },
        { id: 8, category: 'drinks', name: 'Cappuccino', description: 'Espresso avec mousse de lait onctueuse', price: '16,00 MAD', icon: Coffee },
        { id: 9, category: 'drinks', name: 'Thé à la Menthe', description: 'Thé vert traditionnel marocain à la menthe fraîche', price: '13,00 MAD', icon: Coffee },
        { id: 10, category: 'drinks', name: 'Jus d\'Orange Frais', description: 'Jus d\'orange pressé minute', price: '18,00 MAD', icon: Coffee },
        { id: 11, category: 'drinks', name: 'Smoothie aux Fruits', description: 'Mélange de fruits frais et yaourt', price: '26,00 MAD', icon: Coffee },
        { id: 12, category: 'drinks', name: 'Milkshake Vanille', description: 'Milkshake crémeux à la vanille', price: '28,00 MAD', icon: Coffee },

        // Pâtisserie (Pastry)
        { id: 13, category: 'pastry', name: 'Croissant au Beurre', description: 'Croissant français classique fait maison', price: '8,00 MAD', icon: Cookie },
        { id: 14, category: 'pastry', name: 'Pain au Chocolat', description: 'Viennoiserie feuilletée au chocolat', price: '10,00 MAD', icon: Cookie },
        { id: 15, category: 'pastry', name: 'Éclair au Chocolat', description: 'Pâte à choux garnie de crème pâtissière et glaçage chocolat', price: '15,00 MAD', icon: Cake },
        { id: 16, category: 'pastry', name: 'Mille-feuille', description: 'Pâte feuilletée et crème pâtissière vanille', price: '18,00 MAD', icon: Cake },
        { id: 17, category: 'pastry', name: 'Tarte aux Fruits', description: 'Tarte sablée garnie de fruits frais de saison', price: '22,00 MAD', icon: Cake },
        { id: 18, category: 'pastry', name: 'Chouquettes', description: 'Petits choux sucrés aux perles de sucre', price: '12,00 MAD', icon: Cookie },

        // Plats (Main Dishes)
        { id: 19, category: 'dishes', name: 'Salade César', description: 'Salade verte, poulet grillé, parmesan, croutons', price: '35,00 MAD', icon: Salad },
        { id: 20, category: 'dishes', name: 'Sandwich Club', description: 'Pain de mie, poulet, bacon, salade, tomate', price: '40,00 MAD', icon: Sandwich },
        { id: 21, category: 'dishes', name: 'Pizza Margherita', description: 'Sauce tomate, mozzarella, basilic frais', price: '45,00 MAD', icon: Pizza },
        { id: 22, category: 'dishes', name: 'Pâtes Carbonara', description: 'Spaghetti, lardons, œuf, parmesan, crème', price: '50,00 MAD', icon: UtensilsCrossed },
        { id: 23, category: 'dishes', name: 'Burger Brioche', description: 'Pain brioche, steak haché, fromage, légumes', price: '43,00 MAD', icon: Sandwich },
        { id: 24, category: 'dishes', name: 'Quiche Lorraine', description: 'Pâte brisée, lardons, œufs, crème fraîche', price: '30,00 MAD', icon: UtensilsCrossed }
    ];

    // Top picks - most popular items from each category
    const topPicksItems: MenuItemData[] = [
        allMenuItems[2], // Petit Déjeuner Complet
        allMenuItems[7], // Cappuccino
        allMenuItems[13], // Croissant au Beurre
        allMenuItems[14], // Pain au Chocolat
        allMenuItems[20], // Pizza Margherita
        allMenuItems[22] // Burger Brioche
    ];

    const filters = [
        { key: 'all' as const, label: 'Tout' },
        { key: 'breakfast' as const, label: 'Petit Déjeuner' },
        { key: 'drinks' as const, label: 'Boissons' },
        { key: 'pastry' as const, label: 'Pâtisserie' },
        { key: 'dishes' as const, label: 'Plats' }
    ];

    const filteredPopupItems = popupFilter === 'all'
        ? allMenuItems
        : allMenuItems.filter(item => item.category === popupFilter);

    const MenuItem: React.FC<{ item: MenuItemData; isTopPick?: boolean }> = ({ item, isTopPick = false }) => {
        const IconComponent = item.icon;

        return (
            <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 ${isTopPick ? 'border-2 border-amber-200' : ''}`}>
                {isTopPick && (
                    <div className="bg-amber-900 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                        ⭐ TOP PICK
                    </div>
                )}
                <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-900 to-orange-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                        <h5 className="text-xl font-semibold text-amber-900 mb-2">{item.name}</h5>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">{item.description}</p>
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
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center text-amber-900 mb-8">
                        Nos Meilleurs Choix
                    </h2>

                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Découvrez notre sélection des produits les plus appréciés par nos clients.
                        Des saveurs authentiques qui font la réputation de La Brioche Blanche.
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
                            className="inline-flex items-center space-x-3 bg-amber-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                            type="button"
                        >
                            <Eye className="w-5 h-5" />
                            <span>Voir tout le menu</span>
                            <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                                {allMenuItems.length} articles
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
                        <div className="bg-amber-900 text-white p-6 flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-bold font-serif">Menu Complet</h3>
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
                            <div className="flex flex-wrap justify-center gap-3">
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
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Popup Menu Items */}
                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredPopupItems.map((item) => (
                                    <div key={item.id} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-900 to-orange-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h6 className="font-semibold text-amber-900 mb-1 text-sm">{item.name}</h6>
                                                <p className="text-gray-600 text-xs mb-2 line-clamp-2">{item.description}</p>
                                                <div className="font-bold text-orange-700 text-sm">{item.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Popup Footer */}
                        <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
                            <p className="text-gray-600 text-sm mb-3">
                                Pour commander, appelez-nous au{' '}
                                <a href="tel:+2125365004931" className="text-amber-900 font-semibold hover:underline">
                                    (+212) 536-500-4931
                                </a>
                            </p>
                            <button
                                onClick={() => setShowFullMenu(false)}
                                className="bg-amber-900 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors duration-200"
                                type="button"
                            >
                                Fermer le menu
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuSection;
