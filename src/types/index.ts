export interface User {
  id: string;
  name: string;
  email: string;
  role: 'guest' | 'hotel';
  avatar?: string;
  points: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  amenities: string[];
  images: string[];
  priceRange: {
    min: number;
    max: number;
  };
  pointsPerNight: number;
}

export interface Bid {
  id: string;
  userId: string;
  status: 'open' | 'closed';
  checkIn: Date;
  checkOut: Date;
  guests: number;
  budget: number;
  requirements: string;
  createdAt: Date;
  responses: BidResponse[];
  potentialPoints: number;
}

export interface BidResponse {
  id: string;
  hotelId: string;
  bidId: string;
  price: number;
  message: string;
  createdAt: Date;
}

export interface RewardsProgram {
  tiers: {
    Bronze: { minPoints: 0, perks: string[] };
    Silver: { minPoints: 1000, perks: string[] };
    Gold: { minPoints: 5000, perks: string[] };
    Platinum: { minPoints: 10000, perks: string[] };
  };
}