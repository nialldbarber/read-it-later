import { gql } from 'apollo-boost';

export const CREATE_LINK = gql`
  mutation createLink($link: String!, $category: String!) {
    createLink(link: $link, category: $category) {
      _id
      text
      link
    }
  }
`;
