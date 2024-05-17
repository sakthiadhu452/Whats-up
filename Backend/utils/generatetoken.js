import jwt from 'jsonwebtoken'
import { generate } from 'otp-generator'


const generateJwtTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn:"15d"
    })

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,//MS
        httpOnly:true, //prevent XSS attacks
        sameSite:"strict",
        secure:process.env.MODE_ENV !== "development" //prevent CSRF attck
    })
}

export default generateJwtTokenAndSetCookie;