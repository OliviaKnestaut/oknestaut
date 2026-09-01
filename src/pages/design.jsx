import React from 'react';
import useDimbox from '../hooks/useDimbox';

const collections = [
    { src: require('../images/design/Critter.jpg'), caption: 'Collections: Calico Critter, Adobe Photoshop, 2025', alt: 'Digital Art of a persian cat calico critter against a red background', label: 'Collections: Calico Critter' },
    { src: require('../images/design/Cecile.jpg'), caption: 'Collections: Jellycat Cecile Chicken, Adobe Photoshop, 2025', alt: 'Digital Art of a Jellycat chicken against a purple background', label: 'Collections: Jellycat Cecile Chicken' },
    { src: require('../images/design/Smiski.jpg'), caption: 'Collections: Smiski, Adobe Photoshop, 2025', alt: 'Digital Art of a smiski in a crochet raspberry hat against a blue background', label: 'Collections: Smiski' }
];

const objectPosters = [
    { src: require('../images/design/VSCMObject_Poster1.jpg'), caption: 'Object Poster Design: Abstract, Adobe Illustrator, VSCM 230', alt: 'Black and White poster of plant shears focused on abstract design and forms', label: 'Object Poster Design: Abstract' },
    { src: require('../images/design/VSCMObject_Poster2.jpg'), caption: 'Object Poster Design: Dynamic, Adobe Illustrator, VSCM 230', alt: 'Black and White poster of plant shears focused on a dynamic presentation and motion', label: 'Object Poster Design: Dynamic' }
];

const contrastWorks = [
    { src: require('../images/design/DETSA-Pin-Large.png'), caption: 'DETSA Pin Design, Adobe Illustrator, 2021 DETSA State Competition 2nd Place', alt: "Pin Design for DETSA 2021 State Competition with the theme 'Envision Your Future, Better than 2020'", label: 'DETSA Pin Design', className: 'pin' },
    { src: require('../images/design/WestPHAL-BRIDGE-Large.jpg'), caption: 'Westphal BRIDGE Shirt Design, Adobe Illustrator, 2023 WestPHAL Pop-Up Shop', alt: 'Shirt Design for the Westphal BRIDGE program themed around postage stamps of campus ideas and locations', label: 'Westphal BRIDGE Shirt Design', className: 'stamp' }
];

const artistPosters = [
    { src: require('../images/design/VSCM240FinalPoster.jpg'), caption: 'Typography Artist Exhibit Poster: Barbara Kruger, Adobe Illustrator, VSCM 240', alt: 'Poster design for a mock Barbara Kruger exhibtion using black and white text only', label: 'Typography Artist Exhibit Poster: Barbara Kruger', className: 'poster2' },
    { src: require('../images/design/VSCM230FinalPoster.jpg'), caption: 'Architect Poster Design: Maya Lin, Adobe Illustrator, VSCM 230', alt: 'Poster design for an mock architecture event featuring Maya Lin, based specifically on her Earthworks', label: 'Architect Poster Design: Maya Lin', className: 'poster1' }
];

const videos = [
    { url: 'https://youtu.be/W3vYk-JKJJE?si=PIOxhoT7pSbROIog', thumb: require('../images/design/rail-video.jpg'), title: 'Regional Rail', course: 'ANIM 115: Introduction to Production', color: 'bg-accent-green' },
    { url: 'https://youtu.be/b_stAW4JqEM?si=4oOz8QPhgzVOsETa', thumb: require('../images/design/cab-video.jpg'), title: 'Join CAB', course: 'ANIM 115: Introduction to Production', color: 'bg-accent-purple' },
    { url: 'https://youtu.be/vOovQfqQrDk?si=1UnIKiTqsZkO-3JZ', thumb: require('../images/design/unwind-video.jpg'), title: 'UNWIND', course: 'VSST 108: Design I for Media', color: 'bg-accent-blue' },
    { url: 'https://youtu.be/lkO8ePWTa7I?si=DeHrjKO40Rq7HO20', thumb: require('../images/design/vivid-video.jpg'), title: 'VIVID', course: 'VSST 109: Design II for Media', color: 'bg-accent-red' }
];

