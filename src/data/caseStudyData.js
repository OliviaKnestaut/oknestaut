import figmaLogo from '../images/about/Figma-logo-white.png';
import illustratorLogo from '../images/about/Illustrator-Icon-white.png';
import phpLogo from '../images/about/PHP-Icon-white.png';
import photoshopLogo from '../images/about/Photoshop-Icon-white.png';
import css3Logo from '../images/about/css3-logo-white.png';
import graphqlLogo from '../images/about/graphql-logo-white.png';
import html5Logo from '../images/about/html5-logo-white.png';
import javascriptLogo from '../images/about/javascript_logo_white.png';
import mysqlLogo from '../images/about/mysql-logo-white.png';
import reactLogo from '../images/about/react-logo-white.png';
import typescriptLogo from '../images/about/typescript_logo_white.png';
import userTestingIcon from '../images/about/user-testing.png';
import kimsDragonCover from '../images/home/Kim-Dragon-Cover.png';
import letterboxdCover from '../images/home/Letterboxd-Cover.png';
import portfolioCover from '../images/home/Portfolio-Cover.png';
import rightOnCover from '../images/home/RightOn-Cover.png';
import intealthCover from '../images/intealth/Intealth-Cover.png';

export const caseStudies = [
    {
        title: 'INTEALTH MODERN APPS',
        subtitle: 'UX DESIGN & FULL STACK DEVELOPMENT',
        route: '/intealth',
        ariaLabel: 'Intealth Modern Apps UX Design and Full Stack Development Project Card',
        eventLabel: 'Intealth Modern Apps',
        bgClass: 'bg-accent-blue',
        tools: [
            { src: figmaLogo, alt: 'Figma Logo' },
            { src: reactLogo, alt: 'React Logo' },
            { src: typescriptLogo, alt: 'TypeScript Logo' },
            { src: graphqlLogo, alt: 'GraphQL Logo' },
        ],
        image: intealthCover,
        imageAlt: 'Intealth Modern Apps case study cover',
        layer: 2,
    },
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
        image: rightOnCover,
        imageAlt: 'Laptop, tablet, and mobile screens showing pages from the RightOn Central Redesign Project',
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
        image: kimsDragonCover,
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
        image: letterboxdCover,
        imageAlt: 'Hand cursor shown interacting with a specific movie card on Letterboxd',
        layer: 2,
    },
];
