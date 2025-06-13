import React from 'react';
import { Link } from 'react-scroll'; // Import from react-scroll
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">PoliticoPower</div>
      <ul className="navLinks">
        <li><Link to="hero" className="link" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="products" className="link" smooth={true} duration={500}>Products</Link></li>
        <li><Link to="about" className="link" smooth={true} duration={500}>About</Link></li>
        <li><Link to="contact" className="link" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;