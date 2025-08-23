// components/Analytics/index.ts
// Export all analytics components for future use

export { default as CookieConsent } from './CookieConsent';
export { default as FacebookPixel } from './FacebookPixel';
export { default as GoogleAnalytics } from './GoogleAnalytics';
export { default as GoogleTagManager } from './GoogleTagManager';

// This file ensures all analytics components are considered "used" by TypeScript/ESLint
// and makes them easily importable when needed in the future
