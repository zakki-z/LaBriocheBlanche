// lib/polyfills.ts
// Global polyfills for server-side rendering

// Check if we're in a server environment
const isServer = typeof window === 'undefined';

if (isServer) {
    // Create a minimal self object that references global
    if (typeof (global as any).self === 'undefined') {
        (global as any).self = global;
    }

    // Ensure window is explicitly undefined
    if (typeof (global as any).window === 'undefined') {
        (global as any).window = undefined;
    }

    // Add other browser globals that might be expected
    if (typeof (global as any).document === 'undefined') {
        (global as any).document = undefined;
    }

    if (typeof (global as any).navigator === 'undefined') {
        (global as any).navigator = undefined;
    }

    if (typeof (global as any).localStorage === 'undefined') {
        (global as any).localStorage = undefined;
    }

    if (typeof (global as any).sessionStorage === 'undefined') {
        (global as any).sessionStorage = undefined;
    }
}

export {};
