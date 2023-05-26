import express from 'express';
import userRoute from "./Routes/user.route.js"
import mongoose from  'mongoose'

import dontenv from "dotenv"


dontenv.config()
const  app =express()


const connect = async ()=>{

try {
  await mongoose.connect(process.env.Mongo_URI);
  console.log("connected to database")
} catch (error) {
  console.log(error);
}
    
}


app.use("/api/users"  ,userRoute)



app.listen(8800, ()=>{
    connect()
    console.log("this app is listening on port 8800")
})