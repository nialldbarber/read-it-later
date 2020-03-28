import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  category: String,
  links: [
    {
      text: String,
      category: String,
      link: String,
    },
  ],
});

export const Category = model('Category', categorySchema);
