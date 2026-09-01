import React from 'react';
import { useLocation } from 'react-router-dom';
import { abstractGraphics } from './images';

function Header({ title, titleClassName }) {
    const location = useLocation();
    const route = location.pathname;

    const upperAbstract = (
        <picture>
            <source media="(min-width: 576px)" srcSet={abstractGraphics.upper.full} />
            <img
                className="img-fluid abstract-img"
                src={abstractGraphics.upper.mobile}
                aria-hidden="true"
                alt="Colorful abstract shapes inspired by riograph prints"
            />
        </picture>
    );

    const lowerAbstract = (
        <picture>
            <source media="(min-width: 576px)" srcSet={abstractGraphics.lower.full} />
            <img
                className="img-fluid abstract-img"
                src={abstractGraphics.lower.mobile}
                aria-hidden="true"
                alt="More colorful abstract shapes inspired by riograph prints"
            />
        </picture>
    );

    if (route === '/') {
        return (
            <header id="main-content" className="container-fluid justify-content-center" aria-label="Header Site Banner">
                {upperAbstract}
                <section aria-label="Name and Title">
                    <h1 className="color-accent-red name name-header">
                        <span className="first-name">OLIVIA</span> <span className="last-name">KNESTAUT</span>
                    </h1>
                    <h2 className="tagline color-accent-blue">UX/UI DESIGNER &amp; FULL STACK DEVELOPER</h2>
                </section>
                {lowerAbstract}
            </header>
        );
    }

    return (
        <header id="main-content" className="container-fluid justify-content-center" aria-label="Header Site Banner">
            {upperAbstract}
            {title && <h1 className={`color-accent-red ${titleClassName || ''}`.trim()}>{title}</h1>}
        </header>
    );
}

export default Header;