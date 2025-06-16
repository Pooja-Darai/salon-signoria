import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css'; // Import custom CSS for styling

const Home = () => {
  return (
    <div className="mb-5 mt-2 home-background">
      <div className="row align-items-center home-content">
        <div className="welcome-title">
          <h1>WELCOME TO SALON SIGNORIA</h1>
          <p>
            Experience the best beauty treatments and services tailored just for you. Our skilled professionals are dedicated to enhancing your natural beauty and ensuring you leave feeling rejuvenated and confident.
          </p>
          <Link to="/contact" className="btn btn-primary">Book an Appointment</Link>
        </div>
      </div>

      <div className="row my-5 service-card">
        <div className="col-12 services-title text-center">
          <h2>Our Services</h2>
        </div>
        <div className="row service-container">
          <div className="col-12 col-md-6 col-lg-4 service-item">
            <img src="./assets/haircut.jpg" alt="Haircuts - Precision cuts for every style" />
            <p><strong>Haircuts:</strong> Precision cuts for every style.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 service-item">
            <img src="./assets/hair-coloring.jpg" alt="Hair Coloring - Vibrant colors and highlights" />
            <p><strong>Hair Coloring:</strong> Vibrant colors and highlights.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 service-item">
            <img src="./assets/facial.jpg" alt="Facials - Rejuvenating treatments for glowing skin" />
            <p><strong>Facials:</strong> Rejuvenating treatments for glowing skin.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 service-item">
            <img src="./assets/nail services.jpg" alt="Nail Services - Manicures and pedicures to pamper your hands and feet" />
            <p><strong>Nail Services:</strong> Manicures and pedicures to pamper your hands and feet.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 service-item">
            <img src="./assets/headmassage.jpg" alt="Massage Therapy - Relaxing massages to relieve stress" />
            <p><strong>Head Massage:</strong> Relaxing massages to relieve stress.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 service-item">
            <img src="./assets/waxing.jpeg" alt="Waxing - Smooth skin with professional waxing services" />
            <p><strong>Waxing:</strong> Smooth skin with professional waxing services.</p>
          </div>
          <Link to="/services" className="btn btn-primary">More Services</Link>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12 why-choose-us">
          <h2>Why Choose Us?</h2>
          <p>At Our Salon, we prioritize your satisfaction and comfort. Here's why we stand out:</p>
          <ul>
            <li><strong><i class="fa-solid fa-user-tie"></i>Experienced Professionals:</strong> <br />Our team has years of experience in the beauty industry.</li>
            <li><strong><i class="fa-solid fa-handshake"></i> Personalized Experience:</strong> <br />Every service is tailored to meet your individual needs.</li>
            <li><strong><i class="fa-solid fa-thumbs-up"></i> Quality Products:</strong> <br />We use only the best products for your hair and skin.</li>
            <li><strong><i class="fa-solid fa-couch"></i> Relaxing Atmosphere:</strong> <br />Enjoy a serene environment designed for your relaxation.</li>
          </ul>
        </div>
      </div>

      <div className="row my-5 justify-content-center text-center">
        <div className="col-12 col-md-8">
          <h2>Our Location</h2>
          <p>Visit us at our convenient location in the heart of the city:</p>
          <p><strong>Salon Signoria</strong><br />
            Crescent Krishna Metropolis, Sainikpuri X Rd, below ICICI Bank, Lakshmipuram Colony, A. S. Rao Nagar,
            Hyderabad, Secunderabad, Telangana 500062<br />
            Contact Us: 8522224709, 9849695409
          </p>
          <div className="map-responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7242321773706!2d78.55246590623364!3d17.482535552245032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b83c8ce812b%3A0xaf72d03f00204299!2sSALON%20SIGNORIA!5e0!3m2!1sen!2sin!4v1725518188122!5m2!1sen!2sin" 
          title='salon_map' width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           
          </div>
        </div>
      </div>
       {/* WhatsApp Icon */}
       <a href="https://wa.me/919849695409" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>

            {/* Call Icon */}
            <a href="tel:+919849695409" className="call-icon" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-phone"></i>
            </a>
    </div>
  );
};

export default Home;
