import UserModel from "../Model/User.model.js";
import  jwt from "jsonwebtoken";
import createError from "../Util/createError.js";


export const deleteUser = async (req,res,next)=>{

   
    const user =await UserModel.findById(req.params.id)
         if (req.userId.id !== user._id.toString()){

                return  next(createError(403,"you can delete only your account"))
    }
         
        
        await UserModel.findByIdAndDelete(req.params.id)
            res.status(200).send("deleted")
    

   

    

}