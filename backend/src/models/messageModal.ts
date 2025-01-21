import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
}, { timestamps: true });

// Function to get a dynamic message model
const getMessageModel = (collectionName:string) => {
  return mongoose.model(collectionName, messageSchema, collectionName);
};

export default getMessageModel;
