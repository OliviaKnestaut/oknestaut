import React from 'react';
import { useLocation } from 'react-router-dom';
import { abstractGraphics } from './images';

function Header() {
    const location = useLocation();
    const route = location.pathname;

    if (route === '/') {        return (
            <header className="container-fluid">
                <picture>
                    <source
                        media="(min-width: 576px)"
                        srcSet={abstractGraphics.upper.full} />
                    <img 
                        className="img-fluid abstract-img"
                        src={abstractGraphics.upper.mobile}
                        alt="random colorful abstract shapes" 
                    />
                </picture>
                <div>
                    <div className="name-header">
                        <h1 className="color-orange first-name">OLIVIA</h1>
                        <h1 className="color-orange last-name">KNESTAUT</h1>
                    </div>
                    <h5 className="color-blue">UX/UI DESIGNER AND RESEARCHER</h5>
                </div>                <picture>
                    <source
                        media="(min-width: 576px)"
                        srcSet={abstractGraphics.lower.full} />
                    <img 
                        className="img-fluid abstract-img"
                        src={abstractGraphics.lower.mobile}
                        alt="random colorful abstract shapes" 
                    />
                </picture>
            </header>
        );    } else if ( route === '/about' || route === '/design' || route === '/photography' || route === '/resume') {
        return (
            <header className="container-fluid">
                <picture>
                    <source
                        media="(min-width: 576px)"
                        srcSet={abstractGraphics.upper.full} />
                    <img 
                        className="img-fluid abstract-img"
                        src={abstractGraphics.upper.mobile}
                        alt="random colorful abstract shapes" 
                    />
                </picture>
            </header>
        );
    }
}

export default Header;