import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import LocationInfo from './LocationInfo';

const MapSection: React.FC = () => {
    // Direct Google Maps link to your exact location
    const directMapLink = "https://maps.app.goo.gl/mZnSv4HhN1t7egha7";

    // Google Maps embed URL pointing directly to Boulevard al Maqdis 38, Oujda
    // This embed allows full interaction including zoom, pan, and street view
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.572839444788!2d-1.9109573!3d34.6857344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd787cb3c6c5b8b1%3A0x123456789abcdef!2sBoulevard%20al%20Maqdis%2038%2C%20Oujda%2034000%2C%20Morocco!5e0!3m2!1sen!2sma!4v1703123456789!5m2!1sen!2sma";

    return (
        <section id="map" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center text-amber-900 mb-16">
                    Trouvez-nous
                </h2>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg relative group">
                            {/* Interactive Google Maps Embed */}
                            <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-2xl"
                                title="La Brioche Blanche - Boulevard al Maqdis 38, Oujda"
                            />

                            {/* Floating location badge */}
                        </div>
                        {/* Direct link for mobile/accessibility */}
                        <div className="mt-4 text-center">
                            <a
                                href={directMapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-amber-900 hover:text-orange-700 transition-colors duration-200 font-medium"
                            >
                                <MapPin className="w-4 h-4" />
                                <span>Voir l'itinéraire sur Google Maps</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    <LocationInfo />
                </div>
            </div>
        </section>
    );
};

export default MapSection;
