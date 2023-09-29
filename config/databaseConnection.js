const mongoose = require('mongoose')
const { MONGODB_URI } = require('./environment')

const connection = async () => {
    await mongoose.connect(MONGODB_URI,)
    return true
}

module.exports= connection

