import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '~/styles/components/card';
import { formatUrl, replaceDashWithSpace } from '~/utils/routing';

interface CardLinkProps {
  id: string; 
  category: string;
}

const CardLink: FC<CardLinkProps> = ({ id, category }) => (
  <Container>
    <Link to={`/${formatUrl(category)}/${id}`}>{replaceDashWithSpace(category)}</Link>
  </Container>
);

export default CardLink;
