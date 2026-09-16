import React from 'react';
import '../styles/photography.css';
import useMediaQuery from '../hooks/useMediaQuery';
import DimboxAnchor from './DimboxAnchor';
import FadeImage from './FadeImage';
import ScrollReveal from './ScrollReveal';

const DESKTOP_BREAKPOINT = '(min-width: 768px)';

function useDesktopRenderOrder(layout) {
    const isDesktop = useMediaQuery(DESKTOP_BREAKPOINT);
    if (!isDesktop) {
        return [0, 1, 2];
    }
    return layout === 'right' ? [1, 2, 0] : [0, 1, 2];
}

function PhotoGrid({ photos, galleryName, layout = 'right', className = '', delay = 0, disableReveal = false }) {
    const gridClass = layout === 'left' ? 'photo-grid-left' : 'photo-grid-right';

    // On desktop, render in visual reading order so dimbox prev/next matches the layout.
    // On mobile the grid always stacks, so keep a consistent horizontal-first order.
    const positionClasses = ['horiz-img', 'vert-img-1', 'vert-img-2'];
    const renderOrder = useDesktopRenderOrder(layout);

    const gridContent = renderOrder.map((photoIndex) => {
        const photo = photos[photoIndex];
        if (!photo) return null;
        const positionClass = positionClasses[photoIndex];
        const key = `${galleryName}-${photo.small}`;
        return (
            <DimboxAnchor
                key={key}
                className={positionClass}
                href={photo.large}
                data-dimbox={galleryName}
                data-dimbox-caption={photo.caption}
                data-dimbox-ratio="16x9"
                data-dimbox-type="image"
                aria-label={photo.ariaLabel}
            >
                <FadeImage fill src={photo.small} alt={photo.alt} loading="lazy" decoding="async" />
            </DimboxAnchor>
        );
    });

    if (disableReveal) {
        return (
            <figure className={`${gridClass} ${className}`.trim()} aria-label={`${galleryName} Photo Gallery`}>
                {gridContent}
            </figure>
        );
    }

    return (
        <ScrollReveal
            as="figure"
            className={`${gridClass} ${className}`.trim()}
            delay={delay}
            aria-label={`${galleryName} Photo Gallery`}
        >
            {gridContent}
        </ScrollReveal>
    );
}

export default PhotoGrid;
