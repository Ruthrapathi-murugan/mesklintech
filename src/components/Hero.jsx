import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

const Hero = () => {
  return (
    <section 
      className="hero-section d-flex align-items-center" 
      style={{
        backgroundImage: "url('/images/bgp.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        position: 'relative',
        paddingTop: '80px' // Added for navbar spacing
      }}
    >
      {/* Dark overlay */}
      <div 
        className="overlay" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      ></div>
      
      {/* Content */}
      <div className="container position-relative z-index-1">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 
              className="hero-title fw-bold mb-4" 
              style={{ 
                fontFamily: "'Geist', sans-serif",
                lineHeight: '1.2',
                letterSpacing: '-0.5px'
              }}
            >
              Innovating <br /> Tomorrow, Today
            </h1>
            
            <p 
              className="hero-subtitle mb-4" 
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontWeight: '100'
              }}
            >
              Leading technology and innovation for your future.
            </p>
            
            <p 
              className="hero-text mb-5 mx-auto" 
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontWeight: '100',
                lineHeight: '2'
              }}
            >
              Mesklintech is a cutting-edge technology company specializing in VoIP, Robotics, IoT, 
              Surveillance, and Software Development. Our solutions empower industries and homes 
              for a smarter future.
            </p>
            
            <a 
              href="#about" 
              className="btn btn-primary btn-lg hero-cta"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: '500',
                borderRadius: '50px'
              }}
            >
              Learn More About Us <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;