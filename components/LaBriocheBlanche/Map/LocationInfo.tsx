// components/LaBriocheBlanche/Map/LocationInfo.tsx
"use client"
import React from 'react';
import { MapPin, Phone, Mail, Car } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

const LocationInfo: React.FC = () => {
    const { t, isRTL } = useLanguage();

    const infoCards = [
        {
            icon: MapPin,
            titleKey: 'map.location',
            content: (
                <p className={isRTL ? 'text-right' : ''}>
                    Boulevard al Maqdis 38<br />
                    34000 Oujda<br />
                    Morocco
                </p>
            )
        },
        {
            icon: Phone,
            titleKey: 'map.phone',
            content: (
                <p className={isRTL ? 'text-right' : ''}>
                    (+212) 5365-04931
                </p>
            )
        },
        {
            icon: Mail,
            titleKey: 'map.email',
            content: (
                <p className={isRTL ? 'text-right' : ''}>
                    labriocheblanche@gmail.com
                </p>
            )
        },
        {
            icon: Car,
            titleKey: 'map.parking',
            content: (
                <p className={isRTL ? 'text-right' : ''}>
                    {t('map.parkingAvailable')}
                </p>
            )
        }
    ];

    return (
        <div className="space-y-6">
            {infoCards.map((card, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className={`flex items-center space-x-3 mb-4 ${
                        isRTL ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                        <card.icon className="w-5 h-5 text-amber-900" />
                        <h4 className="font-semibold text-amber-900">{t(card.titleKey)}</h4>
                    </div>
                    <div className="text-gray-600">
                        {card.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LocationInfo;
