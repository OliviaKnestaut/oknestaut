import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import { caseStudies } from '../data/caseStudyData';

function CaseStudies() {
    return (
        <main id="main-content" aria-label="Case Studies Main Content">
            <section className="case-studies column container-fluid justify-content-center">
                <h1 className="color-accent-red">CASE STUDIES</h1>
                <section className="card-container">
                    {caseStudies.map((study) => (
                        <Link
                            key={study.title}
                            className="card"
                            to={study.route}
                            onClick={() => trackEvent('Case Studies', 'Clicked See Project', study.eventLabel)}
                            aria-label={`Open ${study.title} case study`}
                        >
                            <figure
                                className={`layer-${study.layer} card-body ${study.bgClass}`}
                                aria-label="Project Details"
                            >
                                <h3 className="card-title">{study.title}</h3>
                                <h4 className="card-text text-center">{study.subtitle}</h4>
                                <div
                                    className="d-flex justify-content-center align-items-center tools"
                                    aria-label="Technologies used"
                                >
                                    {study.tools.map((tool) => (
                                        <img key={tool.alt} src={tool.src} alt={tool.alt} />
                                    ))}
                                </div>
                                <span className="card-hint" aria-hidden="true">
                                    <span className="card-hint-arrow">→</span>
                                    <span>View case study</span>
                                </span>
                            </figure>
                            <img
                                className="mx-auto d-block card-img-bottom"
                                src={study.image}
                                alt={study.imageAlt}
                                loading="lazy"
                                decoding="async"
                            />
                        </Link>
                    ))}
                </section>
            </section>
        </main>
    );
}

export default CaseStudies;
