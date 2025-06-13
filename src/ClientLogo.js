import React from 'react';
import './ClientLogo.css'; // Import the CSS file for styling

const ClientLogo = () => {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/7/73/US_Democratic_Party_Logo.svg', 
    'https://upload.wikimedia.org/wikipedia/commons/9/9b/Republicanlogo.svg', // USA
    'https://upload.wikimedia.org/wikipedia/en/4/4e/Conservative_Party_Logo.svg', 
    'https://upload.wikimedia.org/wikipedia/sco/0/05/Logo_Labour_Party.svg', // UK
    'https://upload.wikimedia.org/wikipedia/commons/0/0e/CDU_Logo_2023.svg', 
    'https://upload.wikimedia.org/wikipedia/commons/4/4f/Logo_SPD_2019.png', // Germany
    'https://upload.wikimedia.org/wikipedia/commons/b/b7/Logo-LREM-noir.svg', 
    'https://upload.wikimedia.org/wikipedia/commons/2/2c/Logo_e_Partis%C3%AB_Socialiste_t%C3%AB_Shqip%C3%ABris%C3%AB.svg' // France
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
