const userModel = require('../models/user')

const createUser = async (data) => {
    try {
        const tempUser = new userModel({
            username: data
        })

        const newUser = await tempUser.save()

        return newUser
    } catch (error) {
        throw error
    }
}

const readUserData = async () => {
    try {
        const userData = await userModel.find()

        return userData
    } catch (error) {
        throw error
    }
}
module.exports = {
    createUser,
    readUserData
}