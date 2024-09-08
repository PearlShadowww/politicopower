import React from 'react';
import './AboutUsSection.css';

const AboutUsSection = () => {
  return (
    <section className="about-us-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="about-us-content">
        <div className="about-us-main" data-aos="fade-right" data-aos-delay="200">
          <h2 className="about-us-heading">About Us</h2>
        </div>
        <div className="about-us-column" data-aos="fade-left" data-aos-delay="400">
          <p className="about-us-paragraph">
            With over 20 years of experience, <b>PoliticoPower</b> has become a trusted partner for political campaigns worldwide. From the USA to Europe, we've had the privilege of supplying merchandise to some of the most prominent politicians. Our deep understanding of the political landscape allows us to create products that resonate with your audience and elevate your campaign's visibility.
          </p>
        </div>
        <div className="about-us-column" data-aos="fade-left" data-aos-delay="600">
          <p className="about-us-paragraph">
            Headquartered in India, we operate 8-9 factories across Southeast Asia, enabling us to efficiently handle even the largest orders. Our extensive network and global reach ensure that no matter where your campaign is based, we can deliver quality merchandise on time. At <b>PoliticoPower</b>, we take pride in being more than just suppliers—we're a dedicated part of your campaign's journey to success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
