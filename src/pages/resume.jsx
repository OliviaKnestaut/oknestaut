import React from 'react';
import RippleButton from '../components/RippleButton';
import ScrollReveal from '../components/ScrollReveal';
import { openTrackedLink } from '../utils/analytics';

const resumePdfUrl = `${process.env.PUBLIC_URL}/files/OK-Resume-July-2026.pdf`;

const workExperience = [
    {
        title: 'User Experience Designer & Full Stack Developer —',
        company: 'Intealth',
        date: 'Mar 2026 — Sept 2026, Mar 2025 — Sept 2025,',
        location: 'Philadelphia, PA (Remote)',
        bullets: [
            'Collaborated in Agile sprints to develop application features using React, TypeScript, and GraphQL to enhance medical credential verification systems used by thousands of international healthcare professionals',
            'Consulted with SMEs and QA analysts to identify user needs and resolve functional issues, translating these insights into responsive Figma prototypes and implementing them as responsive, accessible interfaces',
        ],
    },
    {
        title: 'User Experience Designer and Researcher —',
        company: 'RightOn! Education',
        date: 'Apr 2024 — Sept 2024,',
        location: 'Philadelphia, PA',
        bullets: [
            'Collaborated with the CEO, Dev Team, and UX Team to spearhead the Figma redesign of RightOn Central, a teacher-facing directory consisting of 100+ math-focused games and questions',
            'Conducted on-site research and play-testing in 5+ schools and summer camps, gathering qualitative and quantitative feedback from over 10 instructors and 150 students',
        ],
    },
    {
        title: 'Software Development Engineer Intern —',
        company: 'Amazon',
        date: 'June 2023 — Sept 2023,',
        location: 'Seattle, WA',
        bullets: [
            'Supported the Lifestyle Based Shopping (LBS) Team in the development of their microservice ecosystem, enabling the creation of personalized, responsive landing pages for customers to shop products in their interests',
            'Developed a scalable architecture in Java and AWS DynamoDB for a page attribute management system that allows thousands of brands and sellers to customize their Amazon Shopping pages',
        ],
    },
];

const skills = [
    {
        category: 'Design & Media',
        items: 'Figma, Illustrator, Photoshop, InDesign, Premiere Pro, After Effects, Audition, Wireframing, High Fidelity Mockups, Photography',
    },
    {
        category: 'Programming',
        items: 'HTML, CSS, JavaScript, TypeScript, React, Node.js, Python, Java, PHP, Database Structures, GraphQL, GitHub, Linux, AWS, Azure',
    },
    {
        category: 'UX Research',
        items: 'User Interviews, Survey Testing, Statistical Analysis, Prototyping, Play-Testing, Usability Testing',
    },
];

const affiliations = [
    { name: 'Rewriting the Code', date: 'June 2023 - Present' },
    { name: 'Drexel CHI UX', date: 'Sept 2022 - Present' },
    { name: 'National Center for Women in Information Technology', date: 'Jan 2022 - Present' },
    { name: 'Girls Who Code', date: 'June 2020 - Present' },
];

const awards = [
    'Drexel University Undergraduate Student Leader of the Year | 2025',
    'Zscaler Fundamentals of Cybersecurity Certification | 2025',
    'Apollo Graph Developer Associate Certification | 2025',
    'PHS Flower Show Photography Honorable Mention | 2025',
    'SNC Women in STEM Scholarship | 2024 & 2025',
    'Amazon Future Engineer Scholar | 2022, 2023, 2024, & 2025',
    'Merchandise Design Winner for Westphal BRIDGE | 2023',
];

