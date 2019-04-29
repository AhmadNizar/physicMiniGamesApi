const mongoose = require('mongoose')

const dbServer = 'localhost:27017'
const dbName = 'phyLab'

const database = () => {
    mongoose.connect(`mongodb://${dbServer}/${dbName}`)
    .then(() => {
        console.log('connect to database success');
    })
    .catch((e) => {
        console.error('something error guys', e);
    })
}

module.exports = database