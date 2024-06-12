import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";

export const sendMessage = async (req, res) => {
   try {
    
    const {message} = req.body; //get the message from the request body
    const {id: receiverId} = req.params; //get the receiver id from the request params
   
    const senderId = req.user._id; //get the sender id from the request user object

    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    })

    if(!conversation){
      conversation = await Conversation.create({
         members: [senderId, receiverId],
      })
    }
    //create a new message
    const newMessage = await Message.create({
      senderId : senderId,
      receiverId: receiverId,
      message: message,
    });

    //add the message to the Conversation's  messages[] array
     if(newMessage)
      {conversation.messages.push(newMessage._id);
      }
      
      await conversation.save();
      await newMessage.save();
      res.status(201).json(newMessage);

   } catch (error) {
      console.log("error sending the message",error.message);
      res.status(500).json({error: "Internal server error"});
    
   }
};
export const getMessages = async (req, res) => {
    try {
      const {id: userToChatId} = req.params; //get the receiver id from the request params
      const senderId = req.user._id; //get the sender id from the request user object
      let conversation = await Conversation.findOne({
        members: { $all: [senderId, userToChatId] },
      }).populate('messages'); //populate (mongoose) the messages array

      if(!conversation){
        return res.status(200).json([]);
      }
      const messages = conversation.messages;

      res.status(200).json(messages);
    
   } catch (error) {
      console.log("error sending the message",error.message);
      res.status(500).json({error: "Internal server error"});
    
   }
};
export const deleteMessage = async (req, res) => {
    try {
    
   } catch (error) {
    
   }
};