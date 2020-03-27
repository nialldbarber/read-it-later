import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { motion } from 'framer-motion';
import CardLink from '~/components/card-link';
import Loading from '~/components/loading';
import { Wrapper } from '~/styles/layouts/wrapper';
import { CardContainer } from '~/styles/components/card';
import { Header } from '~/styles/components/typography';
import { stagger, fadeInUp, pageVariants } from '~/utils/animation';
import { GET_ALL_CATEGORIES } from '~/views/homepage/schema';

const Homepage = () => {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      <Wrapper>
        <Header>Your Links</Header>
        <CardContainer variants={stagger}>
          {data?.getAllCategories.map(({ _id, category }) => (
            <motion.div key={_id} variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <CardLink id={_id} category={category} />
            </motion.div>
          ))}
        </CardContainer>
      </Wrapper>
    </motion.div>
  );
};

export default Homepage;
