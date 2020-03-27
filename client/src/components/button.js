import React from 'react';
import { Container } from '~/styles/components/button';

const Button = ({ text, click }) => {
  return (
    <Container>
      <button onClick={click}>{text}</button>
    </Container>
  );
};

export default Button;
