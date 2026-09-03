import React, { useRef } from 'react';

function RippleButton({ children, className = '', onClick, ...props }) {
    const buttonRef = useRef(null);

    const handleClick = (event) => {
        const button = buttonRef.current;
        if (button) {
            const rect = button.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${event.clientX - rect.left}px`;
            ripple.style.top = `${event.clientY - rect.top}px`;
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 650);
        }
        if (onClick) onClick(event);
    };

    return (
        <button ref={buttonRef} className={`ripple-button ${className}`.trim()} onClick={handleClick} {...props}>
            {children}
        </button>
    );
}

export default RippleButton;
