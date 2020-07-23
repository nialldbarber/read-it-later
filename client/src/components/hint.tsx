import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface HintProps {
  message: string; 
  type: string; 
  visibility: boolean; 
  styleType: string;
}

const Hint: FC<HintProps> = ({ message, type, visibility, styleType }) => {
  let x = type === 'category' ? 120 : 140;

  const variants = {
    initial: { opacity: 0, y: 10, x },
    open: { opacity: 1, y: 0, x },
    closed: { opacity: 0, y: 10, x },
  };

  return (
    <motion.div 
      className={styleType} 
      variants={variants}
      animate={visibility ? 'open' : 'closed'} 
      initial="initial"
    >
      <p>{message}</p>
    </motion.div>
  );
};

export default Hint;
