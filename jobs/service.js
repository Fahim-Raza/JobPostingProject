const Job = require("../models/job/job")


const getAllJobs = async() => {
return Job.find()
}

module.exports = {
    getAllJobs
}