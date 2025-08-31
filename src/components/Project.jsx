import React from "react";
import "./Project.css";

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">

                    {/* Project 1 */}
                    <div className="project-card">
                        <img
                            src="https://picsum.photos/seed/project2/400/250"
                            alt="E-Commerce Website"
                            className="project-img"
                        />
                        <div className="project-content">
                            <h3 className="project-title">E-Commerce Website (GMART)</h3>
                            <p className="project-desc">
                                An e-commerce platform built with React and Node.js,
                                featuring real-time inventory management.
                            </p>
                            <div className="tags">
                                <span className="tag">React</span>
                                <span className="tag">Node.js</span>
                                <span className="tag">MongoDB</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card">
                        <img
                            src="https://picsum.photos/seed/project1/400/250"
                            alt="Weather App"
                            className="project-img"
                        />
                        <div className="project-content">
                            <h3 className="project-title">Weather App</h3>
                            <p className="project-desc">
                                A weather application with real-time updates built in Flutter.
                            </p>
                            <div className="tags">
                                <span className="tag">Flutter</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
