const Job = require("../models/job/job")
const {getAllJobs } = require("./service")

const create = async(req, res) => {
    try {
        const { job_type, salary, description, user_id } = req.body
        const data = { job_type, salary, description, user_id }
        const job =await Job.create(data)
        updatedUser(user_id, job._id)
        // const updatedUser = await user.findByIdAndUpdate(
        //     user_id,
        //     {$push:{jobs: job._id}},
        //     {new:true}
        // )

        if (!job) {
            res.status(400).json({
                error: error,
                message: "job not created"
            })
        }

        res.status(201).json({
            error: null,
            message: "job created"
        })
        
    }
    catch (error) {
        res.status(400).json({
            error: error,
            message: "job not created error in job "
        })


    }
}

const all_jobs = async(req, res)=>{
    const Jobs = await getAllJobs()
    res.status(200).json({
        error: null,
        message: "Jobs fetched",
        data: Jobs
    })
}

module.exports = {
    create,
    all_jobs
}