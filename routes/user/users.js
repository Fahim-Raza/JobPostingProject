const express = require('express')
const {create, all_users} = require('../../users/controller')
const router = express.Router()


router
    .route('/create')
    .post(create)

router
    .route('/users')
    .get(all_users)

module.exports = router