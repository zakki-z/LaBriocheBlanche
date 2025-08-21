import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

interface FooterProps {
    scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
    const quickLinks = [
        { id: 'home', label: 'Accueil' },
        { id: 'about', label: 'Concernant' },
        { id: 'menu', label: 'Menu' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h5 className="font-serif text-xl font-semibold mb-4">La Brioche Blanche</h5>
                        <p className="text-gray-400">Créer de délicieux souvenirs.</p>
                    </div>

                    <div>
                        <h5 className="font-semibold mb-4">Liens Rapides</h5>
                        <ul className="space-y-2 text-gray-400">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-semibold mb-4">Suivez-Nous</h5>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/labriocheblanche/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-orange-400 transition-colors"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/labriocheblanche/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-orange-400 transition-colors"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className="text-center text-gray-400">
                    <p>&copy; 2025 La Brioche Blanche. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