function Design() {
    useDimbox();

    return (
        <main aria-label="Design and Media Main Content">
            <section className="container-fluid" aria-label="Graphic Design Section">
                <h2 className="color-accent-red">GRAPHIC DESIGN</h2>
                <a href="#animation" className="skip-link photography-skip-link color-accent-blue-hover" aria-label="Skip Graphic Design Gallery">
                    Skip Graphic Design Gallery
                </a>

                <figure className="container-fluid d-flex art-section" aria-label="Collections Artworks">
                    {collections.map((art) => (
                        <a
                            key={art.label}
                            className="collection"
                            href={art.src}
                            data-dimbox="design-gallery"
                            data-dimbox-caption={art.caption}
                            data-dimbox-ratio="16x9"
                            data-dimbox-type="image"
                            aria-label={`${art.label} — click to view larger`}
                        >
                            <img src={art.src} alt={art.alt} />
                        </a>
                    ))}
                </figure>

                <article className="container-fluid d-flex art-section" aria-label="Object Posters">
                    {objectPosters.map((poster) => (
                        <a
                            key={poster.label}
                            className="poster2"
                            href={poster.src}
                            data-dimbox="design-gallery"
                            data-dimbox-caption={poster.caption}
                            data-dimbox-ratio="16x9"
                            data-dimbox-type="image"
                            aria-label={`${poster.label} — click to view larger`}
                        >
                            <img src={poster.src} alt={poster.alt} />
                        </a>
                    ))}
                    <figcaption className="object-text">
                        <h4 className="color-accent-red">OBJECT POSTER CONCEPTS</h4>
                        <p>My two posters explore contrasting perceptions of my plant shears. The first emphasizes the object&apos;s structural qualities, highlighting abstract forms and geometric precision through a linear, repetitive composition. In contrast, the second poster captures the shears dynamically, using fluid, organic lines that mimic the act of cutting stems. Together, the two pieces demonstrate the mechanical and expressive nature of the object, creating a dialogue between function and form.</p>
                    </figcaption>
                </article>

                <article className="container-fluid d-flex art-section" aria-label="Contrast Artworks">
                    {contrastWorks.map((work) => (
                        <a
                            key={work.label}
                            className={work.className}
                            href={work.src}
                            data-dimbox="design-gallery"
                            data-dimbox-caption={work.caption}
                            data-dimbox-ratio="16x9"
                            data-dimbox-type="image"
                            aria-label={`${work.label} — click to view larger`}
                        >
                            <img src={work.src} alt={work.alt} />
                        </a>
                    ))}
                </article>

                <article className="container-fluid d-flex art-section" aria-label="Artist Poster Artworks">
                    {artistPosters.map((poster) => (
                        <a
                            key={poster.label}
                            className={poster.className}
                            href={poster.src}
                            data-dimbox="design-gallery"
                            data-dimbox-caption={poster.caption}
                            data-dimbox-ratio="16x9"
                            data-dimbox-type="image"
                            aria-label={`${poster.label} — click to view larger`}
                        >
                            <img src={poster.src} alt={poster.alt} />
                        </a>
                    ))}
                    <figcaption className="poster-text">
                        <h4 className="color-accent-red">ARCHITECT POSTER CONCEPT</h4>
                        <p>Maya Lin is known for her simple, mathematical structures and landscape formations. This poster aims to capture some of her iconic installations, the Wave Fields. She has several different in-ground wave sculptures across the globe, so I thought this design could represent her style well. She also often works with water, rivers, and flowing shapes so the teardrop in the Wave Field hints at this design trend, as well. The typography is simple and structured to match the modern, minimalist style she presents in her monuments and architecture.</p>
                    </figcaption>
                </article>
            </section>

            <section id="animation" className="container-fluid" aria-label="Animation Section">
                <h2 className="color-accent-red">ANIMATION</h2>
                <a href="#footer" className="skip-link photography-skip-link color-accent-blue-hover" aria-label="Skip Animation Gallery">
                    Skip Animation Gallery
                </a>
                <div className="video-section d-flex" aria-label="Video Gallery">
                    {videos.map((video) => (
                        <article key={video.title} aria-label={`${video.title} Video`}>
                            <a href={video.url} target="_blank" rel="noopener noreferrer">
                                <img src={video.thumb} alt="" />
                            </a>
                            <figcaption className={`${video.color} d-flex flex-column align-items-center`}>
                                <h3>{video.title}</h3>
                                <h4>{video.course}</h4>
                            </figcaption>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Design;