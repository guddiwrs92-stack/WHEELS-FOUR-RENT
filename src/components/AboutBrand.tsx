import React from 'react';
import { MapPin, Clock, Award, Shield, ArrowUpRight } from 'lucide-react';
import { BUSINESS_ADDRESS } from '../utils/whatsapp';

interface AboutBrandProps {
  onCheckAvailability: () => void;
}

export const AboutBrand: React.FC<AboutBrandProps> = ({ onCheckAvailability }) => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#090A0C] border-b border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Photographic Composition (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] bg-[#15171B] border border-hairline overflow-hidden shadow-2xl">
              <img
                src="/src/assets/images/car_wedding_luxury_1794141123519.jpg"
                alt="Wheels Four Rent Hyderabad Fleet Heritage"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent pointer-events-none" />

              {/* Geographic Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#090A0C]/90 backdrop-blur-md border border-hairline flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-tech uppercase tracking-widest text-[#C7F36B] block">
                    FLEET DISPATCH BASE
                  </span>
                  <p className="text-xs sm:text-sm font-tech font-bold text-[#F4F2ED]">
                    Shaikpet Flyover &middot; Gachibowli &middot; Hyderabad
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-tech uppercase tracking-widest text-[#A8ADB5] block">
                    OPERATIONAL TIMING
                  </span>
                  <p className="text-xs sm:text-sm font-tech font-bold text-[#C7F36B]">
                    24/7 Availability
                  </p>
                </div>
              </div>
            </div>

            {/* Accent Floating Border Element */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C7F36B]/60 pointer-events-none" />
          </div>

          {/* Narrative Content Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-xs font-tech uppercase tracking-[0.2em] text-[#C7F36B]">
                <span className="w-2 h-2 rounded-full bg-[#C7F36B]" />
                <span>BRAND MANIFESTO</span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-6xl text-[#F4F2ED] uppercase tracking-[-0.02em] leading-[0.92]">
                MORE THAN A RIDE. <br />
                <span className="text-[#C7F36B]">IT'S YOUR JOURNEY.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#F4F2ED] font-light leading-relaxed">
              "Wheels Four Rent brings convenient car rental solutions for every occasion.
              Whether it's a personal journey, wedding celebration, film production or corporate event,
              we help you find the right vehicle for the moment."
            </p>

            <p className="text-xs sm:text-sm text-[#A8ADB5] leading-relaxed font-light">
              Centrally situated alongside the Shaikpet Flyover near Gachibowli, we are located
              at the crossroads of Hyderabad’s technological corridor and historical royal elegance.
              From high-tempo startup founders in HITEC City to multi-day destination wedding entourages,
              we deliver meticulously inspected cars on demand.
            </p>

            {/* Technical Trust Indicators */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-hairline">
              <div className="p-3 bg-[#15171B] border border-hairline">
                <span className="text-xs font-tech font-bold text-[#F4F2ED] block">
                  100% VERIFIED FLEET
                </span>
                <span className="text-[11px] text-[#A8ADB5] font-light mt-0.5 block">
                  Mechanical, safety &amp; interior sanitization audits.
                </span>
              </div>

              <div className="p-3 bg-[#15171B] border border-hairline">
                <span className="text-xs font-tech font-bold text-[#F4F2ED] block">
                  ZERO PAPER FRICTION
                </span>
                <span className="text-[11px] text-[#A8ADB5] font-light mt-0.5 block">
                  Digital KYC verification &amp; instant booking handoff.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onCheckAvailability}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C7F36B] hover:bg-[#D4F788] text-[#090A0C] font-tech font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>REQUEST YOUR TRIP QUOTE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
