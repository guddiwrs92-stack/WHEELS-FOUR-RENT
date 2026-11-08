import React from 'react';
import { ArrowUpRight, Check, Compass, HeartHandshake, Film, Building2 } from 'lucide-react';
import { RentalPurpose } from '../types';

interface EditorialServicesProps {
  onSelectService: (purpose: RentalPurpose, defaultCategory: string) => void;
}

export const EditorialServices: React.FC<EditorialServicesProps> = ({
  onSelectService
}) => {
  const services = [
    {
      id: 'self-drive',
      number: '01',
      title: 'SELF DRIVE',
      tagline: 'Your route. Your rules. Your freedom.',
      purpose: 'Self Drive' as RentalPurpose,
      defaultCategory: 'SUVs',
      icon: <Compass className="w-5 h-5 text-[#C7F36B]" />,
      image: '/src/assets/images/car_self_drive_1794141125649.jpg',
      description:
        'Experience the pure visceral pleasure of being behind the steering wheel. Uncompromised mechanical freedom for personal getaways, outstation road trips, and executive self-navigation.',
      highlights: [
        'Zero Hidden Surcharges & Clear Fuel Policies',
        'Daily, Weekly & Extended Monthly Rental Tariffs',
        'Sanitized & Multi-Point Inspected Before Every Departure',
        'Flexible Outstation Driving Permits'
      ],
      metric: 'UNLIMITED KM OPTIONS',
      metricSub: 'Full Driving Autonomy'
    },
    {
      id: 'weddings',
      number: '02',
      title: 'WEDDINGS',
      tagline: 'Make an entrance worth remembering.',
      purpose: 'Wedding' as RentalPurpose,
      defaultCategory: 'Luxury Vehicles',
      icon: <HeartHandshake className="w-5 h-5 text-[#C7F36B]" />,
      image: '/src/assets/images/car_wedding_luxury_1794141123519.jpg',
      description:
        'Crown your matrimonial celebration with royalty. From Rolls-Royce and Maybach flagship saloons to multi-car guest convoys, we deliver majestic ceremonial arrivals across Hyderabad.',
      highlights: [
        'Rolls-Royce, Mercedes-Maybach & BMW Flagship Fleet',
        'Chauffeured in Formal Executive Attire',
        'Custom Fresh Floral & Ribbon Decoration Protocols',
        'Guaranteed Punctual Staging at Wedding Venues'
      ],
      metric: 'ROYAL PROTOCOL',
      metricSub: 'Bespoke Floral Decor Included'
    },
    {
      id: 'film-shooting',
      number: '03',
      title: 'SHOOTING & FILM PRODUCTION',
      tagline: 'Every frame deserves the right vehicle.',
      purpose: 'Shooting / Film Production' as RentalPurpose,
      defaultCategory: 'Premium Vehicles',
      icon: <Film className="w-5 h-5 text-[#C7F36B]" />,
      image: '/src/assets/images/car_film_shooting_1794141124560.jpg',
      description:
        'Turn cinema visions into frame-accurate reality. Serving Tollywood blockbusters, commercial advertisements, OTT web series, and music video shoots at Ramoji Film City and private locations.',
      highlights: [
        'Exotic Supercars, Vintage Classics & Luxury Convertibles',
        'Production Crew & Camera Rig Friendly Vehicles',
        'On-Set Production Logistics Handler Assigned',
        'Flexible Shift-Based & Day-Call Hire Rates'
      ],
      metric: 'TOLLYWOOD READY',
      metricSub: 'Direct Set Delivery & Support'
    },
    {
      id: 'corporate-events',
      number: '04',
      title: 'EVENTS & CORPORATE',
      tagline: 'Arrive with a presence.',
      purpose: 'Corporate' as RentalPurpose,
      defaultCategory: 'SUVs',
      icon: <Building2 className="w-5 h-5 text-[#C7F36B]" />,
      image: '/src/assets/images/car_premium_suv_1794141124090.jpg',
      description:
        'High-profile mobility solutions for summit delegations, international corporate executives, conferences in HITEC City, and celebrity entourages needing coordinated security.',
      highlights: [
        'Rajiv Gandhi International Airport (RGIA) Priority Pickups',
        'Synchronized Multi-Car Executive Fleet Convoys',
        '24/7 Dispatch Control & Dedicated Fleet Manager',
        'Corporate GST Invoicing & Institutional Priority'
      ],
      metric: '24/7 DISPATCH',
      metricSub: 'HITEC City & Gachibowli Base'
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#090A0C] border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2.5 text-xs font-tech uppercase tracking-[0.2em] text-[#C7F36B] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B]" />
            <span>EDITORIAL SERVICES &middot; MOBILITY DISPATCH</span>
          </div>
          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-[#F4F2ED] uppercase tracking-[-0.03em] leading-none">
            SERVICES.
          </h2>
          <p className="text-lg text-[#A8ADB5] mt-3 font-light">
            Every occasion requires a different statement. Explore our bespoke automotive services.
          </p>
        </div>

        {/* Four Distinct Editorial Service Compositions */}
        <div className="space-y-16">
          {services.map((srv, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={srv.id}
                className="bg-[#15171B] border border-hairline hover:border-hairline-light transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${
                    isReversed ? '' : ''
                  }`}
                >
                  {/* Visual Frame */}
                  <div
                    className={`lg:col-span-6 relative min-h-[360px] sm:min-h-[460px] bg-[#090A0C] overflow-hidden ${
                      isReversed ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={srv.image}
                      alt={srv.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter brightness-90 contrast-110 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15171B] via-transparent to-black/40 pointer-events-none" />

                    {/* Technical Metric Stamp */}
                    <div className="absolute bottom-6 left-6 z-10 p-3 bg-[#090A0C]/90 backdrop-blur-md border border-hairline">
                      <span className="text-[10px] font-tech uppercase text-[#C7F36B] block font-bold tracking-widest">
                        {srv.metric}
                      </span>
                      <span className="text-xs text-[#F4F2ED] font-light">
                        {srv.metricSub}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Content Frame */}
                  <div
                    className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8 ${
                      isReversed ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-hairline">
                        <span className="font-tech text-xs font-bold text-[#C7F36B] tracking-[0.2em]">
                          {srv.number} // SERVICE
                        </span>
                        <div className="w-8 h-8 rounded-none bg-[#090A0C] border border-hairline flex items-center justify-center">
                          {srv.icon}
                        </div>
                      </div>

                      <h3 className="font-display font-black text-4xl sm:text-5xl text-[#F4F2ED] uppercase tracking-tight leading-none">
                        {srv.title}
                      </h3>

                      <p className="text-sm font-tech text-[#C7F36B] italic">
                        "{srv.tagline}"
                      </p>

                      <p className="text-sm text-[#A8ADB5] leading-relaxed font-light pt-2">
                        {srv.description}
                      </p>

                      {/* Feature checklist with custom styling */}
                      <div className="space-y-2.5 pt-4">
                        {srv.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-center gap-3 text-xs text-[#F4F2ED] font-light"
                          >
                            <span className="w-1.5 h-1.5 rounded-none bg-[#C7F36B]" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service CTA */}
                    <div className="pt-4 border-t border-hairline flex items-center justify-between">
                      <button
                        onClick={() => onSelectService(srv.purpose, srv.defaultCategory)}
                        className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#C7F36B] hover:bg-[#D4F788] text-[#090A0C] font-tech font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#C7F36B]/15"
                      >
                        <span>GET QUOTE FOR {srv.title}</span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
