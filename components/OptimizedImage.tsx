// components/OptimizedImage.tsx
import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    priority?: boolean;
    sizes?: string;
    fill?: boolean;
    quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
                                                           src,
                                                           alt,
                                                           width,
                                                           height,
                                                           className = '',
                                                           priority = false,
                                                           sizes,
                                                           fill = false,
                                                           quality = 85,
                                                       }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

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
                    className={`transition-opacity duration-300 ${
                        isLoading ? 'opacity-0' : 'opacity-100'
                    } ${fill ? 'object-cover' : ''}`}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setError(true);
                        setIsLoading(false);
                    }}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
            ) : (
                <div className="flex items-center justify-center bg-gray-200 text-gray-500">
                    <span>Image failed to load</span>
                </div>
            )}

            {isLoading && !error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                    <div className="w-8 h-8 border-2 border-amber-900 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
