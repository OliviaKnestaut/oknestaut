import React from 'react';
import PhotoGrid from '../components/PhotoGrid';
import ScrollReveal from '../components/ScrollReveal';
import TrackedLink from '../components/TrackedLink';
import { useTheme } from '../context/ThemeContext';
import useDimbox from '../hooks/useDimbox';
import githubIcon from '../images/about/github_icon_blue.svg';
import instagramIcon from '../images/about/instagram_icon_blue.svg';
import linkedinIcon from '../images/about/linkedin_icon_blue.svg';
import locationIcon from '../images/about/location_icon_purple.svg';
import mailIcon from '../images/about/mail_icon_blue.svg';
import aboutContact from '../images/about/ok-about-2.jpg';
import aboutPortrait from '../images/about/ok-about.jpg';
import { trackEvent } from '../utils/analytics';

const involvementLogos = [
    {
        href: 'https://www.drexelcab.com/',
        src: require('../images/about/CAB_FullColor.png'),
        alt: 'Drexel Campus Activities Board Logo',
        label: 'Drexel Campus Activities Board Website',
    },
    {
        href: 'https://www.instagram.com/drexelchi/?hl=en',
        src: require('../images/about/drexel-chi-ux.png'),
        alt: 'Drexel Chi UX Club Logo',
        label: '@drexelchi on Instagram',
    },
    {
        href: 'https://www.instagram.com/drexeldragonfly/',
        src: require('../images/about/dragonfly-logo.png'),
        alt: 'Dragonfly Concert 2025 Logo',
        label: '@drexeldragonfly on Instagram',
    },
    {
        href: 'https://rewritingthecode.org/',
        src: require('../images/about/RTC__Logo_Orange_Logo.png'),
        alt: 'Rewriting the Code Logo',
        label: 'Rewriting the Code Website',
    },
    {
        href: 'https://ncwit.org/',
        src: require('../images/about/ncwit.png'),
        alt: 'National Center for Women and Information Technology Logo',
        label: 'National Center for Women and Information Technology Website',
    },
    {
        href: 'https://girlswhocode.com/',
        src: require('../images/about/Girls_Who_Code_Logo.png'),
        alt: 'Girls Who Code Logo',
        label: 'Girls Who Code Website',
    },
];

const previousJobs = [
    {
        href: 'https://www.intealth.org/',
        src: require('../images/about/logo-intealth.png'),
        srcDark: require('../images/about/logo-intealth-dark.png'),
        alt: 'Intealth Logo',
        label: 'Intealth Website',
        className: 'invert-img2',
    },
    {
        href: 'https://www.newcastlede.gov/2423/Libraries',
        src: require('../images/about/NCC_Libraries.png'),
        srcDark: require('../images/about/NCC_Libraries-dark.png'),
        alt: 'New Castle County Libraries Logo',
        label: 'New Castle County Libraries Website',
        className: 'invert-img',
    },
    {
        href: 'https://www.rightoneducation.com/',
        src: require('../images/about/RightOn-Circle-512x512.png'),
        alt: 'RightOn! Education Logo',
        label: 'RightOn! Education Website',
        className: '',
    },
    {
        href: 'https://www.amazon.com/',
        src: require('../images/about/Amazon_logo.png'),
        srcDark: require('../images/about/Amazon_logo-dark.png'),
        alt: 'Amazon Logo',
        label: 'Amazon Website',
        className: 'invert-img',
    },
];

