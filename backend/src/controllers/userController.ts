import { Request, Response } from "express";
import chatRoomModel from "../models/chatRoomModel";
import getMessageModel from "../models/messageModal";




const sendMessage = async (req:Request, res:Response) => {
  try {
    const { chatRoomId, senderId, message } = req.body;

    // Find the chat room to get its collection name
    const chatRoom = await chatRoomModel.findById(chatRoomId);
    if (!chatRoom) return res.status(404).json({ message: 'Chat room not found' });

    // Get the dynamic message model
    const MessageModel = getMessageModel(chatRoom.collectionName);

    // Save message to the correct collection
    const newMessage = new MessageModel({ sender: senderId, message });
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getChatMessages = async (req:Request, res:Response) => {
  try {
    const { chatRoomId } = req.params;

    // Find the chat room to get its collection name
    const chatRoom = await chatRoomModel.findById(chatRoomId);
    if (!chatRoom) return res.status(404).json({ message: 'Chat room not found' });

    // Get the dynamic message model
    const MessageModel = getMessageModel(chatRoom.collectionName);

    // Fetch all messages
    const messages = await MessageModel.find().populate('sender', 'name');

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};



