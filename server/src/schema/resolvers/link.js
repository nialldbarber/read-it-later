import { UserInputError } from 'apollo-server-express'
import { Link } from '~/models/Link'
import { Category } from '~/models/Category'

const link = {
  Query: {
    getAllLinks: async () => {
      try {
        const links = await Link.find().sort({ createdAt: -1 })
        return links
      } catch (err) {
        throw new Error(err)
      }
    },
    getLinksByCategory: async (_, { _id }) => {
      try {
        const link = await Link.findById(_id)
        return link
      } catch (err) {
        throw new Error(err)
      }
    },
  },
  Mutation: {
    createLink: async (_, { _id, text, category }) => {
      // GET ID
      const currentCategory = await Category.find({ category })
      const categoryGetId = currentCategory.map((el) => el._id.toString())
      const cat = await Category.findById(categoryGetId)

      if (currentCategory.length > 0) {
        cat.links.unshift({
          _id,
          text,
          category,
        })

        await cat.save()
        return cat
      } else {
        throw new UserInputError('Store not found')
      }
    },
  },
}

export default link
