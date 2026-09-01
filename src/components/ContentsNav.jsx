import React, { useEffect, useRef } from 'react';

function ContentsNav({ links, skipTargetId, accentColor = 'color-accent-blue' }) {
    const navRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const contentsNav = navRef.current;
        if (!navbar || !contentsNav) return;

        function updateStickyOffsets() {
            const navbarHeight = navbar.offsetHeight - 1;
            const contentsHeight = contentsNav.offsetHeight;
            document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
            document.documentElement.style.setProperty('--sticky-offset', `${navbarHeight + contentsHeight}px`);
        }

        const resizeObserver = new ResizeObserver(updateStickyOffsets);
        resizeObserver.observe(navbar);
        resizeObserver.observe(contentsNav);
        updateStickyOffsets();

        const sections = linksRef.current
            .map((link) => (link ? document.querySelector(link.getAttribute('href')) : null))
            .filter(Boolean);

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const activeLink = document.querySelector(`.contents-link[href="#${entry.target.id}"]`);
                    if (!activeLink) return;
                    linksRef.current.forEach((link) => {
                        if (link) link.classList.remove('active');
                    });
                    activeLink.classList.add('active');
                    activeLink.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                });
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
        );

        sections.forEach((section) => sectionObserver.observe(section));

        return () => {
            resizeObserver.disconnect();
            sectionObserver.disconnect();
        };
    }, [links]);

    return (
        <section className="contents-flex" aria-label="Contents and Buttons">
            {skipTargetId && (
                <a
                    href={`#${skipTargetId}`}
                    className="skip-link contents-skip-link color-accent-blue-hover"
                    aria-label="Skip Table of Contents"
                >
                    Skip Table of Contents
                </a>
            )}
            <nav className="contents" aria-label="Contents Navigation" ref={navRef}>
                {links.map((link, index) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`contents-link ${accentColor}`}
                        aria-label={link.label}
                        ref={(el) => { linksRef.current[index] = el; }}
                    >
                        {link.text}
                    </a>
                ))}
            </nav>
        </section>
    );
}

export default ContentsNav;
