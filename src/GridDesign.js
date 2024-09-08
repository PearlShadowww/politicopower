import React from 'react';
import './GridDesign.css'; // Ensure you import the CSS file
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const GridDesign = () => {
  return (
    <div className="grid-container">
      <div className="grid-item yellow-bg" data-aos="fade-up"> 
        <h2>20 Years of Experience</h2>
        <p>We have been leading the industry with top-quality political merchandise for over two decades.</p>
      </div>
      <div className="grid-item blue-bg" data-aos="fade-up"> 
        <h2>Global Reach</h2>
        <p>Supplying to 25+ countries and counting, ensuring that your message is heard worldwide.</p>
        <button className="cta-button">Learn More →</button>
      </div>
      <div className="grid-item pink-bg" data-aos="fade-up"> 
        <h2>1 Million Units Delivered</h2>
        <p>Over 1 million units delivered to satisfied clients across various continents.</p>
      </div>
      <div className="grid-item profile brown-bg" data-aos="fade-up"> 
        <h2>Our Team</h2>
        <p>Expert craftsmen and designers ensuring every product meets our high standards.</p>
        <ul>
          <li>500+ Skilled Workers</li>
          <li>8 Manufacturing Units</li>
          <li>12 Quality Control Specialists</li>
        </ul>
      </div>
      <div className="grid-item price brown-bg" data-aos="fade-up"> 
        <h2>$5M in Sales Last Year</h2>
        <p>Our success is driven by a dedicated team and loyal clients.</p>
      </div>
      <div className="grid-item green-bg" data-aos="fade-up"> 
        <h2>Service Categories</h2>
        <p>Providing a wide range of political merchandise solutions:</p>
        <ul>
          <li>Banners: 120K units</li>
          <li>Flags: 80K units</li>
          <li>Brochures: 250K units</li>
          <li>Buttons: 1.5M units</li>
        </ul>
      </div>
    </div>
  );
};

export default GridDesign;
