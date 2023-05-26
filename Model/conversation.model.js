import { Schema } from "mongoose";
import mongoose from "mongoose"


const conversationSchema = new  Schema({

    id:{

        type:String,
        required:true,
       unique:true
    },
    
    sellerid:{

        type:String,
        required:true,
       unique:true
    },
    buyerid:{
        type:String,
        required:true,
       unique:true
    },
    
    readbyseller:{
        type:Boolean,
       required:true

    },
    readbybuyer:{
        type:Boolean,
       required:true

    },
    lastmessege:{
        type:String,
       required:false

    },

},
    {
        timestamps:true
    },
);


export default mongoose.model("conversationModel" ,  conversationSchema)