import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Bruno Carvalho</h1>
      <p>Software Developer | Loves Programming, Challenges, and Learning</p>
    </motion.section>
  );
}

export default Hero;