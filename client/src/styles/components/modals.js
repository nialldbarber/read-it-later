import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;

  .inner {
    position: fixed;
    top: 50%;
    left: 50%;
    background: black;
    transform: translate(-50%, -50%);
    padding: 1rem 2rem 3rem;
    min-width: 420px;
    display: grid;
    grid-template-rows: 30px 100px 1fr;
    border-radius: 4px;

    h1 {
      margin: 1rem 0 0;
    }

    form {
      width: 100%;
      display: flex;

      input {
        background: ${(props) => props.theme.colours.darkBlue};
        border-bottom: 1px solid ${(props) => props.theme.colours.yellow};
        width: 100%;
        font-size: 1rem;
        padding: 1rem;
        color: ${(props) => props.theme.colours.yellow};
      }

      button {
        width: 70px;
        background: ${(props) => props.theme.colours.yellow};
        color: ${(props) => props.theme.colours.darkBlue};
        font-size: 1rem;
      }
    }
  }
`;

export const Exit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    width: 20px;
    cursor: pointer;
  }
`;
