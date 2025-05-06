import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Desktop Support",
      description: "Reliable desktop and IT support services...",
      linkText: "View Details",
      media: "/images/Desktop Support.gif", // Changed to GIF
      isVideo: false
    },
    {
      title: "Surveillance",
      description: "Advanced security and surveillance solutions.",
      linkText: "View Details",
      media: "/images/Surveillance.gif", // Changed to GIF
      isVideo: false
    },
    {
      title: "Software Development",
      description: "Custom software applications for your needs.",
      linkText: "View Details",
      media: "/images/Software Development.gif", // Changed to GIF
      isVideo: false
    }
  ];

  return (
    <section className="services-section" style={{ 
      backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white'
    }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="section-title text-white">Our Services</h1>
          <p className="section-subtitle text-light" style={{ fontFamily: 'Geist Mono, monospace' }}>
            We provide end-to-end solutions to help businesses across industries overcome challenges, innovate, and scale.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="service-card h-100">
                <div className="service-media-container">
                  <img 
                    src={service.media} 
                    alt={service.title} 
                    className="service-media"
                  />
                </div>
                <div className="card-body p-4 text-center">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description mb-4" style={{ fontFamily: 'Geist Mono, monospace' }}>
                    {service.description}
                  </p>
                  <a href="#" className="service-link btn btn-outline-primary">
                    {service.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="#" className="btn btn-primary btn-lg px-4">
            Explore More <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;