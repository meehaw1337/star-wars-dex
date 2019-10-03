const mongoose = require('mongoose')

const heroSchema = mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true
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