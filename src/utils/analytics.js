import ReactGA from 'react-ga4';

export function trackEvent(category, action, label = '') {
    ReactGA.event({ category, action, label });
}

export function trackOutboundLink(url, label = url) {
    ReactGA.event({
        category: 'Outbound Link',
        action: url,
        label,
    });
}

export function openTrackedLink(event, url, label = url) {
    trackOutboundLink(url, label);
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    window.open(url, '_blank');
}

export function trackLightboxOpen(label = '') {
    ReactGA.event({
        category: 'Lightbox',
        action: 'Open',
        label,
    });
}
