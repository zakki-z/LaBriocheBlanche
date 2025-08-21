// components/StructuredData/StructuredData.tsx
import React from 'react';

interface StructuredDataProps {
    type: 'organization' | 'localBusiness' | 'menu';
    data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
    const getStructuredData = () => {
        switch (type) {
            case 'organization':
                return {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "La Brioche Blanche",
                    "url": "https://labriocheblanche.ma",
                    "logo": "https://labriocheblanche.ma/logo.png",
                    "description": "Boulangerie française authentique depuis 2015 à Oujda",
                    "foundingDate": "2015",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+212-536-500-4931",
                        "contactType": "customer service",
                        "email": "labriocheblanche@gmail.com"
                    },
                    "sameAs": [
                        "https://www.facebook.com/labriocheblanche/",
                        "https://www.instagram.com/labriocheblanche/"
                    ]
                };

            case 'localBusiness':
                return {
                    "@context": "https://schema.org",
                    "@type": "Bakery",
                    "name": "La Brioche Blanche",
                    "image": "https://labriocheblanche.ma/restaurant-image.jpg",
                    "description": "Boulangerie française authentique depuis 2015 à Oujda. Spécialisée en viennoiseries, pâtisseries françaises et plats traditionnels.",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Boulevard al Maqdis 38",
                        "addressLocality": "Oujda",
                        "postalCode": "34000",
                        "addressCountry": "MA"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "34.6857344",
                        "longitude": "-1.9109573"
                    },
                    "telephone": "+212-536-500-4931",
                    "email": "labriocheblanche@gmail.com",
                    "url": "https://labriocheblanche.ma",
                    "openingHours": [
                        "Mo-Fr 07:00-23:00",
                        "Sa-Su 07:00-12:00"
                    ],
                    "priceRange": "$$",
                    "servesCuisine": "French",
                    "acceptsReservations": true,
                    "paymentAccepted": "Cash, Credit Card",
                    "currenciesAccepted": "MAD",
                    "foundingDate": "2015",
                    "sameAs": [
                        "https://www.facebook.com/labriocheblanche/",
                        "https://www.instagram.com/labriocheblanche/"
                    ],
                    "hasMenu": "https://labriocheblanche.ma/#menu"
                };

            case 'menu':
                return {
                    "@context": "https://schema.org",
                    "@type": "Menu",
                    "name": "La Brioche Blanche Menu",
                    "description": "Menu complet de La Brioche Blanche avec petit-déjeuner, viennoiseries, pâtisseries et plats français",
                    "hasMenuSection": [
                        {
                            "@type": "MenuSection",
                            "name": "Petit Déjeuner",
                            "description": "Petits déjeuners français et continentaux",
                            "hasMenuItem": [
                                {
                                    "@type": "MenuItem",
                                    "name": "Petit Déjeuner Complet",
                                    "description": "Croissant, pain, confiture, fromage, œuf, boisson",
                                    "offers": {
                                        "@type": "Offer",
                                        "price": "38.00",
                                        "priceCurrency": "MAD"
                                    }
                                }
                            ]
                        },
                        {
                            "@type": "MenuSection",
                            "name": "Pâtisserie",
                            "description": "Pâtisseries françaises traditionnelles",
                            "hasMenuItem": [
                                {
                                    "@type": "MenuItem",
                                    "name": "Croissant au Beurre",
                                    "description": "Croissant français classique fait maison",
                                    "offers": {
                                        "@type": "Offer",
                                        "price": "8.00",
                                        "priceCurrency": "MAD"
                                    }
                                }
                            ]
                        }
                    ]
                };

            default:
                return null;
        }
    };

    const structuredData = getStructuredData();

    if (!structuredData) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData)
            }}
        />
    );
};

export default StructuredData;
