import { Team } from '../models/team'
import { User } from '../models/user'

//The upsert option creates a new object in the database if it doesn't exist yet
export const findOrCreateTeam = async team => {
  return Team.findOneAndUpdate(
    { team },
    {},
    {
      upsert: true,
      new: true,
      runValidators: true,
      useFindAndModify: true,
      setDefaultsOnInsert: true
    }
  )
    .lean()
    .exec()
}

export const findOrCreateUser = async session => {
  return User.findOneAndUpdate(
    { session },
    {},
    {
      upsert: true,
      new: true,
      runValidators: true,
      useFindAndModify: true,
      setDefaultsOnInsert: true
    }
  )
    .lean()
    .exec()
}

export const updateOrCreateTeam = async team => {
  return Team.findOneAndUpdate(
    { team },
    { $inc: { clicks: 1 } },
    { upsert: true, new: true, runValidators: true, useFindAndModify: true }
  )
    .lean()
    .exec()
}

export const updateOrCreateSession = async session => {
  return User.findOneAndUpdate(
    { session },
    { $inc: { clicks: 1 } }, //Increments the number of clicks by 1
    { upsert: true, new: true, runValidators: true, useFindAndModify: true }
  )
    .lean()
    .exec()
}
