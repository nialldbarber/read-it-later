import React from 'react';
import SVG from 'react-inlinesvg';
import useLockBodyScroll from '~/hooks/useLockBodyScroll';
import { Exit } from '~/styles/components/modals';
import exit from '~/assets/exit.svg';

const Form = ({ title, submit, name, value, change, buttonText, closeModal }) => {
  useLockBodyScroll();

  return (
    <>
      <div className="outer" onClick={closeModal} />
      <div className="inner">
        <Exit>
          <SVG src={exit} alt="Exit" aria-label="Exit" onClick={closeModal} />
        </Exit>
        <h1>{title}</h1>
        <form onSubmit={submit} noValidate>
          <input type="text" name={name} value={value || ''} onChange={change} />
          <button disabled={value?.length ? false : true} className={value?.length ? '' : 'disabled'}>
            {buttonText}
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
