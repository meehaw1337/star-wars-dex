const express = require('express')
const mongoose = require('mongoose')
const verify = require('./middlewares/auth')

const heroesRoute = require('./routes/heroes')
const usersRoute = require('./routes/users')

const app = express()
app.use(express.json())

const PORT = 3001
const API_PATH = '/api'

// Routes
app.use(API_PATH + '/hero', verify, heroesRoute)
app.use(API_PATH + '/user', usersRoute)

// Database connection
mongoose.connect('mongodb://obiwan:kenobi@cluster0-shard-00-00-syyyg.mongodb.net:27017,cluster0-shard-00-01-syyyg.mongodb.net:27017,cluster0-shard-00-02-syyyg.mongodb.net:27017/starwarsdex_db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('Database connection established') })


app.listen(PORT, () => {
    console.log('App up and running, listening on port ' + PORT)
    console.log('Press CTRL+C to terminate the app')
})



