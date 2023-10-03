const express = require('express')
const { create, all_favorites } = require('../../favorites/controller')
const router = express.Router()


router
    .route('/create')
        .post(create)


router
    .route('/favorites')
    .get(all_favorites)

module.exports = router