import { Schema, model } from 'mongoose';

const linkSchema = new Schema({
  text: String,
  category: String,
  link: String,
});

export const Link = model('Link', linkSchema);
