import mongoose, { Schema, Document } from 'mongoose';

type SubType='free' | 'basic' | 'standard' | 'premium'
export interface IUser extends Document {
  googleId: string;
  name: string;
  email: string;
  avatar: string;
  createdAt: Date;
  subscriptionType: SubType;
}

const UserSchema: Schema = new Schema({
  googleId: { type: String,  unique: true },
  name: { type: String,  },
  email: { type: String,  unique: true },
  avatar: { type: String },
  createdAt: { type: Date, default: Date.now },
  subscriptionType: { type: String, default: 'free' }
});

export default mongoose.model<IUser>('User', UserSchema);
