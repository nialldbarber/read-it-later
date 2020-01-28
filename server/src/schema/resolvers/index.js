import link from '~/schema/resolvers/link'
import category from '~/schema/resolvers/category'

const resolvers = {
  Query: {
    ...link.Query,
    ...category.Query,
  },
  Mutation: {
    ...link.Mutation,
    ...category.Mutation,
  },
}

export default resolvers
