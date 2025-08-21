// lib/analytics.ts

// Define gtag types
declare global {
    interface Window {
        gtag: (
            command: string,
            targetId: string | Date,
            config?: Record<string, unknown>
        ) => void;
    }
}

// Type for event parameters
interface EventParameters {
    [key: string]: string | number | boolean | undefined;
}

export const trackEvent = (eventName: string, parameters?: EventParameters) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters);
    }
};

export const trackMenuView = (category: string) => {
    trackEvent('view_item_list', {
        item_list_id: 'menu',
        item_list_name: category,
    });
};

export const trackContactForm = () => {
    trackEvent('generate_lead', {
        currency: 'MAD',
        value: 0,
    });
};

export const trackPhoneCall = () => {
    trackEvent('contact', {
        method: 'phone',
    });
};

export const trackDirection = () => {
    trackEvent('get_directions', {
        content_type: 'location',
    });
};

// Analytics tracking functions only
// Components are now in @/components/Analytics
