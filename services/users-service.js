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

    return usersModel.findById(userID)
}

const updateUserSavedList = (userId, content) => {

    return usersModel.findByIdAndUpdate(userId, {$push: content})
}

module.exports = {
    createUser,
    findUser,
    findUserById,
    updateUserSavedList
}