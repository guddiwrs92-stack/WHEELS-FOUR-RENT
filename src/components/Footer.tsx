import React from 'react';
import { ArrowUp, Phone, MapPin, Clock, ShieldCheck, Zap } from 'lucide-react';
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  PRIMARY_PHONE_DISPLAY,
  SECONDARY_PHONE_DISPLAY,
  BUSINESS_ADDRESS
} from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090A0C] border-t border-hairline text-[#A8ADB5] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Identity & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-[#C7F36B] flex items-center justify-center text-[#090A0C]">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <span className="font-display font-black text-2xl text-[#F4F2ED] tracking-tight uppercase">
                WHEELS <span className="text-[#C7F36B]">FOUR</span> RENT
              </span>
            </div>

            <p className="text-sm font-tech font-semibold text-[#C7F36B] tracking-wide">
              "Your Journey. Your Wheels. Your Freedom."
            </p>

            <p className="text-xs text-[#A8ADB5] leading-relaxed max-w-sm font-light">
              Premium automotive mobility in Hyderabad, India. Delivering uncompromising
              vehicle standards for self-drive expeditions, luxury wedding celebrations,
              feature film productions, and high-security corporate convoys.
            </p>

            <div className="pt-2 flex items-center gap-4 text-[11px] font-tech uppercase text-[#F4F2ED]">
              <span className="flex items-center gap-1.5 text-[#C7F36B]">
                <Clock className="w-3.5 h-3.5" />
                <span>24/7 FLEET DISPATCH</span>
              </span>
              <span className="text-neutral-700">|</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C7F36B]" />
                <span>ALL INDIA QUOTES</span>
              </span>
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-tech uppercase tracking-[0.2em] text-[#F4F2ED] block font-bold">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-tech">
              <li>
                <a href="#home" className="hover:text-[#C7F36B] transition-colors">
                  01 // HOME
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#C7F36B] transition-colors">
                  02 // CHECK AVAILABILITY
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-[#C7F36B] transition-colors">
                  03 // THE FLEET
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C7F36B] transition-colors">
                  04 // SERVICES
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#C7F36B] transition-colors">
                  05 // WHY US
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C7F36B] transition-colors">
                  06 // ABOUT
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C7F36B] transition-colors">
                  07 // CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-tech uppercase tracking-[0.2em] text-[#F4F2ED] block font-bold">
              PORTFOLIO
            </span>
            <ul className="space-y-2 text-xs font-tech">
              <li>
                <a href="#services" className="hover:text-[#C7F36B] transition-colors">
                  SELF DRIVE RENTALS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C7F36B] transition-colors">
                  WEDDING LUXURY CARS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C7F36B] transition-colors">
                  FILM &amp; SHOOTING RENTALS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C7F36B] transition-colors">
                  EVENTS &amp; CONVOYS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C7F36B] transition-colors">
                  AIRPORT RGIA TRANSFERS
                </a>
              </li>
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-tech uppercase tracking-[0.2em] text-[#F4F2ED] block font-bold">
              HEADQUARTERS
            </span>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[10px] font-tech text-[#A8ADB5]">LOCATION:</span>
                <p className="text-[#F4F2ED] font-light leading-snug mt-0.5">
                  {BUSINESS_ADDRESS}
                </p>
              </div>

              <div className="pt-1">
                <span className="text-[10px] font-tech text-[#A8ADB5]">HOTLINES:</span>
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="block font-tech font-bold text-[#F4F2ED] hover:text-[#C7F36B]"
                >
                  {PRIMARY_PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:${SECONDARY_PHONE}`}
                  className="block font-tech font-bold text-[#F4F2ED] hover:text-[#C7F36B]"
                >
                  {SECONDARY_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-tech text-[#A8ADB5]">
          <p>
            &copy; 2026 WHEELS FOUR RENT. ALL RIGHTS RESERVED. &middot; HYDERABAD, TELANGANA, INDIA.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#C7F36B] transition-colors uppercase tracking-wider"
          >
            <span>BACK TO SUMMIT</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C7F36B]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
