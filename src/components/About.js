import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <section className="hero-section">
                <h1>Welcome to SALON SIGNORIA</h1>
                <p>Your ultimate destination for luxury hair and beauty services.</p>
            </section>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    At SALON SIGNORIA, our mission is to make every client look and feel their best.
                    We are dedicated to providing exceptional service and personalized beauty experiences
                    in a warm, welcoming environment.
                </p>
            </section>

            <section className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <i className="fas fa-hand-holding-heart"></i> {/* Icon for Senior Stylist */}
                        <h3>Seema</h3>
                        <p className="team-role">Esthetician</p>
                        <p className="team-bio">
                        Seema is a skilled Esthetician who excels in a range of skincare treatments including facials, waxing, and skincare. Her meticulous approach ensures each client leaves feeling rejuvenated and beautiful.
                        </p>
                    </div>
                    <div className="team-member">
                        <i className="fas fa-cut"></i> {/* Icon for Color Specialist */}
                        <h3>Salman</h3>
                        <p className="team-role">Hair Artist</p>
                        <p className="team-bio">
                        Salman is a skilled Hair Artist with a talent for creating innovative and stylish looks. His expertise includes precision cutting, advanced coloring techniques, and personalized hair design.
                        </p>
                    </div>
                    <div className="team-member">
                        <i className="fas fa-spray-can"></i> {/* Icon for Color Specialist */}
                        <h3>Sunitha</h3>
                        <p className="team-role">Cosmetologist</p>
                        <p className="team-bio">
                        Sunitha is a talented Cosmetologist with expertise in advanced skincare and beauty therapies. She is known for her bespoke beauty treatments that cater to individual client needs, enhancing their natural glow and confidence.
                        </p>
                    </div>
                </div>

            </section>

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

export default About;
