import React from 'react';
import { MapPin, Phone, Mail, Car } from 'lucide-react';

const LocationInfo: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-amber-900" />
                    <h4 className="font-semibold text-amber-900">Emplacement</h4>
                </div>
                <p className="text-gray-600">
                    Boulevard al Maqdis 38<br />
                    34000 Oujda<br />
                    Morocco
                </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                    <Phone className="w-5 h-5 text-amber-900" />
                    <h4 className="font-semibold text-amber-900">Téléphone</h4>
                </div>
                <p className="text-gray-600">(+212) 5365-04931</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                    <Mail className="w-5 h-5 text-amber-900" />
                    <h4 className="font-semibold text-amber-900">Email</h4>
                </div>
                <p className="text-gray-600">labriocheblanche@gmail.com</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                    <Car className="w-5 h-5 text-amber-900" />
                    <h4 className="font-semibold text-amber-900">Parking</h4>
                </div>
                <p className="text-gray-600">Parking disponible à proximité</p>
            </div>
        </div>
    );
};

export default LocationInfo;
