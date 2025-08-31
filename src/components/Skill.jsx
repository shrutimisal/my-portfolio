import React from "react";
import "./Skill.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiUikit } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div >
                <h2 className="section-title">Skills</h2>

                <div className="skills-wrapper">
                    {/* Left: Technical Skills */}
                    <div className="skills-block">
                        <h3 className="skills-heading">Technical Skills</h3>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <FaHtml5 className="skill-icon html" />
                                <span>HTML</span>
                            </div>
                            <div className="skill-card">
                                <FaCss3Alt className="skill-icon css" />
                                <span>CSS</span>
                            </div>
                            <div className="skill-card">
                                <FaJs className="skill-icon js" />
                                <span>JS</span>
                            </div>
                            <div className="skill-card">
                                <FaReact className="skill-icon react" />
                                <span>React.js</span>
                            </div>
                            <div className="skill-card">
                                <FaNodeJs className="skill-icon node" />
                                <span>Node.js</span>
                                <span className="beginner">(Beginner)</span>
                            </div>
                            <div className="skill-card">
                                <FaPython className="skill-icon python" />
                                <span>Python</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Other Skills + Tools */}
                    <div className="skills-block">
                        <h3 className="skills-heading">Other Skills</h3>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <SiUikit className="skill-icon ui" />
                                <span>UI Design</span>
                            </div>
                            <div className="skill-card">
                                <FaPeopleGroup className="skill-icon team" />
                                <span>Team Collaboration</span>
                            </div>
                        </div>

                        <div className="tools">
                            <h3 className="skills-heading">Tools & Technologies</h3>
                            <div className="skills-grid">
                                <div className="skill-card">
                                    <FaGitAlt className="skill-icon git" />
                                    <span>Git</span>
                                </div>
                                <div className="skill-card">
                                    <FaDatabase className="skill-icon db" />
                                    <span>MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
