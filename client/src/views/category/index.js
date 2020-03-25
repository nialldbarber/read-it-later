import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_LINKS_BY_CATEGORY } from '~/views/category/schema';

const CategoryPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_LINKS_BY_CATEGORY, {
    variables: { _id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  console.log(data);

  const { category, link, text } = data.getLinksByCategory;

  return (
    <div>
      <h1>{category}</h1>
      <p>Where all the links for category will be</p>
    </div>
  );
};

export default CategoryPage;
