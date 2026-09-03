import React, { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

function CursorCompanion() {
    const dotRef = useRef(null);
    const posRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);
    const [isTouch, setIsTouch] = useState(false);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        // Disable on touch devices and when reduced motion is preferred
        const hasTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
        setIsTouch(hasTouch);
        if (hasTouch || reducedMotion) return;

        const dot = dotRef.current;
        if (!dot) return;

        const lerp = (start, end, factor) => start + (end - start) * factor;
        const ease = 0.72;

        const update = () => {
            posRef.current.x = lerp(posRef.current.x, targetRef.current.x, ease);
            posRef.current.y = lerp(posRef.current.y, targetRef.current.y, ease);

            dot.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
            rafRef.current = requestAnimationFrame(update);
        };

        const handleMouseMove = (event) => {
            targetRef.current.x = event.clientX;
            targetRef.current.y = event.clientY;
        };

        const handleHoverStart = (event) => {
            const target = event.target.closest(
                'a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])',
            );
            if (target) {
                dot.classList.add('cursor-companion--hover');
            }
        };

        const handleHoverEnd = (event) => {
            const target = event.target.closest(
                'a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])',
            );
            if (target) {
                dot.classList.remove('cursor-companion--hover');
            }
        };

        const handleMouseDown = () => dot.classList.add('cursor-companion--click');
        const handleMouseUp = () => dot.classList.remove('cursor-companion--click');

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseover', handleHoverStart);
        document.addEventListener('mouseout', handleHoverEnd);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        rafRef.current = requestAnimationFrame(update);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleHoverStart);
            document.removeEventListener('mouseout', handleHoverEnd);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [reducedMotion]);

    if (isTouch || reducedMotion) return null;

    return <div ref={dotRef} className="cursor-companion" aria-hidden="true" />;
}

export default CursorCompanion;
