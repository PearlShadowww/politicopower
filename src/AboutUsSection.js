import React from 'react';
import './AboutUsSection.css'; // Import your CSS file for styling

const AboutUsSection = () => {
  return ( 
    
    <section data-aos="fade-up" className="about-us-section">
     
      <div className="about-us-content">
        <div className="about-us-main">
          <h2 className="about-us-heading">About Us</h2>
        </div>
        <div className="about-us-column">
          <p className="about-us-paragraph">
            {/* First paragraph placeholder */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </p>
        </div>
        <div className="about-us-column">
          <p className="about-us-paragraph">
            {/* Second paragraph placeholder */}
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>
    </section>
    
  );
};
<script>
  AOS.init();
</script>
export default AboutUsSection;
