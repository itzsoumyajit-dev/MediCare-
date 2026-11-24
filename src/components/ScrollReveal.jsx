import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.7, 
  className = "",
  style = {}
}) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        filter: "blur(12px)",
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0
      }}
      viewport={{ once: true, amount: 0.15, margin: "50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Ultra-smooth Apple-like easing curve
      }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
