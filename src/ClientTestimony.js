import React from 'react';
import './ClientTestimony.css'; // Import your CSS file for styling

const ClientTestimony = () => {
  return (
    <section className="client-testimony-section">
      <h2 className="testimony-main-heading" data-aos="zoom-in">What Our Clients Say</h2>
      <div className="client-testimony-content">
        <div className="testimony-card" data-aos="fade-up" data-aos-delay="200">
          <img
            src="https://flagcdn.com/us.svg"
            alt="USA Flag"
            className="testimony-flag"
          />
          <h3 className="testimony-heading">United States</h3>
          <em className="testimony-subheading">"Exceptional Service"</em>
          <p className="testimony-paragraph">
            "PoliticoPower delivered beyond our expectations. The quality of the merchandise was outstanding and truly made a difference in our campaign outreach."
          </p>
        </div>
        <div className="testimony-card" data-aos="fade-up" data-aos-delay="400">
          <img
            src="https://flagcdn.com/fr.svg"
            alt="France Flag"
            className="testimony-flag"
          />
          <h3 className="testimony-heading">France</h3>
          <em className="testimony-subheading">"Highly Recommend"</em>
          <p className="testimony-paragraph">
            "Their attention to detail and timely delivery were impressive. PoliticoPower provided us with high-quality merchandise that resonated with our supporters."
          </p>
        </div>
        <div className="testimony-card" data-aos="fade-up" data-aos-delay="600">
          <img
            src="https://flagcdn.com/gb.svg"
            alt="UK Flag"
            className="testimony-flag"
          />
          <h3 className="testimony-heading">United Kingdom</h3>
          <em className="testimony-subheading">"Outstanding Experience"</em>
          <p className="testimony-paragraph">
            "Working with PoliticoPower was seamless. Their products added significant value to our campaign, and their team was incredibly supportive throughout the process."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimony;
