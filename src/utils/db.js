import mongoose from 'mongoose'

export const connect = () => {
  return mongoose.connect(
    'mongodb+srv://anet:myPass@applifting-gveaf.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true
    }
  )
}
