express = require 'express'
fs = require 'fs'

qrcode = require 'qrcode'


feeds = {}

delay = (ms, func) -> setTimeout func, ms
interval = (ms, func) -> setInterval func, ms

qrcodes = {}

express = require 'express'
app = express()

app.use express.static('public')
app.use express.bodyParser()
app.use express.methodOverride()

getQR = (id, text, cb) ->
  if qrcodes[id]
    cb qrcodes[id]
  else
    qrcode.save "codes/#{id}.png", text, {}, (error, written) ->
      fs.readFile "codes/#{id}.png", (err, data) ->
        qrcodes[id] = data
        cb qrcodes[id]

app.get '/:apikey/qrcode', (req, res, next) ->
  getQR req.params.apikey, "http://localhost:8090/remote/#{req.params.apikey}", (data) ->
    res.end data

app.get '/remote/:apikey', (req, res) ->
  res.end 'up down left right select'

process.on 'uncaughtException', (err) ->
  console.log 'Uncaught exception:'
  console.log err
  console.log err.stack

app.listen 8090
console.log 'Listening on port 8090'
