import React from 'react';
import '../styles/case-study.css';
import CaseStudyHeader from '../components/CaseStudyHeader';
import { openTrackedLink } from '../utils/analytics';
import ContentsNav from '../components/ContentsNav';
import letterboxdCover from '../images/home/Letterboxd-Cover.png';
import betaInteraction1 from '../images/letterboxd/beta-interaction-1.png';
import betaInteraction2Active from '../images/letterboxd/beta-interaction-2-active.png';
import betaInteraction2 from '../images/letterboxd/beta-interaction-2.png';
import betaInteraction3Active from '../images/letterboxd/beta-interaction-3-active.png';
import betaInteraction3 from '../images/letterboxd/beta-interaction-3.png';
import finalInteractionClearRating from '../images/letterboxd/final-interaction-clear-rating.png';
import finalInteractionMoreActive from '../images/letterboxd/final-interaction-more-active.png';
import finalInteractionMore from '../images/letterboxd/final-interaction-more.png';
import finalInteractionRatingActive from '../images/letterboxd/final-interaction-rating-active.png';
import finalInteractionRating from '../images/letterboxd/final-interaction-rating.png';

const contentsLinks = [
    { href: '#overview', text: 'OVERVIEW', label: 'Overview Link' },
    { href: '#context-challenge', text: 'CONTEXT & CHALLENGE', label: 'Context and Challenge Link' },
    { href: '#process-insight', text: 'PROCESS & INSIGHT', label: 'Process and Insight Link' },
    { href: '#solution', text: 'SOLUTION', label: 'Solution Link' },
    { href: '#results', text: 'RESULTS', label: 'Results Link' },
];

const headerButtons = [{ label: 'Final Build', url: 'https://oknestaut.netlify.app/idm241/final/build' }];

const goals = [
    'Ease of Use: Ensure that all interactions are intuitive and require minimal user effort',
    'Engaging Animations: Introduce visually appealing animations that enhance the experience without overwhelming the user',
    "Brand Consistency: Maintain alignment with Letterboxd's existing aesthetic and incorporate their brand colors",
    'Functionality: Build a fully functioning prototype using HTML, CSS and JS with documentation of the triggers, rules, feedback, loops and modes',
    'Iterative Improvement: Incorporate feedback from peers, the instructor, and self-assessment to improve the design through three iterative builds',
];

const results = [
    'Ease of Use: The redesigned tile simplifies interactions, with intuitive triggers and easily accessible elements like the star rating system, which was moved out of the “more” menu for greater visibility',
    'Engaging Animations: Smooth color transitions and responsive animations were implemented, creating a satisfying and visually appealing user experience',
    "Brand Consistency: Letterboxd's branding was seamlessly integrated into the design through the consistent use of its primary-accent, decorative-green, and secondary-accent color palette",
    'Functionality: The prototype features fully functional microinteractions, such as the star rating system and toggle buttons for “like” and “viewed” states. Each microinteraction is underpinned by detailed documentation of triggers, rules, feedback, and modes',
    'Iterative Improvement: Feedback from peers and the instructor was incorporated across three builds, resulting in a refined final product',
];

