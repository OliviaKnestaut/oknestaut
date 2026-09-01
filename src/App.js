import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';
import BackToTop from './components/BackToTop';
import useDimbox from './hooks/useDimbox';

import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Photography from './pages/photography';
import Design from './pages/design';
import Accessibility from './pages/Accessibility';
import RightOn from './pages/RightOn';
import KimsDragon from './pages/KimsDragon';
import Letterboxd from './pages/Letterboxd';

import './styles/main.css';
import './styles/responsive.css';

const caseStudyRoutes = ['/accessibility', '/righton', '/kims-dragon', '/letterboxd'];

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function AppContent() {
    const location = useLocation();
    const isCaseStudy = caseStudyRoutes.includes(location.pathname);

    const pageTitles = {
        '/photography': { title: 'PHOTOGRAPHY', className: 'photog-title' },
    };
    const headerTitle = pageTitles[location.pathname];

    useDimbox();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (window.dimbox && window.dimbox.init) {
            window.dimbox.init();
        }
    }, [location.pathname]);

    return (
        <>
            <Navigation />
            {!isCaseStudy && <Header title={headerTitle?.title} titleClassName={headerTitle?.className} />}
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
