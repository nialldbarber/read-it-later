import { gql } from 'apollo-boost';

export const CREATE_CATEGORY = gql`
  mutation createCategory($category: String!) {
    createCategory(category: $category) {
      _id
      category
    }
  }
`;
