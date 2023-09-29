const express =require('express')
const { PORT} = require('./config/environment')
const connection = require('./config/databaseConnection')
const userRoutes=require('./routes/user/users')
const jobRoutes =require('./routes/job/job')


const port=PORT
const app = express()

app.use(express.json())
app.use('/api/user',userRoutes)
app.use('/api/job',jobRoutes)

app.listen(port,async()=>{
    const dbconnected = await connection()
    //console.log(dbconnected)
    if(dbconnected){
        console.log(`your server is start at ${port}`)
    }
})

