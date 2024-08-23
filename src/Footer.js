import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h2>Your Logo</h2>
      </div>
      <div className="footer-links">
        <div className="links-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="links-column">
          <h3>Company Info</h3>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-extra">
        <div className="extra-section">
          <h3>Import Export CODE : </h3>
          <p>Goods And Service Tax Number : </p>
        </div>
        <div className="extra-section">
          <h3>Contact Information</h3>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@yourcompany.com</p>
          <p>Address: 123 Business St, City, Country</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
