import {
  findOrCreateTeam,
  findOrCreateUser,
  updateOrCreateSession,
  updateOrCreateTeam
} from '../queries/click'
import { mergeClickData } from '../utils/mergeClickData'

export const getClicks = ({ query }, res) => {
  Promise.all([findOrCreateTeam(query.team), findOrCreateUser(query.session)])
    .then(data => res.status(200).json(mergeClickData(data)))
    .catch(() => res.status(400).end())
}

export const postClick = ({ body }, res) => {
  Promise.all([
    updateOrCreateTeam(body.team),
    updateOrCreateSession(body.session)
  ])
    .then(data => res.status(200).json(mergeClickData(data)))
    .catch(err => {
      res.status(400).end()
    })
}
