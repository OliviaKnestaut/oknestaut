import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import { caseStudies } from '../data/caseStudyData';

function CaseStudies() {
    return (
        <main id="main-content" aria-label="Case Studies Main Content">
            <section className="case-studies column container-fluid justify-content-center">
                <h1 className="color-accent-red">CASE STUDIES</h1>
                <section className="card-container">
                    {caseStudies.map((study) => (
                        <CaseStudyCard key={study.title} study={study} eventCategory="Case Studies" />
                    ))}
                </section>
            </section>
        </main>
    );
}

export default CaseStudies;
