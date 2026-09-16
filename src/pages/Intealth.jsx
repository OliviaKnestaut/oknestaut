import React from 'react';
import '../styles/case-study.css';
import '../styles/intealth.css';
import CaseStudyLayout from '../components/CaseStudyLayout';
import { openTrackedLink } from '../utils/analytics';

import intealthCover from '../images/intealth/Intealth-Cover.png';
import intealthLogo from '../images/intealth/Intealth-logo.png';
import wdomsLegacyProgramDetails from '../images/intealth/WDOMS-Legacy-Program-Details.png';
import wdomsLegacySearch from '../images/intealth/WDOMS-Legacy-Search-After.png';
import wdomsSubscription from '../images/intealth/WDOMS-Legacy-Subscription-Login.png';
import wdomsNewProgramDetails from '../images/intealth/WDOMS-New-Program-Details.png';
import wdomsNewSearch from '../images/intealth/WDOMS-New-Search-After.png';
import wdomsNewSubscription from '../images/intealth/WDOMS-New-Subscription-Login.png';

import pathwaysLoginDesktop from '../images/intealth/Applicant-Login-Desktop.png';
import pathwaysPwy1Desktop from '../images/intealth/Applicant-PWY1-Desktop.png';
import applicantMobile1 from '../images/intealth/Applicant-mobile-1.png';
import applicantMobile2 from '../images/intealth/Applicant-mobile-2.png';
import clinicalSkillsMobile from '../images/intealth/Clinical-Skills-Mobile.png';
import physicianMobile from '../images/intealth/Physican-Mobile.png';

import styleGuide from '../images/intealth/Modern-Apps-Style-Guide.png';
import designMdExcerpt from '../images/intealth/design-md-excerpt.png';

const contentsLinks = [
    { href: '#overview', text: 'OVERVIEW', label: 'Overview Link' },
    { href: '#users-context', text: 'USERS & CONTEXT', label: 'Users and Context Link' },
    { href: '#style-guide', text: 'STYLE GUIDE', label: 'Style Guide Link' },
    { href: '#pathways', text: 'PATHWAYS MOBILE', label: 'Pathways Mobile Link' },
    { href: '#world-directory', text: 'WORLD DIRECTORY', label: 'World Directory Link' },
    { href: '#reflection', text: 'REFLECTION', label: 'Reflection Link' },
];

