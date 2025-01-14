import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  googleId: string;
  name: string;
  email: string;
  avatar: string;
}

const UserSchema: Schema = new Schema({
  googleId: { type: String,  unique: true },
  name: { type: String,  },
  email: { type: String,  unique: true },
  avatar: { type: String },
});

export default mongoose.model<IUser>('User', UserSchema);
