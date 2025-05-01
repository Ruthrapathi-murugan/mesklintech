import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Hero.css';


const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center" 
      style={{
       // Remove the import statement
      backgroundImage: "url('/images/bgp.JPG')", // Update style // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        position: 'relative',
      }}>
      <div className="overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}></div>
      
      <div className="container position-relative z-index-1">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold mb-4">Innovating Tomorrow, Today</h1>
            <p className="lead mb-5">Leading technology and innovation for your future.</p>
            <p className="mb-5">
              Mesklintech is a cutting-edge technology company specializing in VoIP, Robotics, IoT, 
              Surveillance, and Software Development. Our solutions empower industries and homes 
              for a smarter future.
            </p>
            <a href="#" className="btn btn-primary btn-lg px-4">Learn More About Us <i className="fas fa-arrow-right ms-2"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;