const router = require('express').Router()
const Hero = require('../models/hero')


router.get('/all', (req, res) => {
    console.log(new Date().toLocaleString() + '  Request received: GET at /hero/all')

    Hero.find({}, (err, heroes) => {
        if(err) {
            res.status(400).send({error: err})
        } else {
            res.send(heroes)
        }
    })
})

router.get('/:id', (req, res) => {
    console.log(new Date().toLocaleString() + '  Request received: GET at /hero/' + req.params.id)

    Hero.findById(req.params.id, (err, hero) => {
        if(err) {
            res.status(400).send({error: err})
        } else {
            res.send(hero)
        }
    })
})

router.post('/', (req, res) => {
    console.log(new Date().toLocaleString() + '  Request received: POST at /hero/, body: ', req.body)

    const hero = new Hero({
        name: req.body.name,
        origin: req.body.origin,
        affiliation: req.body.affiliation,
        description: req.body.description
    })

    hero.save((err, result) => {
        if(err) {
            res.status(400).send({error: err})
        } else {
            res.send(result._id)
        }
    })
})

module.exports = router


