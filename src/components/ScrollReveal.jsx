import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function ScrollReveal({
    children,
    className = '',
    delay = 0,
    as: Component = 'div',
    direction = 'up',
    distance = '40px',
    duration = '0.7s',
    threshold = 0.15,
}) {
    const ref = useScrollReveal({ threshold });

    const style = {
        '--reveal-delay': `${delay}s`,
        '--reveal-distance': distance,
        '--reveal-duration': duration,
    };

    const directionClass = direction ? `reveal-${direction}` : '';

    return (
        <Component ref={ref} className={`scroll-reveal ${directionClass} ${className}`.trim()} style={style}>
            {children}
        </Component>
    );
}

export default ScrollReveal;
