const mongoose = require('mongoose')

const heroSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    origin: {
        type: String
    },
    affiliation: {
        type: String
    },
    rank: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('heroes', heroSchema)