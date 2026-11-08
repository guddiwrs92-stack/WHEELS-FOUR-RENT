import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

interface WhyWheelsFourRentProps {
  onCheckAvailability: () => void;
}

export const WhyWheelsFourRent: React.FC<WhyWheelsFourRentProps> = ({
  onCheckAvailability
}) => {
  const pillars = [
    {
      num: '01',
      title: '24/7 SERVICE',
      subtitle: 'ROUND-THE-CLOCK OPERATIONS',
      desc: 'Day or night fleet dispatch, urgent flight arrivals, and late-night emergency replacement coordination anywhere across Hyderabad.',
      tag: 'OPERATIONAL 24/7/365'
    },
    {
      num: '02',
      title: 'MULTIPLE VEHICLE CATEGORIES',
      subtitle: 'FROM CITY HATCHBACKS TO V12 SALOONS',
      desc: 'An expansive spectrum of mobility spanning fuel-efficient daily hatchbacks, mid-size sedans, 7-seater family SUVs, to rare supercars.',
      tag: '5 DISTINCT SEGMENTS'
    },
    {
      num: '03',
      title: 'FLEXIBLE RENTAL ENQUIRIES',
      subtitle: 'ADAPTIVE TIME & DISTANCE PACKAGES',
      desc: 'Whether you require half-day film camera shifts, weekly corporate delegations, or monthly personal leases, we adapt tariff structures to you.',
      tag: 'TAILORED QUOTES'
    },
    {
      num: '04',
      title: 'WEDDING & EVENT SOLUTIONS',
      subtitle: 'CEREMONIAL LUXURY & VIP CONVOYS',
      desc: 'White-glove chauffeur protocol, tasteful floral and ribbon decorations, and synchronized multi-vehicle convoys for dignitaries.',
      tag: 'CEREMONIAL PROTOCOL'
    },
    {
      num: '05',
      title: 'INDIA-WIDE LOCATION ENQUIRIES',
      subtitle: 'CROSS-STATE TRAVEL QUOTES',
      desc: 'Request car rental quotes connecting Hyderabad with all 28 states and 8 union territories. Route feasibility confirmed by team.',
      tag: 'ALL 36 STATES & UTS'
    }
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#090A0C] border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-hairline">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-tech uppercase tracking-[0.2em] text-[#C7F36B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B]" />
              <span>THE FIVE PILLARS OF DISTINCTION</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-[#F4F2ED] uppercase tracking-[-0.03em] leading-none">
              WHY WHEELS FOUR RENT.
            </h2>
          </div>

          <p className="text-base text-[#A8ADB5] font-light max-w-md">
            Architected for discerning clients who value automotive reliability,
            transparent terms, and refined personal mobility.
          </p>
        </div>

        {/* Oversized Numbered Editorial List (Non-Generic Card Flow) */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="py-10 lg:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-baseline group hover:bg-[#15171B]/50 px-4 transition-colors duration-300"
            >
              {/* Oversized Number Display */}
              <div className="md:col-span-2">
                <span className="font-display font-black text-6xl sm:text-7xl text-[#A8ADB5]/40 group-hover:text-[#C7F36B] transition-colors leading-none">
                  {item.num}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="md:col-span-5 space-y-1">
                <span className="text-[10px] font-tech uppercase tracking-[0.2em] text-[#C7F36B] block">
                  {item.subtitle}
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-[#F4F2ED] uppercase tracking-tight leading-none group-hover:text-[#C7F36B] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Narrative & Tag */}
              <div className="md:col-span-5 space-y-3">
                <p className="text-sm text-[#A8ADB5] font-light leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] font-tech uppercase tracking-widest text-[#F4F2ED] px-2 py-0.5 bg-[#15171B] border border-hairline">
                    {item.tag}
                  </span>

                  <button
                    onClick={onCheckAvailability}
                    className="inline-flex items-center gap-1 text-[11px] font-tech uppercase tracking-wider text-[#C7F36B] hover:text-[#D4F788] transition-colors"
                  >
                    <span>ENQUIRE ROUTE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Disclaimer on Nationwide Service Coverage */}
        <div className="mt-8 p-4 bg-[#15171B] border border-hairline flex items-center gap-3 text-xs text-[#A8ADB5]">
          <ShieldCheck className="w-4 h-4 text-[#C7F36B] shrink-0" />
          <span>
            <strong className="text-[#F4F2ED]">Service Policy Note:</strong> India-wide location
            selection is for itinerary enquiries; final service coverage, inter-state transit permits,
            and driver staging are subject to confirmation by Wheels Four Rent dispatch control.
          </span>
        </div>
      </div>
    </section>
  );
};
