import React from 'react';
import { trackLightboxOpen } from '../utils/analytics';
import useDimbox from '../hooks/useDimbox';

function DimboxAnchor({ children, href, 'aria-label': ariaLabel, ...props }) {
    const { onClick } = useDimbox();
    const handleClick = (event) => {
        trackLightboxOpen(ariaLabel || href);
        onClick(event);
    };
    return (
        <a href={href} {...props} aria-label={ariaLabel} onClick={handleClick}>
            {children}
        </a>
    );
}

export default DimboxAnchor;
