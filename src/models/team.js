import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  team: {
    type: String,
    required: true,
    trim: true,
    maxlength: 80
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

export const Team = mongoose.model('team', teamSchema)
