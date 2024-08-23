import React from 'react';
import './ClientTestimony.css'; // Import your CSS file for styling

const ClientTestimony = () => {
  return (
    <section className="client-testimony-section">
      <h2 className="testimony-main-heading">What Our Clients Say</h2>
      <div className="client-testimony-content">
        <div className="testimony-card">
          <h3 className="testimony-heading">Client 1</h3>
          <em className="testimony-subheading">"Exceptional Service"</em>
          <p className="testimony-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sapien vel enim dignissim aliquam.
          </p>
        </div>
        <div className="testimony-card">
          <h3 className="testimony-heading">Client 2</h3>
          <em className="testimony-subheading">"Highly Recommend"</em>
          <p className="testimony-paragraph">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="testimony-card">
          <h3 className="testimony-heading">Client 3</h3>
          <em className="testimony-subheading">"Outstanding Experience"</em>
          <p className="testimony-paragraph">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimony;
