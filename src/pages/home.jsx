import { Link } from 'react-router-dom';
import CaseStudyCard from '../components/CaseStudyCard';
import PhotoGrid from '../components/PhotoGrid';
import ScrollReveal from '../components/ScrollReveal';
import { caseStudies } from '../data/caseStudyData';
import { natureGroups } from '../data/photographyData';
import { trackEvent } from '../utils/analytics';

function Home() {
    const featuredStudies = caseStudies.slice(0, 4);

    return (
        <main id="main-content" aria-label="Site Main Content">
            <section
                className="case-studies column container-fluid justify-content-center"
                aria-label="Featured Case Studies"
            >
                <h2 className="color-accent-red">RECENT WORK</h2>
                <section className="card-container">
                    {featuredStudies.map((study, index) => (
                        <ScrollReveal
                            key={study.title}
                            as="article"
                            delay={index * 0.1}
                            threshold={0.08}
                            className="card-reveal"
                        >
                            <CaseStudyCard study={study} eventCategory="Home" />
                        </ScrollReveal>
                    ))}
                </section>
            </section>

            <section className="home-photography-preview" aria-label="Photography Preview">
                <div className="container-fluid">
                    <h2 className="color-accent-red">RECENT PHOTOGRAPHY</h2>
                </div>
                <a
                    href="#home-photography-cta"
                    className="skip-link home-gallery-skip-link color-accent-red-hover"
                    aria-label="Skip past mini photography gallery"
                >
                    Skip Photography Gallery
                </a>
                <PhotoGrid
                    photos={natureGroups[0].photos}
                    galleryName="home-nature-preview"
                    layout={natureGroups[0].layout}
                    delay={0.08}
                    aria-label="Nature preview gallery"
                />
                <div id="home-photography-cta" className="container-fluid home-photography-cta">
                    <Link
                        className="home-link bg-accent-blue color-tan"
                        to="/photography"
                        onClick={() => trackEvent('Home', 'Clicked See All Photography')}
                    >
                        See all photography →
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Home;
