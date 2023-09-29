const express = require('express')
const create = require('../../jobs/controller')
const router =express.Router()


router
    .route('/create')
        .post(create)



module.exports =router