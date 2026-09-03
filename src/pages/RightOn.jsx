import React from 'react';
import '../styles/case-study.css';
import CaseStudyHeader from '../components/CaseStudyHeader';
import { openTrackedLink } from '../utils/analytics';
import ContentsNav from '../components/ContentsNav';
import rightOnCover from '../images/home/RightOn-Cover.png';
import rightOnCoverDevices from '../images/home/RightOn-Cover.png';
import createQuestionFlowMobile from '../images/righton/Create-question-flow-mobile.png';
import createQuestionFlow from '../images/righton/Create-question-flow.png';
import currentCentralHome from '../images/righton/Current-Central-Home-Combo.png';
import currentCreateQuestion from '../images/righton/Current-Create-Question-Combo.png';
import currentGameView from '../images/righton/Current-Game-View-Combo.png';
import exploreGamesMobile from '../images/righton/Explore-Games-mobile.png';
import exploreGames from '../images/righton/Explore-Games.png';
import exploreQuestionsMobile from '../images/righton/Explore-Questions-mobile.png';
import exploreQuestions from '../images/righton/Explore-Questions.png';
import classroomTesting from '../images/righton/IMG_1936_1_1.jpg';
import myLibraryMobile from '../images/righton/My-Library-mobile.png';
import myLibrary from '../images/righton/My-Library.png';
import questionBankPC from '../images/righton/Question-Bank-PC.png';
import questionBankMobile from '../images/righton/Question-Bank-mobile.png';
import search1 from '../images/righton/Search-1.png';
import search2 from '../images/righton/Search-2.png';
import viewGameMobile from '../images/righton/View-Game-mobile.png';
import viewGame from '../images/righton/View-Game.png';
import waePC from '../images/righton/WAE-PC.png';
import waeMobile from '../images/righton/WAE-mobile.png';
import createQuestionWireframe from '../images/righton/create-question-wireframe.png';
import hifiFlow from '../images/righton/hi-fi-flow.png';
import homeWireframe from '../images/righton/home-wireframe.png';
import navigation from '../images/righton/navigation.png';
import sketches from '../images/righton/sketches.png';
import styleGuide from '../images/righton/style-guide.png';
import wireflow from '../images/righton/wireflow.png';

const contentsLinks = [
    { href: '#overview', text: 'OVERVIEW', label: 'Overview Link' },
    { href: '#problem', text: 'PROBLEM STATEMENT', label: 'Problem Statement Link' },
    { href: '#users', text: 'USERS & AUDIENCE', label: 'Users and Audience Link' },
    { href: '#research', text: 'RESEARCH', label: 'Research Link' },
    { href: '#design-process', text: 'DESIGN PROCESS', label: 'Design Process Link' },
    { href: '#results', text: 'RESULTS', label: 'Results Link' },
];

const researchCards = [
    {
        title: 'POSITIVE CLASSROOM CULTURE OF ERROR',
        text: 'When students make mistakes in math the responses of their teachers and peers impact the development of their attitudes and performance in the subject. A positive error climate correlates with greater motivation, engagement, and performance among students, while a negative error climate can lead to anxiety, avoidance behaviors, and diminished learning outcomes. Offering teachers a channel to offer constructive feedback and encouragement rather than criticism is one way to develop a positive classroom culture of error (Steuer et al., 2013).',
    },
    {
        title: 'SENSE OF BELONGING IN MATH SPACES',
        text: 'All students should feel that they belong in math class, are welcome, smart, and can succeed. Students who perceive a greater sense of belonging to mathematics demonstrate higher levels of motivation, confidence, and persistence compared to students who feel disconnected or alienated from the subject. This increase in motivation, confidence, and persistence directly translates to improved academic performance (Barbieri & Miller-Cotto, 2021).',
    },
    {
        title: 'POWER OF LEARNING FROM MISTAKES',
        text: 'Research has found that reflecting on errors is beneficial for students with all levels of knowledge. However, for students with little knowledge of a math topic, studying errors is even more effective than correct worked examples or problem-solving alone (Barbieri & Booth, 2016). A 2014 paper by Adams et al. identified what they defined as the Erroneous Examples Principle: "People learn more deeply when they are asked to critique the incorrect solution procedures of others" (Adams etc al., 2014).',
    },
    {
        title: 'PLAY TESTING',
        text: 'My fellow UX intern, Zach, and I led play-testing sessions with teachers and students in academic settings across the Philadelphia area. These sessions included working with students at Carver Engineering and Science High School, Congreso de Latinos Unidos, and Math Corps Philly Summer Camp. Survey results, group discussions, and observations from these classes aided our team in identifing bugs and potential enhancements for the platform.',
    },
    {
        title: 'COMPETITIVE ANALYSIS',
        text: 'We performed several competitive analyses on other EdTech platforms, with a focus on systems that address misconceptions and incorporate artificial intelligence. Some of these competitors include Gimkit, Eedi, Quizziz, Kyron Learning, and Magic School AI. We used this data to continue to develop the RightOn Competitor & Collaborator Landscape and compare AI and misconception capabilities.',
    },
];

