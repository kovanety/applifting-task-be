import { Router } from 'express'
import { getClicks, postClick } from '../controllers/click'

export const clickRouter = Router()

clickRouter
  .route('/klik')
  .get(getClicks)
  .post(postClick)
