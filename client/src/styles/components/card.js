import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '~/styles/utils/media-queries';

export const CardLink = styled(motion.ul)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
`;

export const CardContainer = styled(motion.ul)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;

  ${media.greaterThan('phablet')`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${media.greaterThan('tablet')`
    grid-template-columns: repeat(3, 1fr);
  `};

  ${media.greaterThan('large')`
    grid-template-columns: repeat(4, 1fr);
  `};
`;

export const CardRow = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.theme.colours.darkerBlue};
  color: ${(props) => props.theme.colours.white};
  border-radius: 5px;
`;

export const Container = styled.li`
  background-color: ${(props) => props.theme.colours.darkerBlue};
  border-radius: 5px;
  border-bottom: 5px solid ${(props) => props.theme.colours.yellow};
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;

  a {
    display: inline-block;
    padding: 2rem;
    width: 100%;
    min-height: 170px;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;
