import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="title">About Me</h2>

                <div className="about-content">
                    <div className="about-story">
                        <h3>My Story</h3>
                        <p>
                            I'm a passionate frontend developer and tech enthusiast, currently exploring the world of
                            full-stack development. I enjoy building interactive, user-friendly web applications and
                            learning how to bring ideas to life through code.
                        </p>
                        <p>
                            My journey started with curiosity about how websites work, which later grew into a deep
                            interest in technologies like React, Flutter, Node.js, and MongoDB. Alongside development,
                            I also practice Data Structures and Algorithms to strengthen my problem-solving skills.
                        </p>
                        <p>
                            Beyond coding, I love experimenting with new tools, working on innovative project ideas,
                            and continuously challenging myself to improve. I believe in learning by doing, and every
                            project I create is a step forward in my growth as a developer.
                        </p>
                    </div>

                    <div className="about-cards">
                        <div className="card">
                            <h4>Education</h4>
                            <p className="subtitle">BTECH in Computer Engineering</p>
                            <p className="detail">Dwarkadas J. Sanghvi College of Engineering, 2025</p>
                        </div>
                        <div className="card">
                            <h4>Experience</h4>
                            <p className="subtitle">App Developer (Intern)</p>
                            <p className="detail">EV Homes Constructions Private Limited</p>
                            <p className="detail">Dec 2024 - Jun 2025</p>
                        </div>
                        <div className="card">
                            <h4>Location</h4>
                            <p className="detail">Vikhroli, Mumbai</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
