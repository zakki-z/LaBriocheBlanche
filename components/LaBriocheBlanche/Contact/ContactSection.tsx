// components/LaBriocheBlanche/Contact/ContactSection.tsx
"use client"
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import ContactInfoCard from './ContactInfoCard';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
    const { t, isRTL } = useLanguage();

    return (
        <section id="contact" className="py-20 bg-amber-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`font-serif text-3xl lg:text-4xl font-bold text-center mb-16 ${
                    isRTL ? 'text-right' : ''
                }`}>
                    {t('contact.title')}
                </h2>

                <div className={`grid lg:grid-cols-2 gap-12 ${
                    isRTL ? 'lg:grid-cols-2' : ''
                }`}>
                    <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
                        <ContactInfoCard icon={MapPin} title={t('contact.visitUs')}>
                            <p className={isRTL ? 'text-right' : ''}>
                                Boulevard al Maqdis 38<br />
                                34000 Oujda<br />
                                Morocco
                            </p>
                        </ContactInfoCard>

                        <ContactInfoCard icon={Phone} title={t('contact.callUs')}>
                            <p className={isRTL ? 'text-right' : ''}>
                                (+212) 5365-04931<br />
                            </p>
                        </ContactInfoCard>

                        <ContactInfoCard icon={Mail} title={t('contact.emailUs')}>
                            <p className={isRTL ? 'text-right' : ''}>
                                labriocheblanche@gmail.com<br />
                            </p>
                        </ContactInfoCard>
                    </div>

                    <div className={isRTL ? 'lg:order-1' : ''}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
