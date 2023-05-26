import express from 'express';
import userRoute from "./Routes/user.route.js"
import mongoose from  'mongoose'
import gigRoute from "./Routes/gig.route.js"
import messageRoute from "./Routes/message.route.js"
import conversationRoute from "./Routes/conversation.route.js"
import ReviewRoute from "./Routes/review.route.js"

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
app.use("/api/users"  ,conversationRoute)
app.use("/api/users"  ,gigRoute)
app.use("/api/users"  ,messageRoute)
app.use("/api/users"  ,ReviewRoute)




app.listen(8800, ()=>{
    connect()
    console.log("this app is listening on port 8800")
})