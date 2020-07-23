const link = require('~/schema/resolvers/link');
const category = require('~/schema/resolvers/category');

const resolvers = {
  Query: {
    ...link.Query,
    ...category.Query,
  },
  Mutation: {
    ...link.Mutation,
    ...category.Mutation,
  },
};

export default resolvers;
