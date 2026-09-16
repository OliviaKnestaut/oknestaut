import React from 'react';
import { useLocation } from 'react-router-dom';
import AbstractSymbolRow from './AbstractSymbolRow';

function Header({ title, titleClassName }) {
    const location = useLocation();
    const route = location.pathname;

    if (route === '/') {
        return (
            <header
                id="main-content"
                className="container-fluid justify-content-center"
                aria-label="Header Site Banner"
            >
                <AbstractSymbolRow variant="upper" className="abstract-float abstract-float--upper" />
                <section aria-label="Name and Title">
                    <h1 className="color-accent-red name name-header">
                        <span className="first-name">OLIVIA</span> <span className="last-name">KNESTAUT</span>
                    </h1>
                    <h2 className="tagline color-accent-blue">UX/UI DESIGNER &amp; FULL STACK DEVELOPER</h2>
                </section>
                <AbstractSymbolRow variant="lower" className="abstract-float abstract-float--lower" />
            </header>
        );
    }

    return (
        <header id="main-content" className="container-fluid justify-content-center" aria-label="Header Site Banner">
            <AbstractSymbolRow variant="upper" className="abstract-float abstract-float--upper" />
            {title && <h1 className={`color-accent-red ${titleClassName || ''}`.trim()}>{title}</h1>}
        </header>
    );
}

export default Header;
