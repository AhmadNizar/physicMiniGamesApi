const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    game_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Game'
    },
    score: Number
})

module.exports = mongoose.model('Score', scoreSchema, 'score_collections')