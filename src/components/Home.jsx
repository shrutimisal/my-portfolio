import React, { useState } from "react";
import "./Home.css";
import profileImg from "../images/design2.png";
import heartGif from "../images/heart.gif";
import About from "./About";
import Projects from "./Project";
import Skills from "./Skill";
import Contact from "./Contact";
import { FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
    const [menuOpen , setMenuOpen] = useState(false);
    return (
        <div>
            <section id="home" className="home">
                {/* Navbar */}
                <nav className="navbar">
                    <div className="nav-container">
                        <div className="logo">Shruti Misal</div>

                        {/* Desktop Menu */}
                        <div className="nav-links">
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="#skills">Skills</a>
                            <a href="#contact">Contact</a>
                        </div>

                        {/* Mobile Menu Button */}
                        {/* <button className="menu-btn">
                            <i className="fas fa-bars"></i>
                        </button> */}
                        <button
                            className="menu-btn"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    {/* Mobile Dropdown Menu */}
                    {menuOpen && (
                        <div className="mobile-menu">
                            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                        </div>
                    )}
                </nav>

                {/* Home Section */}
                <div className="home-container">
                    <div className="home-left">
                        <p className="intro">Welcome to my Portfolio</p>
                        <h1>
                            Hi, I'm <span className="highlight">Shruti Misal</span>
                        </h1>
                        <h2>Wanna be Full Stack Developer</h2>

                        <div className="social-links">
                            <a href="https://github.com/shrutimisal" target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/shrutimisal" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <div className="home-center">
                        <img src={profileImg} alt="Profile" className="profile-img" />
                    </div>

                    <div className="home-right">
                        <p>
                            I'm on my journey for becoming a better developer, excited to grow and take on new challenges.
                        </p>
                        <div className="buttons">
                            <a href="#projects" className="btn primary">View My Work</a>
                            <a href="#contact" className="btn secondary">Get In Touch</a>
                        </div>
                    </div>
                </div>

            </section>
            <About />
            <Projects />
            <Skills />
            <Contact />

            <footer className="footer">
                <div className="footer-container">
                    <p className="footer-date">August 2025</p>
                    <p className="footer-text">
                        Built with{" "}
                        <img
                            src={heartGif}
                            alt="Animated Icon"
                            className="footer-icon"
                        />{" "}
                        by Shruti Sanjay Misal.
                    </p>
                </div>
            </footer>
        </div>

    );
};

export default Home;
