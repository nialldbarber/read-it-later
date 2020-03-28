import React, { createContext, useReducer } from 'react';
import { linkReducer } from '~/state/reducers/link';
import { TOGGLE_LINK_MODAL, CLOSE_LINK_MODAL } from '~/state/constants/link';

const initialState = {
  visible: false,
};

export const LinkContext = createContext(initialState);

export const LinkProvider = (props) => {
  const [state, dispatch] = useReducer(linkReducer, initialState);

  const toggleLinkModal = () => dispatch({ type: TOGGLE_LINK_MODAL });
  const closeLinkModal = () => dispatch({ type: CLOSE_LINK_MODAL });

  return <LinkContext.Provider value={{ visible: state.visible, toggleLinkModal, closeLinkModal }} {...props} />;
};
