import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import socket from 'socket.io'
import { createServer } from 'http'
import { json, urlencoded } from 'body-parser'

import { connect } from './utils/db'
import { clickRouter } from './routes/click'
import { leaderboardRouter } from './routes/leaderboard'

const PORT = 3030
const app = express()
const server = createServer(app)

const io = socket(server)

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('tiny'))

app.use('/api/', clickRouter)
app.use('/api/', leaderboardRouter)

export const start = async () => {
  try {
    await connect()

    server.listen(PORT)
  } catch (e) {
    console.error(e)
  }
}

io.on('connection', socket => {
  //Listen for clicks from the client
  socket.on('click', (team, session) => {
    io.emit('click', team, session)
  })
})
