import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';

const Products = () => {
  const products = [
    {
      title: "VoIP System",
      description: "Next-gen voice communication system.",
      linkText: "Learn More",
      media: "/images/VoIP System.gif",
      isVideo: false
    },
    {
      title: "Cleaning Bot",
      description: "Smart cleaning solutions for modern spaces",
      linkText: "Learn More",
      media: "/images/Cleaning Bot.gif",
      isVideo: false
    },
    {
      title: "Garland Machine",
      description: "Efficient, automated garland making machines.",
      linkText: "Learn More",
      media: "/images/Garland Machine.gif",
      isVideo: false
    },
    {
      title: "Custom Machines",
      description: "Bespoke IoT and robotic solutions for businesses.",
      linkText: "Learn More",
      media: "/images/Custom Machine.gif",
      isVideo: false
    },
    {
      title: "Custom Machines",
      description: "Bespoke IoT and robotic solutions for businesses.",
      linkText: "Learn More",
      media: "/images/Custom Machine.gif",
      isVideo: false
    },
    {
      title: "Custom Machines",
      description: "Bespoke IoT and robotic solutions for businesses.",
      linkText: "Learn More",
      media: "/images/Custom Machine.gif",
      isVideo: false
    }
  ];

  return (
    <section className="products-section py-5">
      <div className="container">
        <div className="text mb-5">
          <h2 className="section-title text-white" style={{ fontFamily: 'Geist Mono, monospace' }}>Our Products</h2>
          <p style={{ fontFamily: 'Geist Mono, monospace' }}>
            We specialize in delivering tailored solutions to address your business needs across these<br />
            key areas:
          </p>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div key={index} className="col-md-6 col-lg-4" style={{padding:"20px"}} >
              <div className="product-card h-100">
                <div className="product-media-container">
                  {product.isVideo ? (
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="product-media"
                    >
                      <source src={product.media} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={product.media} 
                      alt={product.title} 
                      className="product-media"
                    />
                  )}
                </div>
                <div className="card-body p-4 ">
                  <h3 className="product-title mb-3">{product.title}</h3>
                  <p className="product-description mb-3" style={{ fontFamily: 'Geist Mono, monospace' }}>
                    {product.description}
                  </p>
                  <a href="#" className="product-link" style={{ fontFamily: 'Geist Mono, monospace' }}>
                    {product.linkText} <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="mt-auto text-center">
          <a href="#" className="btn btn-primary btn-lg px-4">
            Contact Now
            <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;