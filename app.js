const express = require('express')
const mongoose = require('mongoose')
const Hero = require('./models/hero')

const app = express()
app.use(express.json())

const API_PATH = '/api'
const PORT = 3001


// Routes
app.get(API_PATH + '/hero/:id', (req, res) => {
    console.log('Request received: GET at ' + API_PATH + '/hero/' + req.params.id)

    res.send('Hero with id: ' + req.params.id + ' requested!')
})

app.post(API_PATH + '/hero/', (req, res) => {
    console.log('Request received: POST at ' + API_PATH + '/hero/, body: ', req.body)

    const hero = new Hero({
        name: req.body.name,
        origin: req.body.origin,
        affiliation: req.body.affiliation,
        description: req.body.description
    })

    hero.save().then(hero => {
        console.log('Hero: ' + hero.name + ' saved!')
        res.send(req.body)
    }).catch(err => {
        res.send({message: err})
    })
})


// Database connection
mongoose.connect('mongodb://obiwan:kenobi@cluster0-shard-00-00-syyyg.mongodb.net:27017,cluster0-shard-00-01-syyyg.mongodb.net:27017,cluster0-shard-00-02-syyyg.mongodb.net:27017/starwarsdex_db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('Database connection established') })


app.listen(PORT, () => {
    console.log('App up and running, listening on port ' + PORT + '. Press CTRL+C to terminate the app.')
})



