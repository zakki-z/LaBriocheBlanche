"use client";
import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const CookieConsent: React.FC = () => {
    const [showConsent, setShowConsent] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setShowConsent(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setShowConsent(false);

        // Enable analytics after consent
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
                analytics_storage: 'granted',
                ad_storage: 'granted',
            });
        }
    };

    const declineCookies = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setShowConsent(false);
    };

    if (!showConsent) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-600">
                    <p>
                        Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.
                        <a href="/privacy-policy" className="text-amber-900 hover:underline ml-1">
                            Politique de confidentialité
                        </a>
                    </p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={declineCookies}
                        className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Refuser
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-4 py-2 text-sm bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
                    >
                        Accepter
                    </button>
                </div>
            </div>
        </div>
    );
};
