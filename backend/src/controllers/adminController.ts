import { Request, Response } from "express";
import chatRoomModel from "../models/chatRoomModel";

const createChatRoom = async (req:Request, res:Response) => {
    try {
      const { name, description } = req.body;
  
      // Generate a collection name dynamically
      const collectionName = `messages_${name.toLowerCase().replace(/\s+/g, '_')}`;
  
      // Check if chat room already exists
      const existingChat = await chatRoomModel.findOne({ name });
      if (existingChat) return res.status(400).json({ message: 'Chat room already exists' });
  
      // Create a new chat room
      const chatRoom = new chatRoomModel({ name, description, collectionName });
      await chatRoom.save();
  
      res.status(201).json(chatRoom);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };