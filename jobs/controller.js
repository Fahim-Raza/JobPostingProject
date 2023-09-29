const Job = require("../models/job/job")
const user = require("../models/user/user")

const create = async(req, res) => {
    try {
        const { job_type, salary, description, user_id } = req.body
        const data = { job_type, salary, description, user_id }
        const job =await Job.create(data)
        const updatedUser= await user.findByIdAndUpdate(
            user_id,
            {$push:{jobs: job._id}},
            {new:true}
        )




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
module.exports = create