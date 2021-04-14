const mongoose = require("mongoose")
const Schema = require("mongoose");
var generateObjectId = () =>  {
        var ObjectId = mongoose.Types.ObjectId
            return new ObjectId
}
const usersSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        username: String,
        password: String,
        savedRecipes: [],
        posts: [{_id:{type: Schema.ObjectId, default:generateObjectId}, description:{type: String}}],
        following: [],
        followers: [],
        description: String,
    }, {collection: "users"})

module.exports = usersSchema