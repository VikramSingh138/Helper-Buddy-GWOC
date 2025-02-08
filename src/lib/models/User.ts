import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  hashedPassword: string;
  name: string;
  phone: string;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
const ServiceProvider = mongoose.models.ServiceProvider || mongoose.model<IUser>('ServiceProvider', userSchema);
const Admin = mongoose.models.Admin || mongoose.model<IUser>('Admin', userSchema);

export { User, ServiceProvider, Admin };
export type { IUser };