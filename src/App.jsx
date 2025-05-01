import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import Services from './components/Services.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactFooter from './components/ContactFooter.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactFooter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;