import { useCallback, useEffect, useState } from 'react';

const DIMBOX_SCRIPT_URL = `${process.env.PUBLIC_URL}/js/dimbox.min.js`;

let dimboxPromise = null;

function loadDimboxScript() {
    if (dimboxPromise) {
        return dimboxPromise;
    }

    dimboxPromise = new Promise((resolve, reject) => {
        if (window.dimbox) {
            resolve(window.dimbox);
            return;
        }

        const existing = document.querySelector(`script[src="${DIMBOX_SCRIPT_URL}"]`);
        if (existing) {
            existing.addEventListener('load', () => resolve(window.dimbox));
            existing.addEventListener('error', reject);
            return;
        }

        const script = document.createElement('script');
        script.src = DIMBOX_SCRIPT_URL;
        script.async = true;
        script.onload = () => resolve(window.dimbox);
        script.onerror = reject;
        document.body.appendChild(script);
    });

    return dimboxPromise;
}

function configureDimbox(dimbox) {
    dimbox.setConfig({
        autoBindClick: false,
        closeOnOverlayClick: true,
        fullscreen: false,
        showFullscreenButton: true,
        svgFullscreenButton:
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5"/></svg>',
        svgFullscreenExitButton:
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z"/></svg>',
        iframeRatio: '16x9',
        selector: 'a[data-dimbox]',
        showDownloadButton: true,
        svgCloseButton:
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',
        svgDownloadButton:
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>',
        svgPrevNextButton:
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>',
        theme: 'dark',
        videoAutoplay: true,
        videoControls: true,
        videoLoop: false,
        videoVolume: null,
        xhrResponseType: 'json',
    });

    // NOTE: dimbox caches the result of querySelectorAll(config.selector) on init
    // and uses that cached list for gallery prev/next navigation. In a React Router
    // SPA this causes stale gallery links after navigating between pages. The vendored
    // public/js/dimbox.min.js has been patched so createPrevNextButtons queries the
    // live DOM instead of the cached list.
    dimbox.init();
}

let configuredPromise = null;

function getConfiguredDimbox() {
    if (!configuredPromise) {
        configuredPromise = loadDimboxScript().then((dimbox) => {
            configureDimbox(dimbox);
            return dimbox;
        });
    }
    return configuredPromise;
}

function useDimbox() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let cancelled = false;
        getConfiguredDimbox()
            .then(() => {
                if (!cancelled) setReady(true);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.error('Failed to load dimbox:', error);
            });
        return () => {
            cancelled = true;
        };
    }, []);

    const openWhenReady = useCallback((element) => {
        getConfiguredDimbox().then((dimbox) => {
            dimbox.open(element);
        });
    }, []);

    const onClick = useCallback(
        (event) => {
            if (!ready) {
                event.preventDefault();
                openWhenReady(event.currentTarget);
            }
        },
        [ready, openWhenReady],
    );

    return { ready, dimbox: window.dimbox, openWhenReady, onClick };
}

export default useDimbox;
