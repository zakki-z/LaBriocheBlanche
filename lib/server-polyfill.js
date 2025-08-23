// lib/server-polyfill.js
// Simple server-side polyfill for browser globals

// Only run on server-side (Node.js environment)
if (typeof window === 'undefined' && typeof global !== 'undefined') {
    // Define self as global if it doesn't exist
    if (typeof self === 'undefined') {
        global.self = global;
    }
}
