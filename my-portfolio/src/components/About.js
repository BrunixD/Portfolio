import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      className="about"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
    >
      <h2>About Me</h2>
      <p>
        Easy-going Software Developer with a passion for creating innovative
        solutions. I thrive on challenges and am always eager to learn new
        technologies. I work effectively in both team environments and
        independently.
      </p>
    </motion.section>
  );
}

export default About;