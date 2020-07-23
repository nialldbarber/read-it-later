import React, { FC } from 'react';
import LinkRow from '~/components/link-row';
import { CardLink } from '~/styles/components/card';
import { stagger } from '~/utils/animation';
import { Props, Links } from '~/components/card/types';

const Card: FC<Props> = ({ link }) => (
  <CardLink variants={stagger}>
    {link.map(({ _id, text, link }: Links) => (
      <LinkRow key={_id} id={_id} link={link} text={text} />
    ))}
  </CardLink>
);

export default Card;
