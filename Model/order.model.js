import { Schema } from "mongoose";
import mongoose from "mongoose"


const reviewSchema = new  Schema({

    gigid:{

        type:String,
        required:true,
       
    },
    
    img:{

        type:String,
        required:true
     
    },
    
    price:{

        type:Number,
        default:0

    },
       
    
   title:{

        type:string,
        required:true
       
    },
    
    buyerID:{

        type:String,
        required:true
   
    },
    sellerID:{

        type:String,
        required:true
    },
    
    isCompletd:{

        type:Boolean,
        required:false,
        
    },
    payment_intent:{
        type:String,
        required:true
    }
    
    

},
    {
        timestamps:true
    },
);


export default mongoose.model("orderModel" ,  orderSchema)