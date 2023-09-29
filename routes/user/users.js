const express = require('express')
const create = require('../../users/controller')
const router =express.Router()


router
    .route('/create')
        .post(create)



module.exports =router