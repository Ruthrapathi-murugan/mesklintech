import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Desktop Support",
      description: "Reliable desktop and IT support services.",
      linkText: "View Details",
      icon: "/images/services1.png" // Add your icon path
    },
    {
      title: "Surveillance",
      description: "Advanced security and surveillance solutions.",
      linkText: "View Details",
      icon: "/images/services2.png" // Add your icon path
    },
    {
      title: "Software Development",
      description: "Custom software applications for your needs.",
      linkText: "View Details",
      icon: "/images/services3.png" // Add your icon path
    }
  ];

  return (
    <section className="services-section" style={{ 
      backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/Bg.jpg)`,
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
                <div className="card-body p-4 text-center">
                  <div className="service-icon mb-3">
                    <img src={service.icon} alt={service.title} className="img-fluid" />
                  </div>
                  <h2 className="service-title text-dark">{service.title}</h2>
                  <p className="service-description mb-4 text-muted" style={{ fontFamily: 'Geist Mono, monospace' }}>{service.description}</p>
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