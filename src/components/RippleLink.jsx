import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function RippleLink({ children, className = '', onClick, to, ...props }) {
    const linkRef = useRef(null);

    const handleClick = (event) => {
        const link = linkRef.current;
        if (link) {
            const rect = link.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${event.clientX - rect.left}px`;
            ripple.style.top = `${event.clientY - rect.top}px`;
            link.appendChild(ripple);
            setTimeout(() => ripple.remove(), 650);
        }
        if (onClick) onClick(event);
    };

    return (
        <Link ref={linkRef} className={className.trim()} to={to} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
}

export default RippleLink;
