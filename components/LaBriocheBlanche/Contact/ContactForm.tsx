// components/LaBriocheBlanche/Contact/ContactForm.tsx
"use client"
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface FormData {
    email: string;
    phone: string;
    inquiry: string;
    message: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm: React.FC = () => {
    const { t, isRTL } = useLanguage();

    const [formData, setFormData] = useState<FormData>({
        email: '',
        phone: '',
        inquiry: t('contact.form.inquiryTypes.general'),
        message: ''
    });

    const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const inquiryTypes = [
        { key: 'general', labelKey: 'contact.form.inquiryTypes.general' },
        { key: 'catering', labelKey: 'contact.form.inquiryTypes.catering' },
        { key: 'bakery', labelKey: 'contact.form.inquiryTypes.bakery' },
        { key: 'pastry', labelKey: 'contact.form.inquiryTypes.pastry' },
        { key: 'coffee', labelKey: 'contact.form.inquiryTypes.coffee' },
        { key: 'event', labelKey: 'contact.form.inquiryTypes.event' },
        { key: 'delivery', labelKey: 'contact.form.inquiryTypes.delivery' },
        { key: 'feedback', labelKey: 'contact.form.inquiryTypes.feedback' }
    ];

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
            // Simulate form submission - replace with your actual form handling logic
            // For now, we'll just simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 2000));

            // For actual implementation, you would send the data to your backend API
            // Example:
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            setSubmissionStatus('success');

            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    email: '',
                    phone: '',
                    inquiry: t('contact.form.inquiryTypes.general'),
                    message: ''
                });
                setSubmissionStatus('idle');
            }, 5000);

        } catch (_error) {
            setSubmissionStatus('error');
            setErrorMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        }
    };

    const getButtonContent = () => {
        switch (submissionStatus) {
            case 'submitting':
                return (
                    <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>{t('contact.form.sending')}</span>
                    </>
                );
            case 'success':
                return (
                    <>
                        <CheckCircle className="w-5 h-5" />
                        <span>{t('contact.form.sent')}</span>
                    </>
                );
            case 'error':
                return (
                    <>
                        <AlertCircle className="w-5 h-5" />
                        <span>{t('contact.form.retry')}</span>
                    </>
                );
            default:
                return (
                    <>
                        <Send className="w-5 h-5" />
                        <span>{t('contact.form.send')}</span>
                    </>
                );
        }
    };

    const getButtonStyles = () => {
        const baseStyles = `w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 ${
            isRTL ? 'flex-row-reverse space-x-reverse' : ''
        }`;

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
            <h4 className={`text-xl font-semibold text-amber-900 mb-6 ${
                isRTL ? 'text-right' : ''
            }`}>
                {t('contact.form.title')}
            </h4>

            {/* Info Message */}
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className={`flex items-center space-x-2 ${
                    isRTL ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                    <AlertCircle className="w-5 h-5 text-blue-600" />
                    <p className="text-blue-700 font-medium">Formulaire de contact</p>
                </div>
                <p className={`text-blue-600 text-sm mt-1 ${isRTL ? 'text-right' : ''}`}>
                    Votre message sera traité dans les plus brefs délais. Pour une réponse immédiate, appelez-nous directement.
                </p>
            </div>

            {/* Success Message */}
            {submissionStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className={`flex items-center space-x-2 ${
                        isRTL ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-700 font-medium">
                            {t('contact.form.success')}
                        </p>
                    </div>
                    <p className={`text-green-600 text-sm mt-1 ${isRTL ? 'text-right' : ''}`}>
                        Nous vous contacterons bientôt à {formData.email}.
                    </p>
                </div>
            )}

            {/* Error Message */}
            {submissionStatus === 'error' && errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className={`flex items-center space-x-2 ${
                        isRTL ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-700 font-medium">{t('contact.form.error')}</p>
                    </div>
                    <p className={`text-red-600 text-sm mt-1 ${isRTL ? 'text-right' : ''}`}>
                        {errorMessage}
                    </p>
                </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={`${t('contact.form.email')} *`}
                    className={`w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-900 focus:border-transparent outline-none ${
                        isRTL ? 'text-right' : ''
                    }`}
                    required
                    disabled={submissionStatus === 'submitting'}
                />

                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.phone')}
                        className={`px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-900 focus:border-transparent outline-none ${
                            isRTL ? 'text-right' : ''
                        }`}
                        disabled={submissionStatus === 'submitting'}
                    />
                    <select
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleInputChange}
                        className={`px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-900 focus:border-transparent outline-none ${
                            isRTL ? 'text-right' : ''
                        }`}
                        disabled={submissionStatus === 'submitting'}
                    >
                        {inquiryTypes.map((type) => (
                            <option key={type.key} value={t(type.labelKey)}>
                                {t(type.labelKey)}
                            </option>
                        ))}
                    </select>
                </div>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder={`${t('contact.form.message')} *`}
                    className={`w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-900 focus:border-transparent outline-none resize-none ${
                        isRTL ? 'text-right' : ''
                    }`}
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
            <div className={`mt-6 pt-6 border-t border-gray-200 text-center ${
                isRTL ? 'text-right' : ''
            }`}>
                <p className="text-gray-600 text-sm">
                    {t('contact.form.callDirect')}{' '}
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
