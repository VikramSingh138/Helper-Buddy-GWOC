export interface User {
  id: string;
  email: string;
  name: string;
  walletBalance: number;
  referralCode: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  availablePincodes: string[];
  image?: string;
  dateTime?: Date;
  status?: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'COMPLETED';
  pincode?: string;
  partnerId?: string;
  userId?: string;
  remarks?: string;
}

export interface ServicePartner {
  id: string;
  name: string;
  email: string;
  services: string[];
  servicePincodes: string[];
  isApproved: boolean;
  rating?: number;
  totalBookings?: number;
  completedBookings?: number;
}

export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  partnerId?: string;
  dateTime: Date;
  status: 'PENDING' | 'ACCEPTED' | 'COMPLETED' | 'REJECTED';
  remarks?: string;
  pincode: string;
  price: number;
}
