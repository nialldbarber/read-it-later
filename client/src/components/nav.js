import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '~/components/button';

const Nav = () => {
  const location = useLocation();

  console.log(location);

  return (
    <header>
      <Link to="/">
        <p>Read it Later</p>
      </Link>
      <ul>
        <li>
          <Button text="Create Category" />
        </li>
        <li>
          <Button text="Add Link" />
        </li>
      </ul>
    </header>
  );
};

export default Nav;
