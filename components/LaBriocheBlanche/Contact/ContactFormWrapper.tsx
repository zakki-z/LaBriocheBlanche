// components/LaBriocheBlanche/Contact/ContactFormWrapper.tsx
"use client"
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ContactForm to avoid SSR issues
const ContactForm = dynamic(() => import('./ContactForm'), {
    ssr: false,
    loading: () => (
        <div className="bg-white rounded-2xl p-8">
            <div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
                <div className="space-y-4">
                    <div className="h-12 bg-gray-200 rounded"></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="h-12 bg-gray-200 rounded"></div>
                        <div className="h-12 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-32 bg-gray-200 rounded"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                </div>
            </div>
        </div>
    )
});

const ContactFormWrapper: React.FC = () => {
    return <ContactForm />;
};

export default ContactFormWrapper;
