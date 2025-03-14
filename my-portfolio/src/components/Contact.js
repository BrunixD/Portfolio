import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contact</h2>
      <p>Email: bruno.carvalho@example.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/brunocarvalho" target="_blank" rel="noopener noreferrer">linkedin.com/in/brunocarvalho</a></p>
      <p>GitHub: <a href="https://github.com/brunocarvalho" target="_blank" rel="noopener noreferrer">github.com/brunocarvalho</a></p>
    </motion.section>
  );
}

export default Contact;