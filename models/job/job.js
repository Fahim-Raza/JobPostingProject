const mongoose = require('mongoose')

 const jobSchema = mongoose.Schema({

        job_type:{
            type:String,
            required:true
        },
        salary:{
            type: Number,
            required:[true,"salary is required"],
            min:1
        }, 
        description:{
            type: String,
            required:[true,"description is required"],

        },
        user_id:[{
            //mongoose.types.objectid
            type: mongoose.Types.ObjectId,
            ref:"User"

        }]

 })
 module.exports= mongoose.model("Job",jobSchema)