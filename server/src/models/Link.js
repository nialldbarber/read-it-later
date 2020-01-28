import { Schema, model } from 'mongoose'

const linkSchema = new Schema({
  text: String,
  category: String,
})

export const Link = model('Link', linkSchema)
