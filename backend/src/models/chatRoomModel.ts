import mongoose from "mongoose";


const chatRoomSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., "General", "Programming"
  description: { type: String },
//   members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users in the chat room
  collectionName: { type: String, required: true, unique: true } // The dynamic collection name
}, { timestamps: true });

export default mongoose.model('ChatRoom', chatRoomSchema);
