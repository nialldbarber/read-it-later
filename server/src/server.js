import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import resolvers from '~/schema/resolvers';

(async function() {
  require('~/db');
  const app = express();
  const port = process.env.PORT || 7777;

  const server = new ApolloServer({
    typeDefs: importSchema('src/schema/typeDefs.graphql'),
    resolvers,
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  app.use(cors(), bodyParser.json());
  server.applyMiddleware({ app });

  app.listen(port, () => console.log(`🚀  Schema is ready at http://localhost:${port}${server.graphqlPath}`));
})();
