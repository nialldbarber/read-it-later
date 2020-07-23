import React, { FC } from 'react';
import { Container } from '~/styles/components/button';
import { Props } from '~/components/button/types';

const Button: FC<Props> = ({ text, click }) => (
  <Container>
    <button onClick={click}>{text}</button>
  </Container>
);

export default Button;
