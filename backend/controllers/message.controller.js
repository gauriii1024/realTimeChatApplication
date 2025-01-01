import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const senderId = req.id;
        const recieverId = req.params.id;
        const {message} = req.body;
        let gotConversation = await Conversation.findOne({
            participant:{$all : [senderId, recieverId]}
        })
        if (!gotConversation) {
            gotConversation = await Conversation.create({
                participants: [senderId, recieverId]
            })
        };

        const newMessage = await Message.create({
            senderId,
            recieverId,
            message
        });
        if (newMessage) {
            gotConversation.messages.push(newMessage._id);
        }
        await gotConversation.save();
        //socket.io

        return res.status(201).json({
            message: "Message delivered successfully"
        })
    } catch (error) {
        console.log(error);
    }
}


export const getMessage = async (req, res) => {
    try {
        const recieverId = req.params.id;
        const senderId = req.id;
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, recieverId]}
        }).populate("messages")
        // console.log(conversation);
        return res.status(200).json(conversation?.messages);
        
        
        
    } catch (error) {
        console.log(error);
    }
}