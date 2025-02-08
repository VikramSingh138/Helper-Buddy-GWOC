import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  hashedPassword: string;
  name: string;
  phone: string;
  userType: string;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  userType: { type: String, required: true, enum: ['user', 'admin', 'serviceProvider'] },
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export { User };
export type { IUser };