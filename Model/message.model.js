import { Schema } from "mongoose";
import mongoose from "mongoose"


const conversationSchema = new  Schema({

    conversationid:{

        type:String,
        required:true,
       unique:true
    },
    
    userid:{

        type:String,
        required:true,
       unique:true
    },
    desc:{
        type:String,
        required:true,
       unique:true
    },
    

},
    {
        timestamps:true
    },
);


export default mongoose.model("conversationModel" ,  conversationSchema)