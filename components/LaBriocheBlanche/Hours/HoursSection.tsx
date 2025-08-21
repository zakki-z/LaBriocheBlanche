import React from 'react';
import { Clock } from 'lucide-react';

interface ScheduleItem {
    day: string;
    hours: string;
}

const HoursSection: React.FC = () => {
    const schedule: ScheduleItem[] = [
        { day: 'Lundi', hours: '7:00 AM - 11:00 PM' },
        { day: 'Mardi', hours: '7:00 AM - 11:00 PM' },
        { day: 'Mercredi', hours: '7:00 AM - 11:00 PM' },
        { day: 'Jeudi', hours: '7:00 AM - 11:00 PM' },
        { day: 'Vendredi', hours: '7:00 AM - 11:00 PM' },
        { day: 'Samedi - Dimanche', hours: '7:00 AM - 12:00 PM' }
    ];

    return (
        <section id="hours" className="py-20 bg-yellow-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center text-amber-900 mb-16">
                    Horaires d'ouverture
                </h2>

                <div className="max-w-md mx-auto">
                    <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                        <Clock className="w-12 h-12 text-amber-900 mx-auto mb-6" />
                        <h4 className="text-xl font-semibold text-amber-900 mb-8">Nous sommes ouverts</h4>

                        <div className="space-y-4">
                            {schedule.map((item, index) => (
                                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                    <span className="font-semibold text-gray-700">{item.day}</span>
                                    <span className="text-gray-600">{item.hours}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-sm text-gray-500">
                            <span className="inline-block mr-2">ℹ️</span>
                            Horaires prolongés pendant les vacances et les événements spéciaux
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HoursSection;
