import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protectRoute =  async (req, res, next) => {
    try {

        const token = req.cookies.jwt; //get the token from the cookie

        if(!token) {
            return res.status(401).json({error: "Unauthorized , please Login "});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET); //verify the token
        if (!decoded) {
            return res.status(401).json({error: "Unauthorized -Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password"); //find the user by id
    //    console.log(user)
        if(!req.user) {
        
         req.user = user;
        } 
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware",error.message);
        return res.status(401).json({error: "Internal server error"});
    }
};
