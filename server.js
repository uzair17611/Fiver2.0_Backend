import express from 'express';
import userRoute from "./Routes/user.route.js"
import mongoose from  'mongoose'
import gigRoute from "./Routes/gig.route.js"
import messageRoute from "./Routes/message.route.js"
import conversationRoute from "./Routes/conversation.route.js"
import ReviewRoute from "./Routes/review.route.js"
import authRoute from "./Routes/auth.route.js"
import dontenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"


dontenv.config()
const  app =express()
mongoose.set('strictQuery', true);

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://127.0.0.1:5173',
  credentials: true,
}));

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
app.use((err,req,res,next) =>{

let   errorStatus =err.status || 500 ;
let   errorMessage =err.message || "something went wrong"

    return res.status(errorStatus ).send( errorMessage);
})




app.listen(8800, ()=>{
    connect()
    console.log("this app is listening on port 8800")
})