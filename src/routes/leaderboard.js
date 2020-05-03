import { Router } from 'express'
import { getLeaderboard } from '../controllers/leaderboard'

export const leaderboardRouter = Router()

leaderboardRouter.route('/leaderboard').get(getLeaderboard)
