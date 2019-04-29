const router = require('express').Router()
const gameCtrl = require('../controller/game')

router.post('/', async (req, res) => {
    try {
        const newGame = await gameCtrl.createNewGame(req.body)

        res.status(200).send(newGame)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const gamesData = await gameCtrl.readGameData()

        res.status(200).send(gamesData)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router