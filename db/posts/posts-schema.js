const mongoose = require("mongoose")
const postSchema = mongoose.Schema(
    {
        userId: String,
        recipeId: String,
        recipeImageURL: String,
        recipeName: String,
        description: String,
        rating: Number,
        comments: [],
        likes : Number,
    }, {collection: "posts"})

module.exports = postSchema