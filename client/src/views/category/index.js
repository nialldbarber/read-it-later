import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { motion } from 'framer-motion';
import { Wrapper } from '~/styles/layouts/wrapper';
import { CardLink } from '~/styles/components/card';
import { Header } from '~/styles/components/typography';
import Loading from '~/components/loading';
import { stagger, fadeInUp, pageVariants } from '~/utils/animation';
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

  return (
    <motion.div initial="initial" animate="animate" exit="exit" exit={{ opacity: 0 }} variants={pageVariants}>
      <Wrapper>
        <Header>{category}</Header>
        {links.length <= 0 ? (
          <p>No links! Care to add some?</p>
        ) : (
          <CardLink variants={stagger}>
            {links.map((el) => (
              <motion.div variants={fadeInUp}>
                <li>{el.text}</li>
              </motion.div>
            ))}
          </CardLink>
        )}
      </Wrapper>
    </motion.div>
  );
};

export default CategoryPage;
