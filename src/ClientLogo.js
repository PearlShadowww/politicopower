import React from 'react';
import './ClientLogo.css'; // Import the CSS file for styling

const ClientLogo = () => {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/7/73/US_Democratic_Party_Logo.svg', 
    'https://upload.wikimedia.org/wikipedia/commons/e/e1/Republican_Party_logo.svg', // USA
    'https://upload.wikimedia.org/wikipedia/commons/4/4b/Conservative_Party_Logo.svg', 
    'https://upload.wikimedia.org/wikipedia/commons/4/4e/Labour_Party_%28UK%29_logo.svg', // UK
    'https://upload.wikimedia.org/wikipedia/commons/a/a2/CDU_Logo_2016.svg', 
    'https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_SPD.svg', // Germany
    'https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_LREM_2022.png', 
    'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_parti_socialiste.svg' // France
  ];

  return (
    <div className="client-logo-section">
      <h2 className="client-logo-heading">Our Esteemed Clients</h2>
      <div className="logo-slider">
        <div className="logo-track">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
