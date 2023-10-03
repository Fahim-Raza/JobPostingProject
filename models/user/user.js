const mongoose = require('mongoose')
const{Types}= mongoose

const userSchema = mongoose.Schema({
    
    
    email:{
        type: String,
        requried:  [true, "Please enter email"]
    },
    password:{
        type: String,
        requried: [true, "Please enter password"]
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    jobs:[{
        type: Types.ObjectId,
        ref:"Job"
    }]
   
},
{timestamps:true})

module.exports=mongoose.model("User",userSchema)