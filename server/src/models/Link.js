const { Schema, model } = require('mongoose');

const linkSchema = new Schema({
  text: String,
  category: String,
  link: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Link = model('Link', linkSchema);
