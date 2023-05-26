import { Schema } from "mongoose";
import mongoose from "mongoose"


const conversationSchema = new  Schema({

    userid:{

        type:String,
        required:true,
       
    },
    
    desc:{

        type:String,
        required:true,
     
    },
    
    totalstar:{

        type:Number,
        default:0

    },
       
    
   starNumber:{

        type:Number,
        default:0
       
    },
    
    cat:{

        type:String,
        required:true
   
    },
    price:{

        type:Boolean,
        required:true
    },
    
    cover:{

        type:String,
        required:false,
        
    },
    images:{

        type:[String],
        required:false,
        
    },
    shortTitle:{

        type:String,
        required:true
        
    },
    shortDesc:{

        type:String,
        required:true
        
    },
    DeliveryTime:{
        type:Number,
        required:true
    },
    revisionNumber:{
        type:Number,
        required:true
    },
    features:{
        type:[String],
        required:false
    },
    sales:{
        type:Number,
        required: 0
    },

},
    {
        timestamps:true
    },
);


export default mongoose.model("conversationModel" ,  conversationSchema)