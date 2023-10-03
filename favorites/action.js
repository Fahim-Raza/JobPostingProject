const Favorite = require("../models/favorite/favorite")

const createFavorite = async (data) => {
    return Favorite.create(data)
}

module.exports = {
    createFavorite
}