// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="products"><Products /></section>
      <section id="services"><Services /></section>
      <section id="about"><AboutUs /></section>
      <section id="contact"><ContactFooter /></section>
    </div>
  );
}

export default App;