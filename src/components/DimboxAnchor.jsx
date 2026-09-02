import React from 'react';
import useDimbox from '../hooks/useDimbox';

function DimboxAnchor({ children, href, ...props }) {
    const { onClick } = useDimbox();
    return (
        <a href={href} {...props} onClick={onClick}>
            {children}
        </a>
    );
}

export default DimboxAnchor;
