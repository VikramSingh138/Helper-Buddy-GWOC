export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  availablePincodes: string[];
  image?: string;
  dateTime?: Date;
  status?: 'pending' | 'accepted' | 'rejected';
  pincode?: string;
}

export interface ServiceRequest {
  id: string;
  serviceId: string;
  userId: string;
  dateTime: Date;
  pincode: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface Notification {
  id: string;
  serviceRequestId: string;
  serviceProviderId: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}
