import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({
  uri: 'http://localhost:7777/graphql/',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
