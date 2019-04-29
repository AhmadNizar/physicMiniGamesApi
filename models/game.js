const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
    title: String,
    description: String,
    video_url: String,
})

module.exports = mongoose.model('Game', gameSchema, 'game_collections')