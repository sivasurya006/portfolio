import React from 'react';
import '../styles/style.css';
import { FaEnvelope, FaPhoneAlt, FaIdBadge, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
    const [contactRef, isContactVisible] = useScrollAnimation(0.5);

    return (
        <div className="contact-page-container" ref={contactRef}>
            <section id="contact" className="screen-container contact-section">
                <h2 className={`screen-header fade-in-up ${isContactVisible ? 'animate' : ''}`}>Happy to learn and connect</h2>
                <div className="contact-cards-container">
                    <div className={`contact-card fade-in-left ${isContactVisible ? 'animate' : ''}`} style={{ animationDelay: isContactVisible ? '0.2s' : '0s' }}>
                        <FaEnvelope className="contact-icon" size={30} />
                        <h3>Email</h3>
                        <a href="mailto:sivasurya.mg@zohocorp.com">sivasurya.mg@zohocorp.com</a>
                    </div>
                    {/* <div classN
or

HTML
￼
￼
￼
￼
<p>© 2026 Siva Surya. All rights reserved.</p>
✔ Clean
✔ Professionalame="contact-card">
                        <FaPhoneAlt className="contact-icon" size={30} />
                        <h3>Mobile</h3>
                        <a href="tel:9344790269">9344790269</a>
                    </div> */}
                    <div className={`contact-card fade-in-right ${isContactVisible ? 'animate' : ''}`} style={{ animationDelay: isContactVisible ? '0.4s' : '0s' }}>
                        <FaIdBadge className="contact-icon" size={30} />
                        <h3>Employee ID</h3>
                        <p>zsttk-432</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className={`footer-content fade-in-up ${isContactVisible ? 'animate' : ''}`}>
                    <div className="footer-socials">
                        <a href="https://github.com/sivasurya006" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/sivasurya-m-69619228a/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Sivasurya Murugaraj. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
