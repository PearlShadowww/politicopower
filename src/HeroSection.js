import React from 'react';
import './HeroSection.css'; // Import your CSS file for styling
import instantVideo from './Copy of instant.mp4'; // Import your video file

const HeroSection = () => {
  return (
    <div id="home-section">
      <section className="hero-section">
        {/* Background Video */}
        <video id="video" autoPlay loop muted>
          <source src={instantVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading" data-aos="fade-up">
              
            </h1>

            <a href="/contact" className="cta-button">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;