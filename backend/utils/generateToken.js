import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId,res) => {
    //generate token
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });
    
//set cookie
    // const isSecure = process.env.NODE_ENV === "production"
    res.cookie("jwt",token,{
        maxAge:  15*24*60*60*1000,
        httpOnly: true ,// cookie cannot be accessed or modified by the browser .Protects against XSS attacks
        sameSite: "strict", // cookie is only sent in a first-party context .Protects against CSRF attacks, cross-site request forgery attacks
        secure: process.env.NODE_ENV === "production"// cookie is only sent in a HTTPS connection
    }); 
    
                                                                                                                                                                                                                              
};

export default generateTokenAndSetCookie;