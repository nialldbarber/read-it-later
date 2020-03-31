import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { CategoryContext } from '~/state/context/category';
import { LinkContext } from '~/state/context/link';
import Button from '~/components/button';
import { Container, Header } from '~/styles/components/nav';
import logo from '~/assets/logo.svg';

const Nav = () => {
  const { pathname } = useLocation();
  const { toggleCategoryModal } = useContext(CategoryContext);
  const { toggleLinkModal } = useContext(LinkContext);

  return (
    <Header>
      <Link to="/">
        <Container>
          <SVG src={logo} alt="Logo" aria-label="Logo" />
        </Container>
      </Link>
      <ul>
        <li>
          <Button text="Create Category" click={toggleCategoryModal} />
        </li>
        {pathname === '/' ? (
          ''
        ) : (
          <li>
            <Button text="Add Link" click={toggleLinkModal} />
          </li>
        )}
      </ul>
    </Header>
  );
};

export default Nav;
