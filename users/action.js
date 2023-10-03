const updatedUser = async (user_id, job_id) => {
    await user.findByIdAndUpdate(
        user_id,
        { $push: { jobs: job_id } },
        { new: true }
    )
}

module.exports = {
    updatedUser
}