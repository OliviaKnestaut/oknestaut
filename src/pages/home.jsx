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
                    {[
                        {
                            title: 'ACCESSIBLE PORTFOLIO',
                            subtitle: 'PERSONAL PORTFOLIO DESIGN',
                            route: '/accessibility',
                            ariaLabel: 'Personal Portfolio Site Accessibility Design Project Card',
                            eventLabel: 'Accessible Portfolio',
                            bgClass: 'bg-accent-green',
                            tools: [
                                { src: figmaLogo, alt: 'Figma Logo' },
                                { src: reactLogo, alt: 'React Logo' },
                                { src: javascriptLogo, alt: 'JavaScript Logo' },
                            ],
                            image: portfolioCover,
                            imageAlt: "Desktop and mobile screens showing Olivia's portfolio site",
                            layer: 1,
                        },
                        {
                            title: 'RIGHT ON EDUCATION',
                            subtitle: 'CENTRAL REDESIGN',
                            route: '/righton',
                            ariaLabel: 'RightOn Education Central Redesign Project Card',
                            eventLabel: 'RightOn Education',
                            bgClass: 'bg-accent-purple',
                            tools: [
                                { src: figmaLogo, alt: 'Figma Logo' },
                                { src: illustratorLogo, alt: 'Adobe Illustrator Logo' },
                                { src: photoshopLogo, alt: 'Adobe Photoshop Logo' },
                                { src: userTestingIcon, alt: 'User Testing and Interview Symbol' },
                            ],
                            image: caseStudyCovers.rightOn,
                            imageAlt:
                                'Laptop, tablet, and mobile screens showing pages from the RightOn Central Redesign Project',
                            layer: 1,
                        },
                        {
                            title: "KIM'S DRAGON",
                            subtitle: 'MOBILE ORDERING WEBAPP',
                            route: '/kims-dragon',
                            ariaLabel: "Kim's Dragon Food Truck Mobile Ordering Webapp Project Card",
                            eventLabel: "Kim's Dragon",
                            bgClass: 'bg-accent-red',
                            tools: [
                                { src: phpLogo, alt: 'PHP Logo' },
                                { src: mysqlLogo, alt: 'MySQL Logo' },
                                { src: html5Logo, alt: 'HTML5 Logo' },
                                { src: css3Logo, alt: 'CSS3 Logo' },
                                { src: javascriptLogo, alt: 'JavaScript Logo' },
                            ],
                            image: caseStudyCovers.kimsDragon,
                            imageAlt: "Three mobile screens showing pages from the Kim's Dragon Mobile Ordering Webapp",
                            layer: 1,
                        },
                        {
                            title: 'LETTERBOXD MOVIE TILE',
                            subtitle: 'MICROINTERACTION DESIGN',
                            route: '/letterboxd',
                            ariaLabel: 'Letterboxd Movie Tile Microinteraction Design Project Card',
                            eventLabel: 'Letterboxd Movie Tile',
                            bgClass: 'bg-accent-blue',
                            tools: [
                                { src: figmaLogo, alt: 'Figma Logo' },
                                { src: html5Logo, alt: 'HTML5 Logo' },
                                { src: css3Logo, alt: 'CSS3 Logo' },
                                { src: javascriptLogo, alt: 'JavaScript Logo' },
                            ],
                            image: caseStudyCovers.letterboxd,
                            imageAlt: 'Hand cursor shown interacting with a specific movie card on Letterboxd',
                            layer: 2,
                        },
                    ].map((study) => (
                        <Link
                            key={study.title}
                            className="card"
                            to={study.route}
                            onClick={() => trackEvent('Home', 'Clicked See Project', study.eventLabel)}
                            aria-label={`Open ${study.title} case study`}
                        >
                            <figure
                                className={`layer-${study.layer} card-body ${study.bgClass}`}
                                aria-label="Project Details"
                            >
                                <h3 className="card-title">{study.title}</h3>
                                <h4 className="card-text text-center">{study.subtitle}</h4>
                                <div
                                    className="d-flex justify-content-center align-items-center tools"
                                    aria-label="Technologies used"
                                >
                                    {study.tools.map((tool) => (
                                        <img key={tool.alt} src={tool.src} alt={tool.alt} />
                                    ))}
                                </div>
                                <span className="card-hint" aria-hidden="true">
                                    <span className="card-hint-arrow">→</span>
                                    <span>View case study</span>
                                </span>
                            </figure>
                            <img
                                className="mx-auto d-block card-img-bottom"
                                src={study.image}
                                alt={study.imageAlt}
                                loading="lazy"
                                decoding="async"
                            />
                        </Link>
                    ))}
                </section>
            </section>
        </main>
    );
}

export default Home;
