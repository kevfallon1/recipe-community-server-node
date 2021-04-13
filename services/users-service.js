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

    return usersModel.findOneAndReplace({_id:userId}, content,{new:true})
}

const updateUserDetails = (userId, content) => {
    // console.log(content)
    return usersModel.findOneAndReplace({_id:userId}, content,{new:true})
}

module.exports = {
    createUser,
    findUser,
    findUserById,
    updateUserSavedList,
    updateUserDetails
}