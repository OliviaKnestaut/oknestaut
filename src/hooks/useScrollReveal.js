import { useEffect, useRef } from 'react';
import useReducedMotion from './useReducedMotion';

function useScrollReveal(options = {}) {
    const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
    const ref = useRef(null);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        if (reducedMotion) {
            element.classList.add('is-visible');
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        if (triggerOnce) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!triggerOnce) {
                        entry.target.classList.remove('is-visible');
                    }
                }
            },
            { threshold, rootMargin },
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce, reducedMotion]);

    return ref;
}

export default useScrollReveal;
