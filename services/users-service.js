const usersModel = require("../db/users/users-model")

const createUser = (user) => {
    return usersModel.create(user)
}

const findUser = (user) => {
    return usersModel.find({
                        username: user.username
                    }).select("-password")
}

const findUserById = (userID) => {
    // var id = findUser(user).then((actualUser) => (actualUser[0]._doc._id))
    return usersModel.findById(userID)
}

module.exports = {
    createUser,
    findUser,
    findUserById
}