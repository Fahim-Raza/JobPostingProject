const { createFavorite } = require("./action")
const { getAllFavorites, getFavoriteById, checkIfTrue } = require("./service")

const create = async (req, res) => {
    try {
        const { job_id, user_id, isFavorite } = req.body

        const favoriteExist = await checkIfTrue(job_id, user_id)
        // console.log(favoriteExist)
        if(favoriteExist === false){
            const data = { job_id, user_id, isFavorite }
        const favorite = await createFavorite(data)
        res.status(201).json({
            error: null,
            message: "Favorite created",
            data : {favorite_id: favorite._id}
            
        })
        }
        
    

      
    } catch (error) {
        console.log(error.message)
    }
}
const all_favorites = async (req, res) => {
    const favorite = await getAllFavorites()
    res.status(200).json({
        error: null,
        message: "Favorite fetched",
        data: favorite,


    })
}

module.exports = {
    all_favorites,
    create
}