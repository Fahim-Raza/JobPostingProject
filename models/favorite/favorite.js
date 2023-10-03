const mongoose = require('mongoose')
const Types = mongoose

const favoriteSchema = mongoose.Schema({

    user_id: {
        //mongoose.types.objectid
        type: Types.ObjectId,
        ref: "User"

    },
    job_id: {
        //mongoose.types.objectid
        type: Types.ObjectId,
        ref: "Job"
    },
    isFavorite: {
        type: Boolean
    }

})
module.exports = mongoose.model("Favorite", favoriteSchema)