import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { motion } from 'framer-motion';
import { Wrapper } from '~/styles/layouts/wrapper';
import { CardContainer } from '~/styles/components/card';
import { stagger, fadeInUp, pageVariants } from '~/utils/animation';
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

  const { category, links, text } = data.getLinksByCategory;

  return (
    <motion.div initial="initial" animate="animate" exit="exit" exit={{ opacity: 0 }} variants={pageVariants}>
      <Wrapper>
        <h1>{category}</h1>
        <p>Where all the links for category will be</p>
        <h2>Links</h2>
        <CardContainer variants={stagger}>
          {links.map((el) => (
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <li>{el.text}</li>
            </motion.div>
          ))}
        </CardContainer>
      </Wrapper>
    </motion.div>
  );
};

export default CategoryPage;
