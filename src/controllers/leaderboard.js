import { findLeaderboard } from '../queries/leaderboard'

export const getLeaderboard = (req, res) => {
  findLeaderboard()
    .then(data => {
      const orderedScores = [...data].map((score, index) => {
        return { order: index + 1, team: score.team, clicks: score.clicks }
      })

      res.status(200).json(orderedScores)
    })
    .catch(() => res.status(400).end())
}
