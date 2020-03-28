import React from 'react';
import SVG from 'react-inlinesvg';
import { Exit } from '~/styles/components/modals';
import exit from '~/assets/exit.svg';

const Form = ({ title, submit, name, value, change, buttonText, closeModal }) => (
  <div className="inner">
    <Exit>
      <SVG src={exit} alt="Exit" aria-label="Exit" onClick={closeModal} />
    </Exit>
    <h1>{title}</h1>
    <form onSubmit={submit} noValidate>
      <input type="text" name={name} value={value || ''} onChange={change} />
      <button>{buttonText}</button>
    </form>
  </div>
);

export default Form;
