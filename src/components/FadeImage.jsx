import React, { useState } from 'react';

function FadeImage({ className = '', alt = '', fill = false, ...imgProps }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <span
            className={`fade-image ${fill ? 'fade-image-fill' : ''} ${loaded ? 'fade-image-loaded' : 'fade-image-loading'} ${className}`.trim()}
        >
            <img
                {...imgProps}
                alt={alt}
                className="fade-image-img"
                onLoad={(event) => {
                    setLoaded(true);
                    if (imgProps.onLoad) {
                        imgProps.onLoad(event);
                    }
                }}
            />
        </span>
    );
}

export default FadeImage;
