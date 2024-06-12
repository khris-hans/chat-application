import mongoose from 'mongoose';

const messageSchema =new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId, // this is the id of the user who sent the message
        required:true,
        ref:'User'
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId, // this is the id of the user who received the message
        required:true,
        ref:'User'
    },
    message:{
        type:String,
        required:true
    },
},{timestamps:true});

const Message = mongoose.model('Message',messageSchema);

export default Message;