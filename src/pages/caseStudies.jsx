import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import ScrollReveal from '../components/ScrollReveal';
import { caseStudies } from '../data/caseStudyData';

function CaseStudies() {
    return (
        <main id="main-content" aria-label="Case Studies Main Content">
            <section className="case-studies column container-fluid justify-content-center">
                <h1 className="color-accent-red">CASE STUDIES</h1>
                <section className="card-container">
                    {caseStudies.map((study, index) => (
                        <ScrollReveal
                            key={study.title}
                            as="article"
                            delay={index * 0.1}
                            threshold={0.08}
                            className="card-reveal"
                        >
                            <CaseStudyCard study={study} eventCategory="Case Studies" />
                        </ScrollReveal>
                    ))}
                </section>
            </section>
        </main>
    );
}

export default CaseStudies;
