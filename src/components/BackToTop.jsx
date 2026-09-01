import React, { useState, useEffect } from 'react';
import backToTopIcon from '../images/icons/back-to-top.svg';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            type="button"
            className="go-top"
            onClick={scrollToTop}
            style={{
                opacity: isVisible ? '1' : '0',
                transition: 'opacity 0.3s ease',
                pointerEvents: isVisible ? 'auto' : 'none'
            }}
            aria-label="Back to top"
        >
            <img src={backToTopIcon} alt="Back to Top Arrow Icon" />
        </button>
    );
}

export default BackToTop;
