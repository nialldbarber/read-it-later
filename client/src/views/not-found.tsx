import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '~/components/button';
import { fadeInUp, pageVariants } from '~/utils/animation';
import { Wrapper } from '~/styles/layouts/wrapper';

const NotFound: FC = () => {
  const { push } = useHistory();

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      <Wrapper>
        <h1 variants={fadeInUp}>Page not Found!</h1>
        <Button text="Return Home" click={() => push('/')} />
      </Wrapper>
    </motion.div>
  );
};

export default NotFound;
