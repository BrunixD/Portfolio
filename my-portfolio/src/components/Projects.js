import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css'; // Create this file

function Projects() {
  const projects = [
    {
      name: 'E-commerce Website',
      description: 'A full-stack e-commerce application with user authentication, product management, and payment integration.',
      skills: ['React', 'Node.js', 'Express', 'MongoDB'],
      level: 'Professional',
      image: 'https://via.placeholder.com/300x200', // Replace with your image
      link: '#', // Replace with your project link
    },
    {
      name: 'Simple Calculator',
      description: 'A simple calculator web application built using HTML, CSS, and JavaScript.',
      skills: ['HTML', 'CSS', 'JavaScript'],
      level: '1 Project',
      image: 'https://via.placeholder.com/300x200', // Replace with your image
      link: '#', // Replace with your project link
    },
  ];
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <motion.div
            className="project"
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="skills-used">
              {project.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;