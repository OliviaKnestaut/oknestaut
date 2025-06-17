import React from 'react';
import logo from '../images/general/oknestaut_logo.svg';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <a className="navbar-brand" href="..">
                <img 
                    src={logo} 
                    className="nav-logo d-inline-block align-top" 
                    alt="Oknestaut Logo" 
                />
            </a>
            
            <button 
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mr-auto"></div>
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item dropdown">
                        <a 
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            PORTFOLIO
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="">CASE STUDIES</a>
                            <a className="dropdown-item" href="photography">PHOTOGRAPHY</a>
                            <a className="dropdown-item" href="design">DESIGN &amp; MEDIA</a>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="about">ABOUT</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="resume">RESUME</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
