import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'self-drive',
    number: '01',
    title: 'Self Drive Car Rentals',
    tagline: 'Your route. Your rules. Your freedom.',
    description:
      'Enjoy the freedom of driving your favourite car. Flexible rental options for personal trips, business travel and weekend getaways across Telangana and beyond.',
    keyFeatures: [
      'Zero Hidden Charges',
      'Daily, Weekly & Monthly Flexible Tariffs',
      'Doorstep Delivery & Pickup in Hyderabad',
      'Sanitized & Inspected Before Every Trip'
    ],
    image: '/src/assets/images/car_self_drive_1794141125649.jpg',
    recommendedCategory: 'SUVs',
    statsLabel: 'UNLIMITED KM OPTIONS',
    statsValue: 'Full Autonomy'
  },
  {
    id: 'wedding-cars',
    number: '02',
    title: 'Wedding Car Rentals',
    tagline: 'Make an entrance worth remembering.',
    description:
      'Make your special day unforgettable with premium cars for weddings, bride and groom arrivals, and wedding celebrations. Luxury sedans, convertibles and vintage classics.',
    keyFeatures: [
      'Rolls-Royce, Mercedes & BMW Options',
      'Professional Suited Chauffeurs',
      'Customized Flower Ribbon Decoration',
      'Punctual On-Time Arrival Guaranteed'
    ],
    image: '/src/assets/images/car_wedding_luxury_1794141123519.jpg',
    recommendedCategory: 'Luxury Vehicles',
    statsLabel: 'ROYAL PROTOCOL',
    statsValue: 'White Glove Chauffeurs'
  },
  {
    id: 'shooting-film',
    number: '03',
    title: 'Shooting & Film Rentals',
    tagline: 'Every frame deserves the right vehicle.',
    description:
      'Find the perfect vehicle for films, music videos, photoshoots, advertisements and creative productions. Serving Tollywood productions across Ramoji Film City and Hyderabad.',
    keyFeatures: [
      'Exotic Supercars, Vintage & Luxury Sedans',
      'Flexible Half-Day & Full-Day Shift Rates',
      'On-Set Production Handler Support',
      'Camera Rig & Mounting Friendly Vehicles'
    ],
    image: '/src/assets/images/car_film_shooting_1794141124560.jpg',
    recommendedCategory: 'Premium Vehicles',
    statsLabel: 'TOLLYWOOD READY',
    statsValue: 'Set Delivery & Handling'
  },
  {
    id: 'event-cars',
    number: '04',
    title: 'Event Car Rentals',
    tagline: 'Arrive with a presence.',
    description:
      'Premium vehicle rental solutions for parties, corporate events, celebrations and special occasions. Tailored convoys and VIP transport across HITEC City and Gachibowli.',
    keyFeatures: [
      'VIP Airport Pickup & Delegations',
      'Matching Multi-Car Executive Convoys',
      '24/7 Dispatch & Real-Time Coordination',
      'Corporate Invoicing & Priority Billing'
    ],
    image: '/src/assets/images/car_premium_suv_1794141124090.jpg',
    recommendedCategory: 'SUVs',
    statsLabel: '24/7 FLEET DISPATCH',
    statsValue: 'RGIA Airport Staging'
  }
];
