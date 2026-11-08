import React, { useState } from 'react';
import {
  X,
  Users,
  Gauge,
  Fuel,
  Check,
  ShieldCheck,
  Phone,
  MessageSquare,
  Zap,
  Calendar,
  Sparkles
} from 'lucide-react';
import { Vehicle } from '../types';
import {
  PRIMARY_PHONE,
  PRIMARY_PHONE_DISPLAY,
  openWhatsAppChat
} from '../utils/whatsapp';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onRequestQuote: (vehicle: Vehicle) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
  onRequestQuote
}) => {
  const [imgError, setImgError] = useState(false);

  if (!vehicle) return null;

  const handleWhatsAppEnquiry = () => {
    const text = `Hello Wheels Four Rent! I would like to request an editorial rental quote for *${vehicle.name}* (${vehicle.category}). Please share availability for my dates.`;
    openWhatsAppChat(text);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#090A0C] border border-hairline-light shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-hairline bg-[#15171B]">
          <div className="flex items-center gap-3 text-xs font-tech uppercase tracking-[0.2em] text-[#C7F36B]">
            <span>{vehicle.category}</span>
            <span className="text-neutral-700">|</span>
            <span className="text-[#A8ADB5] font-normal">TECHNICAL SPECIFICATION</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#A8ADB5] hover:text-[#C7F36B] hover:bg-[#1F2228] transition-colors"
            aria-label="Close vehicle details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Visual Showcase */}
          <div className="relative aspect-[16/9] overflow-hidden bg-[#15171B] border border-hairline">
            {!imgError ? (
              <img
                src={vehicle.image}
                alt={vehicle.name}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#15171B] text-[#A8ADB5] p-6 text-center">
                <Sparkles className="w-10 h-10 text-[#C7F36B] mb-2" />
                <p className="text-sm font-medium text-[#F4F2ED]">{vehicle.name}</p>
                <p className="text-xs text-[#A8ADB5]">Wheels Four Rent Verified Vehicle</p>
              </div>
            )}

            <div className="absolute top-4 left-4 px-3 py-1 bg-[#090A0C]/90 backdrop-blur-md text-xs font-tech font-bold uppercase tracking-widest text-[#C7F36B] border border-hairline">
              {vehicle.categoryTag || vehicle.category}
            </div>

            <div className="absolute bottom-4 right-4 px-4 py-1.5 bg-[#090A0C]/90 backdrop-blur-md text-xs font-tech font-bold text-[#F4F2ED] border border-hairline">
              {vehicle.rentalPrice}
            </div>
          </div>

          {/* Model Title & Tagline */}
          <div className="space-y-1">
            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#F4F2ED] uppercase tracking-tight">
              {vehicle.name}
            </h3>
            <p className="text-sm text-[#C7F36B] font-tech">{vehicle.tagline}</p>
          </div>

          {/* Technical Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-[#15171B] border border-hairline">
              <div className="flex items-center gap-1.5 text-[11px] font-tech uppercase text-[#A8ADB5] mb-1">
                <Users className="w-3.5 h-3.5 text-[#C7F36B]" />
                <span>Seating</span>
              </div>
              <p className="text-sm font-bold text-[#F4F2ED]">
                {vehicle.seatingCapacity} Passengers
              </p>
            </div>

            <div className="p-3.5 bg-[#15171B] border border-hairline">
              <div className="flex items-center gap-1.5 text-[11px] font-tech uppercase text-[#A8ADB5] mb-1">
                <Gauge className="w-3.5 h-3.5 text-[#C7F36B]" />
                <span>Transmission</span>
              </div>
              <p className="text-sm font-bold text-[#F4F2ED]">
                {vehicle.transmission}
              </p>
            </div>

            <div className="p-3.5 bg-[#15171B] border border-hairline">
              <div className="flex items-center gap-1.5 text-[11px] font-tech uppercase text-[#A8ADB5] mb-1">
                <Fuel className="w-3.5 h-3.5 text-[#C7F36B]" />
                <span>Fuel Type</span>
              </div>
              <p className="text-sm font-bold text-[#F4F2ED]">
                {vehicle.fuelType}
              </p>
            </div>

            <div className="p-3.5 bg-[#15171B] border border-hairline">
              <div className="flex items-center gap-1.5 text-[11px] font-tech uppercase text-[#A8ADB5] mb-1">
                <Zap className="w-3.5 h-3.5 text-[#C7F36B]" />
                <span>Performance</span>
              </div>
              <p className="text-sm font-bold text-[#C7F36B]">
                {vehicle.power || vehicle.acceleration || 'Flagship Grade'}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-tech uppercase tracking-[0.2em] text-[#A8ADB5]">
              OVERVIEW &amp; VEHICLE PROFILE
            </h4>
            <p className="text-sm text-[#F4F2ED] leading-relaxed font-light">
              {vehicle.description}
            </p>
          </div>

          {/* Amenities & Protocol */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-tech uppercase tracking-[0.2em] text-[#A8ADB5]">
              INCLUDED PROTOCOL &amp; FLEET AMENITIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {vehicle.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 text-xs text-[#F4F2ED] p-2.5 bg-[#15171B] border border-hairline"
                >
                  <Check className="w-3.5 h-3.5 text-[#C7F36B] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Usage Tag */}
          <div className="p-4 bg-[#15171B] border-l-2 border-[#C7F36B] text-xs text-[#A8ADB5]">
            <span className="font-tech uppercase text-[#C7F36B] font-semibold">
              OPTIMAL USE CASE:
            </span>{' '}
            <span className="text-[#F4F2ED]">{vehicle.recommendedFor}</span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-hairline bg-[#15171B] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="inline-flex items-center gap-2 px-4 py-3 bg-[#090A0C] hover:bg-[#1F2228] text-xs font-tech uppercase tracking-wider text-[#F4F2ED] border border-hairline transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7F36B]" />
              <span>Call: {PRIMARY_PHONE_DISPLAY}</span>
            </a>
            <button
              onClick={handleWhatsAppEnquiry}
              className="inline-flex items-center gap-2 px-4 py-3 bg-[#1F2228] hover:bg-neutral-800 text-xs font-tech uppercase tracking-wider text-[#C7F36B] border border-hairline transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(vehicle);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#C7F36B] hover:bg-[#D4F788] text-[#090A0C] font-tech font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>REQUEST A QUOTE</span>
          </button>
        </div>
      </div>
    </div>
  );
};
