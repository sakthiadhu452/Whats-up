import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    //socket
    await Promise.all([newMessage.save(), conversation.save()]);
    // console.log(newMessage);
    res.status(200).send({ message: newMessage });
  } catch (err) {
    console.error("Error from sending message:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getMessages = async (req,res)=>{
  try{
    const {id:userTochatId}=req.params;
    // console.log("kds")

    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants : {$all:[senderId,userTochatId]}
    }).populate("messages");
    if(!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    
    res.status(200).json(messages);
  }
  catch (err) {
    console.error("Error from reciveing  message:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}