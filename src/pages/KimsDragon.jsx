import React from 'react';
import '../styles/case-study.css';
import CaseStudyLayout from '../components/CaseStudyLayout';
import kimsCover from '../images/home/Kim-Dragon-Cover.png';
import journeyMap from '../images/kims/JourneyMap.png';
import styleGuide from '../images/kims/StyleGuide.png';
import userPersona from '../images/kims/UserPersona.png';
import alpha from '../images/kims/alpha.png';
import beta from '../images/kims/beta.png';
import database from '../images/kims/database.png';
import team from '../images/kims/team.png';
import { openTrackedLink } from '../utils/analytics';

const contentsLinks = [
    { href: '#overview', text: 'OVERVIEW', label: 'Overview Link' },
    { href: '#context-challenge', text: 'CONTEXT & CHALLENGE', label: 'Context and Challenge Link' },
    { href: '#roles', text: 'ROLES', label: 'Roles Link' },
    { href: '#users', text: 'USERS & AUDIENCE', label: 'Users and Audience Link' },
    { href: '#process', text: 'PROCESS & INSIGHT', label: 'Process and Insight Link' },
    { href: '#results', text: 'RESULTS', label: 'Results Link' },
];

const headerButtons = [
    {
        label: 'Hi-Fi Designs',
        url: 'https://www.figma.com/design/aoznyxHy1f4gIs1dlGbXYb/216-Project?node-id=793-904&t=kchccyAVZvLv7dOE-1',
    },
    { label: 'Final Site', url: 'https://digmstudents.westphal.drexel.edu/~ojk25/idm216/final/' },
    { label: 'Project Github', url: 'https://github.com/OliviaKnestaut/2501-idm216-blueprints' },
];

const goals = [
    {
        title: 'Iterative Design Improvements',
        description:
            ' Incorporate feedback from usability tests and instructor evaluations to refine the design across three iterative builds, ensuring a user-friendly and efficient experience',
    },
    {
        title: 'Full-Stack Development',
        description:
            ' Build a fully functioning prototype using HTML, CSS, and JavaScript on the frontend, with PHP and MySQL for backend operations, enabling real-time order management and data storage',
    },
    {
        title: 'Seamless User Experience',
        description:
            ' Design an intuitive interface that simplifies the ordering process, reduces cognitive load, and ensures accessibility across different devices',
    },
];

