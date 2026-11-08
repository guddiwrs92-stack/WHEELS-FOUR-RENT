import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  ArrowRightLeft,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  FileText,
  Info,
  ShieldCheck,
  Zap
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

interface IndiaBookingSectionProps {
  initialVehicleCategory?: string;
  initialVehicleName?: string;
}

export const IndiaBookingSection: React.FC<IndiaBookingSectionProps> = ({
  initialVehicleCategory = 'SUV',
  initialVehicleName = ''
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
    carCategory: initialVehicleCategory || 'SUV',
    vehicleName: initialVehicleName,
    rentalPurpose: 'Self Drive',
    customerName: '',
    mobileNumber: '',
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedState, setSubmittedState] = useState<{
    whatsappUrl: string;
    enquiryText: string;
  } | null>(null);

  // Dynamic Cities list based on selected state
  const pickupCities = useMemo(() => {
    return getCitiesForState(formData.pickupState);
  }, [formData.pickupState]);

  const dropoffCities = useMemo(() => {
    return getCitiesForState(formData.dropoffState);
  }, [formData.dropoffState]);

  const handleStateChange = (field: 'pickupState' | 'dropoffState', stateName: string) => {
    const cityField = field === 'pickupState' ? 'pickupCity' : 'dropoffCity';
    const availableCities = getCitiesForState(stateName);
    setFormData((prev) => ({
      ...prev,
      [field]: stateName,
      // Default to first city if available, otherwise blank
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

  const times = [
    '06:00 AM',
    '08:00 AM',
    '10:00 AM',
    '12:00 PM',
    '02:00 PM',
    '04:00 PM',
    '06:00 PM',
    '08:00 PM',
    '10:00 PM',
    '11:59 PM (Late Night)'
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.pickupState) {
      errs.pickupState = 'Pickup state is required.';
    }

    if (!formData.dropoffState) {
      errs.dropoffState = 'Drop-off state is required.';
    }

    if (!formData.customerName.trim()) {
      errs.customerName = 'Please enter your full name.';
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanPhone) {
      errs.mobileNumber = 'Mobile number is required.';
    } else if (cleanPhone.length < 10) {
      errs.mobileNumber = 'Enter a valid 10-digit mobile number.';
    }

    if (!formData.pickupDate) {
      errs.pickupDate = 'Pickup date is required.';
    }

    if (!formData.returnDate) {
      errs.returnDate = 'Return date is required.';
    } else if (formData.returnDate < formData.pickupDate) {
      errs.returnDate = 'Return date cannot be before pickup date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = formatIndiaWhatsAppEnquiry(formData);
    const link = generateWhatsAppLink(message);

    setSubmittedState({
      whatsappUrl: link,
      enquiryText: message
    });

    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="booking"
      className="relative z-20 py-20 lg:py-28 bg-[#090A0C] border-y border-hairline overflow-hidden"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-hairline">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-tech uppercase tracking-[0.2em] text-[#C7F36B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B]" />
              <span>NATIONWIDE CAR ENQUIRY &middot; ALL 28 STATES &amp; 8 UTs</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#F4F2ED] uppercase tracking-[-0.02em] leading-none">
              CHECK AVAILABILITY. <br />
              <span className="text-[#C7F36B]">GET YOUR QUOTE.</span>
            </h2>

            <p className="text-base text-[#A8ADB5] mt-3 font-light">
              "Tell us where you're headed. We'll help you find the right car."
            </p>
          </div>

          {/* Business Transparency Notice Card */}
          <div className="lg:max-w-xs p-4 bg-[#15171B] border border-hairline text-xs text-[#A8ADB5] space-y-1.5 self-start lg:self-auto">
            <div className="flex items-center gap-1.5 text-[#F4F2ED] font-tech uppercase tracking-wider text-[11px]">
              <Info className="w-3.5 h-3.5 text-[#C7F36B]" />
              <span>Transparent Quote Request</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Our dispatch team verifies route feasibility, driver allocation, and fleet
              availability prior to issuing your verified booking voucher.
            </p>
          </div>
        </div>

        {submittedState ? (
          /* Submission Confirmation Feedback */
          <div className="p-8 sm:p-12 bg-[#15171B] border border-[#C7F36B]/50 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-none bg-[#C7F36B]/10 border border-[#C7F36B] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#C7F36B]" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-tech uppercase tracking-widest text-[#C7F36B]">
                  REQUEST DISPATCHED VIA WHATSAPP
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F2ED]">
                  THANK YOU, {formData.customerName.toUpperCase()}
                </h3>
                <p className="text-sm text-[#A8ADB5] max-w-2xl leading-relaxed">
                  We have prepared your journey quote for route{' '}
                  <strong className="text-[#F4F2ED]">
                    {formData.pickupCity || formData.pickupState} &rarr;{' '}
                    {formData.dropoffCity || formData.dropoffState}
                  </strong>{' '}
                  ({formData.carCategory} &middot; {formData.rentalPurpose}).
                </p>
                <div className="p-3 bg-[#090A0C] border border-hairline text-xs text-[#C7F36B] font-tech">
                  Our team will contact you to confirm vehicle availability and provide your rental quote.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-hairline">
              <a
                href={submittedState.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C7F36B] hover:bg-[#D4F788] text-[#090A0C] font-tech font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Re-Open WhatsApp Chat</span>
              </a>

              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1F2228] hover:bg-neutral-800 text-[#F4F2ED] border border-hairline-light font-tech font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C7F36B]" />
                <span>Call Hotline: {PRIMARY_PHONE_DISPLAY}</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmittedState(null)}
                className="text-xs font-tech uppercase tracking-wider text-[#A8ADB5] hover:text-[#F4F2ED] px-4 py-2"
              >
                Edit Itinerary
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-10">
            {/* 1. ROUTE / LOCATIONS SECTION */}
            <div className="p-6 sm:p-8 bg-[#15171B] border border-hairline space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-hairline">
                <span className="text-xs font-tech uppercase tracking-[0.18em] text-[#C7F36B] flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5" />
                  <span>01 // SELECT PICKUP &amp; DROP-OFF DESTINATIONS (ALL INDIA)</span>
                </span>

                <button
                  type="button"
                  onClick={handleSwapLocations}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#090A0C] hover:bg-[#1F2228] border border-hairline text-[11px] font-tech uppercase tracking-wider text-[#C7F36B] transition-colors"
                  title="Swap Pickup and Drop-off locations"
                >
                  <ArrowRightLeft className="w-3 h-3" />
                  <span>Swap Route</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {/* Pickup Location Group */}
                <div className="space-y-4 p-4 bg-[#090A0C]/70 border border-hairline">
                  <span className="text-[10px] font-tech uppercase tracking-widest text-[#C7F36B]">
                    PICKUP ORIGIN
                  </span>

                  <SearchableLocationSelect
                    label="State / Union Territory *"
                    placeholder="Select Indian State or UT..."
                    options={ALL_STATES_AND_UTS}
                    value={formData.pickupState}
                    onChange={(st) => handleStateChange('pickupState', st)}
                  />
                  {errors.pickupState && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.pickupState}</span>
                    </p>
                  )}

                  <SearchableLocationSelect
                    label="Pickup City (Optional / Specific)"
                    placeholder="Select or search city in state..."
                    options={pickupCities}
                    value={formData.pickupCity}
                    onChange={(city) =>
                      setFormData((prev) => ({ ...prev, pickupCity: city }))
                    }
                    emptyNotice="No predefined cities; state-level quote applies"
                  />
                </div>

                {/* Drop-off Location Group */}
                <div className="space-y-4 p-4 bg-[#090A0C]/70 border border-hairline">
                  <span className="text-[10px] font-tech uppercase tracking-widest text-[#C7F36B]">
                    DROP-OFF DESTINATION
                  </span>

                  <SearchableLocationSelect
                    label="State / Union Territory *"
                    placeholder="Select Indian State or UT..."
                    options={ALL_STATES_AND_UTS}
                    value={formData.dropoffState}
                    onChange={(st) => handleStateChange('dropoffState', st)}
                  />
                  {errors.dropoffState && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.dropoffState}</span>
                    </p>
                  )}

                  <SearchableLocationSelect
                    label="Drop-off City (Optional / Specific)"
                    placeholder="Select or search city in state..."
                    options={dropoffCities}
                    value={formData.dropoffCity}
                    onChange={(city) =>
                      setFormData((prev) => ({ ...prev, dropoffCity: city }))
                    }
                    emptyNotice="No predefined cities; state-level quote applies"
                  />
                </div>
              </div>
            </div>

            {/* 2. DATES & SCHEDULE */}
            <div className="p-6 sm:p-8 bg-[#15171B] border border-hairline space-y-6">
              <span className="text-xs font-tech uppercase tracking-[0.18em] text-[#C7F36B] flex items-center gap-2 pb-3 border-b border-hairline">
                <Calendar className="w-3.5 h-3.5" />
                <span>02 // ITINERARY SCHEDULE</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Pickup Date */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-tech uppercase tracking-wider text-[#A8ADB5]">
                    <Calendar className="w-3 h-3 text-[#C7F36B]" />
                    <span>Pickup Date *</span>
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={formData.pickupDate}
                    onChange={(e) =>
                      setFormData({ ...formData, pickupDate: e.target.value })
                    }
                    className="w-full bg-[#090A0C] border border-hairline px-3.5 py-3 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B] scheme-dark"
                  />
                  {errors.pickupDate && (
                    <p className="text-[10px] text-rose-400">{errors.pickupDate}</p>
                  )}
                </div>

                {/* Pickup Time */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-tech uppercase tracking-wider text-[#A8ADB5]">
                    <Clock className="w-3 h-3 text-[#C7F36B]" />
                    <span>Pickup Time</span>
                  </label>
                  <select
                    value={formData.pickupTime}
                    onChange={(e) =>
                      setFormData({ ...formData, pickupTime: e.target.value })
                    }
                    className="w-full bg-[#090A0C] border border-hairline px-3.5 py-3 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B]"
                  >
                    {times.map((t) => (
                      <option key={t} value={t} className="bg-[#15171B]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Return Date */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-tech uppercase tracking-wider text-[#A8ADB5]">
                    <Calendar className="w-3 h-3 text-[#C7F36B]" />
                    <span>Return Date *</span>
                  </label>
                  <input
                    type="date"
                    min={formData.pickupDate || today}
                    value={formData.returnDate}
                    onChange={(e) =>
                      setFormData({ ...formData, returnDate: e.target.value })
                    }
                    className="w-full bg-[#090A0C] border border-hairline px-3.5 py-3 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B] scheme-dark"
                  />
                  {errors.returnDate && (
                    <p className="text-[10px] text-rose-400">{errors.returnDate}</p>
                  )}
                </div>

                {/* Return Time */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-tech uppercase tracking-wider text-[#A8ADB5]">
                    <Clock className="w-3 h-3 text-[#C7F36B]" />
                    <span>Return Time</span>
                  </label>
                  <select
                    value={formData.returnTime}
                    onChange={(e) =>
                      setFormData({ ...formData, returnTime: e.target.value })
                    }
                    className="w-full bg-[#090A0C] border border-hairline px-3.5 py-3 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B]"
                  >
                    {times.map((t) => (
                      <option key={t} value={t} className="bg-[#15171B]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 3. CAR REQUIREMENTS & PURPOSE */}
            <div className="p-6 sm:p-8 bg-[#15171B] border border-hairline space-y-6">
              <span className="text-xs font-tech uppercase tracking-[0.18em] text-[#C7F36B] flex items-center gap-2 pb-3 border-b border-hairline">
                <Car className="w-3.5 h-3.5" />
                <span>03 // CAR REQUIREMENTS &amp; RENTAL PURPOSE</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Category */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-tech uppercase tracking-wider text-[#A8ADB5]">
                    Car Category Preferred *
                  </label>
                  <select
                    value={formData.carCategory}
                    onChange={(e) =>
                      setFormData({ ...formData, carCategory: e.target.value })
                    }
                    className="w-full bg-[#090A0C] border border-hairline px-3.5 py-3 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B]"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c} className="bg-[#15171B]">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rental Purpose */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-tech uppercase tracking-wider text-[#A8ADB5]">
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
                    className="w-full bg-[#090A0C] border border-hairline px-3.5 py-3 text-xs text-[#F4F2ED] focus:outline-none focus:border-[#C7F36B]"
                  >
                    {purposes.map((p) => (
                      <option key={p} value={p} className="bg-[#15171B]">
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Specific Model (if selected) */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-tech uppercase tracking-wider text-[#A8ADB5]">
                    Specific Model Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rolls-Royce Ghost / Range Rover"
                    value={formData.vehicleName}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleName: e.target.value })
                    }
                    className="w-full bg-[#090A0C] border border-hairline px-3.5 py-3 text-xs text-[#F4F2ED] placeholder:text-[#717680] focus:outline-none focus:border-[#C7F36B]"
                  />
                </div>
              </div>
            </div>

            {/* 4. CUSTOMER DETAILS & NOTES */}
            <div className="p-6 sm:p-8 bg-[#15171B] border border-hairline space-y-6">
              <span className="text-xs font-tech uppercase tracking-[0.18em] text-[#C7F36B] flex items-center gap-2 pb-3 border-b border-hairline">
                <User className="w-3.5 h-3.5" />
                <span>04 // CUSTOMER INFORMATION</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-tech uppercase tracking-wider text-[#A8ADB5]">
                    <User className="w-3 h-3 text-[#C7F36B]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full legal name"
                    value={formData.customerName}
                    onChange={(e) =>
                      setFormData({ ...formData, customerName: e.target.value })
                    }
                    className={`w-full bg-[#090A0C] border px-3.5 py-3 text-xs text-[#F4F2ED] placeholder:text-[#717680] focus:outline-none ${
                      errors.customerName
                        ? 'border-rose-500'
                        : 'border-hairline focus:border-[#C7F36B]'
                    }`}
                  />
                  {errors.customerName && (
                    <p className="text-[10px] text-rose-400">{errors.customerName}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-tech uppercase tracking-wider text-[#A8ADB5]">
                    <Phone className="w-3 h-3 text-[#C7F36B]" />
                    <span>Mobile Number (WhatsApp Enabled) *</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-tech text-[#A8ADB5]">
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
                      className={`w-full bg-[#090A0C] border pl-12 pr-3.5 py-3 text-xs text-[#F4F2ED] placeholder:text-[#717680] focus:outline-none ${
                        errors.mobileNumber
                          ? 'border-rose-500'
                          : 'border-hairline focus:border-[#C7F36B]'
                      }`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="text-[10px] text-rose-400">{errors.mobileNumber}</p>
                  )}
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] font-tech uppercase tracking-wider text-[#A8ADB5]">
                    <FileText className="w-3 h-3 text-[#C7F36B]" />
                    <span>Optional Additional Requirements (Decor, Luggage, Chauffeur, Driver Permit)</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Provide any specific route requirements, film camera mounting, wedding floral decorations, or multi-car convoy requirements..."
                    value={formData.additionalRequirements}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalRequirements: e.target.value
                      })
                    }
                    className="w-full bg-[#090A0C] border border-hairline px-3.5 py-2.5 text-xs text-[#F4F2ED] placeholder:text-[#717680] focus:outline-none focus:border-[#C7F36B] resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="p-6 sm:p-8 bg-[#15171B] border border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-tech uppercase tracking-wider text-[#F4F2ED]">
                  <ShieldCheck className="w-4 h-4 text-[#C7F36B]" />
                  <span>Transparent Quote &amp; Dispatch Protocol</span>
                </div>
                <p className="text-[11px] text-[#A8ADB5] max-w-xl">
                  * Our team will contact you to confirm vehicle availability and provide your rental quote.
                  No advance fees required to generate enquiry.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#090A0C] hover:bg-[#1F2228] text-[#F4F2ED] border border-hairline font-tech font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C7F36B]" />
                  <span>Call Directly</span>
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C7F36B] hover:bg-[#D4F788] text-[#090A0C] font-tech font-black text-xs uppercase tracking-[0.16em] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#C7F36B]/20"
                >
                  <span>GET MY QUOTE</span>
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
