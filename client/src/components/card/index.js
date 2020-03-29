import React from 'react';
import LinkRow from '~/components/link-row';
import { CardLink } from '~/styles/components/card';
import { stagger } from '~/utils/animation';

const Card = ({ link }) => {
  return (
    <CardLink variants={stagger}>
      {link.map(({ _id, text, link }) => (
        <LinkRow key={_id} id={_id} link={link} text={text} />
      ))}
    </CardLink>
  );
};

export default Card;
