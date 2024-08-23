import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us-section">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> Your Business Name</p>
        <p><strong>Address:</strong> 123 Business St, City, Country</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Email:</strong> info@yourbusiness.com</p>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Name: <input type="text" name="name" required /></label>
          </p>
          <p>
            <label>Phone: <input type="tel" name="phone" required /></label>
          </p>
          <p>
            <label>Email: <input type="email" name="email" required /></label>
          </p>
          <p>
            <label>Country: <input type="text" name="country" required /></label>
          </p>
          <p>
            <label>Message: <textarea name="message" required></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
