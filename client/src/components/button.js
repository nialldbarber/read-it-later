import React from 'react';
import { Container } from '~/styles/components/button';

const Button = ({ text }) => {
  return (
    <Container>
      <button>{text}</button>
    </Container>
  );
};

export default Button;
