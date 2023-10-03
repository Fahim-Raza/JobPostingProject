const Favorite = require("../models/favorite/favorite")

const getAllFavorites = async () => {
    return Favorite.find()
}

const checkIfTrue = async (jobId, userId) => {
    e = await getFavoriteById(jobId, userId)
    if(e===undefined){
        return false
    }

    if(e.isFavorite === true){
        const filter = {job_id: jobId}
        const update = {isFavorite: false}
        await Favorite.updateOne(filter, update, {new: true})
        return true
    }
    
    if(e.isFavorite === false){
        const filter = {job_id: jobId}
        const update = {isFavorite: true}
        await Favorite.updateOne(filter, update, {new: true})
        return true
    }
}

const getFavoriteById = async (jobId, userId) => {
    const existingFavorite = await Favorite.find({ job_id: jobId, user_id: userId })
    return existingFavorite[0]
}
module.exports = {
    getAllFavorites,
    getFavoriteById,
    checkIfTrue
}