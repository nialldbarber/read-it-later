import styled from 'styled-components';

export const Container = styled.div`
  button {
    position: relative;
    font-size: 1rem;
    padding: 0.7rem 1rem;
    background-color: ${(props) => props.theme.colours.darkerBlue};
    color: ${(props) => props.theme.colours.yellow};
    border-radius: 5px;
    transition: 0.15s ease 0s;

    &:hover {
      background-color: ${(props) => props.theme.colours.yellow};
      color: ${(props) => props.theme.colours.darkerBlue};
    }
  }
`;