function Intealth() {
    return (
        <CaseStudyLayout
            title="INTEALTH MODERN APPS"
            subtitle="UX DESIGN &amp; FULL STACK DEVELOPMENT"
            coverImage={intealthCover}
            coverAlt="Placeholder cover image for the Intealth Modern Apps case study"
            bgColor="bg-accent-blue"
            contentsLinks={contentsLinks}
            contentId="intealth-content"
        >
            <section id="overview" className="container-fluid study-section" aria-label="Case Study Overview">
                <h2 className="color-accent-purple">OVERVIEW</h2>
                <article className="container-fluid study-section overview" aria-label="Case Study Overview Content">
                    <dl>
                        <dt>
                            <b>Project Type</b>
                        </dt>
                        <dd>UX Design &amp; Full Stack Development</dd>
                        <dt>
                            <b>My Role</b>
                        </dt>
                        <dd>UX Designer &amp; Full Stack Developer, Connected Apps Team</dd>
                        <dt>
                            <b>Project Timeline</b>
                        </dt>
                        <dd>Spring/Summer 2025 and Spring/Summer 2026</dd>
                        <dt>
                            <b>Project Resources</b>
                        </dt>
                        <dd>Figma, React, TypeScript, GraphQL, MERN Stack</dd>
                    </dl>
                    <article>
                        <p>
                            Intealth is a medical education nonprofit comprised of ECFMG (Educational Commission for
                            Foreign Medical Graduates) and FAIMER (Foundation for Advancement of International Medical
                            Education and Research). Intealth&apos;s platforms focus on delivering services to
                            international medical graduates (IMGs) throughout their career.
                        </p>
                        <p>
                            Over two six-month co-ops I worked as a UX Designer and Full Stack Developer on the Modern
                            Apps Team. In this role I collaborated on development of application features using React,
                            TypeScript, and GraphQL to enhance medical credential verification systems and worked with
                            SMEs and QA analysts to identify user needs and resolve issues, creating Figma prototypes
                            and implementing responsive, accessible interfaces.
                        </p>
                        <p>
                            Under the direction of Principal Software Architect{' '}
                            <a
                                href="https://www.linkedin.com/in/gidich/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) =>
                                    openTrackedLink(
                                        event,
                                        'https://www.linkedin.com/in/gidich/',
                                        'Patrick Gidich LinkedIn',
                                    )
                                }
                            >
                                Patrick Gidich
                            </a>
                            , and SMEs{' '}
                            <a
                                href="https://www.linkedin.com/in/nicholas-noce-25578b201/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) =>
                                    openTrackedLink(
                                        event,
                                        'https://www.linkedin.com/in/nicholas-noce-25578b201/',
                                        'Nick Noce LinkedIn',
                                    )
                                }
                            >
                                Nick Noce
                            </a>
                            ,{' '}
                            <a
                                href="https://www.linkedin.com/in/eddie-tang-62aaa7a4/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) =>
                                    openTrackedLink(
                                        event,
                                        'https://www.linkedin.com/in/eddie-tang-62aaa7a4/',
                                        'Eddie Tang LinkedIn',
                                    )
                                }
                            >
                                Eddie Tang
                            </a>
                            , and{' '}
                            <a
                                href="https://www.linkedin.com/in/ike-wilson/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) =>
                                    openTrackedLink(
                                        event,
                                        'https://www.linkedin.com/in/ike-wilson/',
                                        'Ike Wilson LinkedIn',
                                    )
                                }
                            >
                                Ike Wilson
                            </a>
                            , I worked hands-on across design, development, testing, and documentation on several of
                            Intealth&apos;s flagship platforms. I also worked closely with fellow UX and Development
                            interns{' '}
                            <a
                                href="https://www.linkedin.com/in/shannonjaya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) =>
                                    openTrackedLink(
                                        event,
                                        'https://www.linkedin.com/in/shannonjaya/',
                                        'Shannon Jaya LinkedIn',
                                    )
                                }
                            >
                                Shannon Jaya
                            </a>{' '}
                            and{' '}
                            <a
                                href="https://www.linkedin.com/in/ingridburger/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) =>
                                    openTrackedLink(
                                        event,
                                        'https://www.linkedin.com/in/ingridburger/',
                                        'Ingrid Burger LinkedIn',
                                    )
                                }
                            >
                                Ingrid Burger
                            </a>
                            .
                        </p>
                        <p>
                            Unlike a single-product redesign, this case study and work experience is a set of related
                            systems that share users, branding, and infrastructure. Through all these projects I worked
                            to take high-stakes, often legacy, workflows and make them clearer, more consistent, and
                            usable for the intended audience of each application.
                        </p>
                    </article>
                </article>
                <figure aria-label="Intealth Logo">
                    <img className="img-fluid" src={intealthLogo} alt="Intealth logo" />
                </figure>
            </section>

            <section
                id="users-context"
                className="container-fluid study-section bg-accent-blue inverted"
                aria-label="Users and Context"
            >
                <h2 className="color-tan">USERS &amp; CONTEXT</h2>
                <article className="case-study-sect color-tan" aria-label="Modern Apps Audiences">
                    <p>
                        Modern Apps serve several distinct audiences, often inside the same product family. These users
                        are frequently working across time zones, on mixed devices, under hard deadlines tied to ECFMG
                        Certification and the NRMP Match. Any barrier to these users could become a barrier to entering
                        U.S. graduate medical education.
                    </p>
                    <ul>
                        <li>
                            <b>Applicants</b>: international medical graduates and health professionals tracking
                            certification, attestations, and credential reports
                        </li>
                        <li>
                            <b>Physicians and Medical School Officials</b>: completing Mini-CEX evaluations or clinical
                            skills attestations
                        </li>
                        <li>
                            <b>Regulatory and Research Subscribers</b>: accessing and downloading World Directory data
                        </li>
                        <li>
                            <b>Intealth Caseworkers</b>: evaluating and managing cases for ECFMG Certification
                        </li>
                        <li>
                            <b>Internal Technical Staff</b>: configuring and maintaining production systems
                        </li>
                    </ul>
                </article>
            </section>

            <section
                id="style-guide"
                className="container-fluid study-section"
                aria-label="Style Guide and Design Audit Agent"
            >
                <h2 className="color-accent-purple">STYLE GUIDE AND DESIGN.MD</h2>

                <article className="case-study-sect" aria-label="The Problem">
                    <h3 className="color-accent-blue">THE PROBLEM</h3>
                    <p>
                        Modern Apps did not have a single source of truth for platform branding beyond company-level
                        brand guidelines. Individual products managed by the Modern Apps Team had drifted in color,
                        type, spacing, and component behavior. These variations made handoff to developers slower, as it
                        could be difficult to determine whether a live page was in alignment with the design system or
                        just close enough.
                    </p>
                </article>

                <article className="case-study-sect" aria-label="The Solution">
                    <h3 className="color-accent-blue">THE SOLUTION</h3>
                    <p>
                        Working with fellow UX Intern Ingrid Burger, I established a streamlined system covering colors,
                        components, typography, and spacing for Modern Apps. We then used that system to write DESIGN.md
                        documentation. From there I helped define a Design Audit Agent. This AI Agent takes an an
                        endpoint URL for an Intealth platform, compares the live implementation to DESIGN.md, and
                        returns specific design gaps and recommendations. The agent does not invent brand rules or make
                        significant code changes. It reads an agreed document and reports where a page diverges,
                        contrast, type scale, component usage, spacing, so designers and developers can correct against
                        the same checklist. New work on Modern Apps systems like Pathways, EFDO, and CVHP can point at
                        one system design definition instead of reconstructing patterns and themes across multiple
                        repositories.
                    </p>
                    <figure aria-label="Style Guide and DESIGN.md">
                        <figcaption>
                            <b>STYLE GUIDE AND DESIGN.MD</b>
                        </figcaption>
                        <section
                            className="intealth-side-by-side"
                            aria-label="Connected Apps style guide and DESIGN.md"
                        >
                            <img src={styleGuide} alt="Connected Apps style guide overview" />
                            <img src={designMdExcerpt} alt="Excerpt from DESIGN.md documentation" />
                        </section>
                    </figure>
                </article>
            </section>

            <section
                id="pathways"
                className="container-fluid study-section bg-accent-blue inverted"
                aria-label="Pathways Mobile Interfaces"
            >
                <h2 className="color-tan">PATHWAYS MOBILE INTERFACES</h2>

                <article className="case-study-sect color-tan" aria-label="What is Pathways">
                    <h3>WHAT IS PATHWAYS?</h3>
                    <p>
                        ECFMG introduced Pathways after USMLE Step 2 Clinical Skills (CS) was discontinued. Many
                        international medical graduates no longer had a way to satisfy the clinical skills requirement
                        for ECFMG Certification. Pathways are alternative routes for IMGs to demonstrate clinical and
                        communication skills so they can become ECFMG Certified and enter U.S. graduate medical
                        education.
                    </p>
                    <p>
                        The system is made of a variety of portals for different users. Applicants submit and monitor a
                        Pathways application. Licensed physicians complete Mini-CEX evaluations for Pathway 6 through
                        the Clinical Skills Evaluation and Attestation Portal. Medical schools complete clinical skills
                        attestations for Pathways 3, 4, and 5 through the same portal family. Intealth Caseworkers
                        access and evaluate cases and materials in the staff portal. Application seasons can be tight
                        and an incomplete attestation can block Match eligibility.
                    </p>
                </article>

                <article className="case-study-sect color-tan" aria-label="The Problem">
                    <h3>THE PROBLEM</h3>
                    <p>
                        Applicant, Physician, and Clinical Skills Evaluation/Attestation portals had been designed and
                        optimized for desktop only, due to the sudden development following the discontinuation of Step
                        2 CS. These desktop-only layouts made the pathways application process harder to finish on time.
                        Applicants and physician evaluators need to check status, accept evaluation requests, and
                        complete forms from wherever they are, maybe even on a phone between clinical duties.
                    </p>
                    <figure aria-label="Desktop Pathways Screens">
                        <section className="intealth-side-by-side" aria-label="Desktop Pathways applicant screens">
                            <img src={pathwaysLoginDesktop} alt="Desktop view of the Pathways applicant login screen" />
                            <img
                                src={pathwaysPwy1Desktop}
                                alt="Desktop view of the Pathways applicant pathway selection screen"
                            />
                        </section>
                    </figure>
                </article>

                <article className="case-study-sect color-tan" aria-label="The Solution">
                    <h3>THE SOLUTION</h3>
                    <p>
                        Working with fellow UX Intern Shannon Jaya, I designed and implemented mobile-responsive
                        versions of the Pathways Applicant, Physician, and Clinical Skills Evaluation and Attestation
                        Portals. This entailed reworking navigation, application summary/status, form layouts, and
                        evaluation/attestation tasks so they were optimized for smaller breakpoints without dropping
                        required fields or legal language. Now applicants can review application details and status away
                        from a desk and physician evaluators can accept or complete Mini-CEX work on a phone. The
                        portals still carry the same requirements and deadlines but they no longer require a desktop
                        monitor.
                    </p>
                    <figure aria-label="Mobile Pathways Screens">
                        <figcaption>
                            <b>APPLICANT MOBILE SCREENS</b>
                        </figcaption>
                        <section className="intealth-mobile-pair" aria-label="Applicant mobile screens">
                            <img
                                src={applicantMobile1}
                                alt="Mobile view of a Pathways applicant eligibility screen"
                                className="intealth-mobile-screenshot"
                            />
                            <img
                                src={applicantMobile2}
                                alt="Mobile view of a Pathways applicant application review screen"
                                className="intealth-mobile-screenshot"
                            />
                        </section>
                        <figcaption>
                            <b>PHYSICIAN AND CLINICAL SKILLS MOBILE SCREENS</b>
                        </figcaption>
                        <section
                            className="intealth-mobile-pair"
                            aria-label="Physician and clinical skills mobile screens"
                        >
                            <img
                                src={clinicalSkillsMobile}
                                alt="Mobile view of the clinical skills attestation form"
                                className="intealth-mobile-screenshot"
                            />
                            <img
                                src={physicianMobile}
                                alt="Mobile view of the physician Mini-CEX dashboard"
                                className="intealth-mobile-screenshot"
                            />
                        </section>
                    </figure>
                </article>
            </section>

            <section
                id="world-directory"
                className="container-fluid study-section"
                aria-label="World Directory of Medical Schools"
            >
                <h2 className="color-accent-purple">WORLD DIRECTORY OF MEDICAL SCHOOLS</h2>

                <article className="case-study-sect" aria-label="What is WDOMS">
                    <h3 className="color-accent-blue">WHAT IS WDOMS?</h3>
                    <p>
                        The World Directory of Medical Schools is a free, public online database that lists more than
                        4,000 operational and historical basic medical education programs around the world. It is a
                        partnership between the World Federation for Medical Education (WFME) and FAIMER, a division of
                        Intealth. A separate WDOMS subscription service lets regulatory authorities, researchers, and
                        other organizations download the full directory and modify sponsor notes and details on behalf
                        of their organization.
                    </p>
                </article>

                <article className="case-study-sect" aria-label="The Problem">
                    <h3 className="color-accent-blue">THE PROBLEM</h3>
                    <p>
                        The legacy public and subscription sites held the correct information, but the presentation and
                        facilitation had grown outdated especially in the backend, styles, and interaction patterns.
                        With plans to migrate WDOMS Search and Subscription functionality away from the legacy backend
                        implementation the frontend design was also looking for a refresh. Accessing school records, and
                        subscription flows felt like an older generation of the product. The directory is one of the
                        most publicly visible Intealth properties, so the gap between Intealth&apos;s current brand and
                        the live site was especially noticeable.
                    </p>
                    <figure aria-label="Legacy WDOMS Screens">
                        <img
                            className="img-fluid"
                            src={wdomsLegacySearch}
                            alt="Legacy World Directory of Medical Schools search screen"
                        />
                        <section className="intealth-side-by-side" aria-label="Legacy WDOMS school and program details">
                            <img
                                src={wdomsLegacyProgramDetails}
                                alt="Legacy World Directory of Medical Schools program details screen"
                            />
                            <img
                                src={wdomsSubscription}
                                alt="Legacy World Directory of Medical Schools subscription login screen"
                            />
                        </section>
                    </figure>
                </article>

                <article className="case-study-sect" aria-label="The Solution">
                    <h3 className="color-accent-blue">THE SOLUTION</h3>
                    <p>
                        Working with UX Intern Ingrid Burger, we designed new dynamic pages for both the public World
                        Directory search and the subscription site. That included applying updated design guidelines
                        unique to this WFME/FAIMER collaboration, restructuring how school and program information is
                        presented, and connecting the public search experience and the paid data-access experience into
                        a more consistent system.
                    </p>
                    <p>
                        The public directory and subscription site designs now exist with an updated visual system
                        instead of a legacy one. School records, program details, and subscription entry points read as
                        part of the same product family as the rest of Connected Apps, while also existing under newer
                        guidelines that differentiate the product as a collaboration with WFME.
                    </p>
                    <figure aria-label="New WDOMS Screens">
                        <img
                            className="img-fluid"
                            src={wdomsNewSearch}
                            alt="New World Directory of Medical Schools search screen"
                        />
                        <section className="intealth-side-by-side" aria-label="New WDOMS school and program details">
                            <img
                                src={wdomsNewProgramDetails}
                                alt="New World Directory of Medical Schools program details screen"
                            />
                            <img
                                src={wdomsNewSubscription}
                                alt="New World Directory of Medical Schools subscription login screen"
                            />
                        </section>
                    </figure>
                </article>
            </section>

            <section id="reflection" className="container-fluid study-section" aria-label="Reflection">
                <h2 className="color-accent-purple">REFLECTION</h2>
                <article className="case-study-sect" aria-label="Reflection Content">
                    <p>
                        These projects are part of a series of systems that make a real difference in the career
                        progression of International Medical Graduates (IMGs). Working on projects ranging from a shared
                        style guide to complex internal tools, I worked to design and develop so users on all sides of
                        the application face less friction. What I take from Intealth is that design work is only
                        finished when it survives contact with development. A clear system, documented decisions, and
                        close collaboration between design and engineering are what keep these products usable long
                        after any single co-op ends.
                    </p>
                </article>
            </section>
        </CaseStudyLayout>
    );
}

export default Intealth;
