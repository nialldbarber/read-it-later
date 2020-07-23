const { UserInputError } = require('apollo-server-express');
const { Category } = require('~/models/Category');

const category = {
  Query: {
    getAllCategories: async () => {
      try {
        const categories = await Category.find().sort({ createdAt: -1 });
        return categories;
      } catch (err) {
        throw new Error(err);
      }
    },
    getLinksByCategory: async (_, { _id }) => {
      try {
        const categories = await Category.findById(_id);
        return categories;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createCategory: async (_, { _id, category }) => {
      const checkCategoryExists = await Category.findOne({ category });

      if (checkCategoryExists) {
        throw new UserInputError('Category already exists!', {
          errors: {
            type: 'Category already exists',
          },
        });
      }

      const newCategory = new Category({
        _id,
        category,
      });

      await newCategory.save();
      return newCategory;
    },
  },
};

export default category;
