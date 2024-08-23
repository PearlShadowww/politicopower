import React from 'react';
import './ClientLogo.css'; // Import the CSS file for styling

const ClientLogo = () => {
  const logos = [
    'logo1.png', 'logo2.png', 'logo3.png', 'logo4.png',
    'logo5.png', 'logo6.png', 'logo7.png', 'logo8.png'
  ];

  return (
    <div className="client-logo-section">
      <div className="logo-slider">
        <div className="logo-track">
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={index + 8} className="logo-slide">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
