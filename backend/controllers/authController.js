import bcrypt from "bcryptjs"; //import bcrypt to hash the password
import User from "../models/userModel.js"; //import the user model to interact with the database
import generateTokenAndSetCookie from "../utils/generateToken.js"; //import the function to generate token and set cookie

export const register =  async (req, res) => {
   try{
    const {name, username, password,confirmPassword,gender} = req.body; //get the name, username, password, confirmPassword,gender from the request body
    //check if password matches confirmPassword
    if(password !== confirmPassword){
        return res.status(400).json({message: "Passwords do not match"});
    }
    //check if the user already exists
    const user = await User.findOne({username});
    if(user){
        return res.status(400).json({message: "User already exists"});
    }
    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create a new user avatar
    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //create a new user
    
    const newUser = new User({
        name,
        username,
        password : hashedPassword,
        confirmPassword,
        gender,
        avatar: gender === "male" ? boyProfile : girlProfile

   });

   if(newUser){
    
    await newUser.save(); //save the user to the database
    generateTokenAndSetCookie(newUser._id,res); //generate token and set cookie
   
    //send the response
    res.status(201).json({
        message: "User registered successfully",
        _id: newUser._id,
        name: newUser.name,
        username: newUser.username,
        avatar: newUser.avatar,});
    }else{
        res.status(400).json({message: "Invalid user data"});
    }
   } 
    catch(error){
         console.log("error registering the user",error.message);
    }

};

export const login = async (req, res) => {
    try {
        const {username, password} = req.body; //get the username and password from the request body
        const user = await User.findOne({username}); //find the user in the database model 
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || ""); //compare the password with the hashed password in the database
        
        if(!user || !isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        generateTokenAndSetCookie(user._id,res); //generate token and set cookie

        res.status(200).json({
            message: "User logged in successfully",
            _id: user._id,
            name: user.name,
            username: user.username,
            avatar: user.avatar,
        });

    } catch (error) {
        console.log("error logging in the user",error.message);
        res.status(500).json({error: "Internal server error"});
        
    }
    
};  

export const logout = (req, res) => {
    try {
        res.clearCookie("jwt","",{maxAge:0}); //clear the cookie , set the token to an empty string and set the maxAge to 0
        res.status(200).json({message: "User logged out successfully"});
        
    } catch (error) {
        console.log("error logging in the user",error.message);
        res.status(500).json({error: "Internal server error"});
        
        
    }
   
};