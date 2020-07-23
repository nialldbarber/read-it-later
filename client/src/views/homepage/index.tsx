import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { motion } from 'framer-motion';
import useForm from '~/hooks/useForm';
import CardLink from '~/components/card-link';
import Loading from '~/components/loading';
import { Wrapper } from '~/styles/layouts/wrapper';
import { CardContainer } from '~/styles/components/card';
import { Input } from '~/styles/components/modals';
import { Header } from '~/styles/components/typography';
import { stagger, fadeInUp, pageVariants } from '~/utils/animation';
import { GET_ALL_CATEGORIES } from '~/views/homepage/schema';

interface Link {
  _id: string;
  text: string;
}

interface Category {
  _id: string;
  category: string;
  links: Link[];
}

const Homepage: FC = () => {
  const { values, handleChange } = useForm({ search: '' });
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const allCategories = data?.getAllCategories;

  const filteredResults = allCategories.filter((result: Category) => {
    return result
            .category
            .toLowerCase()
            .includes(values?.search?.toLowerCase());
  });

  const categories = filteredResults.length <= 0 ? allCategories : filteredResults;

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      <Wrapper>
        <div>
          <Header>[Users] Categories</Header>
          <Input
            type="text"
            name="search"
            className="home-input"
            value={values.search || ''}
            onChange={handleChange}
            placeholder="Search here..."
          />
        </div>
        <CardContainer variants={stagger}>
          {categories.map(({ _id, category }: Category) => (
            <motion.div
              dragConstraints={{ left: 0, right: 0 }}
              key={_id}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CardLink id={_id} category={category} />
            </motion.div>
          ))}
        </CardContainer>
      </Wrapper>
    </motion.div>
  );
};

export default Homepage;
