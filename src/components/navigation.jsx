import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const logo = `${process.env.PUBLIC_URL}/images/general/oknestaut_logo.svg`;

function Navigation() {
    const location = useLocation();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleMenuToggle = () => setIsNavOpen((open) => !open);

    const handleDropdownToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDropdownOpen((open) => !open);
    };

    const handleNavLinkClick = () => {
        setIsNavOpen(false);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <a
                href="#main-content"
                className="skip-link header-link color-accent-red-hover"
                aria-label="Skip to Main Content Link"
            >
                Skip to Main Content
            </a>
            <nav className="navbar navbar-expand-sm navbar-light" aria-label="Site Navigation Bar">
                <Link className="navbar-brand" to="/" onClick={handleNavLinkClick} aria-label="OKnestaut Home Page">
                    <img
                        src={logo}
                        className="nav-logo d-inline-block align-top"
                        alt="Logo with a ladybug as the letter O in OKnestaut"
                    />
                </Link>
                <button
                    className="navbar-toggler menu-toggle"
                    type="button"
                    onClick={handleMenuToggle}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isNavOpen}
                    aria-label="Toggle Mobile Navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <section className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <div className="mr-auto" />
                    <ul className="navbar-nav my-2 my-lg-0" aria-label="Primary Navigation Items">
                        <li
                            className="nav-item dropdown"
                            ref={dropdownRef}
                            aria-label="Toggle Portfolio Navigation Dropdown"
                        >
                            <button
                                type="button"
                                className="nav-link dropdown-toggle color-accent-red"
                                id="navbarDropdown"
                                onClick={handleDropdownToggle}
                                aria-haspopup="true"
                                aria-expanded={isDropdownOpen}
                            >
                                PORTFOLIO
                            </button>
                            <div
                                className={`dropdown-menu dropdown-menu-lg ${isDropdownOpen ? 'show' : ''}`}
                                aria-labelledby="navbarDropdown"
                            >
                                <Link
                                    className="dropdown-item"
                                    to="/"
                                    onClick={handleNavLinkClick}
                                    aria-label="Case Studies Navigation Link"
                                >
                                    CASE STUDIES
                                </Link>
                                <Link
                                    className="dropdown-item"
                                    to="/photography"
                                    onClick={handleNavLinkClick}
                                    aria-label="Photography Navigation Link"
                                >
                                    PHOTOGRAPHY
                                </Link>
                                <Link
                                    className="dropdown-item"
                                    to="/design"
                                    onClick={handleNavLinkClick}
                                    aria-label="Design and Media Navigation Link"
                                >
                                    DESIGN &amp; MEDIA
                                </Link>
                            </div>
                        </li>
                        <li
                            className={`nav-item ${isActive('/about') ? 'active' : ''}`}
                            aria-label="About Navigation Link"
                        >
                            <Link className="nav-link color-accent-red" to="/about" onClick={handleNavLinkClick}>
                                ABOUT
                            </Link>
                        </li>
                        <li
                            className={`nav-item ${isActive('/resume') ? 'active' : ''}`}
                            aria-label="Contact Navigation Link"
                        >
                            <Link className="nav-link color-accent-red" to="/resume" onClick={handleNavLinkClick}>
                                RESUME
                            </Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </>
    );
}

export default Navigation;
