import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import CardLink from '~/components/card';
import { CardContainer } from '~/styles/components/card';
import { GET_ALL_CATEGORIES } from '~/views/homepage/schema';

const Homepage = () => {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Homepage</h1>
      <p>Where all the categories will be</p>
      <CardContainer>
        {data?.getAllCategories.map(({ _id, category }) => (
          <CardLink key={_id} id={_id} category={category} />
        ))}
      </CardContainer>
    </div>
  );
};

export default Homepage;
