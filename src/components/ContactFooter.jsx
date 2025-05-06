import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactFooter = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="contact-section py-5 text-center text-white"  style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="contact-title mb-4">Get in Touch Today</h2>
              <p className="contact-subtitle mb-5" style={{ fontFamily: 'Geist Mono, monospace' }}>
                Let's create the future of your business together. Whether you need consulting, development,
                or robust digital solutions, Mesklintech is here to help.
              </p>
              
              <div className="row contact-methods">
  <div className="col-md-4 mb-4 mb-md-0">
    <div className="contact-method text-center">
      <img 
        src="/images/Email Us.gif " 
        alt="Email" 
        className="contact-icon-img mb-3"
        width="100"
        height="100"
      />
      <h4 className="method-title">Email Us</h4>
      <a href="mailto:Mesklintech@gmail.com" className="method-detail">Mesklintech@gmail.com</a>
    </div>
  </div>
  
  <div className="col-md-4 mb-4 mb-md-0">
    <div className="contact-method text-center">
      <img 
        src="/images/Call Us.gif" 
        alt="Phone" 
        className="contact-icon-img mb-3"
        width="100"
        height="100"
      />
      <h4 className="method-title">Call Us</h4>
      <a href="tel:+9112345678" className="method-detail">+91 12345678</a>
    </div>
  </div>
  
  <div className="col-md-4">
    <div className="contact-method text-center">
      <img 
        src="/images/Visit Us.gif" 
        alt="Location" 
        className="contact-icon-img mb-3"
        width="100"
        height="100"
      />
      <h4 className="method-title">Visit Us</h4>
      <p className="method-detail"><a href=''>www.google.com</a></p>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer py-5"  style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/Bg.jpg)`,
        backgroundSize: 'cover',
        
     
        fontFamily: 'Geist Mono, monospace'
      }} >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="footer-brand mb-3">Mesklintech</h2>
              <p className="footer-about">
                At Mesklintech, we offer a wide range of innovative products and reliable services designed to meet the demands of the modern world.
              </p>
              <p className="footer-about">
                Whether you need advanced communication systems, smart robotics, customized machines, or expert IT support – we deliver quality solutions you can trust.
              </p>
                {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h4 className="footer-heading mb-4">Navigation</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">T&C</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-heading mb-4">Services</h4>
              <ul className="footer-links">
                <li><a href="#">Desktop Support</a></li>
                <li><a href="#">Surveillance</a></li>
                <li><a href="#">Software Development</a></li>
                <li><a href="#">Cybersecurity Services</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom mt-5 pt-4 text-center">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Mesklintech. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;