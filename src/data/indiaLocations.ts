export interface StateLocation {
  name: string;
  type: 'State' | 'Union Territory';
  code: string;
  majorCities: string[];
}

export const INDIA_LOCATIONS: StateLocation[] = [
  // 28 States
  {
    name: 'Telangana',
    type: 'State',
    code: 'TS',
    majorCities: [
      'Hyderabad (Headquarters & Dispatch Base)',
      'Gachibowli / Financial District',
      'Shaikpet / Jubilee Hills',
      'HITEC City / Madhapur',
      'Secunderabad',
      'Warangal',
      'Karimnagar',
      'Nizamabad',
      'Khammam',
      'Ramagundam',
      'Mahbubnagar',
      'Nalgonda',
      'Siddipet'
    ]
  },
  {
    name: 'Andhra Pradesh',
    type: 'State',
    code: 'AP',
    majorCities: [
      'Visakhapatnam',
      'Vijayawada',
      'Guntur',
      'Tirupati',
      'Kurnool',
      'Nellore',
      'Rajahmundry',
      'Kakinada',
      'Kadapa',
      'Anantapur'
    ]
  },
  {
    name: 'Arunachal Pradesh',
    type: 'State',
    code: 'AR',
    majorCities: ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro', 'Tezu']
  },
  {
    name: 'Assam',
    type: 'State',
    code: 'AS',
    majorCities: [
      'Guwahati',
      'Dibrugarh',
      'Silchar',
      'Jorhat',
      'Tezpur',
      'Nagaon',
      'Tinsukia'
    ]
  },
  {
    name: 'Bihar',
    type: 'State',
    code: 'BR',
    majorCities: [
      'Patna',
      'Gaya',
      'Bhagalpur',
      'Muzaffarpur',
      'Purnia',
      'Darbhanga',
      'Bihar Sharif'
    ]
  },
  {
    name: 'Chhattisgarh',
    type: 'State',
    code: 'CG',
    majorCities: [
      'Raipur',
      'Bilaspur',
      'Durg',
      'Bhilai',
      'Korba',
      'Jagdalpur',
      'Ambikapur'
    ]
  },
  {
    name: 'Goa',
    type: 'State',
    code: 'GA',
    majorCities: [
      'Panaji',
      'Margao',
      'Vasco da Gama',
      'Mapusa',
      'Ponda',
      'Calangute',
      'Candolim'
    ]
  },
  {
    name: 'Gujarat',
    type: 'State',
    code: 'GJ',
    majorCities: [
      'Ahmedabad',
      'Surat',
      'Vadodara',
      'Rajkot',
      'Gandhinagar',
      'Bhavnagar',
      'Jamnagar',
      'Junagadh',
      'Bhuj'
    ]
  },
  {
    name: 'Haryana',
    type: 'State',
    code: 'HR',
    majorCities: [
      'Gurugram',
      'Faridabad',
      'Panipat',
      'Ambala',
      'Karnal',
      'Hisar',
      'Rohtak',
      'Panchkula'
    ]
  },
  {
    name: 'Himachal Pradesh',
    type: 'State',
    code: 'HP',
    majorCities: [
      'Shimla',
      'Manali',
      'Dharamshala',
      'Solan',
      'Mandi',
      'Kullu',
      'Kasauli'
    ]
  },
  {
    name: 'Jharkhand',
    type: 'State',
    code: 'JH',
    majorCities: [
      'Ranchi',
      'Jamshedpur',
      'Dhanbad',
      'Bokaro Steel City',
      'Deoghar',
      'Hazaribagh'
    ]
  },
  {
    name: 'Karnataka',
    type: 'State',
    code: 'KA',
    majorCities: [
      'Bengaluru',
      'Mysuru',
      'Mangaluru',
      'Hubballi-Dharwad',
      'Belagavi',
      'Shivamogga',
      'Udupi',
      'Ballari',
      'Davangere'
    ]
  },
  {
    name: 'Kerala',
    type: 'State',
    code: 'KL',
    majorCities: [
      'Kochi',
      'Thiruvananthapuram',
      'Kozhikode',
      'Thrissur',
      'Kollam',
      'Alappuzha',
      'Kannur',
      'Palakkad',
      'Munnar'
    ]
  },
  {
    name: 'Madhya Pradesh',
    type: 'State',
    code: 'MP',
    majorCities: [
      'Indore',
      'Bhopal',
      'Gwalior',
      'Jabalpur',
      'Ujjain',
      'Sagar',
      'Dewas',
      'Satna'
    ]
  },
  {
    name: 'Maharashtra',
    type: 'State',
    code: 'MH',
    majorCities: [
      'Mumbai',
      'Pune',
      'Nagpur',
      'Nashik',
      'Thane',
      'Chhatrapati Sambhajinagar (Aurangabad)',
      'Solapur',
      'Navi Mumbai',
      'Kolhapur',
      'Lonavala'
    ]
  },
  {
    name: 'Manipur',
    type: 'State',
    code: 'MN',
    majorCities: ['Imphal', 'Churachandpur', 'Thoubal', 'Ukhrul', 'Bishnupur']
  },
  {
    name: 'Meghalaya',
    type: 'State',
    code: 'ML',
    majorCities: ['Shillong', 'Tura', 'Cherrapunji', 'Jowai', 'Nongpoh']
  },
  {
    name: 'Mizoram',
    type: 'State',
    code: 'MZ',
    majorCities: ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip', 'Kolasib']
  },
  {
    name: 'Nagaland',
    type: 'State',
    code: 'NL',
    majorCities: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha']
  },
  {
    name: 'Odisha',
    type: 'State',
    code: 'OD',
    majorCities: [
      'Bhubaneswar',
      'Cuttack',
      'Rourkela',
      'Puri',
      'Berhampur',
      'Sambalpur',
      'Balasore'
    ]
  },
  {
    name: 'Punjab',
    type: 'State',
    code: 'PB',
    majorCities: [
      'Amritsar',
      'Ludhiana',
      'Jalandhar',
      'Patiala',
      'Bathinda',
      'SAS Nagar (Mohali)',
      'Pathankot'
    ]
  },
  {
    name: 'Rajasthan',
    type: 'State',
    code: 'RJ',
    majorCities: [
      'Jaipur',
      'Udaipur',
      'Jodhpur',
      'Kota',
      'Ajmer',
      'Bikaner',
      'Jaisalmer',
      'Alwar',
      'Pushkar'
    ]
  },
  {
    name: 'Sikkim',
    type: 'State',
    code: 'SK',
    majorCities: ['Gangtok', 'Namchi', 'Geyzing', 'Pelling', 'Ravangla']
  },
  {
    name: 'Tamil Nadu',
    type: 'State',
    code: 'TN',
    majorCities: [
      'Chennai',
      'Coimbatore',
      'Madurai',
      'Tiruchirappalli',
      'Salem',
      'Tirunelveli',
      'Erode',
      'Vellore',
      'Ooty'
    ]
  },
  {
    name: 'Tripura',
    type: 'State',
    code: 'TR',
    majorCities: ['Agartala', 'Dharmanagar', 'Udaipur', 'Kailashahar', 'Belonia']
  },
  {
    name: 'Uttar Pradesh',
    type: 'State',
    code: 'UP',
    majorCities: [
      'Lucknow',
      'Noida',
      'Greater Noida',
      'Kanpur',
      'Varanasi',
      'Agra',
      'Prayagraj',
      'Ghaziabad',
      'Meerut',
      'Bareilly',
      'Mathura'
    ]
  },
  {
    name: 'Uttarakhand',
    type: 'State',
    code: 'UK',
    majorCities: [
      'Dehradun',
      'Haridwar',
      'Rishikesh',
      'Roorkee',
      'Nainital',
      'Haldwani',
      'Mussoorie'
    ]
  },
  {
    name: 'West Bengal',
    type: 'State',
    code: 'WB',
    majorCities: [
      'Kolkata',
      'Howrah',
      'Siliguri',
      'Durgapur',
      'Asansol',
      'Darjeeling',
      'Kharagpur'
    ]
  },

  // 8 Union Territories
  {
    name: 'Delhi',
    type: 'Union Territory',
    code: 'DL',
    majorCities: [
      'New Delhi',
      'Central Delhi / Connaught Place',
      'South Delhi / Aerocity',
      'West Delhi / Dwarka',
      'North Delhi',
      'East Delhi'
    ]
  },
  {
    name: 'Chandigarh',
    type: 'Union Territory',
    code: 'CH',
    majorCities: ['Chandigarh Sector 1-43', 'Tricity Area']
  },
  {
    name: 'Jammu and Kashmir',
    type: 'Union Territory',
    code: 'JK',
    majorCities: ['Srinagar', 'Jammu', 'Gulmarg', 'Pahalgam', 'Anantnag', 'Katra']
  },
  {
    name: 'Ladakh',
    type: 'Union Territory',
    code: 'LA',
    majorCities: ['Leh', 'Kargil', 'Nubra Valley', 'Pangong']
  },
  {
    name: 'Puducherry',
    type: 'Union Territory',
    code: 'PY',
    majorCities: ['Puducherry (White Town / City)', 'Karaikal', 'Mahe', 'Yanam']
  },
  {
    name: 'Dadra and Nagar Haveli and Daman and Diu',
    type: 'Union Territory',
    code: 'DD',
    majorCities: ['Daman', 'Diu', 'Silvassa']
  },
  {
    name: 'Andaman and Nicobar Islands',
    type: 'Union Territory',
    code: 'AN',
    majorCities: ['Port Blair', 'Havelock Island (Swaraj Dweep)', 'Neil Island']
  },
  {
    name: 'Lakshadweep',
    type: 'Union Territory',
    code: 'LD',
    majorCities: ['Kavaratti', 'Agatti Island', 'Minicoy']
  }
];

export const ALL_STATES_AND_UTS = INDIA_LOCATIONS.map((loc) => loc.name);

export function getCitiesForState(stateName: string): string[] {
  const match = INDIA_LOCATIONS.find(
    (loc) => loc.name.toLowerCase() === stateName.toLowerCase()
  );
  return match ? match.majorCities : [];
}
