import user from "../Model/User.model.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import createError from "../Util/createError.js";






export const register =  async(req,res ,next)=>{

    
  try {

   const hash = bcrypt.hashSync(req.body.password , 6);

    const newUser = new user({
      ...req.body,
      password: hash
  });
    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error); // Log the error message to the console for debugging
   next (error)
  }

}







export const login = async(req,res ,next)=>{

    try {
        const foundUser = await user.findOne({ username: req.body.username });
    
        if (!foundUser) return next (createError(404 ,"user not found"));
    
        const encrypted = bcrypt.compareSync(req.body.password, foundUser.password);
        if (!encrypted) return next (createError(404 ,"Invalid password"));
      
        const token =jwt.sign({
          id :foundUser._id,
          isSeller:foundUser.isSeller

        },process.env.jwt_secret)
        const { password, ...info } = foundUser._doc;
        res.cookie("accessToken", token, {
          httpOnly: true,
        });
        return res.status(200).send(info);
      } catch (error) {
        // Handle the error appropriately
        console.log(error);
        res.status(500).send("Something went wrong");
      }
    };







export const logout =  async(req,res)=>{
res.clearCookie("accessToken" ,{
  sameSite:"none",
  secure:true
})
.status(200)
.send("user have already logged out")
}




