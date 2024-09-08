import React from 'react';
import './HeroSection.css'; // Import your CSS file for styling
import "./undraw_candidate_ubwv.png"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading" data-aos="fade-up" >Empowering Your Campaign with Quality Merchandise, <br/>Delivered Right on Time</h1>
          <p className="hero-tagline">We are dedicated manufacturers and exporters, offering a wide range of high-quality products tailored for your political campaigns. Specializing in political merchandise, we excel at fulfilling large-scale orders with precision and efficiency. Our expertise ensures that your campaign materials are delivered on time, every time. </p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
        <div className="hero-image">
          {/* Placeholder for the image */}
          <img src={require('./undraw_voting_nvu7.png')} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
