import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import BackToTop from './components/BackToTop';
import CursorCompanion from './components/CursorCompanion';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PageLoader from './components/PageLoader';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import { caseStudyMeta, caseStudyRoutes, pageTitles } from './data/siteMeta';
import useImageFade from './hooks/useImageFade';

import './styles/main.css';
import './styles/responsive.css';

import ReactGA from 'react-ga4';

ReactGA.initialize('G-TD8B7D7VZZ');

const Home = React.lazy(() => import('./pages/home'));
const CaseStudies = React.lazy(() => import('./pages/caseStudies'));
const About = React.lazy(() => import('./pages/about'));
const Resume = React.lazy(() => import('./pages/resume'));
const Photography = React.lazy(() => import('./pages/photography'));
const Design = React.lazy(() => import('./pages/design'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const RightOn = React.lazy(() => import('./pages/RightOn'));
const KimsDragon = React.lazy(() => import('./pages/KimsDragon'));
const Letterboxd = React.lazy(() => import('./pages/Letterboxd'));
const Intealth = React.lazy(() => import('./pages/Intealth'));

function ScrollToTop() {
    const { pathname } = useLocation();
    // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function useRouteMeta() {
    const location = useLocation();

    useEffect(() => {
        document.title = pageTitles[location.pathname] ?? 'Olivia Knestaut | Portfolio';
        ReactGA.send({
            hitType: 'pageview',
            page: location.pathname + location.search,
            title: document.title,
        });
    }, [location]);
}

function PageTransition({ children }) {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionState, setTransitionState] = useState('idle');
    const transitionColor = useMemo(() => {
        return caseStudyMeta[location.pathname]?.color ?? 'var(--accent-red)';
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === displayLocation.pathname) return;

        setTransitionState('out');
        const timeout = setTimeout(() => {
            setDisplayLocation(location);
            setTransitionState('in');
            window.scrollTo(0, 0);
        }, 450);

        return () => clearTimeout(timeout);
    }, [location, displayLocation]);

    useEffect(() => {
        if (transitionState === 'in') {
            const timeout = setTimeout(() => setTransitionState('idle'), 450);
            return () => clearTimeout(timeout);
        }
    }, [transitionState]);

    return (
        <>
            <div
                className={`page-transition-curtain page-transition-curtain--${transitionState}`}
                style={{ '--transition-color': transitionColor }}
                aria-hidden="true"
            />
            <div
                key={displayLocation.pathname}
                className={`page-transition-content page-transition-content--${transitionState}`}
            >
                {children}
            </div>
        </>
    );
}

function AppContent() {
    const location = useLocation();
    const isCaseStudy = caseStudyRoutes.includes(location.pathname);

    const headerTitle =
        location.pathname === '/photography' ? { title: 'PHOTOGRAPHY', className: 'photog-title' } : null;

    useRouteMeta();
    useImageFade();

    return (
        <>
            <CursorCompanion />
            <Navigation />
            {!isCaseStudy && <Header title={headerTitle?.title} titleClassName={headerTitle?.className} />}
            <Suspense fallback={<PageLoader />}>
                <PageTransition>
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/case-studies" element={<CaseStudies />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/photography" element={<Photography />} />
                        <Route path="/design" element={<Design />} />
                        <Route path="/accessibility" element={<Accessibility />} />
                        <Route path="/righton" element={<RightOn />} />
                        <Route path="/kims-dragon" element={<KimsDragon />} />
                        <Route path="/letterboxd" element={<Letterboxd />} />
                        <Route path="/intealth" element={<Intealth />} />
                    </Routes>
                </PageTransition>
            </Suspense>
            <Footer />
            <BackToTop />
            <ThemeToggle />
        </>
    );
}

function App() {
    return (
        <Router>
            <ThemeProvider>
                <ScrollToTop />
                <AppContent />
            </ThemeProvider>
        </Router>
    );
}

export default App;
