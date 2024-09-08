import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">PoliticoPower</div>
      <ul className="navLinks">
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/about" className="link">About</Link></li>
        <li><Link to="/products" className="link">Products</Link></li>
        <li><Link to="/contact" className="link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
