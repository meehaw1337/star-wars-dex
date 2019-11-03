const router = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

router.post('/register', (req, res) => {
    console.log(new Date().toLocaleString() + '  Request received: POST at /user/register')

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        // TOOD: hash password
        password: req.body.password
    })

    user.save((err, result) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.send('User ' + result.username + ' registered')
        }
    })
})

router.post('/login', (req, res) => {
    console.log(new Date().toLocaleString() + '  Request received: POST at /user/login')

    User.findOne({ username: req.body.username }, (err, result) => {
        if(err) {
            res.status(400).send('Invalid username or password')
        } else {
            if(result.password === req.body.password) {
                const token = jwt.sign({_id: result._id}, 'secret')
                res.header('auth-token', token).send('User ' + result.username + ' logged in')
            } else {
                res.status(400).send('Invalid username or password')
            }
        }
    })
})

module.exports = router