const router = require('express').Router()
const userCtrl = require('../controller/user')

router.post('/', async (req, res) => {
    try {
        const newUser = await userCtrl.createUser(req.body.username)

        res.status(200).send(newUser)
    } catch (error) {
        res.status(500).status(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const userData = await userCtrl.readUserData()

        res.status(200).send(userData)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router