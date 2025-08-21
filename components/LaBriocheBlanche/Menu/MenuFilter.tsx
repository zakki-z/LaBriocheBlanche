import React from 'react';

export type FilterType = 'all' | 'breakfast' | 'drinks' | 'pastry' | 'dishes';

interface FilterOption {
    key: FilterType;
    label: string;
}

interface MenuFilterProps {
    activeFilter: FilterType;
    setActiveFilter: (filter: FilterType) => void;
}

const MenuFilter: React.FC<MenuFilterProps> = ({ activeFilter, setActiveFilter }) => {
    const filters: FilterOption[] = [
        { key: 'all', label: 'Tout' },
        { key: 'breakfast', label: 'Petit Déjeuner' },
        { key: 'drinks', label: 'Boissons' },
        { key: 'pastry', label: 'Pâtisserie' },
        { key: 'dishes', label: 'Plats' }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter: FilterOption) => (
                <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        activeFilter === filter.key
                            ? 'bg-amber-900 text-white shadow-lg'
                            : 'border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white'
                    }`}
                    type="button"
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export default MenuFilter;
