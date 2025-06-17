import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';

import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Photography from "./pages/photography";
import Design from "./pages/design";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/design" element={<Design />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
