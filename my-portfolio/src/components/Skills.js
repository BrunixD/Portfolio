import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css'; // Create this file

function Skills() {
  const skills = [
    { name: 'HTML/CSS', level: 95, label: 'Expert' },
    { name: 'JavaScript', level: 90, label: 'Expert' },
    { name: 'React', level: 85, label: 'Professional' },
    { name: 'Node.js', level: 75, label: 'Professional' },
    { name: 'Python', level: 60, label: '2+ Projects' },
    { name: 'C++', level: 40, label: '1 Project' },
    { name: 'Git', level: 80, label: 'Professional' },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <motion.div
                className="skill-level"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <span className="skill-level-label">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;