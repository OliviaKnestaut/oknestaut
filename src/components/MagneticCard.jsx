import React, { useRef } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

const MAX_ROTATION = 5; // degrees
const MAX_TRANSLATION = 8; // pixels

function MagneticCard({ children, className = '', intensity = 1 }) {
    const cardRef = useRef(null);
    const reducedMotion = useReducedMotion();

    const handleMouseMove = (event) => {
        if (reducedMotion || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const rotateX = -percentY * MAX_ROTATION * intensity;
        const rotateY = percentX * MAX_ROTATION * intensity;
        const translateX = percentX * MAX_TRANSLATION * intensity;
        const translateY = percentY * MAX_TRANSLATION * intensity;

        cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 12px)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = '';
        }
    };

    return (
        <div
            ref={cardRef}
            className={`magnetic-card ${className}`.trim()}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onBlur={handleMouseLeave}
        >
            {children}
        </div>
    );
}

export default MagneticCard;
