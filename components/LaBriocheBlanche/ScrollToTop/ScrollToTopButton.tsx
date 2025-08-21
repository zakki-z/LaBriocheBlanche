import React from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopButtonProps {
    showScrollTop: boolean;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ showScrollTop }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!showScrollTop) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-amber-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-700 transform hover:scale-110 transition-all duration-300 z-50"
            aria-label="Scroll to top"
        >
            <ChevronUp className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTopButton;
