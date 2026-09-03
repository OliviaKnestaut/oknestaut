import React from 'react';
import { openTrackedLink, trackEvent } from '../utils/analytics';
import githubIcon from '../images/icons/github_icon.svg';
import instagramIcon from '../images/icons/instagram_icon.svg';
import linkedinIcon from '../images/icons/linkedin_icon.svg';
import locationIcon from '../images/icons/location_icon.svg';
import mailIcon from '../images/icons/mail_icon.svg';
import { abstractGraphics } from './images';

function Footer() {
    return (
        <footer id="footer" className="container-fluid justify-content-center" aria-label="Footer">
            <picture className="abstract-float">
                <source media="(min-width: 576px)" srcSet={abstractGraphics.lower.full} />
                <img
                    className="img-fluid abstract-img"
                    src={abstractGraphics.lower.mobile}
                    aria-hidden="true"
                    alt="Colorful abstract shapes inspired by riograph prints"
                />
            </picture>
            <div className="row align-items-center justify-content-center footer bg-accent-purple">
                <a
                    href="#footer-end"
                    className="skip-link footer-skip-link color-tan-hover"
                    aria-label="Skip Footer Links"
                >
                    Skip Footer Links
                </a>
                <div className="row align-items-center text-color-light">
                    <img className="icon" src={locationIcon} alt="location pin icon" />
                    <p>Philadelphia, PA</p>
                </div>
                <a
                    className="row align-items-center text-color-light footer-link hover-sweep"
                    href="mailto:olivia.knestaut@gmail.com"
                    aria-label="Email olivia.knestaut@gmail.com"
                    onClick={() => trackEvent('Contact', 'Clicked Email', 'Footer')}
                >
                    <img className="icon" src={mailIcon} alt="email icon" />
                    <span>olivia.knestaut@gmail.com</span>
                </a>
                <a
                    href="https://www.instagram.com/ollywhelmed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="@ollywhelmed on Instagram — opens in a new tab"
                    className="row align-items-center text-color-light footer-link hover-sweep"
                    onClick={(event) =>
                        openTrackedLink(event, 'https://www.instagram.com/ollywhelmed/', 'Instagram Footer')
                    }
                >
                    <img className="icon" src={instagramIcon} alt="instagram icon" />
                    <span>@ollywhelmed</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/oliviaknestaut/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="oliviaknestaut on LinkedIn — opens in a new tab"
                    className="row align-items-center text-color-light footer-link hover-sweep"
                    onClick={(event) =>
                        openTrackedLink(event, 'https://www.linkedin.com/in/oliviaknestaut/', 'LinkedIn Footer')
                    }
                >
                    <img className="icon" src={linkedinIcon} alt="linkedin icon" />
                    <span>oliviaknestaut</span>
                </a>
                <a
                    href="https://github.com/OliviaKnestaut"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="OliviaKnestaut on GitHub — opens in a new tab"
                    className="row align-items-center text-color-light footer-link hover-sweep"
                    onClick={(event) => openTrackedLink(event, 'https://github.com/OliviaKnestaut', 'GitHub Footer')}
                >
                    <img className="icon" src={githubIcon} alt="github icon" />
                    <span>OliviaKnestaut</span>
                </a>
                <span id="footer-end" className="sr-only" tabIndex="-1" aria-hidden="true">
                    End of footer
                </span>
            </div>
        </footer>
    );
}

export default Footer;
