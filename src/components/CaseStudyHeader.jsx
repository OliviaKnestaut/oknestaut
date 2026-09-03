import React from 'react';
import { openTrackedLink } from '../utils/analytics';

function CaseStudyHeader({ title, subtitle, coverImage, coverAlt, bgColor, buttons = [] }) {
    return (
        <header
            id="main-content"
            className={`container-fluid case-study-header ${bgColor}`}
            aria-label="Case Study Header Banner"
        >
            <article className="case-study-title" aria-label="Case Study Header">
                <figcaption className="case-study-figcaption" aria-label="Case Study Title">
                    <h1 className="text-color-light">{title}</h1>
                    <h2 className="case-study-snippit">{subtitle}</h2>
                </figcaption>
                <img className="img-fluid header-image" src={coverImage} alt={coverAlt} />
            </article>
            {buttons.length > 0 && (
                <article className="button-flex" aria-label="Final Result Buttons">
                    {buttons.map((button) => (
                        <button
                            key={button.label}
                            type="button"
                            className="btn btn-primary mx-auto d-block color-accent-blue bg-tan color-accent-blue-hover"
                            onClick={(event) => openTrackedLink(event, button.url, button.label)}
                        >
                            <h3 className="btn-text color-accent-blue">{button.label}</h3>
                        </button>
                    ))}
                </article>
            )}
        </header>
    );
}

export default CaseStudyHeader;
