import React from 'react';

interface NavigationItem {
    id: string;
    label: string;
}

interface NavigationProps {
    navbarScrolled: boolean;
    scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ navbarScrolled, scrollToSection }) => {
    const navigationItems: NavigationItem[] = [
        { id: 'home', label: 'Accueil' },
        { id: 'about', label: 'À propos de nous' },
        { id: 'menu', label: 'Menu' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'map', label: 'Localisation' },
        { id: 'hours', label: "Horaires d'ouverture" },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                navbarScrolled
                    ? 'bg-white/98 backdrop-blur-lg shadow-lg'
                    : 'bg-white/95 backdrop-blur-md shadow-md'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center space-x-2 text-amber-900 font-bold text-xl"
                        type="button"
                    >
                        <img
                            src="/labriocheblanche.jpg"
                            alt="La Brioche Blanche logo"
                            className="w-10 h-10 rounded-full shadow-lg"
                        />
                        <span className="font-serif">La Brioche Blanche</span>
                    </button>

                    <div className="hidden md:flex space-x-8">
                        {navigationItems.map((item: NavigationItem) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium"
                                type="button"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
