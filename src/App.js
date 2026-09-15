import React, { useEffect, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import BackToTop from './components/BackToTop';
import CursorCompanion from './components/CursorCompanion';
import PageLoader from './components/PageLoader';
import Footer from './components/footer';
import Header from './components/header';
import Navigation from './components/navigation';
import useImageFade from './hooks/useImageFade';

import './styles/main.css';
import './styles/responsive.css';

import Home from './pages/home';

import ReactGA from 'react-ga4';
// Initialize with your actual Measurement ID
ReactGA.initialize('G-TD8B7D7VZZ');

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

const caseStudyRoutes = ['/accessibility', '/righton', '/kims-dragon', '/letterboxd', '/intealth'];

function ScrollToTop() {
    const { pathname } = useLocation();
    // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function usePageViews() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: location.pathname + location.search,
            title: document.title,
        });
    }, [location]);
}

const pageTitles = {
    '/': 'Olivia Knestaut | Portfolio',
    '/case-studies': 'Case Studies | Olivia Knestaut',
    '/about': 'About | Olivia Knestaut',
    '/resume': 'Resume | Olivia Knestaut',
    '/photography': 'Photography | Olivia Knestaut',
    '/design': 'Design & Media | Olivia Knestaut',
    '/accessibility': 'Accessible Portfolio Case Study | Olivia Knestaut',
    '/righton': 'RightOn Education Case Study | Olivia Knestaut',
    '/kims-dragon': "Kim's Dragon Case Study | Olivia Knestaut",
    '/letterboxd': 'Microinteraction Design Case Study | Olivia Knestaut',
    '/intealth': 'Intealth Modern Apps Case Study | Olivia Knestaut',
};

function usePageTitle() {
    const location = useLocation();
    useEffect(() => {
        document.title = pageTitles[location.pathname] ?? 'Olivia Knestaut | Portfolio';
    }, [location.pathname]);
}

function AppContent() {
    const location = useLocation();
    const isCaseStudy = caseStudyRoutes.includes(location.pathname);

    const headerTitles = {
        '/photography': { title: 'PHOTOGRAPHY', className: 'photog-title' },
    };
    const headerTitle = headerTitles[location.pathname];

    usePageTitle();
    usePageViews();
    useImageFade();

    // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <CursorCompanion />
            <Navigation />
            {!isCaseStudy && <Header title={headerTitle?.title} titleClassName={headerTitle?.className} />}
            <Suspense fallback={<PageLoader />}>
                <div key={location.pathname} className="page-transition">
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
                </div>
            </Suspense>
            <Footer />
            <BackToTop />
        </>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <AppContent />
        </Router>
    );
}

export default App;
