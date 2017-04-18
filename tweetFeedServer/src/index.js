import express from 'express'
import http from 'http'
import socket from 'socket.io'
import twitter from 'twitter'
import twitterConfig from './secret/twitter'

const app = express()
const server = http.Server(app)
const io = socket(server)
const tweets = new twitter(twitterConfig.config)

const port = process.env.PORT || 3000

server.listen(port)

io.on('connection', (socket) => {
  console.log(`User connected. Socket ID: ${ socket.id }`)

  socket.on('disconnect', () => {
    console.log(`User disconnected. Socket ID: ${ socket.id }`);
  })
})

tweets.stream('statuses/filter', { track: 'pokemon', language: 'en' }, (stream) => {
  stream.on('data', (data) => {
    io.sockets.emit('tweet', data)
    console.log(data.text)
  })
})
