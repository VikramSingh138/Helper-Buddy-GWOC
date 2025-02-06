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
}

export interface ServicePartner {
  id: string;
  name: string;
  email: string;
  services: string[];
  servicePincodes: string[];
  isApproved: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  partnerId?: string;
  dateTime: Date;
  status: 'PENDING' | 'ACCEPTED' | 'COMPLETED';
  remarks?: string;
}
