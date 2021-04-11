const postsModel = require("../db/posts/posts-model")

const createPost = (post) => {
    return postsModel.create(post)
}

const findPostByUserId = (userId) => {
    return postsModel.find({
                               userId: userId
                           })
}

const findPostById = (postId) => {
    // var id = findUser(user).then((actualUser) => (actualUser[0]._doc._id))
    return postsModel.findById(postId)
}

module.exports = {
    createPost,
    findPostByUserId,
    findPostById
}