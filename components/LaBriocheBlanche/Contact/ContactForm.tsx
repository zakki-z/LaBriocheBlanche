// components/LaBriocheBlanche/Contact/ContactForm.tsx
"use client"
import React, { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
    email: string;
    phone: string;
    inquiry: string;
    message: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

// EmailJS Configuration - Replace these with your actual values from EmailJS dashboard
const EMAILJS_CONFIG = {
    SERVICE_ID: 'your_service_id',     // Replace with your EmailJS service ID
    TEMPLATE_ID: 'your_template_id',   // Replace with your EmailJS template ID
    PUBLIC_KEY: 'your_public_key',     // Replace with your EmailJS public key
};

const ContactForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<FormData>({
        email: '',
        phone: '',
        inquiry: 'Demande Générale',
        message: ''
    });

    const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ): void => {
        const { name, value } = e.target;
        setFormData((prev: FormData) => ({
            ...prev,
            [name]: value
        }));
        // Reset status when user starts typing again
        if (submissionStatus === 'error') {
            setSubmissionStatus('idle');
            setErrorMessage('');
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setSubmissionStatus('submitting');
        setErrorMessage('');

        try {
            // Check if EmailJS config is set
            if (EMAILJS_CONFIG.SERVICE_ID === 'your_service_id') {
                throw new Error('Veuillez configurer EmailJS dans le code (voir les commentaires)');
            }

            // Prepare template parameters for EmailJS
            const templateParams = {
                from_name: formData.email.split('@')[0], // Get name from email
                from_email: formData.email,
                phone: formData.phone || 'Non fourni',
                inquiry_type: formData.inquiry,
                message: formData.message,
                to_email: 'labriocheblanche@gmail.com',
                reply_to: formData.email,
                // Add timestamp
                timestamp: new Date().toLocaleString('fr-FR', {
                    timeZone: 'Africa/Casablanca',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            // Send email using EmailJS
            const result = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            console.log('Email sent successfully:', result);
            setSubmissionStatus('success');

            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    email: '',
                    phone: '',
                    inquiry: 'Demande Générale',
                    message: ''
                });
                setSubmissionStatus('idle');
            }, 5000);

        } catch (error: any) {
            console.error('EmailJS error:', error);
            setSubmissionStatus('error');

            // Provide user-friendly error messages
            if (error?.text?.includes('Invalid') || error?.text?.includes('template')) {
                setErrorMessage('Configuration EmailJS incorrecte. Contactez l\'administrateur.');
            } else if (error?.text?.includes('quota') || error?.text?.includes('limit')) {
                setErrorMessage('Limite d\'envoi atteinte. Veuillez réessayer plus tard.');
            } else {
                setErrorMessage(
                    error?.text ||
                    error?.message ||
                    'Erreur lors de l\'envoi du message. Veuillez réessayer.'
                );
            }
        }
    };

    const getButtonContent = () => {
        switch (submissionStatus) {
            case 'submitting':
                return (
                    <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Envoi en cours...</span>
                    </>
                );
            case 'success':
                return (
                    <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message envoyé!</span>
                    </>
                );
            case 'error':
                return (
                    <>
                        <AlertCircle className="w-5 h-5" />
                        <span>Réessayer</span>
                    </>
                );
            default:
                return (
                    <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message</span>
                    </>
                );
        }
    };

    const getButtonStyles = () => {
        const baseStyles = "w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50";

        switch (submissionStatus) {
            case 'success':
                return `${baseStyles} bg-green-600 text-white`;
            case 'error':
                return `${baseStyles} bg-red-600 text-white hover:bg-red-700`;
            default:
                return `${baseStyles} bg-amber-900 text-white hover:bg-orange-700`;
        }
    };

    return (
        <div className="bg-white rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-amber-900 mb-6">Envoyez-nous un message</h4>

            {/* Configuration Warning */}
            {EMAILJS_CONFIG.SERVICE_ID === 'your_service_id' && (
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-yellow-600" />
                        <p className="text-yellow-700 font-medium">Configuration requise</p>
                    </div>
                    <p className="text-yellow-600 text-sm mt-1">
                        Veuillez configurer EmailJS pour activer l'envoi d'emails.
                        <br />
                        <a
                            href="https://www.emailjs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-yellow-800"
                        >
                            Créer un compte EmailJS →
                        </a>
                    </p>
                </div>
            )}

            {/* Success Message */}
            {submissionStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-700 font-medium">
                            Merci! Votre message a été envoyé avec succès.
                        </p>
                    </div>
                    <p className="text-green-600 text-sm mt-1">
                        Nous vous répondrons dans les plus brefs délais à {formData.email}.
                    </p>
                </div>
            )}

            {/* Error Message */}
            {submissionStatus === 'error' && errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-700 font-medium">Erreur d'envoi</p>
                    </div>
                    <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
                </div>
            )}

            <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Votre email *"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-900 focus:border-transparent outline-none"
                    required
                    disabled={submissionStatus === 'submitting'}
                />

                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Numéro de téléphone"
                        className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-900 focus:border-transparent outline-none"
                        disabled={submissionStatus === 'submitting'}
                    />
                    <select
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-900 focus:border-transparent outline-none"
                        disabled={submissionStatus === 'submitting'}
                    >
                        <option value="Demande Générale">Demande Générale</option>
                        <option value="Restauration">Restauration</option>
                        <option value="Boulangerie">Boulangerie</option>
                        <option value="Pâtisserie">Pâtisserie</option>
                        <option value="Café">Café</option>
                        <option value="Événement Privé">Événement Privé</option>
                        <option value="Livraison">Livraison</option>
                        <option value="Feedback">Feedback</option>
                    </select>
                </div>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Votre message *"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-900 focus:border-transparent outline-none resize-none"
                    required
                    disabled={submissionStatus === 'submitting'}
                />

                <button
                    type="submit"
                    disabled={submissionStatus === 'submitting'}
                    className={getButtonStyles()}
                >
                    {getButtonContent()}
                </button>
            </form>

            {/* Contact Info Footer */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-sm">
                    Ou appelez-nous directement au{' '}
                    <a
                        href="tel:+2125365004931"
                        className="text-amber-900 font-semibold hover:underline"
                    >
                        (+212) 536-500-4931
                    </a>
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    Boulevard al Maqdis 38, 34000 Oujda, Morocco
                </p>
            </div>
        </div>
    );
};

export default ContactForm;
