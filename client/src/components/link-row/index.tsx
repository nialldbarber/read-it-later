import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import Checkbox from '~/components/checkbox';
import { CardRow } from '~/styles/components/card';
import { CheckContainer } from '~/styles/components/checkbox';
import { fadeInUp } from '~/utils/animation';
import { getCategoryName, getCategoryId } from '~/utils/routing';
import { ARCHIVE_LINK } from '~/components/link-row/schema';
import { GET_LINKS_BY_CATEGORY } from '~/views/category/schema';

interface LinkRowProps {
  id: string; 
  link: string; 
  text: string;
}

const LinkRow: FC<LinkRowProps> = ({ id, link, text }) => {
  const { pathname } = useLocation();
  const [archiveLink] = useMutation(ARCHIVE_LINK, {
    onError(err) {
      console.log(err.graphQLErrors[0]);
    },
    variables: { category: getCategoryName(pathname), _id: id },
    refetchQueries: [{ query: GET_LINKS_BY_CATEGORY, variables: { _id: getCategoryId(pathname) } }],
  });

  return (
    <CardRow variants={fadeInUp}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <span>{text}</span>
      </a>
      <CheckContainer>
        <Checkbox check={archiveLink} />
      </CheckContainer>
    </CardRow>
  );
};

export default LinkRow;
