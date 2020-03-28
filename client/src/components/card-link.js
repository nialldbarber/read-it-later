import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '~/styles/components/card';
import { formatUrl } from '~/utils/routing';

const CardLink = ({ id, category }) => (
  <Container>
    <Link to={`/${formatUrl(category)}/${id}`}>{category}</Link>
  </Container>
);

export default CardLink;
