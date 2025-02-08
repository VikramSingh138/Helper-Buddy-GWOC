
import mongoose, { Schema } from 'mongoose';

const adminSchema = new Schema({
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  role: { type: String, default: 'admin' },
  createdAt: { type: Date, default: Date.now },
});

export const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);