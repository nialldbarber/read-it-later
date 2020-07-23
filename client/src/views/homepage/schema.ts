import { gql } from 'apollo-boost';

export const GET_ALL_CATEGORIES = gql`
  {
    getAllCategories {
      _id
      category
      links {
        _id
        text
      }
    }
  }
`;
 