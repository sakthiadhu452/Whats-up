import generateJwtTokenAndSetCookie from "../utils/generatetoken.js";
import User from "../models/user.model.js" ;
import bcryptjs from "bcryptjs"
export const loginUser= async (req,res)=>{
   try{
        const {username,password}=req.body;
        // console.log(req.body)
        const user = await User.findOne({username});
        const isPasswordCorrect= await bcryptjs.compare(password?password:"",user.password?user.password:"");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"invalid username or password"})
        }

        generateJwtTokenAndSetCookie(user._id,res);
        res.status(201).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilepic
        })
   }
   catch(error){
    console.log("error in login controller",error)
    res.status(500).json({"error":"internal server error"})
   }
}

export const logout = async (req,res)=>{
 try{
    res.cookie("jwt","",{
        maxAge:0
    })
    res.status(200).json({"message":"Logged out successfully"})
 }   
 catch(err){
    console.log("error from logout",err);
    res.send(500).json({"error":"internal sever error"})
 }
}


export const signup = async (req,res)=>{
   try{
    const {fullName,username,password,confirmPassword,gender}=req.body;
    if(password!==confirmPassword){
        return res.status(400).json({"error":"Password don't match"})
    }

    const user= await User.findOne({username})
    if(user){
        return res.status(400).json({"error":"Username already exists"})
    }
    const salt= await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password,salt);
    const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`
    const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilepic:gender==="male"?boyProfilePic:girlProfilePic,
    })
    if(newUser){
        await generateJwtTokenAndSetCookie(newUser._id,res)
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic:newUser.profilepic
        })
    }
    else{
        res.status(400).json({error:"invalid user data"});
    }
   }
   catch(error){
    console.log("error in signup controller",error)
    res.status(500).json({"error":"internal server error"})
   }
}