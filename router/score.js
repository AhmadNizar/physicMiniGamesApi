const scoreCtrl = require('../controller/score')
const Router = require('express').Router()

Router.post('/', async(req, res) => {
    try {
        const newScoreData = await scoreCtrl.createNewScore(req.body)

        res.status(200).send(newScoreData)
    } catch (error) {
        res.status(500).send(error)
    }
})

Router.get('/', async(req, res) => {
    try {
        const scoresData = await scoreCtrl.readScoreData()

        res.status(200).send(scoresData)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = Router