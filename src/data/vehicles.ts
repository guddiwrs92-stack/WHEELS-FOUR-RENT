import { Vehicle } from '../types';

export const INITIAL_VEHICLES: Vehicle[] = [
  // Luxury Vehicles
  {
    id: 'w4r-lux-01',
    name: 'Rolls-Royce Ghost & Phantom Series',
    category: 'Luxury Vehicles',
    categoryTag: 'ROYAL EDITORIAL',
    image: '/src/assets/images/car_wedding_luxury_1794141123519.jpg',
    tagline: 'The Pinnacle of Automotive Prestige & Grandeur',
    seatingCapacity: 4,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    rentalPrice: 'Contact for Rate',
    acceleration: 'Whisper Silent V12',
    power: '563 HP',
    features: [
      'Chauffeur-Driven White Glove Protocol',
      'Starlight Headliner & Acoustic Soundproofing',
      'Fresh Floral Decor Integration',
      'VIP Police Convoy Clearance Friendly'
    ],
    description:
      'The undisputed sovereign of ceremonial arrivals. Reserved for high-profile Hyderabad weddings, state dignitary receptions, and grand cinematic sequences.',
    recommendedFor: 'Royal Weddings, State Protocol & High-Fashion Shoots',
    luggageCapacity: '3 Full-Size Trunks',
    isAvailable: true
  },
  {
    id: 'w4r-lux-02',
    name: 'Mercedes-Maybach S-Class 680',
    category: 'Luxury Vehicles',
    categoryTag: 'FIRST CLASS',
    image: '/src/assets/images/hero_luxury_car_1794141123471.jpg',
    tagline: 'Private Jet Aerodynamic Solitude on Wheels',
    seatingCapacity: 4,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    rentalPrice: 'Starting ₹22,000/day',
    acceleration: '0-100 in 4.5s',
    power: '612 HP',
    features: [
      'Executive Calf-Rest Reclining Loungers',
      'Burmester 4D High-End Sound System',
      'Air Balance Active Fragrance System',
      'Soft-Close Electromagnetic Doors'
    ],
    description:
      'Sculpted luxury engineered for dignitaries and couples who demand supreme discretion, effortless torque, and cocooned serenity.',
    recommendedFor: 'Luxury Weddings, Corporate CXO Transit & Diplomatic Convoys',
    luggageCapacity: '3 Large Bags',
    isAvailable: true
  },

  // Premium Vehicles
  {
    id: 'w4r-prem-01',
    name: 'Ferrari SF90 & V8 Production Supercar',
    category: 'Premium Vehicles',
    categoryTag: 'CINEMA EXOTIC',
    image: '/src/assets/images/car_film_shooting_1794141124560.jpg',
    tagline: 'High-Octane Hypercar for Creative Film & Music Productions',
    seatingCapacity: 2,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    rentalPrice: 'Contact for Production Rate',
    acceleration: '0-100 in 2.5s',
    power: '769 HP',
    features: [
      'Active Aerodynamic Downforce Wing',
      'Camera Rig & Suction Mount Certified',
      'On-Set Production Handler Included',
      'Pristine Rosso Corsa / Nero Gloss Finish'
    ],
    description:
      'An explosive presence on camera. Specifically curated for Tollywood commercial productions, luxury brand campaign spots, and high-budget music videos.',
    recommendedFor: 'Feature Films, OTT Series, Fashion Shoots & Ad Campaigns',
    luggageCapacity: 'Studio Kit Bag',
    isAvailable: true
  },
  {
    id: 'w4r-prem-02',
    name: 'BMW 5 Series & Audi A6 Sportline',
    category: 'Premium Vehicles',
    categoryTag: 'EXECUTIVE DRIVE',
    image: '/src/assets/images/hero_luxury_car_1794141123471.jpg',
    tagline: 'Precision Dynamic Handling Meets Understated Poise',
    seatingCapacity: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    rentalPrice: 'Starting ₹9,500/day',
    acceleration: '0-100 in 6.1s',
    power: '252 HP',
    features: [
      'Sport Adaptive M-Suspension',
      'Digital Cockpit Pro with HUD',
      'TwinPower Turbo Responsive Dynamics',
      'Harman Kardon Spatial Audio'
    ],
    description:
      'The modern executive benchmark. Sharp steering feel, plush Dakota leather, and poised highway authority for self-drive or business delegations.',
    recommendedFor: 'Executive Self-Drive, HITEC City Business & Airport Runs',
    luggageCapacity: '3 Suitcases',
    isAvailable: true
  },

  // SUVs
  {
    id: 'w4r-suv-01',
    name: 'Range Rover Autobiography & Sport',
    category: 'SUVs',
    categoryTag: 'ALL-TERRAIN FLAGSHIP',
    image: '/src/assets/images/car_premium_suv_1794141124090.jpg',
    tagline: 'Commanding Stance, Unrivalled Monolithic Presence',
    seatingCapacity: 5,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    rentalPrice: 'Starting ₹18,500/day',
    acceleration: '0-100 in 5.8s',
    power: '395 HP',
    features: [
      'Electronic Air Suspension with Dynamic Response',
      'Panoramic Sunroof & Privacy Glass',
      'Terrain Response 2 All-Weather Drive',
      'Semi-Aniline Massage Leather Seats'
    ],
    description:
      'The pinnacle of SUV grandeur. Favored by celebrities, film directors, and destination wedding parties requiring commanding security and supreme comfort.',
    recommendedFor: 'Celebrity Security, Outstation Luxury Trips & VIP Convoys',
    luggageCapacity: '4 Large Suitcases',
    isAvailable: true
  },
  {
    id: 'w4r-suv-02',
    name: 'Toyota Fortuner Legender & Innova Hycross',
    category: 'SUVs',
    categoryTag: '7-SEATER CONVOY',
    image: '/src/assets/images/car_premium_suv_1794141124090.jpg',
    tagline: 'The Ultimate Heavy-Duty Fleet Workhorse',
    seatingCapacity: 7,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    rentalPrice: 'Starting ₹5,200/day',
    acceleration: 'Responsive Hybrid Torque',
    power: '201 HP',
    features: [
      'Ottoman Powered Reclining Captain Seats',
      'Spacious 3-Row Air Conditioned Cabin',
      'Exceptional Highway Stability & High Clearance',
      'Bulletproof Reliability across Telangana'
    ],
    description:
      'Room for the entire family or crew without compromising refinement. Seamless self-drive or chauffeur service for wedding guest convoys and outstation expeditions.',
    recommendedFor: 'Wedding Entourages, Outstation Family Expeditions & Crew Logistics',
    luggageCapacity: '5 Large Bags',
    isAvailable: true
  },

  // Sedans
  {
    id: 'w4r-sedan-01',
    name: 'Honda City ZX & Hyundai Verna Turbo',
    category: 'Sedans',
    categoryTag: 'COMFORT SELF-DRIVE',
    image: '/src/assets/images/hero_luxury_car_1794141123471.jpg',
    tagline: 'Aerodynamic Efficiency, Supreme Cabin Roominess',
    seatingCapacity: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    rentalPrice: 'Starting ₹2,800/day',
    acceleration: 'Peppy Turbocharged Power',
    power: '160 HP',
    features: [
      'ADAS Level 2 Driver Assistance',
      'Ventilated Front Seats & Sunroof',
      'Wireless Apple CarPlay & Android Auto',
      'Fuel Efficient 18+ km/l Economy'
    ],
    description:
      'The sweet spot of everyday practicality and executive comfort. Ideal for weekend getaways to Nagarjuna Sagar, Srisailam, or smooth city travel in Hyderabad.',
    recommendedFor: 'Weekend Getaways, Daily Corporate Travel & Self-Drive Trips',
    luggageCapacity: '3 Suitcases',
    isAvailable: true
  },

  // Hatchbacks
  {
    id: 'w4r-hatch-01',
    name: 'Premium City Hatchback (Swift / i20 N-Line)',
    category: 'Hatchbacks',
    categoryTag: 'AGILE CITY RUNNER',
    image: '/src/assets/images/car_self_drive_1794141125649.jpg',
    tagline: 'Effortless Urban Agility & Unrestricted Freedom',
    seatingCapacity: 5,
    transmission: 'Manual',
    fuelType: 'Petrol',
    rentalPrice: 'Starting ₹1,800/day',
    acceleration: 'Nimble & Quick Handling',
    power: '120 HP',
    features: [
      'High-Output Chill Air Conditioning',
      'Compact Dimensions for Effortless Parking',
      'Clean Sanitized Cabin before Delivery',
      'Zero Hidden Surcharges'
    ],
    description:
      'Zippy, sharp, and easy to weave through Hyderabad traffic. Tailored for budget-conscious self-drives, daily errands, and quick airport pickups.',
    recommendedFor: 'Solo Explorers, Local Errands & Economical Self-Drive',
    luggageCapacity: '2 Medium Bags',
    isAvailable: true
  }
];
