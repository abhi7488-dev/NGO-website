import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    // State to control the button's visibility
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle the scrolling logic
    const handleScroll = () => {
        // Check if the user has scrolled down more than 300 pixels
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to scroll to the top of the page smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };

    // Add and remove the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs only once

    return (
        <button
            onClick={scrollToTop}
            className={`
                absolute bottom-4 right-4 p-3 rounded-full bg-blue-400 hover:bg-blue-500 text-white 
                shadow-lg transition-opacity duration-300 z-50
                ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            title="Go to top"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
            </svg>
        </button>
    );
};

export default ScrollToTopButton;