// components/LaBriocheBlanche/Hours/HoursSection.tsx
"use client"
import React from 'react';
import { Clock } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface ScheduleItem {
    dayKey: string;
    hours: string;
}

const HoursSection: React.FC = () => {
    const { t, isRTL } = useLanguage();

    const schedule: ScheduleItem[] = [
        { dayKey: 'hours.days.monday', hours: t('hours.times.weekday') },
        { dayKey: 'hours.days.tuesday', hours: t('hours.times.weekday') },
        { dayKey: 'hours.days.wednesday', hours: t('hours.times.weekday') },
        { dayKey: 'hours.days.thursday', hours: t('hours.times.weekday') },
        { dayKey: 'hours.days.friday', hours: t('hours.times.weekday') },
        { dayKey: 'hours.days.weekend', hours: t('hours.times.weekend') }
    ];

    return (
        <section id="hours" className="py-20 bg-yellow-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`font-serif text-3xl lg:text-4xl font-bold text-center text-amber-900 mb-16 ${
                    isRTL ? 'text-right' : ''
                }`}>
                    {t('hours.title')}
                </h2>

                <div className="max-w-md mx-auto">
                    <div className={`bg-white rounded-2xl p-8 shadow-lg text-center ${
                        isRTL ? 'text-right' : ''
                    }`}>
                        <Clock className={`w-12 h-12 text-amber-900 mb-6 ${
                            isRTL ? 'mx-auto' : 'mx-auto'
                        }`} />
                        <h4 className="text-xl font-semibold text-amber-900 mb-8">
                            {t('hours.open')}
                        </h4>

                        <div className="space-y-4">
                            {schedule.map((item, index) => (
                                <div key={index} className={`flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0 ${
                                    isRTL ? 'flex-row-reverse' : ''
                                }`}>
                                    <span className="font-semibold text-gray-700">{t(item.dayKey)}</span>
                                    <span className="text-gray-600">{item.hours}</span>
                                </div>
                            ))}
                        </div>

                        <div className={`mt-6 text-sm text-gray-500 ${
                            isRTL ? 'text-right' : ''
                        }`}>
                            <span className={`inline-block mr-2 ${isRTL ? 'ml-2 mr-0' : ''}`}>ℹ️</span>
                            {t('hours.info')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HoursSection;
