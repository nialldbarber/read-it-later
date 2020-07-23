const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const resolvers = require('~/schema/resolvers');

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
