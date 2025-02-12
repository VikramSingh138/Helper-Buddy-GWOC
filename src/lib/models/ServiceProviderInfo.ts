
import mongoose, { Schema, Document } from 'mongoose';

interface IServiceProviderInfo extends Document {
  providerId: string;
  services: string[];
  pincodes: string[];
}

const serviceProviderInfoSchema = new Schema({
  providerId: { type: String, required: true },
  services: [{ type: String, required: true }],
  pincodes: [{ type: String, required: true }],
});

const ServiceProviderInfo = mongoose.models.ServiceProviderInfo 
    || mongoose.model<IServiceProviderInfo>('ServiceProviderInfo', serviceProviderInfoSchema);

export { ServiceProviderInfo };
export type { IServiceProviderInfo };