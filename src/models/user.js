import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  session: {
    type: String,
    required: true,
    trim: true,
    maxlength: 36
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

export const User = mongoose.model('user', userSchema)
