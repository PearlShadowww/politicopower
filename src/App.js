import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';
import FeaturedProducts from './FeaturedProducts';
import ClientTestimony from './ClientTestimony';
import ClientLogo from './ClientLogo';
import ContactUs from './ContactUs';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import GridDesign from './GridDesign';

AOS.init();


// Add this component to handle the sticky WhatsApp button
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8920038309?text=Hi%20there%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#000',  // WhatsApp green color
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        padding: '15px 20px',
        fontSize: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      <i className="fab fa-whatsapp"></i> {/* WhatsApp Icon */}
    </a>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <AboutUsSection />
      <GridDesign />
      <ClientTestimony />
      <ClientLogo />
      <ContactUs />
      <Footer />
      <WhatsAppButton /> {/* Add the WhatsApp button here */}
    </Router>
  );
}

export default App;
