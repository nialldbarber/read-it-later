import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ToastWrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.colours.yellow};
  color: ${(props) => props.theme.colours.darkerBlue};
  padding: 0 1rem;
  border-radius: 5px;
`;
