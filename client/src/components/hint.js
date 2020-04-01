import React from 'react';
import { motion } from 'framer-motion';

const Hint = ({ message, type, visibility, styleType }) => {
  let x = type === 'category' ? 120 : 140;

  const variants = {
    initial: { opacity: 0, y: 10, x },
    open: { opacity: 1, y: 0, x },
    closed: { opacity: 0, y: 10, x },
  };

  return (
    <motion.div className={styleType} variants={variants} animate={visibility ? 'open' : 'closed'} initial="initial">
      <p>{message}</p>
    </motion.div>
  );
};

export default Hint;
