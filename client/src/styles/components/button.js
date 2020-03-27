import styled from 'styled-components';

export const Container = styled.div`
  button {
    font-size: 1rem;
    padding: 7px 12px 5px;
    background-color: ${(props) => props.theme.colours.darkerBlue};
    color: ${(props) => props.theme.colours.yellow};
    border-radius: 5px;
  }
`;
