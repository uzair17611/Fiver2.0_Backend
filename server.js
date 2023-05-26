import express from 'express'
import mongoose from "mongoose"
import dotenv from "dotenv"


dotenv.config()

const  app=express();
const connect = async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
      console.log("connected to mongoose")
  
  } catch (error) {
    handleError(error);
  }
}












app.listen(5000, ()=>{
  connect()
    console.log("server is listening on port 5000")
})