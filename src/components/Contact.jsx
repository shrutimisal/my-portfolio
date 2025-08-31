import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="form-wrapper">
                    {/* form */}
                    <form id="contact-form" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                            <span className="error-msg" id="name-error">
                                Please enter your name
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                            <span className="error-msg" id="email-error">
                                Please enter a valid email
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required />
                            <span className="error-msg" id="subject-error">
                                Please enter a subject
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                            <span className="error-msg" id="message-error">
                                Please enter your message
                            </span>
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>

                        <div id="form-message" className="form-response"></div>
                    </form>

                    <div className="direct-contact">
                        <h3>Or reach me directly</h3>
                        <div className="social-links">
                            <a
                                href="mailto:shrutimisal109@gmail.com"
                                className="contact-icon"
                            >
                                <FaEnvelope className="contact-icon" />
                            </a>
                            <a href="tel:+918850925935" className="contact-icon">
                                <FaPhone className="contact-icon"/>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shrutimisal"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-icon"
                            >
                                <FaLinkedin className="contact-icon"/>
                            </a>
                            <a
                                href="https://github.com/shrutimisal"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-icon"
                            >
                                <FaGithub className="contact-icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