function KimsDragon() {
    return (
        <CaseStudyLayout
            title="KIM'S DRAGON"
            subtitle="MOBILE ORDERING WEBAPP"
            coverImage={kimsCover}
            coverAlt="Three mobile screens showing pages from the Kim's Dragon Mobile Ordering Webapp"
            bgColor="bg-accent-red"
            buttons={headerButtons}
            contentsLinks={contentsLinks}
            contentId="kims-dragon-content"
        >
            <section id="overview" className="container-fluid study-section" aria-label="Case Study Overview">
                <h2 className="color-accent-red">OVERVIEW</h2>
                <article className="container-fluid study-section overview" aria-label="Case Study Overview Content">
                    <dl>
                        <dt>
                            <b>Project Type</b>
                        </dt>
                        <dd>Web App Platform Development</dd>
                        <dt>
                            <b>My Role</b>
                        </dt>
                        <dd>Full Stack Developer &amp; Data Architect</dd>
                        <dt>
                            <b>Project Timeline</b>
                        </dt>
                        <dd>September 2024 — March 2025</dd>
                        <dt>
                            <b>Project Resources</b>
                        </dt>
                        <dd>PHP, MySQL, JavaScript, HTML, CSS</dd>
                    </dl>
                    <article>
                        <p>
                            This project is an interaction design and development project to create a mobile ordering
                            web application for a local food truck on the Drexel University campus. It was created for
                            the class IDM 216, Interaction Design II, under the direction of Professor Jervis Thompson.
                            Working on a team of 5 UXID students, we were tasked with delegating roles in project
                            management, design, development, and data architecture to complete our web app for
                            Kim&apos;s Dragon. Over 10 a week period we transformed early-stage designs into a fully
                            functional web application. Through multiple iterations informed by usability testing, we
                            refined the user interface and backend functionality to create a seamless and efficient
                            ordering system. My role as primary developer and secondary data architect involved
                            front-end implementation, database structuring, and PHP integration to support dynamic menu
                            browsing and order processing.
                        </p>
                    </article>
                </article>
            </section>

            <section
                id="context-challenge"
                className="container-fluid study-section bg-accent-red inverted"
                aria-label="Context and Challenge"
            >
                <h2 className="color-tan">CONTEXT &amp; CHALLENGE</h2>
                <article className="case-study-sect color-tan" aria-label="Project Background Subsection">
                    <h3>PROJECT BACKGROUND</h3>
                    <p>
                        Kim&apos;s Dragon is a beloved Asian cuisine food truck located on Drexel University&apos;s
                        campus. A favorite of students and local residents alike, it is found on a section of Ludlow
                        Street referred to as &ldquo;Food Truck Alley.&rdquo; Working from designs created in IDM 215,
                        Interaction Design I, the specific focus of this project was to develop a mobile ordering web
                        application for the truck. Over the span of 10 weeks, I served as the primary developer and
                        secondary data architect, working alongside my teammates to bring our application from concept
                        to completion. The project operated within the constraints of academic guidelines, requiring the
                        use of HTML, CSS, JavaScript, and PHP to create and execute a full production pipeline resulting
                        in a fully functioning web app.
                    </p>
                </article>
                <article className="case-study-sect color-tan" aria-label="The Problem Subsection">
                    <h3>THE PROBLEM</h3>
                    <p>
                        Kim&apos;s Dragon is a beloved Asian cuisine food truck located on Drexel University&apos;s
                        campus. A favorite of students and local residents alike, it is found on a section of Ludlow
                        Street referred to as &ldquo;Food Truck Alley.&rdquo; Working from designs created in IDM 215,
                        Interaction Design I, the specific focus of this project was to develop a mobile ordering web
                        application for the truck. Over the span of 10 weeks, I served as the primary developer and
                        secondary data architect, working alongside my teammates to bring our application from concept
                        to completion. The project operated within the constraints of academic guidelines, requiring the
                        use of HTML, CSS, JavaScript, and PHP to create and execute a full production pipeline resulting
                        in a fully functioning web app.
                    </p>
                </article>
                <article className="case-study-sect color-tan" aria-label="Goals and Objectives Subsection">
                    <h3>GOALS &amp; OBJECTIVES</h3>
                    <p>The success of this project was defined by achieving the following tangible goals:</p>
                    <ol>
                        {goals.map((goal) => (
                            <li key={goal.title}>
                                <b>{goal.title}:</b>
                                {goal.description}
                            </li>
                        ))}
                    </ol>
                    <p>
                        With these objectives in mind, our team followed a structured development process to deliver a
                        functional, accessible, and efficient mobile ordering platform.
                    </p>
                </article>
            </section>

            <section id="roles" className="container-fluid study-section" aria-label="Roles">
                <h2 className="color-accent-red">ROLES</h2>
                <button
                    type="button"
                    className="btn btn-primary mx-auto d-block color-accent-blue bg-accent-blue color-accent-blue-hover"
                    onClick={(event) =>
                        openTrackedLink(
                            event,
                            'https://digmstudents.westphal.drexel.edu/~ojk25/idm216/',
                            "Kim's Dragon Team Page",
                        )
                    }
                >
                    <h3 className="btn-text color-tan">Team Page</h3>
                </button>
                <p>
                    For this project I was on a team with 5 members. We each had primary, secondary, or tertiary roles
                    in project management, design, development, and data architecture. We presented these roles on our
                    team project page.
                </p>
                <img
                    className="img-fluid"
                    src={team}
                    alt="The Kim's Dragon Webapp team: Olivia Knestaut, Doyeon Yoo, Amy Au, Vy Le, and Hannah Desmond"
                />
            </section>

            <section id="users" className="container-fluid study-section" aria-label="Users and Audience">
                <h2 className="color-accent-red">USERS &amp; AUDIENCE</h2>
                <button
                    type="button"
                    className="btn btn-primary mx-auto d-block color-accent-blue bg-accent-blue color-accent-blue-hover"
                    onClick={(event) =>
                        openTrackedLink(
                            event,
                            'https://digmstudents.westphal.drexel.edu/~ojk25/idm216/project-page.php',
                            "Kim's Dragon Project Page",
                        )
                    }
                >
                    <h3 className="btn-text color-tan">Project Page</h3>
                </button>
                <p>
                    To begin the project, we referred to materials gathered in IDM 216, Interaction Design I, where the
                    preliminary designs for this project were developed. Pulling from that data we modified our user
                    persona and journey map to align with our goals for the development of the project. We compiled this
                    information onto a team project page.
                </p>
                <h3 className="color-accent-blue">USER PERSONA</h3>
                <img
                    className="img-fluid"
                    src={userPersona}
                    alt="User Persona for Madeline James, an 18-year-old college student who is a frequent customer of Kim's Dragon. She values convenience, efficency, and accessibility in her food ordering experience."
                />
                <h3 className="color-accent-blue">JOURNEY MAP</h3>
                <div className="style-guide-box">
                    <img
                        className="img-fluid"
                        src={journeyMap}
                        alt="Journey Map for Madeline James, an 18-year-old college student who is a frequent customer of Kim's Dragon."
                    />
                </div>
            </section>

            <section
                id="process"
                className="container-fluid study-section bg-accent-red inverted"
                aria-label="Process and Insight"
            >
                <h2 className="color-tan">PROCESS &amp; INSIGHT</h2>
                <article className="case-study-sect color-tan" aria-label="Style Guide Subsection">
                    <h3>STYLE GUIDE</h3>
                    <p>
                        Pulling from the original designs created in IDM 216, Interaction Design I, we developed a style
                        guide to explore the site color scheme, fonts, and branding. As a developer I used this guide to
                        style the color schemes, typography, and reusable components in the CSS. Having a consistent
                        branding plan and all my assets in one place helped streamline the front-end development
                        process.
                    </p>
                    <div className="style-guide-box">
                        <img
                            className="img-fluid"
                            src={styleGuide}
                            alt="Style Guide for Kim's Dragon, outlining the color scheme, fonts, and branding elements for the mobile ordering web application."
                        />
                    </div>
                </article>
                <article className="case-study-sect color-tan" aria-label="Database Structures Subsection">
                    <h3>DATABASE STRUCTURES</h3>
                    <p>
                        Pulling from the original designs created in IDM 216, Interaction Design I, we developed a style
                        guide to explore the site color scheme, fonts, and branding. As a developer I used this guide to
                        style the color schemes, typography, and reusable components in the CSS. Having a consistent
                        branding plan and all my assets in one place helped streamline the front-end development
                        process.
                    </p>
                    <img
                        className="img-fluid"
                        src={database}
                        alt="Database Structures for Kim's Dragon, outlining the schema and relationships for the MySQL database."
                    />
                </article>
                <article className="case-study-sect color-tan" aria-label="Alpha Version Subsection">
                    <h3>ALPHA VERSION</h3>
                    <p>
                        The alpha build references the high-fidelity Figma designs that had undergone one round of
                        usability testing. To begin the development process we first coded all the critical path pages
                        in HTML and CSS. We used one menu item as a template to help plan the structure and ensure my
                        media queries for responsive designs worked as intended. The only database integration in the
                        alpha was used to populate the menu items on main.php. This version of the project was
                        considered our Alpha, which included final images, CSS stylized Buttons, Menus, Forms, and
                        Navigation between all pages.
                    </p>
                    <img
                        className="img-fluid"
                        src={alpha}
                        alt="Alpha Version for Kim's Dragon, showcasing the initial development build with basic functionality and design elements."
                    />
                </article>
                <article className="case-study-sect color-tan" aria-label="Beta Version Subsection">
                    <h3>BETA VERSION</h3>
                    <p>
                        After the designers had conducted another round of usability testing with the Alpha build we
                        began to work on the Beta build. We made changes to many of the static pages based on the
                        testing results, but overall we received positive feedback and felt confident proceeding to
                        develop more features. For the Beta, we began to incorporate PHP into the HTML and CSS template
                        pages to allow for database integration. This allows users to select items from the menu, see
                        the item details, and add items to the cart. In the cart, the subtotal, taxes, and total are
                        dynamically calculated. After checking out the user receives a receipt with a prominent order
                        number. Finally, we integrated microinteractions created by our secondary developer across the
                        PHP pages.
                    </p>
                    <img
                        className="img-fluid"
                        src={beta}
                        alt="Beta Version for Kim's Dragon, showcasing the improved development build with enhanced functionality and design elements."
                    />
                </article>
            </section>

            <section id="results" className="container-fluid study-section" aria-label="Results">
                <h2 className="color-accent-red">RESULTS</h2>
                <article className="button-flex" aria-label="Final Result Buttons">
                    <button
                        type="button"
                        className="btn btn-primary d-block color-accent-blue bg-accent-blue color-accent-blue-hover"
                        onClick={(event) =>
                            openTrackedLink(
                                event,
                                'https://digmstudents.westphal.drexel.edu/~ojk25/idm216/final/',
                                "Kim's Dragon Final Build",
                            )
                        }
                    >
                        <h3 className="btn-text color-tan">Final Build</h3>
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary d-block color-accent-blue bg-accent-blue color-accent-blue-hover"
                        onClick={(event) =>
                            openTrackedLink(
                                event,
                                'https://github.com/OliviaKnestaut/2501-idm216-blueprints',
                                "Kim's Dragon Project Github",
                            )
                        }
                    >
                        <h3 className="btn-text color-tan">Project Github</h3>
                    </button>
                </article>
                <p>
                    Following the final round of testing we incorporated some minor changes into the final build, but
                    overall the functionality worked as intended and only needed minor improvements. We incorporated
                    additional features like diet filters in the menu and customization options on each menu item. We
                    also went in and fixed minor PHP oversights like the ability to checkout without any items in the
                    cart and the ability to checkout without selecting a payment method. The final completed site allows
                    dynamic menu browsing, displaying recipes with their accompanying images and information from the
                    database. A user can add items to their cart and checkout. The application as a whole adapts to
                    mobile screen sizes, and is best viewed on a mobile device or desktop phone simulator.
                </p>
                <p>
                    The final iteration of the Kim&apos;s Dragon mobile ordering web app successfully met its
                    objectives, providing a fully functional prototype that allowed users to browse menu items, apply
                    dietary filters, customize orders, and complete transactions with a streamlined checkout process.
                    Usability testing validated the effectiveness of our design, leading to minor refinements such as
                    error handling for empty carts and required payment selections. The project not only improved the
                    food truck&apos;s potential customer engagement but also demonstrated the viability of a scalable,
                    real-world solution for small food businesses. The application adapts across mobile devices,
                    ensuring accessibility for a wide range of users.
                </p>
                <img
                    className="img-fluid"
                    src={kimsCover}
                    alt="Three mobile screens showing pages from the Kim's Dragon Mobile Ordering Webapp"
                />
            </section>
        </CaseStudyLayout>
    );
}

export default KimsDragon;
