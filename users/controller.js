const User = require("../models/user/user")

const create = (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body
        const data = { email, password, firstName, lastName }
        const user = User.create(data)
        if (!user) {
            res.status(400).json({
                error: error,
                message: "user not created"
            })
        }
        res.status(201).json({
            error: null,
            message: "user created"
        })
    }
    catch (error) {
        res.status(400).json({
            error: error,
            message: "user not created"
        })


    }
}
module.exports = create