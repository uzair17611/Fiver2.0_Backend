import { Schema } from "mongoose";
import mongoose from "mongoose"


const userSchema = new  Schema({

    username:{

        type:String,
        required:true,
        unique:true
    },
    
    email:{

        type:String,
        required:true,
        unique:true
    },
    
    password:{

        type:String,
        required:true,
        unique:true
    },
    
    contact:{

        type:String,
        required:true,
        unique:true
    },
    
    country:{

        type:String,
        required:true,
   
    },
    isSeller:{

        type:Boolean,
        default:false
    },
    
    desc:{

        type:String,
        required:false,
        
    },
},
    {
        timestamps:true
    }
)


export default mongoose.model("userModel" ,  userSchema)