const recentActivities = [
    {
        layout: 'right',
        photos: [
            {
                large: require('../images/about/Olivia-Museum-Large.jpg'),
                small: require('../images/about/Olivia-Museum-Small.jpg'),
                caption: 'Visiting Art Museums, Wadsworth Atheneum Museum of Art, Hartford, CT, October 2025',
                alt: 'Olivia looking at art in the Wadsworth Atheneum Museum of Art',
                ariaLabel: 'Visiting the Wadsworth Atheneum Museum of Art Image',
            },
            {
                large: require('../images/about/Olivia-Leader-Large.jpg'),
                small: require('../images/about/Olivia-Leader-Small.jpg'),
                caption: 'Leading Activities on Campus, Philadelphia, PA, May 2025',
                alt: 'Olivia with her undergraduate student leader of the year award',
                ariaLabel: 'Leading activities on campus Image',
            },
            {
                large: require('../images/about/Olivia-Ski-Large.jpg'),
                small: require('../images/about/Olivia-Ski-Small.jpg'),
                caption: 'Skiing at Blue Mountain, Palmerton, PA, December 2025',
                alt: 'Olivia skiing at Blue Mountain',
                ariaLabel: 'Skiing at Blue Mountain Image',
            },
        ],
    },
    {
        layout: 'left',
        photos: [
            {
                large: require('../images/about/Olivia-PHS-Large.jpg'),
                small: require('../images/about/Olivia-PHS-Small.jpg'),
                caption: 'Taking Award Winning Photography, PHS Flower Show, Philadelphia, PA, March 2025',
                alt: 'Olivia pointing at her ribbon winning photography at the PHS Flower Show 2025',
                ariaLabel: 'Taking Award Winning Photography Image',
            },
            {
                large: require('../images/about/Olivia-WagWatch-Large.jpg'),
                small: require('../images/about/Olivia-WagWatch-Small.jpg'),
                caption: 'Playing with Dogs, Wag Watch Philadelphia, PA, September 2024',
                alt: 'Olivia sitting in a pile of dogs at Wag Watch the doggie daycare',
                ariaLabel: 'Playing with dogs at Wag Watch Image',
            },
            {
                large: require('../images/about/Olivia-Shenandoah-Large.jpg'),
                small: require('../images/about/Olivia-Shenandoah-Small.jpg'),
                caption: 'Hiking in Shenandoah, Shenandoah National Park, VA, October 2025',
                alt: 'Olivia hiking in the woods at Shenandoah National Park',
                ariaLabel: 'Hiking in Shenandoah National Park Image',
            },
        ],
    },
];

