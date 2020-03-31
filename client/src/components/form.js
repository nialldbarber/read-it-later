import React from 'react';
import { motion } from 'framer-motion';
import SVG from 'react-inlinesvg';
import useLockBodyScroll from '~/hooks/useLockBodyScroll';
import { Exit } from '~/styles/components/modals';
import exit from '~/assets/exit.svg';

const variants = {
  visible: {
    scale: 1,
  },
  hidden: {
    scale: 0,
  },
  exit: {
    scale: 0,
  },
};

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

const Form = ({ title, submit, name, value, change, buttonText, closeModal }) => {
  useLockBodyScroll();

  return (
    <>
      <div className="outer" onClick={closeModal} />
      <motion.div
        className="inner"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        layoutTransition={spring}
      >
        <Exit>
          <SVG src={exit} alt="Exit" aria-label="Exit" onClick={closeModal} />
        </Exit>
        <h1>{title}</h1>
        <form onSubmit={submit} noValidate>
          <label>
            {name}
            <input type="text" name={name} value={value || ''} onChange={change} />
          </label>
          <button disabled={value?.length ? false : true} className={value?.length ? '' : 'disabled'}>
            {buttonText}
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default Form;
