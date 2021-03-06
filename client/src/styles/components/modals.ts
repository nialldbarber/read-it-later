import styled from 'styled-components';

export const Modal = styled.div`
  .outer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 5;
  }

  .inner {
    position: fixed;
    top: 32%;
    left: 32%;
    display: grid;
    grid-template-rows: 30px 60px 1fr;
    background: ${(props) => props.theme.colours.darkBlue};
    box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
    padding: 1rem;
    min-width: 470px;
    border-radius: 4px;
    z-index: 6;

    h1 {
      font-size: 1.5rem;
      font-weight: 300;
      margin: 1rem 0 0;
      padding: 0 2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1rem 2rem 2rem;

      label {
        font-size: 1.125rem;
        text-transform: capitalize;
      }

      .button-wrapper {
        position: relative;
        z-index: 6;

        /* display: flex;
        align-items: center;
        justify-content: center; */

        .button-hint {
          position: absolute;
          bottom: 4rem;
          transform: translateX(-50%);
          background-color: ${(props) => props.theme.colours.darkerBlue};
          border-radius: 5px;

          &:after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-width: 5px;
            border-style: solid;
            border-color: ${(props) => props.theme.colours.darkerBlue} transparent transparent transparent;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
          }

          p {
            margin: 0;
            padding: 0.8rem;
            color: ${(props) => props.theme.colours.yellow};
          }
        }

        button {
          position: relative;
          background: ${(props) => props.theme.colours.yellow};
          color: ${(props) => props.theme.colours.darkBlue};
          font-size: 1.125rem;
          margin-top: 1.5rem;
          padding: 1rem;
          border-radius: 4px;
          width: 100%;
          transition: 0.2s ease;

          &:hover {
            background: ${(props) => props.theme.colours.darkYellow};
          }

          &.disabled {
            z-index: -1;

            &:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              background-color: rgba(0, 0, 0, 0.4);
              cursor: not-allowed;
            }
          }
        }
      }
    }
  }
`;

export const Input = styled.input`
  background: ${(props) => props.theme.colours.darkBlue};
  border: 1px solid ${(props) => props.theme.colours.yellow};
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.colours.yellow};
  transition: 0.2s ease;

  &:focus {
    background: ${(props) => props.theme.colours.darkerBlue};
  }

  &.home-input {
    margin-bottom: 1rem;
  }
`;

export const Exit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 0.5rem;

  svg {
    width: 18px;
    cursor: pointer;
  }
`;

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 7;
`;
