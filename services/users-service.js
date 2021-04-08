const usersModel = require("../db/users/users-model")

const createUser = (user) => {
    usersModel.create(user).then((actualUser) => {
        return actualUser
    })
}

const findUser = (user) => {
    usersModel.find({
                        username: user.username,
                        password: user.password
                    }).exec().then(actualUser => actualUser)
}

const findUserById = (user) => {

    usersModel.find({
                        _id: user._id
                    }).then((actualUser) => {
        console.log(actualUser)
        return actualUser

    })
}

module.exports = {
    createUser,
    findUser,
    findUserById
}