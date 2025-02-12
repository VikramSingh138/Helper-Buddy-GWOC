import mongoose, { Schema, Document } from 'mongoose';

interface IServiceRequest extends Document {
  userId: string;
  serviceCategory: string;
  requestedPincode: string;
  dateTime: Date;
  status: string;
  serviceProviderId: string | null;
}

const ServiceRequestSchema = new Schema<IServiceRequest>({
  userId: { type: String, required: true },
  serviceCategory: { type: String, required: true },
  requestedPincode: { type: String, required: true },
  dateTime: { type: Date, required: true },
  status: { type: String, default: 'pending' },
  serviceProviderId: { type: String, default: null },
});

export const ServiceRequestModel =
  mongoose.models.ServiceRequest ||
  mongoose.model<IServiceRequest>('ServiceRequest', ServiceRequestSchema);
