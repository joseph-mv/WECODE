import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import chatRoomModel from "../models/chatRoomModel";
import adminModel from "../models/adminModel";
// Single admin credentials (only one admin allowed)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

// Initialize the admin user if not exists
export const initializeAdmin = async () => {
  const existingAdmin = await adminModel.findOne({ adminId: ADMIN_USERNAME });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await adminModel.create({
      adminId: ADMIN_USERNAME,
      password: hashedPassword,
    });
  }
};

export const adminLogin = async (req: Request, res: Response) => {
  await initializeAdmin();
  try {
    const { adminId, password } = req.body;
    const admin = await adminModel.findOne({ adminId });
    if (!admin) res.status(400).json({ message: "Invalid credentials" });
    else {
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) res.status(400).json({ message: "Invalid credentials" });
      else {
        const token = jwt.sign(
          { id: admin._id, adminId: admin.adminId },
          process.env.JWT_SECRET as string,
          { expiresIn: "1d" }
        );

        res.json({ token, admin: { id: admin._id, adminId: admin.adminId } });
      }
    }
  } catch {
    res.status(400).json({ message: "Server Error" });
  }
};

export const createChatRoom = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    // Generate a collection name dynamically
    const collectionName = `messages_${name
      .toLowerCase()
      .replace(/\s+/g, "_")}`;

    // Check if chat room already exists
    const existingChat = await chatRoomModel.findOne({ name });
    if (existingChat)
      return res.status(400).json({ message: "Chat room already exists" });

    // Create a new chat room
    const chatRoom = new chatRoomModel({ name, description, collectionName });
    await chatRoom.save();

    res.status(201).json(chatRoom);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
