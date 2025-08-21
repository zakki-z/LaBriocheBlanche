import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactInfoCard from './ContactInfoCard';
import ContactForm from './ContactForm';

interface ContactSectionProps {
    isFormSubmitting: boolean;
    handleFormSubmit: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isFormSubmitting, handleFormSubmit }) => {
    return (
        <section id="contact" className="py-20 bg-amber-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center mb-16">
                    Contactez-nous
                </h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <ContactInfoCard icon={MapPin} title="Visitez-nous">
                            <p>Boulevard al Maqdis 38<br />34000 Oujdat<br />Morocco</p>
                        </ContactInfoCard>

                        <ContactInfoCard icon={Phone} title="Appelez-nous">
                            <p>(+212) 5365-04931<br /></p>
                        </ContactInfoCard>

                        <ContactInfoCard icon={Mail} title="Envoyez-nous un e-mail">
                            <p>labriocheblanche@gmail.com<br /></p>
                        </ContactInfoCard>
                    </div>

                    <ContactForm isFormSubmitting={isFormSubmitting} handleFormSubmit={handleFormSubmit} />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
