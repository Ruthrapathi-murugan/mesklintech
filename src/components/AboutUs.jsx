import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div >
              <h1 className="about-title">About Us</h1>
              <div className="divider mx-auto my-4"></div>
            </div>
            
            <div className="about-content"  style={{ fontFamily: 'Geist Mono, monospace' }}>
            <p className="about-text" style={{ marginBottom: '1rem' }}>
    At Meshlintech, we believe in shaping the future through innovation, intelligence, and integrity.
  </p>
  <p className="about-text" style={{ marginBottom: '1rem' }}>
    We specialize in delivering cutting-edge solutions across communication systems, robotics, IoT, and software development.
  </p>
  <p className="about-text" style={{ marginBottom: '1rem' }}>
    From building next-generation VoIP systems to designing smart cleaning bots and custom machines, we bring technology and creativity together to solve real-world problems.
  </p>
  <p className="about-text" style={{ marginBottom: '1rem' }}>
    Our services like desktop support, surveillance systems, and custom software development are tailored to meet the growing needs of businesses in a fast-evolving digital world.
  </p>
  <p className="about-text" style={{ marginBottom: '1rem' }}>
    With a passion for excellence and a commitment to quality, Meshlintech is not just a technology provider – we are your trusted innovation partner.
  </p>
  <p className="about-text">
    Together, let's create, transform, and lead into a smarter tomorrow.
  </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;