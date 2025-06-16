import React, { useEffect, useState } from 'react';
import './Footer.css'; 

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY + windowHeight;

    // Set a threshold to show the footer and keep it visible
    if (scrollPosition >= documentHeight - 50) {
      setShowFooter(true);
    } else if (scrollPosition < documentHeight - windowHeight - 100) {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`bg-dark text-white py-3 footer ${showFooter ? 'visible' : 'hidden'}`}>
      <div className="container text-center">
        <h5 className="mb-1">Salon Signoria</h5>
        <p className="mb-1">&copy; 2024 Salon. All rights reserved.</p>
        <p className="mb-0">
          <strong>Contact Us:</strong><br />
          Crescent Krishna Metropolis, Sainikpuri X Rd, below ICICI Bank, 
          Lakshmipuram Colony, A. S. Rao Nagar, Hyderabad, Secunderabad, Telangana 500062<br />
          Phone: (+91)8522004709 , 9849695409<br />
          Email: salonsignoria1993@gmail.com
        </p>
        <div>
          <a href="/privacy-policy" className="text-white mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white mx-2">Terms of Service</a>
          <a href="/contact" className="text-white mx-2">Contact Us</a>
        </div>
        <div className="mt-2">
          <a href="https://www.google.com/search?sca_esv=4bddefd64baaca21&rlz=1C1CHZN_enIN1081IN1081&sxsrf=ADLYWII43OZcXfWa0hV_CvnhOHxw0f7D7w%3A1725687269292&q=SALON%20SIGNORIA&stick=H4sIAAAAAAAAAONgU1I1qDBOSk6yTLIwTrZITrUwNEqyMqhITDM3SjEwTjMwMDIwMbK0XMTKF-zo4--nEOzp7ucf5OkIAJcWaQI6AAAA&mat=CVKV_ktPh7P4&ved=2ahUKEwjP1LeFjrCIAxU7nmMGHdWbGCQQrMcEegQIDxAD" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/919849695409" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
