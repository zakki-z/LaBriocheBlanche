import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
}

const AboutCard: React.FC<AboutCardProps> = ({
                                                 icon: Icon,
                                                 title,
                                                 description,
                                                 delay = 0
                                             }) => {
    return (
        <div
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            style={{ animationDelay: `${delay}ms` }}
        >
            <Icon className="w-12 h-12 text-amber-900 mx-auto mb-6" />
            <h4 className="text-xl font-semibold text-amber-900 mb-4">{title}</h4>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

export default AboutCard;