function ResponsivePicture({ src, mobileSrc, alt }) {
    return (
        <picture>
            <source media="(min-width: 1000px)" srcSet={src} />
            <img className="img-fluid" src={mobileSrc} alt={alt} />
        </picture>
    );
}

function RightOn() {
    return (
        <>
            <CaseStudyHeader
                title="RIGHT ON EDUCATION"
                subtitle="CENTRAL REDESIGN"
                coverImage={rightOnCover}
                coverAlt="Laptop, tablet, and mobile screens showing pages from the RightOn Central Redesign Project"
                bgColor="bg-accent-purple"
            />

            <ContentsNav links={contentsLinks} skipTargetId="righton-content" />

            <main id="righton-content" className="case-study-page" aria-label="Case Study Main Content">
                <section id="overview" className="container-fluid study-section" aria-label="Case Study Overview">
                    <h2 className="color-accent-purple">OVERVIEW</h2>
                    <article
                        className="container-fluid study-section overview"
                        aria-label="Case Study Overview Content"
                    >
                        <dl>
                            <dt>
                                <b>Project Type</b>
                            </dt>
                            <dd>Web App Platform Redesign</dd>
                            <dt>
                                <b>My Role</b>
                            </dt>
                            <dd>User Experience Designer &amp; Researcher</dd>
                            <dt>
                                <b>Project Timeline</b>
                            </dt>
                            <dd>April — September 2024</dd>
                            <dt>
                                <b>Project Resources</b>
                            </dt>
                            <dd>Figma, Illustrator, Photoshop, User Testing</dd>
                        </dl>
                        <article>
                            <p>
                                RightOn!™ is a web-based platform that engages students in thinking about and learning
                                from mistakes and misconceptions in K-12 math. By shifting focus from quick recall to
                                understanding why wrong answers are wrong, students see errors as learning
                                opportunities, gain confidence in their ability to improve, and develop deeper
                                conceptual understanding of core math concepts. The RightOn! platform consists of three
                                parts: a learner-facing web app, a database of games and questions, and a teacher facing
                                dashboard.
                            </p>
                            <p>
                                Over the course of six months from April to September 2024 I completed a Co-Op
                                Experience as a User Experience Designer and Researcher at RightOn! education. Under the
                                direction of CEO{' '}
                                <a
                                    href="https://www.linkedin.com/in/sinclairwu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(event) =>
                                        openTrackedLink(
                                            event,
                                            'https://www.linkedin.com/in/sinclairwu/',
                                            'Sinclair Wu LinkedIn',
                                        )
                                    }
                                >
                                    Sinclair Wu
                                </a>
                                , Development Head{' '}
                                <a
                                    href="https://www.linkedin.com/in/drewjhart/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(event) =>
                                        openTrackedLink(
                                            event,
                                            'https://www.linkedin.com/in/drewjhart/',
                                            'Drew Hart LinkedIn',
                                        )
                                    }
                                >
                                    Drew Hart
                                </a>
                                , and Design Head{' '}
                                <a
                                    href="https://www.linkedin.com/in/rodhinn/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(event) =>
                                        openTrackedLink(
                                            event,
                                            'https://www.linkedin.com/in/rodhinn/',
                                            'Rod Hinn LinkedIn',
                                        )
                                    }
                                >
                                    Rod Hinn
                                </a>{' '}
                                I spearheaded the comprehensive redesign of RightOn! Central, the teacher facing
                                database of games and questions. Fellow UX intern{' '}
                                <a
                                    href="https://www.linkedin.com/in/zachary-spindel-192307231/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(event) =>
                                        openTrackedLink(
                                            event,
                                            'https://www.linkedin.com/in/zachary-spindel-192307231/',
                                            'Zach Spindel LinkedIn',
                                        )
                                    }
                                >
                                    Zach Spindel
                                </a>{' '}
                                assisted in the development of microinteraction design on this project, and Development
                                Intern{' '}
                                <a
                                    href="https://www.linkedin.com/in/kelly-couvrette/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(event) =>
                                        openTrackedLink(
                                            event,
                                            'https://www.linkedin.com/in/kelly-couvrette/',
                                            'Kelly Couvrette LinkedIn',
                                        )
                                    }
                                >
                                    Kelly Couvrette
                                </a>{' '}
                                assisted in early implementation.
                            </p>
                        </article>
                    </article>
                </section>

                <section
                    id="problem"
                    className="container-fluid study-section"
                    aria-label="Case Study Problem Statement"
                >
                    <h2 className="color-accent-purple">PROBLEM STATEMENT</h2>
                    <p>
                        The RightOn Education platform is still in beta and most design and development efforts have
                        focused on student gameplay (RightOn Play) and the in-game teacher dashboard (RightOn Host). The
                        RightOn Central website,{' '}
                        <a
                            href="https://central.rightoneducation.com/"
                            onClick={(event) =>
                                openTrackedLink(
                                    event,
                                    'https://central.rightoneducation.com/',
                                    'RightOn Central Current Site',
                                )
                            }
                        >
                            https://central.rightoneducation.com/
                        </a>
                        , in its present state was created to get the platform up and running, rather than focus on user
                        experience or design. In addition to being utilitarian the current designs are not responsive on
                        small screen sizes. With RightOn Play and RightOn Host now sufficently developed and deployed in
                        beta, the next focus was to redesign and restructure RightOn Central for an improved instructor
                        experience choosing and creating games.
                    </p>
                    <figure aria-label="Explore Games Figure">
                        <figcaption className="color-accent-blue">
                            <b>Explore Games</b>
                        </figcaption>
                        <img
                            className="pc-img"
                            src={currentCentralHome}
                            alt="Explore Games Old Screen on PC and Mobile"
                        />
                    </figure>
                    <figure aria-label="View Game Figure">
                        <figcaption className="color-accent-blue">
                            <b>View Game</b>
                        </figcaption>
                        <img className="pc-img" src={currentGameView} alt="View Game Old Screen on PC and Mobile" />
                    </figure>
                    <figure aria-label="Create Question Figure">
                        <figcaption className="color-accent-blue">
                            <b>Create Question</b>
                        </figcaption>
                        <img
                            className="pc-img"
                            src={currentCreateQuestion}
                            alt="Create Question Old Screen on PC and Mobile"
                        />
                    </figure>
                </section>

                <section
                    id="users"
                    className="container-fluid study-section"
                    aria-label="Case Study Users and Audience"
                >
                    <h2 className="color-accent-purple">USERS &amp; AUDIENCE</h2>
                    <p>
                        The RightOn platform is acquired by teachers and school administrators for use in their
                        classrooms and school districts. RightOn prioritizes educational equity, offering the platform
                        to all users for free, without requiring any software downloads or student logins.{' '}
                        <b>
                            RightOn aims to be optimized for young and new-to-subject teachers to help familiarize them
                            with common core standards and reduce teacher turnover rates in math. Young and new-to
                            subject teachers, while often tech savvy, predominantly come from non-STEM majors and are
                            more likely to need pedagogical support. These teachers are also less traditional in their
                            teaching methods and more open to teaching social-emotional learning (SEL) and
                            self-reflection.
                        </b>
                    </p>
                    <p>
                        Currently the RightOn Beta is deployed within several schools, after school programs, and summer
                        camps across the Philadelphia area. The current beta focuses on math for students in grades 6-9.
                        Once fully launched the system will cater to K-12 math, HigherEd corequesite math and GED math.
                    </p>
                    <img
                        className="img-fluid"
                        src={classroomTesting}
                        alt="Olivia in a Philadelphia classroom doing in person user testing with students"
                    />
                </section>

                <section
                    id="research"
                    className="container-fluid study-section bg-accent-purple inverted"
                    aria-label="Case Study Research"
                >
                    <h2 className="color-tan">RESEARCH</h2>
                    <p className="research-intro color-tan">
                        During my time at RightOn, I had the opportunity to work with our expert advisors and UX team
                        members to help develop the base of research surrounding the company's core tenants. These
                        tenants include a positive classroom culture of error, a sense of belonging in math spaces, and
                        the power of learning from mistakes. Research was conducted though literature reviews, play
                        testing, and competitive analysis. The following research findings were used to inform the
                        design of RightOn Central.
                    </p>
                    <section className="research-grid">
                        {researchCards.map((card) => (
                            <article
                                key={card.title}
                                className="research-card color-tan"
                                aria-label={`${card.title} Research Card`}
                            >
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </article>
                        ))}
                    </section>
                </section>

                <section
                    id="design-process"
                    className="container-fluid study-section"
                    aria-label="Case Study Design Process"
                >
                    <h2 className="color-accent-purple">DESIGN PROCESS</h2>
                    <article className="case-study-sect" aria-label="Style Guide Section">
                        <h3 className="color-accent-blue">STYLE GUIDE</h3>
                        <p>
                            At the beginning of this project the RightOn style guide was outdated, still aligning with a
                            past app design that had been scrapped. In order to begin the comprehensive overhaul of
                            Right On Central we needed to ensure there would be a cohesive brand style across all three
                            platforms in the RightOn system. RightOn Play, the student facing game, was predominantly
                            decorative-purple and RightOn Host, the teacher dashboard, was predominantly
                            secondary-accent. We decided to incorporate both of these color schemes into RightOn Central
                            as it is the database that bring together Host and Play. All color combinations were tested
                            for compliance with AA and AAA accessibility standards.
                        </p>
                        <img className="img-fluid" src={styleGuide} alt="RightOn Education Style Guide" />
                    </article>
                    <article className="case-study-sect" aria-label="Responsive Design Section">
                        <h3 className="color-accent-blue">RESPONSIVE DESIGN</h3>
                        <p>
                            It is essential that all systems in the RightOn platform are responsive and accessible on
                            all devices to align with the principle of Educational Equity. Not every school, district,
                            or program has access to laptops and technology funding so a mobile-friendly system can
                            support a greater range of classrooms. Design changes on different device sizes must allow
                            all content to remain accessible, allowing seamless performance without a detriment to user
                            experience.
                        </p>
                        <img
                            className="img-fluid"
                            src={rightOnCoverDevices}
                            alt="Screens from the RightOn Central System across different devices"
                        />
                    </article>
                    <article className="case-study-sect" aria-label="Wireframes Section">
                        <h3 className="color-accent-blue">WIREFRAMES</h3>
                        <p>
                            The first design step was to wireframe out preliminary concepts. There was a small base of
                            ideation from a previous UX team member to be used as a starting point. Beginning with
                            digital sketches, then moving to Figma wireframes I developed designs for the current and
                            intended functionality of RightOn Central, incorporating the system's card structure. These
                            wireframes were arranged into a wireflow to visualize possible use cases.
                        </p>
                        <button
                            type="button"
                            className="btn btn-primary mx-auto d-block color-accent-blue bg-accent-blue color-accent-blue-hover case-study-btn"
                            onClick={(event) =>
                                openTrackedLink(
                                    event,
                                    'https://www.figma.com/design/ICAQP1cDQS9MEnCjlwhKFo/RightOn-Central?node-id=22-67438&t=iLRkIwQlbRt8lS1M-4',
                                    'RightOn Figma Wireframes',
                                )
                            }
                        >
                            <h3 className="btn-text color-tan">Figma Wireframes</h3>
                        </button>
                        <img className="img-fluid" src={sketches} alt="Early sketched wireframes" />
                        <figure
                            className="d-flex wireframes"
                            aria-label="Early Wireframes of Home and Create Question Screens"
                        >
                            <img src={homeWireframe} alt="Home page wireframe" />
                            <img src={createQuestionWireframe} alt="Create question wireframe" />
                        </figure>
                        <img className="img-fluid" src={wireflow} alt="Large wireflow of main system screens" />
                    </article>
                    <article className="case-study-sect" aria-label="High Fidelity Mockups Section">
                        <h3 className="color-accent-blue">HIGH FIDELITY MOCKUPS</h3>
                        <p>
                            Once our ideas were solidified in wireframes, we began the process of transitioning them
                            into higher-fidelity mockups. These mockups included a wider scope of screens and
                            interactions. These designs were annotated in depth to ensure a clear understanding for
                            future designers and developers on the RightOn team. Specific designs and rationale will be
                            elaborated below in the results section.
                        </p>
                        <button
                            type="button"
                            className="btn btn-primary mx-auto d-block color-accent-blue bg-accent-blue color-accent-blue-hover case-study-btn"
                            onClick={(event) =>
                                openTrackedLink(
                                    event,
                                    'https://www.figma.com/design/ICAQP1cDQS9MEnCjlwhKFo/RightOn-Central?node-id=0-1&t=xPC0xpj36H08ZDGr-1',
                                    'RightOn Figma Hi-fi Designs',
                                )
                            }
                        >
                            <h3 className="btn-text color-tan">Figma Hi-fi Designs</h3>
                        </button>
                        <img
                            className="img-fluid"
                            src={hifiFlow}
                            alt="Large high fidelity flow of all system screens"
                        />
                    </article>
                    <article className="case-study-sect" aria-label="Design-Dev Handoff Section">
                        <h3 className="color-accent-blue">DESIGN-DEV HANDOFF</h3>
                        <p>
                            As designs for screens, interactions, and components were completed the UX team periodically
                            met with the Dev team to discuss feasibility, make adjustments, and discuss rationale. These
                            handoff meetings often dove deep into pixel-perfect details, lasting for hours. Some
                            designs, like choosing common core standards or logging in/signing up, needed to be broken
                            out into more complex user flows. These flows were intended to provide more clarity to the
                            dev team in the implementation of processes with many steps.
                        </p>
                    </article>
                </section>

                <section
                    id="results"
                    className="container-fluid study-section inverted bg-accent-purple"
                    aria-label="Case Study Results"
                >
                    <h2 className="color-tan">RESULTS</h2>
                    <article className="case-study-sect color-tan" aria-label="Navigation Results Section">
                        <h3>NAVIGATION</h3>
                        <p>
                            The RightOn Central navigation has six main buttons. On the left, the RightOn logo used to
                            return to Explore Games, in the center the three main explore pages: Explore Games, Explore
                            Questions, and My Library, and finally, on the right Create Game/Question and Profile. An
                            important element in the development of the navigation design was choosing the iconography.
                            These are the most present icons in the system, appearing on every page so they need to be
                            clear and engaging.
                        </p>
                        <figure aria-label="Final Navigation Designs">
                            <figcaption>
                                <b>Responsive Navigation</b>
                            </figcaption>
                            <img className="img-fluid" src={navigation} alt="Final Navigation Designs" />
                        </figure>
                    </article>
                    <article className="case-study-sect color-tan" aria-label="Search and Filter Results Section">
                        <h3>SEARCH AND FILTER</h3>
                        <p>
                            The search and filter functionality witin RightOn Central is designed to aid teachers in
                            finding relevant games. There is no search button, results begin lazy loading after a user
                            begins typing. The debounce for this lazy load is 800ms. The search bar parses the title,
                            description, and CCSS fields of all public games in the database. On the left side, users
                            can filter results by grade level. This filter allows multi-select so users can pick a range
                            of applicable grades. On the right side, users can sort results after a search. Only one
                            sort option can be selected at a time. Attempting to select another overrides the prior
                            selection. The default sort on load is date updated, descending (most recent at top). Other
                            sort options are:
                        </p>
                        <ul aria-label="Search and Filter Sort Options">
                            <li>Date Updated: Descending or Ascending</li>
                            <li>Most Popular: Descending or Ascending</li>
                            <li>Grade Level: Descending or Ascending</li>
                            <li>Question Count: Descending or Ascending</li>
                        </ul>
                        <figure aria-label="Search Bar Figure">
                            <figcaption>
                                <b>Search Bar</b>
                            </figcaption>
                            <img className="img-fluid" src={search1} alt="Final Search Design" />
                            <img className="img-fluid" src={search2} alt="Final Post Search Designs" />
                        </figure>
                    </article>
                    <article
                        className="case-study-sect color-tan"
                        aria-label="Explore Games, Explore Questions, and My Library Results Section"
                    >
                        <h3>EXPLORE GAMES, EXPLORE QUESTIONS, &amp; MY LIBRARY</h3>
                        <p>
                            Explore Games, Explore Questions, and My Library are the three main tabs across RightOn
                            Central&apos;s navigation. If a user is logged in the system will recommend games based on
                            their history, if a user is not logged in they will instead see featured games. All games in
                            Explore Games and Explore Questions are public games created by other members of the
                            platform. Users can access games they have created in My Library. User-owned games are
                            sorted into public, private, and drafts. Users can also find public games they have
                            favorited here.
                        </p>
                        <figure aria-label="Explore Games Figure">
                            <figcaption>
                                <b>Explore Games</b>
                            </figcaption>
                            <ResponsivePicture
                                src={exploreGames}
                                mobileSrc={exploreGamesMobile}
                                alt="Explore Games Final Desktop, Tablet, and Mobile Designs"
                            />
                        </figure>
                        <figure aria-label="Explore Questions Figure">
                            <figcaption>
                                <b>Explore Questions</b>
                            </figcaption>
                            <ResponsivePicture
                                src={exploreQuestions}
                                mobileSrc={exploreQuestionsMobile}
                                alt="Explore Questions Final Desktop, Tablet, and Mobile Designs"
                            />
                        </figure>
                        <figure aria-label="My Library Figure">
                            <figcaption>
                                <b>My Library</b>
                            </figcaption>
                            <ResponsivePicture
                                src={myLibrary}
                                mobileSrc={myLibraryMobile}
                                alt="My Library Final Desktop, Tablet, and Mobile Designs"
                            />
                        </figure>
                    </article>
                    <article
                        className="case-study-sect color-tan"
                        aria-label="View Game and View Questions Results Section"
                    >
                        <h3>VIEW GAME &amp; VIEW QUESTION</h3>
                        <p>
                            From any of these explore pages, instructors can click into a game or question to see its
                            details. Viewing a game or question allows you to see the questions, correct answer,
                            incorrect answers, and incorrect answer explanations. This is also where users can launch a
                            game to play with their class.
                        </p>
                        <figure aria-label="View Game Figure">
                            <figcaption>
                                <b>View Game</b>
                            </figcaption>
                            <ResponsivePicture
                                src={viewGame}
                                mobileSrc={viewGameMobile}
                                alt="View Game Final Desktop, Tablet, and Mobile Designs"
                            />
                        </figure>
                    </article>
                    <article className="case-study-sect color-tan" aria-label="Create Question Results Section">
                        <h3>CREATE QUESTION</h3>
                        <p>
                            One of the most important flows within RightOn Central is the question creation flow. This
                            flow is used to create questions within a game and within the question bank. The user is
                            guided through the flow by secondary-accent highlights around the card next in the process.
                        </p>
                        <ResponsivePicture
                            src={createQuestionFlow}
                            mobileSrc={createQuestionFlowMobile}
                            alt="Create Question Flow Final Designs"
                        />
                        <p>
                            One feature of the RightOn system is the Wrong Answer Explanations Prototype. This program
                            takes in a math question and its multiple-choice options and uses AI to provide possible
                            explanations for the incorrect options. I integrated this functionality directly into the
                            question-creation flow to improve the ease of use.
                        </p>
                        <figure aria-label="Wrong Answer Explanations Integration Figure">
                            <figcaption>
                                <b>Wrong Answer Explanations Integration</b>
                            </figcaption>
                            <ResponsivePicture
                                src={waePC}
                                mobileSrc={waeMobile}
                                alt="Wrong Answer Explanations Final Designs"
                            />
                        </figure>
                    </article>
                    <article className="case-study-sect color-tan" aria-label="Create Game Results Section">
                        <h3>CREATE GAME</h3>
                        <p>
                            Another important flow is the create game flow. Through this users can create games made of
                            pre-existing questions or pull from the question bank. Users can make both public a private
                            games, but each can only be made of questions of the same type.
                        </p>
                        <figure aria-label="Question Bank Figure">
                            <figcaption>
                                <b>Question Bank</b>
                            </figcaption>
                            <ResponsivePicture
                                src={questionBankPC}
                                mobileSrc={questionBankMobile}
                                alt="Question Bank Final Desktop, Tablet, and Mobile Designs"
                            />
                        </figure>
                    </article>
                </section>
            </main>
        </>
    );
}

export default RightOn;
