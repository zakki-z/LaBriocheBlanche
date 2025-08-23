// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Fix the lockfile warning
    outputFileTracingRoot: __dirname,

    // Basic settings
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,

    // Image optimization
    images: {
        formats: ['image/webp', 'image/avif'],
        domains: ['labriocheblanche.ma'],
        unoptimized: false,
    },

    // TypeScript and ESLint
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
};

export default nextConfig;
