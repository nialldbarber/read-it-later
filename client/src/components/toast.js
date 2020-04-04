import React from 'react';
import { motion } from 'framer-motion';
import { ToastWrapper } from '~/styles/components/toast';

const variants = {
  visible: {
    position: 'fixed',
    left: 'calc(100vw - 50%)',
    top: '10px',
  },
  hidden: {
    position: 'fixed',
    left: 'calc(100vw - 50%)',
    top: '-100px',
  },
  exit: {
    position: 'fixed',
    left: 'calc(100vw - 50%)',
    top: '-100px',
  },
};

const Toast = ({ children }) => (
  <ToastWrapper className="inner" initial="hidden" animate="visible" exit="exit" variants={variants}>
    <>{children}</>
  </ToastWrapper>
);

export default Toast;
