// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('https://formsubmit.co/sales@politicopower.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone, email, country, message }),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setName('');
      setPhone('');
      setEmail('');
      setCountry('');
      setMessage('');
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="contact-us-section">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> PoliticoPower</p>
        <p><strong>Address:</strong> New Delhi, India</p>
        <p><strong>Phone:</strong> 8920038309</p>
        <p><strong>Email:</strong> contaact@politicopower</p>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Name: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required /></label>
          </p>
          <p>
            <label>Phone: <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /></label>
          </p>
          <p>
            <label>Email: <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
          </p>
          <p>
            <label>Country: <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} required /></label>
          </p>
          <p>
            <label>Message: <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;