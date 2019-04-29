const express = require('express')
const app = express()
const port = 3000
const database = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')


//list router
const userRouter = require('./router/user')
const gameRouter = require('./router/game')
const scoreRouter = require('./router/score')

database()

//cors is here
app.use(cors())

//body parser use is here

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//using router here
app.use('/users', userRouter)
app.use('/games', gameRouter)
app.use('/scores', scoreRouter)

app.get('/', (req, res) => {
    res.status(200).send('Belajar Docker')
})

app.listen(port, () => {
    console.log('Belajar docker denger ke 3000');
})