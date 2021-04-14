const usersModel = require("../db/users/users-model")

const createUser = (user) => {
    return usersModel.create(user)
}

const findUser = (user) => {
    return usersModel.find({
                               username: user.username
                           }).select("-password")
}

const verifyUserCredentials = (user) => {
    return usersModel.find({
                               username: user.username,
                               password: user.password
                           }).select("-password")
}

const findUserById = (userID) => {

    return usersModel.findById(userID)
}

const getAllUsers = () => {
    return usersModel.find().select("-password")
}

const updateUserPost = (descId, desc) => {
    return usersModel.findOneAndUpdate({"posts._id":descId}, {$set: {"posts.$":desc}}, {new:true, "posts.$":1}).select("-password")
}
// const updateUserSavedList = (userId, content) => {
//
//     return usersModel.findOneAndReplace({_id: userId}, content, {new: true})
// }

const updateUserDetails = (userId, content) => {
    return usersModel.findById(userId).then((user) => {
        return usersModel.findOneAndReplace({_id: userId}, content, {new: true}).then((actualUser) => {
            return usersModel.findByIdAndUpdate(userId, {password: user.password}, {new: true}).select("-password")
        })

    })

}

module.exports = {
    createUser,
    findUser,
    findUserById,
    // updateUserSavedList,
    updateUserDetails,
    verifyUserCredentials,
    getAllUsers,
    updateUserPost
}