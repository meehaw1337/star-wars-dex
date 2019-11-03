const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const token = req.header('auth-token')

    if(!token) {
        res.status(401).send('Access denied')
    } else {
        try {
            const verifiedUser = jwt.verify(token, 'secret')
            req.user = verifiedUser
            next()
        } catch(err) {
            res.status(400).send('Access denied')
        }
    }
}