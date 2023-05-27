import user from "../Model/User.model.js"
import bcrypt from "bcrypt"

export const login = async(req,res)=>{



}




export const logout =  async(req,res)=>{

}




export const register =  async(req,res)=>{

    
        try {

         const hash = bcrypt.hashSync(req.body.password , 6);

          const newUser = new user({
            ...req.body,
            password: hash
        });
          await newUser.save();
          res.status(200).send("User registered successfully");
        } catch (error) {
          console.error(error); // Log the error message to the console for debugging
          res.status(500).send("Something went wrong");
        }
   
}