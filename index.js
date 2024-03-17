
require('dotenv').config()
const express=require('express')
const cors=require('cors')

const app=express()

app.use(cors())
app.use(express.json())

require('./DB-connection/connection')

const router=require('./Routes/router')
app.use(router)



const PORT=4000||process.env.PORT

app.listen(PORT,()=>{
    console.log(`app server started at port:${PORT}`);
})