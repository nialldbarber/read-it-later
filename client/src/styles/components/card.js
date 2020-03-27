import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

export const Container = styled.li`
  background-color: ${(props) => props.theme.colours.darkerBlue};

  a {
    padding: 2rem;
    display: inline-block;
    width: 100%;
  }
`;
