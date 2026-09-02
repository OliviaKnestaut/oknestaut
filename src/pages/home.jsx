import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import { caseStudyCovers } from '../components/images';
import figmaLogo from '../images/about/Figma-logo-white.png';
import illustratorLogo from '../images/about/Illustrator-Icon-white.png';
import phpLogo from '../images/about/PHP-Icon-white.png';
import photoshopLogo from '../images/about/Photoshop-Icon-white.png';
import css3Logo from '../images/about/css3-logo-white.png';
import html5Logo from '../images/about/html5-logo-white.png';
import javascriptLogo from '../images/about/javascript_logo_white.png';
import mysqlLogo from '../images/about/mysql-logo-white.png';
import reactLogo from '../images/about/react-logo-white.png';
import userTestingIcon from '../images/about/user-testing.png';
import portfolioCover from '../images/home/Portfolio-Cover.png';

function Home() {
    return (
        <main aria-label="Site Main Content">
            <section className="case-studies column container-fluid justify-content-center">
                <h2 className="color-accent-red">CASE STUDIES</h2>
                <section className="card-container">
                    <article className="card" aria-label="Personal Portfolio Site Accessibility Design Project Card">
                        <figure className="layer-1 card-body bg-accent-green" aria-label="Project Details">
                            <h3 className="card-title">ACCESSIBLE PORTFOLIO</h3>
                            <h4 className="card-text text-center">PERSONAL PORTFOLIO DESIGN</h4>
                            <div
                                className="d-flex justify-content-center align-items-center tools"
                                aria-label="Technologies used"
                            >
                                <img src={figmaLogo} alt="Figma Logo" />
                                <img src={reactLogo} alt="React Logo" />
                                <img src={javascriptLogo} alt="JavaScript Logo" />
                            </div>
                            <Link
                                className="btn btn-primary mx-auto d-block color-accent-green-hover"
                                to="/accessibility"
                                onClick={() => trackEvent('Home', 'Clicked See Project', 'Accessible Portfolio')}
                            >
                                <span className="btn-text color-accent-green">See Project</span>
                            </Link>
                        </figure>
                        <img
                            className="mx-auto d-block card-img-bottom"
                            src={portfolioCover}
                            alt="Desktop and mobile screens showing Olivia's portfolio site"
                            loading="lazy"
                            decoding="async"
                        />
                    </article>

                    <article className="card" aria-label="RightOn Education Central Redesign Project Card">
                        <figure className="layer-1 card-body bg-accent-purple" aria-label="Project Details">
                            <h3 className="card-title">RIGHT ON EDUCATION</h3>
                            <h4 className="card-text text-center">CENTRAL REDESIGN</h4>
                            <div
                                className="d-flex justify-content-center align-items-center tools"
                                aria-label="Technologies used"
                            >
                                <img src={figmaLogo} alt="Figma Logo" />
                                <img src={illustratorLogo} alt="Adobe Illustrator Logo" />
                                <img src={photoshopLogo} alt="Adobe Photoshop Logo" />
                                <img src={userTestingIcon} alt="User Testing and Interview Symbol" />
                            </div>
                            <Link
                                className="btn btn-primary mx-auto d-block color-accent-purple-hover"
                                to="/righton"
                                onClick={() => trackEvent('Home', 'Clicked See Project', 'RightOn Education')}
                            >
                                <span className="btn-text color-accent-purple">See Project</span>
                            </Link>
                        </figure>
                        <img
                            className="mx-auto d-block card-img-bottom"
                            src={caseStudyCovers.rightOn}
                            alt="Laptop, tablet, and mobile screens showing pages from the RightOn Central Redesign Project"
                            loading="lazy"
                            decoding="async"
                        />
                    </article>

                    <article className="card" aria-label="Kim's Dragon Food Truck Mobile Ordering Webapp Project Card">
                        <figure className="layer-1 card-body bg-accent-red" aria-label="Project Details">
                            <h3 className="card-title">KIM'S DRAGON</h3>
                            <h4 className="card-text text-center">MOBILE ORDERING WEBAPP</h4>
                            <div
                                className="d-flex justify-content-center align-items-center tools"
                                aria-label="Technologies used"
                            >
                                <img src={phpLogo} alt="PHP Logo" />
                                <img src={mysqlLogo} alt="MySQL Logo" />
                                <img src={html5Logo} alt="HTML5 Logo" />
                                <img src={css3Logo} alt="CSS3 Logo" />
                                <img src={javascriptLogo} alt="JavaScript Logo" />
                            </div>
                            <Link
                                className="btn btn-primary mx-auto d-block color-accent-red-hover"
                                to="/kims-dragon"
                                onClick={() => trackEvent('Home', 'Clicked See Project', "Kim's Dragon")}
                            >
                                <span className="btn-text color-accent-red">See Project</span>
                            </Link>
                        </figure>
                        <img
                            className="mx-auto d-block card-img-bottom"
                            src={caseStudyCovers.kimsDragon}
                            alt="Three mobile screens showing pages from the Kim's Dragon Mobile Ordering Webapp"
                            loading="lazy"
                            decoding="async"
                        />
                    </article>

                    <article className="card" aria-label="Letterboxd Movie Tile Microinteraction Design Project Card">
                        <figure className="layer-2 card-body bg-accent-blue" aria-label="Project Details">
                            <h3 className="card-title">LETTERBOXD MOVIE TILE</h3>
                            <h4 className="card-text text-center">MICROINTERACTION DESIGN</h4>
                            <div
                                className="d-flex justify-content-center align-items-center tools"
                                aria-label="Technologies used"
                            >
                                <img src={figmaLogo} alt="Figma Logo" />
                                <img src={html5Logo} alt="HTML5 Logo" />
                                <img src={css3Logo} alt="CSS3 Logo" />
                                <img src={javascriptLogo} alt="JavaScript Logo" />
                            </div>
                            <Link
                                className="btn btn-primary mx-auto d-block color-accent-blue-hover"
                                to="/letterboxd"
                                onClick={() => trackEvent('Home', 'Clicked See Project', 'Letterboxd Movie Tile')}
                            >
                                <span className="btn-text color-accent-blue">See Project</span>
                            </Link>
                        </figure>
                        <img
                            className="mx-auto d-block card-img-bottom"
                            src={caseStudyCovers.letterboxd}
                            alt="Hand cursor shown interacting with a specific movie card on Letterboxd"
                            loading="lazy"
                            decoding="async"
                        />
                    </article>
                </section>
            </section>
        </main>
    );
}

export default Home;
