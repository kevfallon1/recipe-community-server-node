const postsSchema = require("./posts-schema")
const mongoose = require("mongoose")
const postsModel = mongoose.model("postsModel", postsSchema)

module.exports = postsModel