function Letterboxd() {
    return (
        <>
            <CaseStudyHeader
                title="LETTERBOXD MOVIE TILE"
                subtitle="MICROINTERACTION DESIGN"
                coverImage={letterboxdCover}
                coverAlt="Hand cursor shown interacting with a specific movie card on Letterboxd"
                bgColor="bg-accent-blue"
                buttons={headerButtons}
            />

            <ContentsNav links={contentsLinks} skipTargetId="letterboxd-content" />

            <main id="letterboxd-content" className="case-study-page" aria-label="Case Study Main Content">
                <section id="overview" className="container-fluid study-section" aria-label="Case Study Overview">
                    <h2 className="color-accent-green">OVERVIEW</h2>
                    <article
                        className="container-fluid study-section overview"
                        aria-label="Case Study Overview Content"
                    >
                        <dl>
                            <dt>
                                <b>Project Type</b>
                            </dt>
                            <dd>Microinteraction Design and Development</dd>
                            <dt>
                                <b>Project Timeline</b>
                            </dt>
                            <dd>September — December 2024</dd>
                            <dt>
                                <b>Project Resources</b>
                            </dt>
                            <dd>Figma, HTML, CSS, JavaScript</dd>
                        </dl>
                        <article>
                            <p>
                                This project is a microinteraction design to improve the Letterboxd movie tile. It was
                                created for the class IDM 241, Microinteraction Design, under the direction of Professor
                                Jervis Thompson. Working individually, but with class and instructor support, we were
                                tasked to redesign and develop a microinteraction ecosystem with five plus interactions
                                using HTML, CSS, and JavaScript. Over 10+ weeks I brainstormed, designed, and created
                                three different builds as I progressed through the project. Through each step of the
                                process I emphasized ease of use, brand consistency, and engaging animations. The final
                                build includes not only the developed microinteraction, but also detailed descriptions
                                of the triggers, rules, feedback, loops and modes for each microinteraction in the tile.
                            </p>
                        </article>
                    </article>
                </section>

                <section
                    id="context-challenge"
                    className="container-fluid study-section bg-accent-blue inverted"
                    aria-label="Context and Challenge"
                >
                    <h2 className="color-tan">CONTEXT &amp; CHALLENGE</h2>
                    <article className="case-study-sect color-tan" aria-label="Project Background Subsection">
                        <h3>PROJECT BACKGROUND</h3>
                        <p>
                            Letterboxd is a social media platform for film enthusiasts. On Letterboxd, members can
                            interact with films by liking, rating, reviewing, and adding shows to watchlists. The
                            specific focus of this project was on improving the interactivity of the movie tile, a
                            critical element of the Letterboxd interface that provides users with quick access to
                            essential movie details. Over the span of 10 weeks, I worked individually to conceptualize,
                            design, and develop my improved microactions. The project operated within the constraints of
                            academic guidelines, requiring the use of HTML, CSS, and JavaScript to produce a functional
                            prototype. Each interaction was designed to align with Letterboxd&apos;s existing branding
                            while emphasizing ease of use and engaging visual feedback. My iterative process included
                            multiple design phases, culminating in a final build with detailed documentation of the
                            interaction functionality.
                        </p>
                    </article>
                    <article className="case-study-sect color-tan" aria-label="The Problem Subsection">
                        <h3>THE PROBLEM</h3>
                        <p>
                            The Letterboxd movie tile serves as a gateway to key information and interactions with a
                            film, but its current design is in need of improvements to become more intuitive and
                            visually engaging. Currently, the buttons within the tile only take up a very small overlay
                            space at the bottom of the tile. This area can be difficult for some users to target or see.
                            Additionally, one of the most important features, rating a movie, is hidden within the
                            “more” menu. During an interaction, most changes either buffer or happen instantly without
                            any transition.
                        </p>
                        <p>
                            Without effective microinteractions, users may experience friction when trying to access or
                            interact with movie details, which diminishes the overall user experience. This project
                            sought to solve this problem by redesigning the tile and its elements to deliver a smoother,
                            more visually engaging, and efficient interaction flow, improving both user satisfaction and
                            platform usability.
                        </p>
                        <figure aria-label="Video showing the current implementation of Letterboxd's Movie Tile">
                            <figcaption>
                                <b>CURRENT MICROINTERACTION</b>
                            </figcaption>
                            {/* biome-ignore lint/a11y/useMediaCaption: no caption file available for this demo video */}
                            <video
                                className="full-vid"
                                controls
                                aria-label="Video showing the current implementation of Letterboxd's Movie Tile"
                            >
                                <source
                                    src={`${process.env.PUBLIC_URL}/files/current_letterboxd.mp4`}
                                    type="video/mp4"
                                />
                            </video>
                        </figure>
                    </article>
                    <article className="case-study-sect color-tan" aria-label="Goals and Objectives Subsection">
                        <h3>GOALS &amp; OBJECTIVES</h3>
                        <p>The success of this project was defined by achieving the following tangible goals:</p>
                        <ol>
                            {goals.map((goal) => (
                                <li key={goal}>
                                    <b>{goal.split(':')[0]}:</b>
                                    {goal.split(':').slice(1).join(':')}
                                </li>
                            ))}
                        </ol>
                        <p>
                            By successfully meeting these goals, the redesigned microinteraction would not only enhance
                            the user experience but also serve as a showcase of technical and design skills in
                            microinteraction design.
                        </p>
                    </article>
                </section>

                <section
                    id="process-insight"
                    className="container-fluid study-section"
                    aria-label="Process and Insights"
                >
                    <h2 className="color-accent-green">PROCESS &amp; INSIGHTS</h2>

                    <article className="case-study-sect" aria-label="Alpha Version Subsection">
                        <h3 className="color-accent-blue">ALPHA VERSION</h3>
                        <article className="button-flex" aria-label="Final Result Buttons">
                            <button
                                type="button"
                                className="btn btn-primary d-block color-accent-blue bg-accent-blue color-accent-blue-hover"
                                onClick={() =>
                                    openTrackedLink(
                                        'https://oknestaut.netlify.app/idm241/alpha',
                                        'Letterboxd Alpha Description',
                                    )
                                }
                            >
                                <h3 className="btn-text color-tan">Alpha Description</h3>
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary d-block color-accent-blue bg-accent-blue color-accent-blue-hover"
                                onClick={() =>
                                    openTrackedLink(
                                        'https://oknestaut.netlify.app/idm241/alpha/build',
                                        'Letterboxd Alpha Build',
                                    )
                                }
                            >
                                <h3 className="btn-text color-tan">Alpha Build</h3>
                            </button>
                        </article>
                        <p>
                            To begin the process I first had to evaluate the microinteraction as it currently exists on
                            Letterboxd. To do this I created my alpha description where I analyzed the main movie tile
                            interaction. In my description I discovered that the triggers for the tile were hovering on,
                            hovering on and waiting for a 2 second delay, hovering off, and clicking on the movie tile
                            (mouse up). These triggers informed my detailing of the rules which primarily included the
                            tile border appearing, the icon overlay appearing, and navigation away from the page on
                            click. The tile interaction alone does not write to the backend, so the feedback section is
                            the same as the rules. The modes that appear include the icon overlay and the movie title.
                        </p>
                        <p>
                            Based on the description I detailed I had to code my alpha build. I incorporated all the
                            triggers, rules, feedback, loops and modes that are in the original, in and effort to make
                            my replica as close as possible. This version only includes the tile object, not the sub
                            buttons like the eye and heart. I completed this build using only HTML and CSS.
                        </p>
                    </article>

                    <article className="case-study-sect" aria-label="Beta Version Subsection">
                        <h3 className="color-accent-blue">BETA VERSION</h3>
                        <article className="button-flex" aria-label="Final Result Buttons">
                            <button
                                type="button"
                                className="btn btn-primary d-block color-accent-blue bg-accent-blue color-accent-blue-hover"
                                onClick={() =>
                                    openTrackedLink(
                                        'https://oknestaut.netlify.app/idm241/beta',
                                        'Letterboxd Beta Description',
                                    )
                                }
                            >
                                <h3 className="btn-text color-tan">Beta Description</h3>
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary d-block color-accent-blue bg-accent-blue color-accent-blue-hover"
                                onClick={() =>
                                    openTrackedLink(
                                        'https://oknestaut.netlify.app/idm241/beta/build',
                                        'Letterboxd Beta Build',
                                    )
                                }
                            >
                                <h3 className="btn-text color-tan">Beta Build</h3>
                            </button>
                        </article>
                        <p>
                            While the alpha was meant to model the existing microinteraction, the beta is where I began
                            to make changes to improve the design. I also had to start incorporating more sub
                            interactions within the tile. For the beta, I focused on 3 microinteractions: the tile, the
                            view button, and the like button. While completing the description I realized that buttons
                            like the view eye and like heart had multiple states that needed to be detailed out. I
                            mocked up the intended designs in Figma, breaking out the different triggers and parts of
                            the flow. These graphics helped provide me with a visual guide to follow as I coded my
                            interactions.
                        </p>
                        <section
                            className="interaction-img"
                            aria-label="Images of the Beta Version Microinteraction Designs"
                        >
                            <img
                                className="smaller"
                                src={betaInteraction1}
                                alt="Images of a cursor demonstrating the cursor hover title pop-up effect on the movie tile"
                            />
                            <img
                                src={betaInteraction2}
                                alt="Images of a cursor marking a movie as viewed with the eye icon and border color changing to decorative green"
                            />
                            <img
                                src={betaInteraction2Active}
                                alt="Images of a cursor unmarking a movie as viewed with the eye icon and border color changing back to default"
                            />
                            <img
                                className="smaller"
                                src={betaInteraction3}
                                alt="Images of a cursor marking a movie as liked with the heart icon and border color changing to orange"
                            />
                            <img
                                className="smaller"
                                src={betaInteraction3Active}
                                alt="Images of a cursor unmarking a movie as liked with the heart icon and border color changing back to default"
                            />
                        </section>
                        <p>
                            Based on the graphics and detailed description I coded my beta build. I incorporated all the
                            triggers, rules, feedback, loops and modes in my description. This build focuses on the
                            tile, view button, and like button. It again uses HTML and CSS but also incorporates JS to
                            manage the state changes between default and active for the buttons. I focused on developing
                            smooth color transitions for the borders to create a satisfying visual when the users press
                            a button.
                        </p>
                    </article>

                    <article className="case-study-sect" aria-label="Final Version Subsection">
                        <h3 className="color-accent-blue">FINAL VERSION</h3>
                        <article className="button-flex" aria-label="Final Result Buttons">
                            <button
                                type="button"
                                className="btn btn-primary d-block color-accent-blue bg-accent-blue color-accent-blue-hover"
                                onClick={() =>
                                    openTrackedLink(
                                        'https://oknestaut.netlify.app/idm241/final',
                                        'Letterboxd Final Description',
                                    )
                                }
                            >
                                <h3 className="btn-text color-tan">Final Description</h3>
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary d-block color-accent-blue bg-accent-blue color-accent-blue-hover"
                                onClick={() =>
                                    openTrackedLink(
                                        'https://oknestaut.netlify.app/idm241/final/build',
                                        'Letterboxd Final Build',
                                    )
                                }
                            >
                                <h3 className="btn-text color-tan">Final Build</h3>
                            </button>
                        </article>
                        <p>
                            Building off of the functionality of the beta I moved into designing my final. I created
                            more Figma mockups to detail the final microinteractions I would include. These were the
                            star ratings, the clear ratings button, and the more menu. Of all the microinteractions I
                            incorporated into this project, the star rating system was both the most complex to design
                            and develop. It allows users to rate movies in increments of half stars and change their
                            ratings as well. Ultimately, my final build ended up varying from my Figma mockups a bit
                            especially for the star rating designs.
                        </p>
                        <section
                            className="interaction-img"
                            aria-label="Images of the Final Version Microinteraction Designs"
                        >
                            <img
                                className="smaller"
                                src={finalInteractionRating}
                                alt="Images of a cursor rating a movie with the star symbols and the border color changing to blue"
                            />
                            <img
                                className="smaller"
                                src={finalInteractionRatingActive}
                                alt="Images of a cursor changing a movie rating by selecting a different number of stars"
                            />
                            <img
                                className="smaller"
                                src={finalInteractionClearRating}
                                alt="Images of a cursor removing a rating with the 'x' symbol and the border changing back to green for viewed"
                            />
                            <img
                                className="info1"
                                src={finalInteractionMore}
                                alt="Images of a cursor showing interaction with the more info option"
                            />
                            <img
                                src={finalInteractionMoreActive}
                                alt="Images of a cursor showing interaction with the more info popup menu"
                            />
                        </section>
                    </article>
                </section>

                <section
                    id="solution"
                    className="container-fluid study-section bg-accent-blue inverted color-tan"
                    aria-label="Solution"
                >
                    <h2 className="color-tan">SOLUTION</h2>
                    <p>
                        The culmination of the microinteraction analyses and developed iterations is the final project
                        build. This build consists of three movie tiles that all function independently of one another
                        and all contain the same microinteractions within them. These interactions include:
                    </p>
                    <ul>
                        <li>Movie Tile</li>
                        <li>Viewed Button - Default &amp; Active</li>
                        <li>Like Button - Default &amp; Active</li>
                        <li>Star Rating - Default &amp; Active</li>
                        <li>Clear Rating</li>
                        <li>More Options - Default &amp; Active</li>
                    </ul>
                    <p>
                        While developing these interactions I wanted to incorporate the brand colors of primary-accent,
                        secondary-accent and decorative-green more throughout the designs. The main way that I brought
                        this in was through the button and border colors when a button is selected. The like button is
                        primary-accent, the view button is decorative-green, and the rating system is secondary-accent.
                        These colors also transition seamlessly between one another when a different button is selected.
                        In order to do this I had to create a hierarchy regarding what buttons overwrite the border
                        colors. There is a very complex system that connects these three color-associated buttons and
                        their meta interactions. Another change that was important to me was bringing the rating system
                        outside of the menu so it is more accessible and emphasized.
                    </p>
                    <iframe
                        className="finalbuild"
                        scrolling="no"
                        src="https://oknestaut.netlify.app/idm241/final/build"
                        aria-label="Final Build in Interactive Embedded Window"
                        title="Letterboxd Final Build"
                    />
                </section>

                <section id="results" className="container-fluid study-section" aria-label="Results">
                    <h2 className="color-accent-green">RESULTS</h2>
                    <p>
                        This project successfully achieved its objectives, delivering a polished and functional
                        prototype that enhanced the microinteraction ecosystem for the Letterboxd movie tile. Key
                        outcomes include:
                    </p>
                    <ol>
                        {results.map((result) => (
                            <li key={result}>
                                <b>{result.split(':')[0]}:</b>
                                {result.split(':').slice(1).join(':')}
                            </li>
                        ))}
                    </ol>
                    <p>
                        While developing these interactions I wanted to incorporate the brand colors of primary-accent,
                        secondary-accent and decorative-green more throughout the designs. The main way that I brought
                        this in was through the button and border colors when a button is selected. The like button is
                        primary-accent, the view button is decorative-green, and the rating system is secondary-accent.
                        These colors also transition seamlessly between one another when a different button is selected.
                        In order to do this I had to create a hierarchy regarding what buttons overwrite the border
                        colors. There is a very complex system that connects these three color-associated buttons and
                        their meta interactions. Another change that was important to me was bringing the rating system
                        outside of the menu so it is more accessible and emphasized.
                    </p>

                    <article className="case-study-sect" aria-label="Takeaways Subsection">
                        <h3 className="color-accent-blue">TAKEAWAYS</h3>
                        <p>
                            This project underscored the importance of balancing functionality with aesthetics in
                            interaction design. Moving the star rating system out of the “more” menu improved
                            accessibility, highlighting the importance of designing for visibility and ease of use. The
                            multi-phase process—alpha, beta, and final builds—allowed for continuous refinement, which
                            helped uncover and address usability challenges. Finally, implementing smooth transitions
                            and hierarchical color rules for buttons was technically complex but critical for creating a
                            cohesive and engaging user experience.
                        </p>
                    </article>

                    <article className="case-study-sect" aria-label="Area for Improvement Subsection">
                        <h3 className="color-accent-blue">AREAS FOR IMPROVEMENT</h3>
                        <p>
                            While the Figma mockups provided a strong foundation, the final build deviated from the
                            initial designs, particularly in the star rating system. In the future, I would allocate
                            more time to prototyping to ensure greater alignment between mockups and development. It
                            would also be helpful to conduct usability tests with the target audience to provide
                            feedback to refine the designs.
                        </p>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Letterboxd;
