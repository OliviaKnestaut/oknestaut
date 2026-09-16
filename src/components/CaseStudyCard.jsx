import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

function CaseStudyCard({ study, eventCategory }) {
    return (
        <Link
            key={study.title}
            className="card"
            to={study.route}
            onClick={() => trackEvent(eventCategory, 'Clicked See Project', study.eventLabel)}
            aria-label={`Open ${study.title} case study`}
        >
            <figure className={`layer-${study.layer} card-body ${study.bgClass}`} aria-label="Project Details">
                <h3 className="card-title">{study.title}</h3>
                <h4 className="card-text text-center">{study.subtitle}</h4>
                <div className="d-flex justify-content-center align-items-center tools" aria-label="Technologies used">
                    {study.tools.map((tool) => (
                        <img key={tool.alt} src={tool.src} alt={tool.alt} />
                    ))}
                </div>
            </figure>
            <img
                className="mx-auto d-block card-img-bottom"
                src={study.image}
                alt={study.imageAlt}
                loading="lazy"
                decoding="async"
            />
        </Link>
    );
}

export default CaseStudyCard;
