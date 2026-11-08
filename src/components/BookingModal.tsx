import React, { useState, useMemo } from 'react';
import {
  X,
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  ArrowRightLeft,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  FileText
} from 'lucide-react';
import { ALL_STATES_AND_UTS, getCitiesForState } from '../data/indiaLocations';
import { IndiaBookingEnquiry, RentalPurpose } from '../types';
import {
  PRIMARY_PHONE,
  PRIMARY_PHONE_DISPLAY,
  formatIndiaWhatsAppEnquiry,
  generateWhatsAppLink
} from '../utils/whatsapp';
import { SearchableLocationSelect } from './SearchableLocationSelect';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
  preselectedVehicleName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedCategory = 'SUV',
  preselectedVehicleName = ''
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState<IndiaBookingEnquiry>({
    pickupState: 'Telangana',
    pickupCity: 'Hyderabad (Headquarters & Dispatch Base)',
    dropoffState: 'Telangana',
    dropoffCity: 'Hyderabad (Headquarters & Dispatch Base)',
    pickupDate: today,
    pickupTime: '10:00 AM',
    returnDate: tomorrow,
    returnTime: '08:00 PM',
    carCategory: preselectedCategory || 'SUV',
    vehicleName: preselectedVehicleName,
    rentalPurpose: 'Self Drive',
    customerName: '',
    mobileNumber: '',
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedState, setSubmittedState] = useState<{
    whatsappUrl: string;
  } | null>(null);

  const pickupCities = useMemo(() => {
    return getCitiesForState(formData.pickupState);
  }, [formData.pickupState]);

  const dropoffCities = useMemo(() => {
    return getCitiesForState(formData.dropoffState);
  }, [formData.dropoffState]);

  if (!isOpen) return null;

  const handleStateChange = (field: 'pickupState' | 'dropoffState', stateName: string) => {
    const cityField = field === 'pickupState' ? 'pickupCity' : 'dropoffCity';
    const availableCities = getCitiesForState(stateName);
    setFormData((prev) => ({
      ...prev,
      [field]: stateName,
      [cityField]: availableCities[0] || ''
    }));
  };

  const handleSwapLocations = () => {
    setFormData((prev) => ({
      ...prev,
      pickupState: prev.dropoffState,
      pickupCity: prev.dropoffCity,
      dropoffState: prev.pickupState,
      dropoffCity: prev.pickupCity
    }));
  };

  const categories = [
    'Hatchback',
    'Sedan',
    'SUV',
    'Luxury',
    'Premium',
    'No preference'
  ];

  const purposes: RentalPurpose[] = [
    'Self Drive',
    'Wedding',
    'Shooting / Film Production',
    'Event',
    'Corporate',
    'Personal Travel',
    'Other'
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      errs.customerName = 'Please enter your name.';
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.mobileNumber = 'Enter a valid 10-digit mobile number.';
    }

    if (!formData.pickupDate) {
      errs.pickupDate = 'Pickup date is required.';
    }

    if (!formData.returnDate) {
      errs.returnDate = 'Return date is required.';
    } else if (formData.returnDate < formData.pickupDate) {
      errs.returnDate = 'Return date must be on or after pickup.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = formatIndiaWhatsAppEnquiry(formData);
    const link = generateWhatsAppLink(message);

    setSubmittedState({ whatsappUrl: link });
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#090A0C] border border-hairline-light shadow-2xl overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-hairline bg-[#15171B]">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-tech uppercase tracking-[0.2em] text-[#C7F36B]">
              <span className="w-1.5 h-1.5 rounded-none bg-[#C7F36B]" />
              <span>NATIONWIDE QUOTE REQUEST &middot; HYDERABAD DISPATCH</span>
            </div>
            <h3 className="font-display font-black text-2xl text-[#F4F2ED] uppercase tracking-tight mt-0.5">
              CHECK AVAILABILITY &middot; GET QUOTE
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#A8ADB5] hover:text-[#C7F36B] hover:bg-[#1F2228] transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {submittedState ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-none bg-[#C7F36B]/10 border border-[#C7F36B] text-[#C7F36B] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-display font-black text-2xl text-[#F4F2ED] uppercase">
                ENQUIRY DISPATCHED VIA WHATSAPP
              </h4>
              <p className="text-xs text-[#A8ADB5] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#F4F2ED]">{formData.customerName}</strong>!
                We prepared your itinerary route from{' '}
                <strong className="text-[#C7F36B]">{formData.pickupCity || formData.pickupState}</strong> to{' '}
                <strong className="text-[#C7F36B]">{formData.dropoffCity || formData.dropoffState}</strong>.
              </p>
              <div className="p-3 bg-[#15171B] border border-hairline text-xs font-tech text-[#C7F36B] max-w-md mx-auto">
                * Our team will contact you to confirm vehicle availability and provide your rental quote.
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={submittedState.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C7F36B] hover:bg-[#D4F788] text-[#090A0C] font-tech font-bold text-xs uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp</span>
                </a>
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#15171B] hover:bg-[#1F2228] text-[#F4F2ED] border border-hairline font-tech font-bold text-xs uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4 text-[#C7F36B]" />
                  <span>Call {PRIMARY_PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Pickup and Dropoff Origin */}
              <div className="p-4 bg-[#15171B] border border-hairline space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-hairline">
                  <span className="text-[10px] font-tech uppercase tracking-widest text-[#C7F36B]">
                    01 // ITINERARY ORIGIN &amp; DESTINATION
                  </span>
                  <button
                    type="button"
                    onClick={handleSwapLocations}
                    className="inline-flex items-center gap-1 text-[10px] font-tech uppercase text-[#C7F36B] hover:underline"
                  >
                    <ArrowRightLeft className="w-3 h-3" />
                    <span>Swap Route</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SearchableLocationSelect
                    label="Pickup State *"
                    placeholder="Select State / UT..."
                    options={ALL_STATES_AND_UTS}
                    value={formData.pickupState}
                    onChange={(st) => handleStateChange('pickupState', st)}
                  />

                  <SearchableLocationSelect
                    label="Pickup City"
                    placeholder="Select city..."
                    options={pickupCities}
                    value={formData.pickupCity}
                    onChange={(c) => setFormData({ ...formData, pickupCity: c })}
                  />

                  <SearchableLocationSelect
                    label="Drop-off State *"
                    placeholder="Select State / UT..."
                    options={ALL_STATES_AND_UTS}
                    value={formData.dropoffState}
                    onChange={(st) => handleStateChange('dropoffState', st)}
                  />

                  <SearchableLocationSelect
                    label="Drop-off City"
                    placeholder="Select city..."
                    options={dropoffCities}
                    value={formData.dropoffCity}
                    onChange={(c) => setFormData({ ...formData, dropoffCity: c })}
                  />
                </div>
              </div>

              {/* Schedule and Requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-tech uppercase text-[#A8ADB5] block mb-1">
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={formData.pickupDate}
                    onChange={(e) =>
                      setFormData({ ...formData, pickupDate: e.target.value })
                    }
                    className="w-full bg-[#15171B] border border-hairline px-3 py-2 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B] scheme-dark"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-tech uppercase text-[#A8ADB5] block mb-1">
                    Return Date *
                  </label>
                  <input
                    type="date"
                    min={formData.pickupDate || today}
                    value={formData.returnDate}
                    onChange={(e) =>
                      setFormData({ ...formData, returnDate: e.target.value })
                    }
                    className="w-full bg-[#15171B] border border-hairline px-3 py-2 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B] scheme-dark"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-tech uppercase text-[#A8ADB5] block mb-1">
                    Car Category *
                  </label>
                  <select
                    value={formData.carCategory}
                    onChange={(e) =>
                      setFormData({ ...formData, carCategory: e.target.value })
                    }
                    className="w-full bg-[#15171B] border border-hairline px-3 py-2 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B]"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c} className="bg-[#090A0C]">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-tech uppercase text-[#A8ADB5] block mb-1">
                    Rental Purpose *
                  </label>
                  <select
                    value={formData.rentalPurpose}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        rentalPurpose: e.target.value as RentalPurpose
                      })
                    }
                    className="w-full bg-[#15171B] border border-hairline px-3 py-2 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B]"
                  >
                    {purposes.map((p) => (
                      <option key={p} value={p} className="bg-[#090A0C]">
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-tech uppercase text-[#A8ADB5] block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.customerName}
                    onChange={(e) =>
                      setFormData({ ...formData, customerName: e.target.value })
                    }
                    className="w-full bg-[#15171B] border border-hairline px-3 py-2 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B]"
                  />
                  {errors.customerName && (
                    <p className="text-[10px] text-rose-400 mt-0.5">{errors.customerName}</p>
                  )}
                </div>

                <div>
                  <label className="text-[10px] font-tech uppercase text-[#A8ADB5] block mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[11px] font-tech text-[#A8ADB5]">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="98765 43210"
                      value={formData.mobileNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mobileNumber: e.target.value.replace(/\D/g, '')
                        })
                      }
                      className="w-full bg-[#15171B] border border-hairline pl-10 pr-3 py-2 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B]"
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="text-[10px] text-rose-400 mt-0.5">{errors.mobileNumber}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-tech uppercase text-[#A8ADB5] block mb-1">
                  Specific Model or Special Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rolls Royce wedding decor / Airport pickup at RGIA"
                  value={formData.vehicleName || formData.additionalRequirements || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalRequirements: e.target.value })
                  }
                  className="w-full bg-[#15171B] border border-hairline px-3 py-2 text-xs text-[#F4F2ED] placeholder:text-[#717680] focus:outline-none focus:border-[#C7F36B]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C7F36B] hover:bg-[#D4F788] text-[#090A0C] font-tech font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#C7F36B]/20"
                >
                  SEND QUOTE REQUEST VIA WHATSAPP
                </button>
                <p className="text-[10px] text-[#A8ADB5] text-center mt-2 font-tech">
                  * Our team will contact you to confirm vehicle availability and provide your rental quote.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
