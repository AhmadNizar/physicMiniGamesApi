const gameModel = require('../models/game')

const createNewGame = async (data) => {
    try {
        const tempGame = new gameModel({
            title: data.title,
            description: data.description,
            video_url: data.video_url,
        })

        const newGame = await tempGame.save()

        return newGame
    } catch (error) {
        throw error
    }
}

const readGameData = async () => {
    try {
        const gamesData = await gameModel.find()

        return gamesData
    } catch (error) {
        throw error
    }
}
module.exports = {
    createNewGame,
    readGameData
}