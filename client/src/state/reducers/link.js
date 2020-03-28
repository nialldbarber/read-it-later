import produce from 'immer';
import { TOGGLE_LINK_MODAL, CLOSE_LINK_MODAL } from '~/state/constants/link';

export const linkReducer = produce((draft, action) => {
  switch (action.type) {
    case TOGGLE_LINK_MODAL:
      draft.visible = !draft.visible;
      return;
    case CLOSE_LINK_MODAL:
      draft.visible = false;
      return;
    default:
      return draft;
  }
});
