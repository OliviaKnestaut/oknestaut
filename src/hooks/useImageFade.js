import { useEffect } from 'react';

function useImageFade() {
    useEffect(() => {
        const markLoaded = (event) => {
            const img = event.target;
            if (img instanceof HTMLImageElement) {
                img.classList.add('loaded');
            }
        };

        const markExisting = () => {
            for (const img of document.querySelectorAll('img')) {
                if (img.complete) {
                    img.classList.add('loaded');
                }
            }
        };

        document.addEventListener('load', markLoaded, true);
        document.addEventListener('error', markLoaded, true);
        markExisting();

        return () => {
            document.removeEventListener('load', markLoaded, true);
            document.removeEventListener('error', markLoaded, true);
        };
    }, []);
}

export default useImageFade;
