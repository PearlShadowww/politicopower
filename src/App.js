import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';
import WhyChooseUs from './WhyChooseUs';
import FeaturedProducts from './FeaturedProducts';
import ClientTestimony from './ClientTestimony';
import ClientLogo from './ClientLogo';
import ContactUs from './ContactUs';
import StickyContactButton from './StickyContactButton';
import Footer from './Footer'; //
import './App.css';



const Home = () => <div></div>;
const About = () => <div></div>;
const Products = () => <div></div>;
const Contact = () => <div></div>;

function App() {
  return (
    <div className="scrollbar">
<Router>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <ClientTestimony />
      <ClientLogo />
      <ContactUs />
      <StickyContactButton />
      <Footer /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
    
  );
}


export default App;
