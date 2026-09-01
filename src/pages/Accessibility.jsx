import React from 'react';
import CaseStudyHeader from '../components/CaseStudyHeader';
import ContentsNav from '../components/ContentsNav';
import portfolioCover from '../images/home/Portfolio-Cover.png';
import initialScore from '../images/accessibility/Inital-Score.png';
import screenReaderTest from '../images/accessibility/Screen-Reader-Test.png';
import robustPalette from '../images/accessibility/Robust-Palette2.png';
import accessibleOptions from '../images/accessibility/Accessible-Options2.png';

const contentsLinks = [
    { href: '#overview', text: 'OVERVIEW', label: 'Overview Link' },
    { href: '#context-challenge', text: 'CONTEXT & CHALLENGE', label: 'Context and Challenge Link' },
    { href: '#process-solution', text: 'PROCESS & SOLUTION', label: 'Process and Solution Link' },
    { href: '#results', text: 'RESULTS', label: 'Results Link' }
];

const headerButtons = [
    { label: 'Final Site', url: 'https://oknestaut.com/' },
    { label: 'Project Github', url: 'https://github.com/OliviaKnestaut/oknestaut' }
];

const testingTable = [
    { method: 'WAVE Evaluation Tool', purpose: 'Identify accessibility errors via automation', result: '10/10 Score' },
    { method: 'Vispero Colour Contrast Analyzer (CCA)', purpose: 'Verify color contrast ratios per WCAG 2', result: 'WCAG AAA Compliant' },
    { method: 'Accessible Perceptual Contrast Algorithm (APCA)', purpose: 'Verify color contrast ratios per WCAG 3 Candidate', result: 'APCA Compliant' },
    { method: 'Keyboard Navigation Testing', purpose: 'Verify interaction accessibility', result: 'Passed' },
    { method: 'Screen Reader Navigation Testing', purpose: 'Verify semantic structure and descriptive labeling', result: 'Passed' }
];

