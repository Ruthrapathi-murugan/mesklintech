import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container-fluid px-4 px-lg-5">
        {/* Brand Logo/Text */}
        <Link className="navbar-brand fw-bold" to="/" onClick={closeMobileMenu}>Mesklintech</Link>
        
        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMobileMenu}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/case-studies" onClick={closeMobileMenu}>Case Studies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
            </li>
            <li className="nav-item my-2 my-lg-0 ms-lg-3">
              <Link className="btn btn-outline-light rounded-pill px-3 px-lg-4" to="/contact" onClick={closeMobileMenu}>
                Get started with us <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;