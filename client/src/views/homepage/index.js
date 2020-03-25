import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_CATEGORIES } from '~/views/homepage/schema';

const Homepage = () => {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Homepage</h1>
      <p>Where all the categories will be</p>
      <ul>
        {data.getAllCategories.map(({ _id, category }) => (
          <li key={_id}>
            <Link to={`/category/${_id}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
