import React from 'react';
import '../styles/photography.css';
import ContentsNav from '../components/ContentsNav';
import PhotoGrid from '../components/PhotoGrid';
import { architectureGroups, natureGroups, portraitureGroups } from '../data/photographyData';
import useDimbox from '../hooks/useDimbox';

const sections = [
    { id: 'portraiture', title: 'PORTRAITURE', groups: portraitureGroups, next: 'nature' },
    { id: 'nature', title: 'NATURE', groups: natureGroups, next: 'architecture' },
    { id: 'architecture', title: 'ARCHITECHTURE', groups: architectureGroups, next: 'footer' },
];

const contentsLinks = sections.map((section) => ({
    href: `#${section.id}`,
    text: section.title,
    label: `Jump to ${section.title} Section Button`,
}));

function Photography() {
    useDimbox();

    return (
        <>
            <ContentsNav links={contentsLinks} skipTargetId="photography-content" />

            <main id="photography-content" aria-label="Photography Main Content">
                {sections.map((section) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className="photography-section"
                        aria-label={`${section.title} Photo Gallery`}
                    >
                        <h2 className="color-accent-red">{section.title}</h2>
                        <a
                            href={`#${section.next}`}
                            className="skip-link photography-skip-link color-accent-blue-hover"
                            aria-label={`Skip ${section.title} Photo Gallery`}
                        >
                            Skip {section.title} Photo Gallery
                        </a>
                        {section.groups.map((group, index) => (
                            <PhotoGrid
                                key={group.photos[0]?.src ?? index}
                                photos={group.photos}
                                galleryName={
                                    section.id === 'portraiture' ? 'portrait-gallery' : `${section.id}-gallery`
                                }
                                layout={group.layout}
                                aria-label={`${section.title} Photo Gallery Pt. ${index + 1}`}
                            />
                        ))}
                    </section>
                ))}
            </main>
        </>
    );
}

export default Photography;
