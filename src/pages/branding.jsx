import React from 'react';
import symbol1 from '../images/general/abstract-symbols/Abstract-Symbol-1.svg';
import symbol2 from '../images/general/abstract-symbols/Abstract-Symbol-2.svg';
import symbol3 from '../images/general/abstract-symbols/Abstract-Symbol-3.svg';
import symbol4 from '../images/general/abstract-symbols/Abstract-Symbol-4.svg';
import symbol5 from '../images/general/abstract-symbols/Abstract-Symbol-5.svg';
import symbol6 from '../images/general/abstract-symbols/Abstract-Symbol-6.svg';
import symbol7 from '../images/general/abstract-symbols/Abstract-Symbol-7.svg';
import symbol8 from '../images/general/abstract-symbols/Abstract-Symbol-8.svg';
import symbol9 from '../images/general/abstract-symbols/Abstract-Symbol-9.svg';
import symbol10 from '../images/general/abstract-symbols/Abstract-Symbol-10.svg';
import symbol11 from '../images/general/abstract-symbols/Abstract-Symbol-11.svg';
import dropdownIcon from '../images/general/dropdown-icon.svg';
import hamburgerIcon from '../images/general/hamburger-menu.svg';
import backToTopIcon from '../images/icons/back-to-top.svg';
import githubIcon from '../images/icons/github_icon.svg';
import instagramIcon from '../images/icons/instagram_icon.svg';
import linkedinIcon from '../images/icons/linkedin_icon.svg';
import locationIcon from '../images/icons/location_icon.svg';
import mailIcon from '../images/icons/mail_icon.svg';
import '../styles/branding.css';

const colors = [
    ['accent-red', '#B5512A'],
    ['accent-blue', '#277785'],
    ['accent-purple', '#715790'],
    ['accent-green', '#55792C'],
    ['background', '#FFF9EE'],
    ['text', '#222222'],
];

const icons = [
    locationIcon,
    mailIcon,
    instagramIcon,
    linkedinIcon,
    githubIcon,
    backToTopIcon,
    dropdownIcon,
    hamburgerIcon,
    symbol1,
    symbol2,
    symbol3,
    symbol4,
    symbol5,
    symbol6,
    symbol7,
    symbol8,
    symbol9,
    symbol10,
    symbol11,
];

const brandBoard = [
    [
        'UVP',
        'I create clear, accessible digital experiences by pairing UX research with expressive visual design and full stack implementation.',
    ],
    [
        'Target audience',
        'People and organizations looking for a versatile designer-developer to make digital products easier to understand and use.',
    ],
    ['Values', 'Inclusion · Creativity · Empathy · Collaboration · Problem-Solving'],
    ['Challenges', 'Crowded developer landscape, Limited resources for small businesses and nonprofits'],
    [
        'Opportunities',
        '2+ years of design and fullstack development experience in industry, 5+ years of creative problem-solving and visual design experience, strong commitment to accessibility and inclusion.',
    ],
    ['Voice', 'Colorful · Human · Friendly · Clear · Expressive'],
    [
        'Metrics & Goals',
        '3 recent case studies live, Continued growth across UX, UI, and full stack development, Increased visibility and engagement on social media',
    ],
    ['Channels', 'Portfolio · LinkedIn · GitHub · Instagram'],
];

function Branding() {
    return (
        <main id="main-content" className="branding-page container-fluid" aria-label="Olivia Knestaut brand guidelines">
            <div className="branding-hero">
                <p className="branding-kicker">01 / Identity</p>
                <h1 className="color-accent-red">OLIVIA KNESTAUT</h1>
                <p className="branding-tagline color-accent-blue">UX/UI designer &amp; full stack developer</p>
            </div>

            <section className="branding-section branding-introduction" aria-labelledby="brand-overview">
                <div>
                    <h3 id="brand-overview" className="color-accent-blue">
                        Thoughtful design, built to be accessible.
                    </h3>
                </div>
                <p>
                    Olivia Knestaut is a Full Stack Developer and UX/UI designer passionate about creativity,
                    problem-solving, and making technology accessible to all. She wants to promote the consideration of
                    a range of disabilities throughout every step of media creation.
                </p>
            </section>

            <section className="branding-section" aria-labelledby="brand-board">
                <p className="branding-kicker">02 / Brand Strategy</p>
                <h3 id="brand-board" className="color-text">
                    Strategy
                </h3>
                <div className="branding-board-list">
                    {brandBoard.map(([label, content]) => (
                        <article key={label} className="branding-board-row">
                            <h3 className="color-accent-purple">{label}</h3>
                            <p>{content}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="branding-section" aria-labelledby="color-system">
                <p className="branding-kicker">03 / Color System</p>
                <h3 id="color-system" className="color-text">
                    Color
                </h3>
                <div className="branding-color-list">
                    {colors.map(([name, hex]) => (
                        <div className="branding-color-row" key={name}>
                            <div className={`branding-color-sample branding-color-sample--${name}`} />
                            <span>{hex}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="branding-section" aria-labelledby="type-system">
                <p className="branding-kicker">04 / Type System</p>
                <h3 id="type-system" className="color-text">
                    Typography - Jost
                </h3>
                <div className="branding-type-list">
                    <div>
                        <span>800 · H1</span>
                        <h1 className="color-accent-red">BIG, DIRECT, EXPRESSIVE.</h1>
                    </div>
                    <div>
                        <span>400 · H2</span>
                        <h2>Dynamic hierarchy for every page.</h2>
                    </div>
                    <div>
                        <span>800 · H3</span>
                        <h3 className="color-accent-blue">Section titles with personality.</h3>
                    </div>
                    <div>
                        <span>600 · H4</span>
                        <h4 className="color-text">Supporting headings and calls to action.</h4>
                    </div>
                    <div>
                        <span>400-600 · Body</span>
                        <p>Jost is used throughout the site for accessible, friendly, and highly legible body copy.</p>
                    </div>
                </div>
            </section>

            <section className="branding-section" aria-labelledby="symbols-icons">
                <p className="branding-kicker">05 / Graphic Language</p>
                <h3 id="symbols-icons" className="color-text">
                    Symbols &amp; Icons
                </h3>
                <div className="branding-icon-list">
                    {icons.map((icon) => (
                        <img key={icon} className="icon branding-system-icon" src={icon} alt="" />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Branding;
