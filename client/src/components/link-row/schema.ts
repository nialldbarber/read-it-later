import { gql } from 'apollo-boost';

export const ARCHIVE_LINK = gql`
  mutation archiveLink($category: String!, $_id: ID!) {
    archiveLink(category: $category, _id: $_id) {
      _id
    }
  }
`;
