import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/icons/oknestaut_logo.svg';

function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle menu toggle
    const handleMenuToggle = () => {
        setIsNavOpen(!isNavOpen);
    };    // Handle dropdown toggle
    const handleDropdownToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close menu and dropdown on navigation link click
    const handleNavLinkClick = () => {
        setIsNavOpen(false);
        setIsDropdownOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (        <nav className="navbar navbar-expand-sm navbar-light">
            <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
                <img 
                    src={logo} 
                    className="nav-logo d-inline-block align-top" 
                    alt="Oknestaut Logo" 
                />
            </Link>
            <button 
                className="navbar-toggler menu-toggle"
                type="button"
                onClick={handleMenuToggle}
                aria-controls="navbarSupportedContent"
                aria-expanded={isNavOpen}
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <div className="mr-auto"></div>
                <ul className="navbar-nav my-2 my-lg-0 nav-links">
                    <li className={`nav-item dropdown ${isDropdownOpen ? 'active' : ''}`} ref={dropdownRef}>
                        <a 
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            onClick={handleDropdownToggle}
                            aria-expanded={isDropdownOpen}
                        >
                            PORTFOLIO
                            <span className="arrow"></span>
                        </a>                        <div className={`dropdown-menu dropdown-menu-lg dropdown-content ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/" onClick={handleNavLinkClick}>CASE STUDIES</Link>
                            <Link className="dropdown-item" to="/photography" onClick={handleNavLinkClick}>PHOTOGRAPHY</Link>
                            <Link className="dropdown-item" to="/design" onClick={handleNavLinkClick}>DESIGN &amp; MEDIA</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resume" onClick={handleNavLinkClick}>RESUME</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
