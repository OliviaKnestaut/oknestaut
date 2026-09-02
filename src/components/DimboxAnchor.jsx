import React from 'react';
import { trackLightboxOpen } from '../utils/analytics';
import useDimbox from '../hooks/useDimbox';

function DimboxAnchor({ children, href, 'aria-label': ariaLabel, ...props }) {
    const { openWhenReady } = useDimbox();
    const handleClick = (event) => {
        // Allow standard modifier clicks (new tab, etc.) to behave normally
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        trackLightboxOpen(ariaLabel || href);
        openWhenReady(event.currentTarget);
    };
    return (
        <a href={href} {...props} aria-label={ariaLabel} onClick={handleClick}>
            {children}
        </a>
    );
}

export default DimboxAnchor;
