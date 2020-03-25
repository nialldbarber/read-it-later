import { Schema, model } from 'mongoose';

const linkSchema = new Schema({
  text: String,
  category: String,
  archived: Boolean,
  saved: Boolean,
});

export const Link = model('Link', linkSchema);
