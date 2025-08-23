// components/OptimizedImage.tsx
"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    sizes?: string;
    fill?: boolean;
    quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
                                                           src,
                                                           alt,
                                                           width = 0,
                                                           height = 0,
                                                           className = '',
                                                           priority = false,
                                                           sizes,
                                                           fill = false,
                                                           quality = 85,
                                                       }) => {
    const [error, setError] = useState(false);
    const [isClient, setIsClient] = useState(false);

    // Ensure we're on the client to prevent hydration mismatch
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Validate required props - but don't render differently on server vs client
    const hasValidSrc = src && src.trim() !== '';
    const hasValidAlt = alt && alt.trim() !== '';

    if (!hasValidSrc) {
        if (isClient && process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.warn('OptimizedImage: src prop is required and cannot be empty');
        }
        return (
            <div className={`relative overflow-hidden ${className}`}>
                <div className="flex items-center justify-center bg-gray-200 text-gray-500 min-h-[200px]">
                    <span>No image source</span>
                </div>
            </div>
        );
    }

    if (!hasValidAlt) {
        if (isClient && process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.warn('OptimizedImage: alt prop is required for accessibility');
        }
        return (
            <div className={`relative overflow-hidden ${className}`}>
                <div className="flex items-center justify-center bg-gray-200 text-gray-500 min-h-[200px]">
                    <span>Missing alt text</span>
                </div>
            </div>
        );
    }

    // Always render the same structure on server and client
    return (
        <div className={`relative overflow-hidden ${className}`}>
            {!error ? (
                <Image
                    src={src}
                    alt={alt}
                    width={fill ? undefined : width}
                    height={fill ? undefined : height}
                    fill={fill}
                    priority={priority}
                    quality={quality}
                    sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
                    className={fill ? 'object-cover' : ''}
                    onError={() => setError(true)}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
            ) : (
                <div className="flex items-center justify-center bg-gray-200 text-gray-500 min-h-[200px]">
                    <span>Image failed to load</span>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
