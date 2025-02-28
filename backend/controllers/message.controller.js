import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const senderId = req.id;
        const recieverId = req.params.id;
        const {message} = req.body;
        let gotConversation = await Conversation.findOne({
            participants:{$all : [senderId, recieverId]}
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
            await gotConversation.save();
        }
        console.log("Updated Conversation:", gotConversation.messages);
        //socket.io

        return res.status(201).json({
            newMessage
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
        }).populate({
            path: 'messages',
            options: { sort: { createdAt: 1 } } 
        });
        console.log("Populated conversation:", conversation);

        return res.status(200).json(conversation?.messages);
        
        
        
    } catch (error) {
        console.log(error);
    }
}