import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the message content
    const messageContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
    // Encode the message content
    const encodedMessage = encodeURIComponent(messageContent);
    
    // Your WhatsApp Business number (without '+')
    const phoneNumber = '919849695409';
    
    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Debugging: Output URL to the console
    console.log('WhatsApp URL:', whatsappURL);

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
          <div className="form-group">
          <label htmlFor="message">Message</label>
          <select
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          >
             <option value="">Choose an option</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Appointment Request">Appointment Request</option>
            <option value="Pricing Information">Pricing Information</option>
            <option value="Complaint">Complaint</option>
          </select>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
