import { Team } from '../models/team'

export const findLeaderboard = async () => {
  return Team.find({})
    .sort({ clicks: -1 }) //Sorts the result by the number of clicks
    .lean()
    .exec()
}