function Accessibility() {
    return (
        <>
            <CaseStudyHeader
                title="PERSONAL PORTFOLIO"
                subtitle="ACCESSIBILITY DESIGN & SCRIPTING"
                coverImage={portfolioCover}
                coverAlt="Desktop and mobile screens showing screens of Olivia's portfolio site (the site you are on!)"
                bgColor="bg-accent-green"
                buttons={headerButtons}
            />

            <ContentsNav links={contentsLinks} skipTargetId="accessibility-content" />

            <main id="accessibility-content" className="case-study-page" aria-label="Case Study Main Content">
                <section id="overview" className="container-fluid study-section" aria-label="Case Study Overview">
                    <h2 className="color-accent-green">OVERVIEW</h2>
                    <article className="container-fluid study-section overview" aria-label="Case Study Overview Content">
                        <dl>
                            <dt><b>Project Type</b></dt>
                            <dd>Accessibility Design &amp; Scripting</dd>
                            <dt><b>Project Timeline</b></dt>
                            <dd>January — March 2026</dd>
                            <dt><b>Project Resources</b></dt>
                            <dd>Figma, HTML, CSS, JS</dd>
                        </dl>
                        <article>
                            <p>
                                This project is an accessibility design and development project to optimize my personal portfolio site in alignment with inclusive design principles. It was originally created for the class IDM T380, Scripting for Accessibility Design, under the direction of Professor Jervis Thompson then expanded to incorporate my full website and all associated pages.
                            </p>
                            <p>
                                In IDM T380, we were tasked with stripping and refining the site structure, labeling, and aria usage. Through each step of the process I balanced the UI design with the new inclusive improvements. The final build from the course included the site home page, about page, and contact form. This has now been expanded so inclusive design principles are applied across all portfolio site pages.
                            </p>
                        </article>
                    </article>
                </section>

                <section id="context-challenge" className="container-fluid study-section" aria-label="Case Study Context and Challenge">
                    <h2 className="color-accent-green">CONTEXT &amp; CHALLENGE</h2>
                    <article className="case-study-sect" aria-label="Project Background Subsection">
                        <h3 className="color-accent-blue">PROJECT BACKGROUND</h3>
                        <p>
                            My personal portfolio website consolidates my work and accomplishments into one location to present to future employers and collaborators. It is important that my site be accessible to as many users as possible to improve my career prospects and ensure all users have equal access to media. Over the span of 10 weeks, I worked individually to design and develop my improved accessible website.
                            <b>The project operated within the constraints of academic guidelines, requiring the use of HTML, CSS, and JavaScript to produce a functional prototype.</b> The improvements were designed to fit within the existing established branding. My process included multiple design and development phases, culminating in a final build that will soon be generally incorporated into the main site infrastructure.
                        </p>
                    </article>
                    <article className="case-study-sect" aria-label="The Problem Subsection">
                        <h3 className="color-accent-blue">THE PROBLEM</h3>
                        <p>
                            Currently, my personal site is in need of improvements to better meet the needs of all users. Structurally, it uses many div and span classes that are not user friendly for those with screen readers. The color contrast can be improved to meet a higher level of Accessibility Standards and the fonts can be updated to better adapt to users at higher levels of zoom. WebAIM&apos;s Web Accessibility Evaluation Tool gave the current site a 5.3 out of 10.
                        </p>
                        <img className="img-fluid" src={initialScore} alt="Inital score recieved from WebAIM's WAVE showing 5.3/10" />
                    </article>
                    <article className="case-study-sect" aria-label="Goals and Objectives Subsection">
                        <h3 className="color-accent-blue">GOALS &amp; OBJECTIVES</h3>
                        <p>The success of this project was defined by achieving the following tangible goals:</p>
                        <ol>
                            <li><b>Higher Color Contrast Standards:</b> Meet WCAG AAA Standards for all text across site pages</li>
                            <li><b>Screen Reader Accessibility:</b> Utilize ARIA labels, semantic HTML, heading hierarchies, and alt text across site for users navigating with screen readers</li>
                            <li><b>Improved Keyboard Navigation:</b> Incorporate skip buttons for navigation sections with 3+ links</li>
                            <li><b>Text Legibility and Zoom:</b> Ensure text resizes on zoom without breaking the website design and improve text spacing for improved legibility</li>
                        </ol>
                        <p>
                            With these objectives in mind, I can holistically improve the user experience of my site for a more diverse range of users ensuring my work is visible to all.
                        </p>
                    </article>
                </section>

                <section id="process-solution" className="container-fluid study-section bg-accent-green inverted" aria-label="Case Study Process and Solution">
                    <h2 className="color-tan">PROCESS &amp; SOLUTION</h2>
                    <p className="color-tan">
                        My original website had strong visual branding, but several design and technical decisions unintentionally created barriers for users relying on assistive technology. By restructuring the HTML, refining the design system, and implementing accessibility-focused development practices, the updated site maintains the original personality while creating a more flexible and inclusive experience.
                    </p>
                    <article className="case-study-sect color-tan" aria-label="Semantic Structure and Screen Reader Experience Subsection">
                        <h3>SEMANTIC STRUCTURE &amp; SCREEN READER EXPERIENCE</h3>
                        <p>
                            The largest structural improvement was rebuilding the foundation of the website using semantic HTML. In the past, many sections relied on generic div containers, making it difficult for assistive technologies to understand the page organization. I replaced these elements with meaningful landmarks such as header, navigation, main, section, article, and footer elements. I also redesigned heading hierarchies across every page to create a logical content flow. All important image content contains alt text to describe image content and on several pages non-text content that is pure decoration is implemented in a way that it can be ignored by assistive technology. This allows screen reader users to navigate between sections more efficiently and better understand the relationship between different pieces of content without relying on visual layout.
                        </p>
                        <img className="img-fluid" src={screenReaderTest} alt="Screenshot showing screenreader testing with the accessible elements visible in dev tools" />
                    </article>
                    <article className="research-grid" aria-label="Keyboard, Text, and Zoom Subsections">
                        <article className="case-study-sect color-tan process-card" aria-label="Keyboard-First Navigation Subsection">
                            <h3>KEYBOARD-FIRST NAVIGATION</h3>
                            <p>
                                Keyboard accessibility was improved by redesigning the navigation flow and ensuring every interactive element could be reached without a mouse. Focus states were redesigned to remain visually obvious against the updated color palette, allowing users navigating with keyboards or alternative input devices to understand their current location. Skip navigation links were also added to reduce repetitive navigation for users who move through the site using keyboard commands or screen readers.
                            </p>
                        </article>
                        <article className="case-study-sect color-tan process-card" aria-label="Text and Zoom Subsection">
                            <h3>RESPONSIVE TEXT &amp; ZOOM IMPROVEMENTS</h3>
                            <p>
                                The redesigned site was developed with flexible sizing systems using relative units such as rem and vw rather than fixed pixel values. This allows users to increase browser zoom and text size without losing access to content or functionality. Layouts were tested at increased zoom levels up to 200% to ensure content remained readable, properly spaced, and free of unexpected clipping or overlap.
                            </p>
                        </article>
                    </article>
                    <article className="case-study-sect color-tan" aria-label="Accessible Design System Subsection">
                        <h3>ACCESSIBLE DESIGN SYSTEM</h3>
                        <article className="split-content" aria-label="Robust Color Scheme Details Subsection">
                            <p>
                                Rather than replacing my existing visual identity, I adapted my design system to meet stronger accessibility standards. Accent colors were adjusted to maintain the personality of the portfolio while increasing contrast ratios between text, backgrounds, and interactive elements. The updated system includes accessible color pairings, consistent typography rules, and reusable UI patterns that make future pages easier to build. Additionally, color is never used as the only means of communication. Instead it is used in combination with the text content and iconography.
                            </p>
                            <img className="img-fluid" src={robustPalette} alt="Robust Color Scheme showing all colors on the site sorted into accents, neutral, and ui elements" />
                        </article>
                        <p>
                            Color pairings were tested using{' '}
                            <a href="https://vispero.com/lp/color-contrast-checker/" target="_blank" rel="noopener noreferrer" aria-label="Vispero's Color Contrast Checker — opens in a new tab">Vispero&apos;s Colour Contrast Analyser (CCA)</a>{' '}
                            and the{' '}
                            <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer" aria-label="WebAIM WAVE Tool — opens in a new tab">WebAIM WAVE Tool</a>{' '}
                            to ensure compliance with{' '}
                            <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" aria-label="WCAG 2 Guidelines — opens in a new tab">WCAG Level AAA</a>{' '}
                            for all text in use. Text is also aligned with the{' '}
                            <a href="https://github.com/Myndex/SAPC-APCA/" target="_blank" rel="noopener noreferrer" aria-label="Accessible Perceptual Contrast Algorithm — opens in a new tab">APCA (Accessible Perceptual Contrast Algorithm)</a>{' '}
                            which is a candidate contrast method for WCAG 3. Contrast ratios are a minimum of 7:1 for body/small text, 4.5:1 for large text, and 3:1 for non-text and UI elements.
                        </p>
                        <img className="img-fluid" src={accessibleOptions} alt="Accessible color pairings in the system sorted by standard body, large text, and ui elements" />
                    </article>
                    <article className="case-study-sect color-tan" aria-label="Accessibility Testing and Validation Subsection">
                        <h3>ACCESSIBILITY TESTING &amp; VALIDATION</h3>
                        <p>
                            Accessibility improvements were validated through multiple testing methods rather than relying on automated tools alone. I combined automated evaluation tools with manual testing practices, including keyboard-only navigation, screen reader testing, contrast evaluation tools, and browser accessibility inspections. This process helped identify both technical issues and usability barriers that automated testing could not detect.
                        </p>
                        <table className="case-study-table color-text" aria-label="Testing Methods, Purpose, and Results Table">
                            <thead aria-label="Testing Methods, Purpose, and Results Table Headers">
                                <tr>
                                    <th>Test Method</th>
                                    <th>Purpose</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {testingTable.map((row) => (
                                    <tr key={row.method} aria-label={`${row.method} Testing Method Row`}>
                                        <td>{row.method}</td>
                                        <td>{row.purpose}</td>
                                        <td>{row.result}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </article>
                </section>

                <section id="results" className="container-fluid study-section" aria-label="Case Study Results">
                    <h2 className="color-accent-green">RESULTS</h2>
                    <article className="button-flex" aria-label="Final Result Buttons">
                        <button type="button" className="btn btn-primary d-block color-accent-blue bg-accent-blue color-accent-blue-hover" onClick={() => window.open('https://oknestaut.com/', '_blank')}>
                            <h3 className="btn-text color-tan">Final Site</h3>
                        </button>
                        <button type="button" className="btn btn-primary d-block color-accent-blue bg-accent-blue color-accent-blue-hover" onClick={() => window.open('https://github.com/OliviaKnestaut/oknestaut', '_blank')}>
                            <h3 className="btn-text color-tan">Project Github</h3>
                        </button>
                    </article>
                    <p>
                        The final iteration of my portfolio successfully transformed the site from a visual design focused experience into a more inclusive and accessible platform. By combining accessible design principles with front-end development practices, the website now provides improved experiences for users with different abilities, devices, and browsing preferences. Try running the{' '}
                        <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer" aria-label="WebAIM WAVE Tool — opens in a new tab">WebAIM WAVE Assessment</a>{' '}
                        on different pages to see the improved 10/10 score!
                    </p>
                    <article className="case-study-sect" aria-label="Measurable Improvements Subsection">
                        <h3 className="color-accent-blue">MEASURABLE IMPROVEMENTS</h3>
                        <p>The updated portfolio achieved the following outcomes:</p>
                        <ul>
                            <li><b>Accessibility Evaluation Score:</b> Increased from 5.3/10 to 10/10 using the WebAIM WAVE Evaluation Tool</li>
                            <li><b>Color Contrast:</b> Updated all text and interface colors to meet WCAG AAA contrast requirements</li>
                            <li><b>Keyboard Navigation:</b> Enabled complete site navigation and interaction using keyboard-only input</li>
                            <li><b>Screen Reader Compatibility:</b> Improved content structure through semantic HTML, ARIA labeling, descriptive alt text, and logical heading organization</li>
                            <li><b>Zoom Support:</b> Ensured content remains functional and readable when resized up to 200%</li>
                        </ul>
                    </article>
                    <article className="case-study-sect" aria-label="Impact on User Experience Subsection">
                        <h3 className="color-accent-blue">IMPACT ON USER EXPERIENCE</h3>
                        <p>
                            Beyond meeting technical accessibility requirements, these improvements create a more flexible experience for all users. Clearer structure benefits screen reader users, improved contrast supports users with low vision, and flexible layouts improve usability across different devices and browsing conditions. This project reinforced that accessibility is not a separate feature added at the end of the design process. Instead, it is an essential part of creating thoughtful digital experiences from the beginning.
                        </p>
                        <p>
                            While this project focused on the core portfolio experience, future updates will expand these accessibility practices across additional case studies and interactive content. Continued testing with a wider range of users will help identify additional opportunities for improvement.
                        </p>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Accessibility;
