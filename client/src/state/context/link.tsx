import React, { createContext, useReducer } from 'react';
import { linkReducer } from '~/state/reducers/link';
import { TOGGLE_LINK_MODAL, CLOSE_LINK_MODAL } from '~/state/constants/link';

interface State {
  visible: boolean;
}

const initialState: State = { visible: false };

const LinkContext = createContext<any>(initialState);

const LinkProvider = (props: any) => {
  const [state, dispatch] = useReducer(linkReducer, initialState);

  const toggleLinkModal = () => dispatch({ type: TOGGLE_LINK_MODAL });
  const closeLinkModal = () => dispatch({ type: CLOSE_LINK_MODAL });

  return (
    <LinkContext.Provider 
      value={{ 
        visible: state.visible, 
        toggleLinkModal, 
        closeLinkModal 
      }} {...props} 
    />
  );
};

export { LinkContext, LinkProvider };
