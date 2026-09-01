import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';
import BackToTop from './components/BackToTop';

import './styles/main.css';
import './styles/responsive.css';

import Home from './pages/home';

const About = React.lazy(() => import('./pages/about'));
const Resume = React.lazy(() => import('./pages/resume'));
const Photography = React.lazy(() => import('./pages/photography'));
const Design = React.lazy(() => import('./pages/design'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const RightOn = React.lazy(() => import('./pages/RightOn'));
const KimsDragon = React.lazy(() => import('./pages/KimsDragon'));
const Letterboxd = React.lazy(() => import('./pages/Letterboxd'));

const caseStudyRoutes = ['/accessibility', '/righton', '/kims-dragon', '/letterboxd'];

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const pageTitles = {
    '/': 'Olivia Knestaut | Portfolio',
    '/about': 'About | Olivia Knestaut',
    '/resume': 'Resume | Olivia Knestaut',
    '/photography': 'Photography | Olivia Knestaut',
    '/design': 'Design & Media | Olivia Knestaut',
    '/accessibility': 'Accessible Portfolio Case Study | Olivia Knestaut',
    '/righton': 'RightOn Education Case Study | Olivia Knestaut',
    '/kims-dragon': "Kim's Dragon Case Study | Olivia Knestaut",
    '/letterboxd': 'Microinteraction Design Case Study | Olivia Knestaut',
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Navigation />
            {!isCaseStudy && <Header title={headerTitle?.title} titleClassName={headerTitle?.className} />}
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/photography" element={<Photography />} />
                    <Route path="/design" element={<Design />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/righton" element={<RightOn />} />
                    <Route path="/kims-dragon" element={<KimsDragon />} />
                    <Route path="/letterboxd" element={<Letterboxd />} />
                </Routes>
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
