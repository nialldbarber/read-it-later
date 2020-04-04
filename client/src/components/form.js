import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SVG from 'react-inlinesvg';
import useLockBodyScroll from '~/hooks/useLockBodyScroll';
import Hint from '~/components/hint';
import { Exit, ModalWrapper, Input } from '~/styles/components/modals';
import exit from '~/assets/exit.svg';
import { useEffect } from 'react';

const variants = {
  visible: {
    scale: 1,
  },
  hidden: {
    scale: 0,
  },
  exit: {
    scale: 10,
  },
};

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

const Form = ({ title, submit, name, value, change, buttonText, closeModal, reset }) => {
  const [visible, setVisible] = useState(false);

  useLockBodyScroll();

  const handleHint = () => {
    if (value?.length) setVisible(false);
    else {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="outer" onClick={closeModal} />
      <ModalWrapper>
        <motion.div
          className="inner"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          layoutTransition={spring}
        >
          <Exit>
            <SVG
              src={exit}
              alt="Exit"
              aria-label="Exit"
              onClick={() => {
                closeModal();
                reset();
              }}
            />
          </Exit>
          <h1>{title}</h1>
          <form onSubmit={submit} noValidate>
            <label>
              {name}
              <Input type="text" name={name} value={value || ''} onChange={change} />
            </label>
            <div className="button-wrapper" onClick={handleHint}>
              <Hint message={`Add a ${name}`} type={name} styleType="button-hint" visibility={visible} />
              <button disabled={value?.length ? false : true} className={value?.length ? '' : 'disabled'}>
                {buttonText}
              </button>
            </div>
          </form>
        </motion.div>
      </ModalWrapper>
    </>
  );
};

export default Form;
