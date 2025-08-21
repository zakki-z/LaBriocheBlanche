import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoCardProps {
    icon: LucideIcon;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
                                                             icon: Icon,
                                                             title,
                                                             children,
                                                             className = ""
                                                         }) => {
    return (
        <div className={`bg-white/10 rounded-2xl p-6 ${className}`}>
            <div className="flex items-center space-x-3 mb-4">
                <Icon className="w-5 h-5" />
                <h4 className="font-semibold">{title}</h4>
            </div>
            {children}
        </div>
    );
};

export default ContactInfoCard;
