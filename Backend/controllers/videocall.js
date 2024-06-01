import { getReceiverSocketId } from '../socket/socket.js';
import { io } from '../socket/socket.js';

export const videoCall = async (req, res) => {
    const receiverSocketId = getReceiverSocketId(req.params.id);

    if (!receiverSocketId) {
        return res.status(404).json({ message: 'Receiver not found' });
    }

    try {
        console.log(req.user._id);
        io.to(receiverSocketId).emit("newCall", { from: req.user._id });

        const recipientSocket = io.sockets.sockets.get(receiverSocketId);

        if (recipientSocket) {
            recipientSocket.once("declineCall", () => {
                console.log("call declined");
                // Optional: Inform the caller that the call was declined
                io.to(req.user._id).emit("callDeclined", { to: receiverSocketId });
            });
            recipientSocket.once("acceptCall", () => {
                console.log("call accepted");
                // Optional: Inform the caller that the call was declined
                io.to(req.user._id).emit("callAccepted", { to: receiverSocketId });
                io.to(receiverSocketId).emit("callAccepted", { from:req.user._id});
            });

            res.status(200).json({ message: 'Call initiated' });
        } else {
            res.status(404).json({ message: 'Recipient socket not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};




export const videoAns = async (req,res) =>{

}