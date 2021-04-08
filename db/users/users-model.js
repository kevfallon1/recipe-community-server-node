const usersSchema = require("./users-schema")
const mongoose = require("mongoose")
const usersModel = mongoose.model("userModel", usersSchema)

module.exports = usersModel