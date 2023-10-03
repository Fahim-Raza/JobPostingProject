const User = require("../models/user/user")

const getAllUsers = async() => {
return User.find()
}

module.exports = {
    getAllUsers
}