function About() {
    useDimbox();
    const { theme } = useTheme();

    return (
        <main aria-label="About Main Content">
            <ScrollReveal as="section" className="row col-sm about" aria-label="About Me Section">
                <article className="col-12 col-md-8 about row justify-content-center" aria-label="About Text Content">
                    <header aria-label="About Header and Name">
                        <h1 className="color-accent-red">ABOUT ME</h1>
                        <h2 className="tagline color-accent-blue">OLIVIA KNESTAUT</h2>
                    </header>
                    <p>
                        As a UX/UI Designer and Full Stack Developer I am passionate about creativity, problem-solving,
                        and inclusive design. One of my main goals is to get involved with accessibility in media. I
                        want to promote the consideration of a range of disabilities throughout every step of media
                        creation.
                    </p>
                    <p>
                        Currently, I am pursuing a Bachelor of Science in User Experience &amp; Interaction Design
                        (UXID) with a minor in Graphic Design at Drexel University. With this degree I hope to build
                        towards a mastery of full-stack development and design to help add meaningful, accessible media
                        to the world.
                    </p>
                    <p>
                        Beyond the screen, I find inspiration in the natural world. Whether I&apos;m photographing my
                        way across America&apos;s National Parks or nurturing my ever-growing collection of houseplants,
                        I love connecting with nature and capturing its beauty. Engaging with nature in these ways fuels
                        my creativity and reminds me of the importance of sustainable design in all areas of life.
                    </p>
                </article>
                <img
                    className="col-12 col-md-4"
                    src={aboutPortrait}
                    alt="Portrait of Olivia Knestaut sitting outside on a rock wall with greenery in the background"
                />
            </ScrollReveal>

            <ScrollReveal
                as="section"
                className="container-fluid col skills"
                delay={0.1}
                aria-label="Involvement Section"
            >
                <h2 className="color-accent-red justify-content-center">CURRENTLY INVOLVED WITH...</h2>
                <a
                    href="#recent-activities"
                    className="skip-link about-skip-link color-accent-blue-hover"
                    aria-label="Skip Involvement Links"
                >
                    Skip Involvement Links
                </a>
                <div className="d-flex flex-wrap justify-content-center align-items-center bigger-icons">
                    {involvementLogos.slice(0, 3).map((logo) => (
                        <TrackedLink
                            key={logo.label}
                            href={logo.href}
                            label={logo.label}
                            aria-label={`${logo.label} — opens in a new tab`}
                        >
                            <img src={logo.src} alt={logo.alt} />
                        </TrackedLink>
                    ))}
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    {involvementLogos.slice(3).map((logo) => (
                        <TrackedLink
                            key={logo.label}
                            href={logo.href}
                            label={logo.label}
                            aria-label={`${logo.label} — opens in a new tab`}
                        >
                            <img src={logo.src} alt={logo.alt} />
                        </TrackedLink>
                    ))}
                </div>
            </ScrollReveal>

            <section id="recent-activities" className="container-fluid col" aria-label="Recent Activities Section">
                <h2 className="color-accent-red justify-content-center">LATELY I&apos;VE BEEN...</h2>
                <a
                    href="#previous-jobs"
                    className="skip-link about-skip-link color-accent-blue-hover"
                    aria-label="Skip Recent Activities Photo Gallery"
                >
                    Skip Recent Activities Photo Gallery
                </a>
                {recentActivities.map((group) => (
                    <PhotoGrid
                        key={group.photos[0]?.src}
                        photos={group.photos}
                        galleryName="portrait-gallery"
                        layout={group.layout}
                    />
                ))}
            </section>

            <ScrollReveal
                as="section"
                id="previous-jobs"
                className="container-fluid col skills"
                delay={0.1}
                aria-label="Previous Jobs Section"
            >
                <h2 className="color-accent-red justify-content-center">MAYBE YOU SAW ME AT...</h2>
                <a
                    href="#contact"
                    className="skip-link about-skip-link color-accent-blue-hover"
                    aria-label="Skip Previous Jobs Links"
                >
                    Skip Previous Jobs Links
                </a>
                <div className="d-flex flex-wrap justify-content-center align-items-center bigger-icons">
                    {previousJobs.map((job) => (
                        <TrackedLink
                            key={job.label}
                            href={job.href}
                            label={job.label}
                            aria-label={`${job.label} — opens in a new tab`}
                        >
                            <img
                                className={job.className}
                                src={theme === 'dark' && job.srcDark ? job.srcDark : job.src}
                                alt={job.alt}
                            />
                        </TrackedLink>
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal as="section" id="contact" className="contact" delay={0.1} aria-label="Contact Section">
                <h2 className="color-accent-red justify-content-center">CONTACT</h2>
                <div className="row col-sm">
                    <img
                        className="col-12 col-md-7"
                        src={aboutContact}
                        alt="Olivia looking up at a huge tree while hiking in Mount Rainier National Park, WA"
                    />
                    <article
                        className="col-12 col-md-5 row d-flex justify-content-around align-items-center contact-info"
                        aria-label="Contact Information"
                    >
                        <div className="row align-items-center">
                            <img className="icon" src={locationIcon} alt="location pin icon" />
                            <h3 className="color-accent-purple">Philadelphia, PA</h3>
                        </div>
                        <p>
                            I am always looking for collaborations and project ideas. If you want to chat about design,
                            books, plants, or anything else, don&apos;t hesitate to reach out.
                        </p>
                        <figure aria-label="Contact Links">
                            <a
                                href="#footer"
                                className="skip-link contact-skip-link color-accent-blue-hover"
                                aria-label="Skip Contact Links"
                            >
                                Skip Contact Links
                            </a>
                            <TrackedLink
                                href="https://www.instagram.com/ollywhelmed/"
                                label="Instagram Contact"
                                aria-label="@ollywhelmed on Instagram — opens in a new tab"
                            >
                                <img className="contact-icon" src={instagramIcon} alt="instagram icon" />
                            </TrackedLink>
                            <a
                                href="mailto:olivia.knestaut@gmail.com"
                                aria-label="Email olivia.knestaut@gmail.com"
                                onClick={() => trackEvent('Contact', 'Clicked Email', 'About')}
                            >
                                <img className="contact-icon" src={mailIcon} alt="email icon" />
                            </a>
                            <TrackedLink
                                href="https://github.com/OliviaKnestaut"
                                label="GitHub Contact"
                                aria-label="OliviaKnestaut on GitHub — opens in a new tab"
                            >
                                <img className="contact-icon" src={githubIcon} alt="github icon" />
                            </TrackedLink>
                            <TrackedLink
                                href="https://www.linkedin.com/in/oliviaknestaut/"
                                label="LinkedIn Contact"
                                aria-label="Olivia Knestaut on LinkedIn — opens in a new tab"
                            >
                                <img className="contact-icon" src={linkedinIcon} alt="linkedin icon" />
                            </TrackedLink>
                        </figure>
                    </article>
                </div>
            </ScrollReveal>
        </main>
    );
}

export default About;
