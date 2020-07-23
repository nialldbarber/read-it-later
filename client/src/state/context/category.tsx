import React, { createContext, useReducer } from 'react';
import { categoryReducer } from '~/state/reducers/category';
import { TOGGLE_CATEGORY_MODAL, CLOSE_CATEGORY_MODAL } from '~/state/constants/category';

interface ICategory {
  visible: boolean;
}

const initialState: ICategory = { visible: false };

const CategoryContext = createContext<any>(initialState);

const CategoryProvider = (props: any) => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  const toggleCategoryModal = () => dispatch({ type: TOGGLE_CATEGORY_MODAL });
  const closeCategoryModal = () => dispatch({ type: CLOSE_CATEGORY_MODAL });

  return (
    <CategoryContext.Provider 
      value={{ 
        visible: state.visible, 
        toggleCategoryModal, 
        closeCategoryModal 
      }} {...props} 
    />
  );
};

export { CategoryContext, CategoryProvider };
