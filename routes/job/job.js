const express = require('express')
const { create, all_jobs } = require('../../jobs/controller')
const router = express.Router()


router
    .route('/create')
    .post(create)

router
    .route('/jobs')
    .get(all_jobs)

module.exports = router