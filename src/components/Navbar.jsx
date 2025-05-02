import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after click
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container-fluid px-4 px-lg-5">
      <a 
  className="navbar-brand" 
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection('home');
  }}
  style={{
    padding: '0.5rem 1rem' // Adjust padding as needed
  }}
>
  <img 
    src="/images/LOGO.png" // Update with your logo path
    alt="Meshlintech Logo"
    style={{
      height: '40px', // Adjust height as needed
      width: 'auto'
    }}
  />
</a>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {['home', 'about', 'products', 'services', 'contact'].map((item) => (
              <li key={item} className="nav-item">
                <a
                  className="nav-link"
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item === 'products' ? 'Case Studies' : 
                   item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            <li className="nav-item my-2 my-lg-0 ms-lg-3">
              <a
                className="btn btn-outline-light rounded-pill px-3 px-lg-4"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Get started <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;