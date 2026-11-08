export type VehicleCategory =
  | 'All'
  | 'Luxury Vehicles'
  | 'Premium Vehicles'
  | 'SUVs'
  | 'Sedans'
  | 'Hatchbacks';

export type RentalPurpose =
  | 'Self Drive'
  | 'Wedding'
  | 'Shooting / Film Production'
  | 'Event'
  | 'Corporate'
  | 'Personal Travel'
  | 'Other';

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  categoryTag: string;
  image: string;
  tagline: string;
  seatingCapacity: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  rentalPrice: string; // e.g. "Starting ₹3,499/day" or "Contact for Price"
  acceleration?: string; // e.g. "0-100 in 3.8s" or "Top Comfort"
  power?: string; // e.g. "500+ HP"
  features: string[];
  description: string;
  recommendedFor: string;
  luggageCapacity?: string;
  isAvailable?: boolean;
}

export interface IndiaBookingEnquiry {
  pickupState: string;
  pickupCity: string;
  dropoffState: string;
  dropoffCity: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  carCategory: string; // Hatchback, Sedan, SUV, Luxury, Premium, No preference
  vehicleName?: string;
  rentalPurpose: RentalPurpose;
  customerName: string;
  mobileNumber: string;
  additionalRequirements?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  image: string;
  recommendedCategory: VehicleCategory;
  statsLabel: string;
  statsValue: string;
}
