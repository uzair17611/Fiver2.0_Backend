import  jwt  from "jsonwebtoken";
import createError from "../Util/createError.js";

export const verifyToken =()=>{

    const token =req.cookies.accessToken;


    if(!token )  return next(createError(401,"you are not authenticated"))

    jwt.verify(token , process.env.jwt_secret , async (err , payload)=>{

        if(err) return  next(createError(401,"Token is not valid"))

        req.userId =payload.id;
        req.isSeller=payload.isSeller;

        next();
  })


}