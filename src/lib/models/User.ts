import mongoose, { Schema, models, model } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Avoid recompiling model if it already exists
export const User = models.User || model('User', userSchema);