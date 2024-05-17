import User from "../models/user.model.js";
import { loginUser } from "./auth.controller";

export const getUsersForSideBar = async (req,res) =>{
    try{
        const loggedInUserId = req.user._id;
        
        const allUsers = await User.find({_id:{$ne:loggedInUserId}})

    }
    catch(err){
        console.log("error from getusersforsidebar conteoller",err);
        res.status(500).json({"error":"internal server error"})
    }
}