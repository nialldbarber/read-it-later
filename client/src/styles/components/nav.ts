import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0;

  ul {
    display: flex;

    li {
      margin: 0 1rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 70px;

  svg {
    width: 100%;
    height: auto;
  }
`;
