import React from 'react';
import { Heart, Leaf, Users, LucideIcon } from 'lucide-react';
import AboutCard from './AboutCard';

interface AboutData {
    icon: LucideIcon;
    title: string;
    description: string;
}

const AboutSection: React.FC = () => {
    const aboutData: AboutData[] = [
        {
            icon: Heart,
            title: "Depuis 2015",
            description: "Depuis que La Brioche Blanche a ouvert ses portes en 2015, c'est toujours le premier endroit auquel nos clients pensent, qu'ils souhaitent offrir une pâtisserie à leur famille ou passer un bon moment avec leurs proches."
        },
        {
            icon: Leaf,
            title: "Frais et Naturel",
            description: "Offrant la meilleure qualité dans son produit, La Brioche Blanche sélectionne ses ingrédients avec le plus grand soin pour garantir qu'ils sont frais et naturels"
        },
        {
            icon: Users,
            title: "Community Focused",
            description: "Sweet Aroma is more than a bakery - we're a gathering place where neighbors become friends over great food and coffee."
        }
    ];

    return (
        <section id="about" className="py-20 bg-yellow-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center text-amber-900 mb-16">
                    À Propos De Nous
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {aboutData.map((item: AboutData, index: number) => (
                        <AboutCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
