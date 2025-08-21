// components/StructuredData/LocalBusinessSchema.tsx
import Script from 'next/script';

interface LocalBusinessSchemaProps {
    language?: 'en' | 'fr' | 'ar' | 'es';
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ language = 'en' }) => {
    const businessData = {
        "@context": "https://schema.org",
        "@type": "Bakery",
        "@id": "https://labriocheblanche.ma/#bakery",
        "name": "La Brioche Blanche",
        "image": [
            "https://labriocheblanche.ma/images/storefront.jpg",
            "https://labriocheblanche.ma/images/interior.jpg",
            "https://labriocheblanche.ma/images/pastries.jpg"
        ],
        "description": language === 'fr'
            ? "Boulangerie française authentique à Oujda depuis 2015. Croissants frais, pâtisseries artisanales et café de spécialité."
            : "Authentic French bakery in Oujda since 2015. Fresh croissants, artisanal pastries, and specialty coffee.",
        "url": "https://labriocheblanche.ma",
        "telephone": "+2125365004931",
        "email": "labriocheblanche@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Boulevard al Maqdis 38",
            "addressLocality": "Oujda",
            "postalCode": "34000",
            "addressCountry": "MA",
            "addressRegion": "Oriental"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.6857,
            "longitude": -1.9109
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "07:00",
                "closes": "23:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Saturday",
                    "Sunday"
                ],
                "opens": "07:00",
                "closes": "12:00"
            }
        ],
        "servesCuisine": ["French", "Bakery", "Coffee", "Pastry"],
        "priceRange": "$$",
        "currenciesAccepted": "MAD",
        "paymentAccepted": ["Cash", "Credit Card"],
        "foundingDate": "2015",
        "founder": {
            "@type": "Organization",
            "name": "La Brioche Blanche"
        },
        "sameAs": [
            "https://www.facebook.com/labriocheblanche/",
            "https://www.instagram.com/labriocheblanche/"
        ],
        "hasMenu": {
            "@type": "Menu",
            "url": "https://labriocheblanche.ma/#menu"
        },
        "amenityFeature": [
            {
                "@type": "LocationFeatureSpecification",
                "name": "WiFi",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Parking",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Takeout",
                "value": true
            }
        ]
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(businessData)
            }}
        />
    );
};

// components/StructuredData/MenuSchema.tsx
interface MenuSchemaProps {
    language?: 'en' | 'fr' | 'ar' | 'es';
}

const MenuSchema: React.FC<MenuSchemaProps> = ({ language = 'en' }) => {
    const menuData = {
        "@context": "https://schema.org",
        "@type": "Menu",
        "@id": "https://labriocheblanche.ma/menu",
        "name": language === 'fr' ? "Menu La Brioche Blanche" : "La Brioche Blanche Menu",
        "description": language === 'fr'
            ? "Menu complet avec petit-déjeuner français, pâtisseries artisanales, boissons et plats principaux"
            : "Complete menu featuring French breakfast, artisanal pastries, beverages and main dishes",
        "hasMenuSection": [
            {
                "@type": "MenuSection",
                "name": language === 'fr' ? "Petit Déjeuner" : "Breakfast",
                "hasMenuItem": [
                    {
                        "@type": "MenuItem",
                        "name": language === 'fr' ? "Petit Déjeuner Français" : "French Breakfast",
                        "description": language === 'fr' ? "Croissant, confiture, beurre, café ou thé" : "Croissant, jam, butter, coffee or tea",
                        "offers": {
                            "@type": "Offer",
                            "price": "23.00",
                            "priceCurrency": "MAD"
                        }
                    },
                    {
                        "@type": "MenuItem",
                        "name": language === 'fr' ? "Petit Déjeuner Complet" : "Complete Breakfast",
                        "description": language === 'fr' ? "Croissant, pain, confiture, fromage, œuf, boisson" : "Croissant, bread, jam, cheese, egg, beverage",
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
                "name": language === 'fr' ? "Pâtisserie" : "Pastry",
                "hasMenuItem": [
                    {
                        "@type": "MenuItem",
                        "name": language === 'fr' ? "Croissant au Beurre" : "Butter Croissant",
                        "description": language === 'fr' ? "Croissant français classique fait maison" : "Classic homemade French croissant",
                        "offers": {
                            "@type": "Offer",
                            "price": "8.00",
                            "priceCurrency": "MAD"
                        }
                    }
                ]
            }
        ],
        "inLanguage": language
    };

    return (
        <Script
            id="menu-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(menuData)
            }}
        />
    );
};

// components/StructuredData/OrganizationSchema.tsx
const OrganizationSchema: React.FC = () => {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://labriocheblanche.ma/#organization",
        "name": "La Brioche Blanche",
        "url": "https://labriocheblanche.ma",
        "logo": "https://labriocheblanche.ma/logo.png",
        "image": "https://labriocheblanche.ma/og-image.jpg",
        "description": "Authentic French bakery serving Oujda since 2015 with fresh pastries, artisanal bread, and specialty coffee.",
        "foundingDate": "2015",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+2125365004931",
            "contactType": "customer service",
            "availableLanguage": ["French", "English", "Arabic"],
            "areaServed": "Oujda"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Boulevard al Maqdis 38",
            "addressLocality": "Oujda",
            "postalCode": "34000",
            "addressCountry": "MA"
        },
        "sameAs": [
            "https://www.facebook.com/labriocheblanche/",
            "https://www.instagram.com/labriocheblanche/"
        ]
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationData)
            }}
        />
    );
};

export { LocalBusinessSchema, MenuSchema, OrganizationSchema };
