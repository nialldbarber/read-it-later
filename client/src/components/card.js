import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '~/styles/components/card';

const CardLink = ({ id, category }) => (
  <Container>
    <Link to={`/category/${id}`}>{category}</Link>
  </Container>
);

export default CardLink;
