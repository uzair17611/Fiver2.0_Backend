import { Schema } from "mongoose";
import mongoose from "mongoose"


const reviewSchema = new  Schema({

   gigid:{
    type:Number,
    required:true
   },
   userid:{
    type:Number,
    required:true
   },
   star:{
    type:Number,
    required:true,
    enum:[1,2,3,4,5]

   },
   desc:{
    type:String,
    required:true
   },

},
    {
        timestamps:true
    },
);


export default mongoose.model("reviewModel" ,  reviewSchema)