import React from 'react';
import './index.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name" className="contact-label">Name</label>
        <input type="text" id="name" name="name" className="contact-input" required />

        <label htmlFor="email" className="contact-label">Email</label>
        <input type="email" id="email" name="email" className="contact-input" required />

        <label htmlFor="message" className="contact-label">Message</label>
        <textarea id="message" name="message" rows="4" className="contact-textarea" required></textarea>

        <button type="submit" className="contact-submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
