import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CategoryContext } from '~/state/context/category';
import { LinkContext } from '~/state/context/link';
import Button from '~/components/button';
import Logo from '~/components/logo';
import { Container, Header } from '~/styles/components/nav';

const Nav = () => {
  const { pathname } = useLocation();
  const { toggleCategoryModal } = useContext(CategoryContext);
  const { toggleLinkModal } = useContext(LinkContext);

  return (
    <Header>
      <Link to="/">
        <Container>
          <Logo />
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
