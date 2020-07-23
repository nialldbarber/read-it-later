import { gql } from 'apollo-boost';

export const GET_LINKS_BY_CATEGORY = gql`
  query getLinksByCategory($_id: ID!) {
    getLinksByCategory(_id: $_id) {
      _id
      category
      links {
        _id
        text
        link
      }
    }
  }
`;
