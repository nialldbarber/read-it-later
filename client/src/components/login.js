import React from 'react';
import { Input } from '~/styles/components/modals';
import { Container } from '~/styles/components/button';

const Login = () => {
  return (
    <div>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Container>
        <button>Login</button>
      </Container>
    </div>
  );
};

export default Login;
