const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString,{useUnifiedTopology: true,useNewUrlParser: true}).then(()=>{
    console.log("mongodb connected");
}).catch((error)=>{
    console.log("connection failed");
})