function Resume() {
    return (
        <main aria-label="Resume Main Content">
            <header className="container-fluid justify-content-center" aria-label="Resume Header">
                <h1 className="color-accent-red">RESUME</h1>
                <RippleButton
                    type="button"
                    className="btn btn-primary mx-auto d-block accent-blue-hover bg-accent-blue"
                    onClick={(event) => openTrackedLink(event, resumePdfUrl, 'Download Resume')}
                >
                    <h4 className="btn-text color-tan">Download Resume</h4>
                </RippleButton>
            </header>

            <ScrollReveal
                as="section"
                className="resume-section d-flex row justify-content-center"
                aria-label="Resume Objective Section"
            >
                <h2 className="color-accent-red">OBJECTIVE</h2>
                <p>
                    Detail-oriented developer and designer committed to creating meaningful and accessible digital
                    experiences. Seeking to combine hands-on design experience, research skills, and technical expertise
                    to deliver impactful technology solutions.
                </p>
            </ScrollReveal>

            <ScrollReveal
                as="section"
                className="resume-section d-flex row"
                delay={0.05}
                aria-label="Education Section"
            >
                <h2 className="color-accent-red">EDUCATION</h2>
                <article aria-label="Drexel Education Information">
                    <h6>
                        <b>Drexel University,</b> Philadelphia, PA — <i>Bachelor of Science</i>
                    </h6>
                    <p>
                        Sept 2022 — Present, <i>Expected Graduation June 2027</i>
                    </p>
                    <ul>
                        <li>Major in User Experience &amp; Interaction Design, Minor in Graphic Design</li>
                        <li>5-year, 3 co-op undergraduate program</li>
                        <li>3.99 Cumulative GPA, Dean&apos;s List</li>
                    </ul>
                </article>
            </ScrollReveal>

            <ScrollReveal
                as="section"
                className="resume-section d-flex row"
                delay={0.05}
                aria-label="Work Experience Section"
            >
                <h2 className="color-accent-red">WORK EXPERIENCE</h2>
                {workExperience.map((job) => (
                    <article key={job.company} aria-label={`${job.company} Work Experience Information`}>
                        <h6>
                            <b>{job.title}</b>
                            <i> {job.company}</i>
                        </h6>
                        <p>
                            {job.date}
                            <i> {job.location}</i>
                        </p>
                        <ul>
                            {job.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </ScrollReveal>

            <ScrollReveal
                as="section"
                className="resume-section d-flex row"
                delay={0.05}
                aria-label="Leadership Section"
            >
                <h2 className="color-accent-red">LEADERSHIP</h2>
                <article aria-label="Campus Activities Board Leadership Information">
                    <h6>
                        <b>President —</b>
                        <i> Drexel University Campus Activities Board</i>
                    </h6>
                    <p>
                        June 2024 — Present,<i> Philadelphia, PA</i>
                    </p>
                    <ul>
                        <li>
                            Facilitate communication between CAB, Drexel&apos;s primary event programming organization,
                            and the University to ensure compliance with university policies, schedule on and off-campus
                            events, and promote campus community
                        </li>
                        <li>
                            Coordinate strategic planning of 70+ events across 4 committees each year that engage over
                            7,000 Drexel undergraduate students
                        </li>
                    </ul>
                </article>
            </ScrollReveal>

            <ScrollReveal
                as="section"
                className="resume-section skills-section d-flex row justify-content-center"
                delay={0.05}
                aria-label="Skills Section"
            >
                <h2 className="color-accent-red">SKILLS</h2>
                <article className="skills-parent d-flex flex-wrap" aria-label="Skills Columns">
                    {skills.map((skill) => (
                        <div key={skill.category} className="resume-skills" aria-label={`${skill.category} Skills`}>
                            <h6>
                                <b>{skill.category}</b>
                            </h6>
                            <p>{skill.items}</p>
                        </div>
                    ))}
                </article>
            </ScrollReveal>

            <ScrollReveal as="section" className="resume-section" delay={0.05} aria-label="Affiliations Section">
                <h2 className="color-accent-red">AFFILIATIONS</h2>
                {affiliations.map((affiliation) => (
                    <article key={affiliation.name} aria-label="Affiliation Information">
                        <h6>
                            <b>{affiliation.name}</b>
                        </h6>
                        <p>{affiliation.date}</p>
                    </article>
                ))}
            </ScrollReveal>

            <ScrollReveal as="section" className="resume-section" delay={0.05} aria-label="Awards Section">
                <h2 className="color-accent-red">AWARDS</h2>
                {awards.map((award) => (
                    <h6 key={award}>
                        <b>{award.split(' | ')[0]} |</b> {award.split(' | ')[1]}
                    </h6>
                ))}
            </ScrollReveal>
        </main>
    );
}

export default Resume;
