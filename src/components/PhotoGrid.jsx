import React from 'react';

function PhotoGrid({ photos, galleryName, layout = 'right', className = '' }) {
    const gridClass = layout === 'left' ? 'photo-grid-left' : 'photo-grid-right';

    // Render right-layout grids in visual tab order (verticals first, then horizontal)
    // while keeping each image in its correct grid area.
    const positionClasses = ['horiz-img', 'vert-img-1', 'vert-img-2'];
    const renderOrder = layout === 'right' ? [1, 2, 0] : [0, 1, 2];

    return (
        <figure className={`${gridClass} ${className}`.trim()} aria-label={`${galleryName} Photo Gallery`}>
            {renderOrder.map((photoIndex) => {
                const photo = photos[photoIndex];
                if (!photo) return null;
                const positionClass = positionClasses[photoIndex];
                return (
                    <a
                        key={photo.src}
                        className={positionClass}
                        href={photo.large}
                        data-dimbox={galleryName}
                        data-dimbox-caption={photo.caption}
                        data-dimbox-ratio="16x9"
                        data-dimbox-type="image"
                        aria-label={photo.ariaLabel}
                    >
                        <img
                            srcSet={`${photo.small} 1x, ${photo.large} 2x`}
                            src={photo.small}
                            alt={photo.alt}
                        />
                    </a>
                );
            })}
        </figure>
    );
}

export default PhotoGrid;
