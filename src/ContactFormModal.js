import React, { useState } from 'react';
import './ContactFormModal.css';

const ContactFormModal = ({ showModal, handleClose }) => {
  if (!showModal) {
    return null; // Don't render the modal if showModal is false
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={handleClose}>&times;</span>
        <h2>Contact Us</h2>
        <form name="popup-contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="popup-contact" />
          <p>
            <label>Name: <input type="text" name="name" required /></label>
          </p>
          <p>
            <label>Email: <input type="email" name="email" required /></label>
          </p>
          <p>
            <label>Phone: <input type="tel" name="phone" required /></label>
          </p>
          <p>
            <label>Message: <textarea name="message" required></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
