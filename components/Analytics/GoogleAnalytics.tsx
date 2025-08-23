"use client";
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
    GA_TRACKING_ID: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ GA_TRACKING_ID }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (typeof window !== 'undefined' && window.gtag) {
            const url = pathname + searchParams.toString();
            window.gtag('config', GA_TRACKING_ID, {
                page_path: url,
                page_title: document.title,
            });
        }
    }, [pathname, searchParams, GA_TRACKING_ID]);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              page_title: document.title,
              send_page_view: true,
              // Enhanced ecommerce for menu tracking
              custom_map: {
                'custom_parameter_1': 'menu_category',
                'custom_parameter_2': 'item_price'
              }
            });
            
            // Track menu interactions
            function trackMenuView(menuCategory) {
              gtag('event', 'view_item_list', {
                item_list_id: 'menu_items',
                item_list_name: menuCategory,
                items: []
              });
            }
            
            // Track contact form submissions
            function trackContactForm() {
              gtag('event', 'generate_lead', {
                currency: 'MAD',
                value: 0
              });
            }
            
            // Track phone calls
            function trackPhoneCall() {
              gtag('event', 'contact', {
                method: 'phone'
              });
            }
            
            // Make functions globally available
            window.trackMenuView = trackMenuView;
            window.trackContactForm = trackContactForm; 
            window.trackPhoneCall = trackPhoneCall;
          `,
                }}
            />
        </>
    );
};

export default GoogleAnalytics;
