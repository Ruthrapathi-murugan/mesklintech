import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';
// Import your images (make sure to add these files to your project)


const Products = () => {
  const products = [
    {
      title: "VoIP System",
      description: "Next-gen voice communication system.",
      linkText: "Learn Here",
      image: "/images/GIF.png" // Path from public folder
    },
    {
      title: "Cleaning Bot",
      description: "Smart cleaning solutions for modern spaces",
      linkText: "Learn Here",
      image: "/images/GIF.png" // Path from public folder
    },
    {
      title: "Garland Machine",
      description: "Efficient, automated garland making machines.",
      linkText: "Learn Here",
      image: "/images/GIF2.png" // Path from public folder
    },
    {
      title: "Custom Machines",
      description: "Bespoke IoT and robotic solutions for businesses.",
      linkText: "Learn Here",
      image: "/images/GIF3.png" // Path from public folder
    },
    {
      title: "Custom Machines",
      description: "Bespoke IoT and robotic solutions for businesses.",
      linkText: "Ask to edit",
      image: "/images/GIF4.png" // Path from public folder
    },
    {
      title: "Custom Machines",
      description: "Bespoke IoT and robotic solutions for businesses.",
      linkText: "In Here",
      image: "/images/GIF.png" // Path from public folder
    }
  ];

  return (
    <section 
      className="products-section py-5"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/Bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title text-white">Our Products</h2>
          <p className="section-subtitle text-light">
            We specialize in delivering tailored solutions to address your business needs across these key areas:
          </p>
        </div>

        <div className="row g-4">
  {products.map((product, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="product-card h-100">
        {/* Image container with centered background */}
       < div className="product-image-zoom-container">
          <div 
            className="product-image-container"
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
        </div>
        <div className="card-body p-4 text-center">
          <h3 className="product-title mb-3">{product.title}</h3>
          <p className="product-description mb-3">{product.description}</p>
          <a href="#" className="product-link d-inline-block">
            {product.linkText} <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
      <br></br>
     <div className="mt-auto text-center">
      <a href="#" className="btn btn-primary btn-lg px-4">Contact Now
      <i className="fas fa-arrow-right ms-2"></i>
      </a>
    </div>
    </section>
  );
};

export default Products;