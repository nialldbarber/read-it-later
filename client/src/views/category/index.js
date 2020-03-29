import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { motion } from 'framer-motion';
import Loading from '~/components/loading';
import Card from '~/components/card';
import { Wrapper } from '~/styles/layouts/wrapper';
import { Header } from '~/styles/components/typography';
import { pageVariants } from '~/utils/animation';
import { GET_LINKS_BY_CATEGORY } from '~/views/category/schema';

const CategoryPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_LINKS_BY_CATEGORY, {
    variables: { _id: id },
  });

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  const { category, links } = data.getLinksByCategory;

  console.log(data);

  return (
    <motion.div initial="initial" animate="animate" exit="exit" exit={{ opacity: 0 }} variants={pageVariants}>
      <Wrapper>
        <Header>{category}</Header>
        {links.length <= 0 ? <p>No links! Care to add some?</p> : <Card link={links} />}
      </Wrapper>
    </motion.div>
  );
};

export default CategoryPage;
