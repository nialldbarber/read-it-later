import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import Button from '~/components/button';
import { Container, Header } from '~/styles/components/nav';
import logo from '~/assets/logo.svg';

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <Header>
      <Link to="/">
        <Container>
          <SVG src={logo} alt="Logo" aria-label="Logo" />
        </Container>
      </Link>
      <ul>
        <li>
          <Button text="Create Category" />
        </li>
        {pathname === '/' ? (
          ''
        ) : (
          <li>
            <Button text="Add Link" />
          </li>
        )}
      </ul>
    </Header>
  );
};

export default Nav;
