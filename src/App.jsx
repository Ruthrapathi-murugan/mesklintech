import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Products from './components/Products';
import Services from './components/Services';
import AboutUs from './components/Aboutus';
import ContactFooter from './components/ContactFooter';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/case-studies" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactFooter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;