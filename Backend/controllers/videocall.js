
import { getReceiverSocketId } from '../socket/socket.js';
import { io } from '../socket/socket.js';

export const videoCall=async (req,res) =>{
    const receiverSocketId = getReceiverSocketId(req.params.id);
    
    if(receiverSocketId){
        try{
            // console.log(req.user._id)
            io.to(receiverSocketId).emit("newCall",{from:req.user._id})
           
        }
        catch(err){
            console.log(err)
        }
    }
}




export const videoAns = async (req,res) =>{

}