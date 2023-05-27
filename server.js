import express from 'express';
import userRoute from "./Routes/user.route.js"
import mongoose from  'mongoose'
import gigRoute from "./Routes/gig.route.js"
import messageRoute from "./Routes/message.route.js"
import conversationRoute from "./Routes/conversation.route.js"
import ReviewRoute from "./Routes/review.route.js"
import authRoute from "./Routes/auth.route.js"
import dontenv from "dotenv"


dontenv.config()
const  app =express()
 

app.use(express.json())

const connect = async ()=>{

try {
  await mongoose.connect(process.env.Mongo_URI);
  console.log("connected to database")
} catch (error) {
  console.log(error);
}
    
}


app.use("/api/users"  ,userRoute)
app.use("/api/auth"  ,authRoute)
app.use("/api/conversation"  ,conversationRoute)
app.use("/api/gigs"  ,gigRoute)
app.use("/api/message"  ,messageRoute)
app.use("/api/reviews"  ,ReviewRoute)




app.listen(8800, ()=>{
    connect()
    console.log("this app is listening on port 8800")
})