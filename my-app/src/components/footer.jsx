import React from 'react';
import '../styles/footer.css';
import locationIcon from '../images/icons/location_icon.svg';
import mailIcon from '../images/icons/mail_icon.svg';
import instagramIcon from '../images/icons/instagram_icon.svg';
import linkedinIcon from '../images/icons/linkedin_icon.svg';
import githubIcon from '../images/icons/github_icon.svg';
import { abstractGraphics } from './images';

function Footer() {
        return (
        <div className="container-fluid">
            <picture>
                <source
                    media="(min-width: 576px)"
                    srcSet={abstractGraphics.lower.full} />
                <img
                    className="img-fluid abstract-img"
                    src={abstractGraphics.lower.mobile}
                    alt="random colorful abstract shapes" 
                />
            </picture>
            <div className="row align-items-center justify-content-center footer bg-pink">
                <div className="col-auto d-flex align-items-center text-color-light">
                    <img className="icon me-2" src={locationIcon} alt="location pin icon" />
                    <p>Philadelphia, PA</p>
                </div>
                <div className="col-auto">
                    <a className="d-flex align-items-center text-color-light footer-link text-decoration-none" href="mailto:olivia.knestaut@gmail.com">
                        <img className="icon me-2" src={mailIcon} alt="email icon" />
                        <p>olivia.knestaut@gmail.com</p>
                    </a>
                </div>
                <div className="col-auto">
                    <a href="https://www.instagram.com/ollywhelmed/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-color-light footer-link text-decoration-none">
                        <img className="icon me-2" src={instagramIcon} alt="instagram icon" />
                        <p>@ollywhelmed</p>
                    </a>
                </div>
                <div className="col-auto">
                    <a href="https://www.linkedin.com/in/oliviaknestaut/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-color-light footer-link text-decoration-none">
                        <img className="icon me-2" src={linkedinIcon} alt="linkedin icon" />
                        <p>oliviaknestaut</p>
                    </a>
                </div>
                <div className="col-auto">
                    <a href="https://github.com/OliviaKnestaut" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-color-light footer-link text-decoration-none">
                        <img className="icon me-2" src={githubIcon} alt="github icon" />
                        <p>OliviaKnestaut</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;