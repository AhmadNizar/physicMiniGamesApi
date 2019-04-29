const scoreModel = require('../models/score')

const createNewScore = async (data) => {
    try {
        const tempScore = new scoreModel({
            user_id: data.user_id,
            game_id: data.game_id,
            score: data.score
        })

        const newScoreData = await tempScore.save()

        return newScoreData
    } catch (error) {
        throw error
    }
}

const readScoreData = async () => {
    try {
        const scoresData = await scoreModel.find().populate('user_id').populate('game_id')

        return scoresData
    } catch (error) {
        throw error
    }
}

module.exports = {
    createNewScore,
    readScoreData
}