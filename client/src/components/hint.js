import React from 'react';
import { motion } from 'framer-motion';

const Hint = ({ message, visibility, styleType }) => {
  const variants = {
    initial: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 10 },
  };

  return (
    <motion.div className={styleType} variants={variants} animate={visibility ? 'open' : 'closed'} initial="initial">
      <p>{message}</p>
    </motion.div>
  );
};

export default Hint;
