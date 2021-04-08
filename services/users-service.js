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
                    }).then((actualUser) => {
        return actualUser
    })
}
module.exports = {
    createUser,
    findUser
}