import produce from 'immer';
import { TOGGLE_CATEGORY_MODAL, CLOSE_CATEGORY_MODAL } from '~/state/constants/category';

export const categoryReducer = produce((draft, action) => {
  switch (action.type) {
    case TOGGLE_CATEGORY_MODAL:
      draft.visible = !draft.visible;
      return;
    case CLOSE_CATEGORY_MODAL:
      draft.visible = false;
      return;
    default:
      return draft;
  }
});
