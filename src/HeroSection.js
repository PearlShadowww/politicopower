import React from 'react';
import './HeroSection.css'; // Import your CSS file for styling

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading" data-aos="fade-up" >Welcome to Our Website</h1>
          <p className="hero-tagline">Your journey to excellence starts here</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
        <div className="hero-image">
          {/* Placeholder for the image */}
          <img src="https://via.placeholder.com/500" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
