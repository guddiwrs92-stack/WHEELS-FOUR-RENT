import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  ArrowUpRight
} from 'lucide-react';
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  PRIMARY_PHONE_DISPLAY,
  SECONDARY_PHONE_DISPLAY,
  BUSINESS_ADDRESS,
  openWhatsAppChat
} from '../utils/whatsapp';

interface ContactSectionProps {
  onGetQuoteClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onGetQuoteClick }) => {
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [quickNote, setQuickNote] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleQuickEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderPhone) return;

    const message = `Hello Wheels Four Rent!\nName: ${senderName.trim()}\nPhone: ${senderPhone.trim()}\nRequest: ${
      quickNote.trim() || 'I would like to enquire about renting a car in Hyderabad / outstation.'
    }`;

    openWhatsAppChat(message);
    setSentSuccess(true);
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=Shaikpet+Flyover,+Gachibowli,+Hyderabad,+Telangana&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#090A0C] border-b border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Bold Conversion Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-10 border-b border-hairline">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-tech uppercase tracking-[0.2em] text-[#C7F36B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B]" />
              <span>DIRECT DISPATCH &middot; HYDERABAD HEADQUARTERS</span>
            </div>

            <h2 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl text-[#F4F2ED] uppercase tracking-[-0.04em] leading-[0.88]">
              READY WHEN <br />
              <span className="text-[#C7F36B]">YOU ARE.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-[#A8ADB5] mt-4 font-light">
              "Your next journey is just one conversation away."
            </p>
          </div>

          {/* Three Primary Conversion Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#15171B] hover:bg-[#1F2228] text-[#F4F2ED] border border-hairline-light font-tech font-bold text-xs uppercase tracking-wider transition-all"
            >
              <Phone className="w-4 h-4 text-[#C7F36B]" />
              <span>CALL US</span>
            </a>

            <button
              onClick={() => openWhatsAppChat()}
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#15171B] hover:bg-[#1F2228] text-[#C7F36B] border border-[#C7F36B]/40 hover:border-[#C7F36B] font-tech font-bold text-xs uppercase tracking-wider transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </button>

            <button
              onClick={onGetQuoteClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C7F36B] hover:bg-[#D4F788] text-[#090A0C] font-tech font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#C7F36B]/20"
            >
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contact Grid: Business Details & Location Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Business Information Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#15171B] border border-hairline p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-[10px] font-tech uppercase tracking-[0.2em] text-[#C7F36B] block">
                BUSINESS DOSSIER
              </span>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#F4F2ED] uppercase tracking-tight">
                WHEELS FOUR RENT
              </h3>

              <div className="space-y-4 pt-2 divide-y divide-white/[0.08]">
                {/* Phone Numbers */}
                <div className="pt-3 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#090A0C] border border-hairline flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#C7F36B]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-tech uppercase text-[#A8ADB5] block">
                      TELEPHONE DISPATCH (24/7)
                    </span>
                    <a
                      href={`tel:${PRIMARY_PHONE}`}
                      className="block text-sm sm:text-base font-tech font-bold text-[#F4F2ED] hover:text-[#C7F36B] transition-colors"
                    >
                      {PRIMARY_PHONE_DISPLAY}
                    </a>
                    <a
                      href={`tel:${SECONDARY_PHONE}`}
                      className="block text-sm sm:text-base font-tech font-bold text-[#F4F2ED] hover:text-[#C7F36B] transition-colors"
                    >
                      {SECONDARY_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="pt-3 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#090A0C] border border-hairline flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#C7F36B]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-tech uppercase text-[#A8ADB5] block">
                      FLEET LOCATION
                    </span>
                    <p className="text-xs sm:text-sm text-[#F4F2ED] font-light leading-snug mt-0.5">
                      {BUSINESS_ADDRESS}
                    </p>
                  </div>
                </div>

                {/* 24/7 Availability */}
                <div className="pt-3 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#090A0C] border border-hairline flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-[#C7F36B]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-tech uppercase text-[#A8ADB5] block">
                      AVAILABILITY STATUS
                    </span>
                    <p className="text-xs sm:text-sm font-tech font-bold text-[#C7F36B] mt-0.5">
                      24/7 SERVICES AVAILABLE
                    </p>
                    <p className="text-[11px] text-[#A8ADB5] font-light">
                      Immediate deployment across Hyderabad &amp; Telangana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Instant Message Box */}
            <div className="pt-4 border-t border-hairline">
              <span className="text-[10px] font-tech uppercase tracking-wider text-[#A8ADB5] block mb-2">
                EXPRESS INQUIRY DISPATCH
              </span>

              {sentSuccess ? (
                <div className="p-3 bg-[#090A0C] border border-[#C7F36B]/50 flex items-center gap-2 text-xs text-[#C7F36B] font-tech">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Enquiry message opened in WhatsApp!</span>
                </div>
              ) : (
                <form onSubmit={handleQuickEnquiry} className="space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="bg-[#090A0C] border border-hairline px-3 py-2 text-xs text-[#F4F2ED] placeholder:text-[#717680] focus:outline-none focus:border-[#C7F36B]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone (+91)"
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      className="bg-[#090A0C] border border-hairline px-3 py-2 text-xs text-[#F4F2ED] placeholder:text-[#717680] focus:outline-none focus:border-[#C7F36B]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Preferred car model or dates..."
                    value={quickNote}
                    onChange={(e) => setQuickNote(e.target.value)}
                    className="w-full bg-[#090A0C] border border-hairline px-3 py-2 text-xs text-[#F4F2ED] placeholder:text-[#717680] focus:outline-none focus:border-[#C7F36B]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#C7F36B] hover:bg-[#D4F788] text-[#090A0C] font-tech font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>SEND ON WHATSAPP</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Location Map Frame (7 cols) */}
          <div className="lg:col-span-7 bg-[#15171B] border border-hairline flex flex-col min-h-[440px]">
            <div className="px-6 py-4 border-b border-hairline flex items-center justify-between bg-[#090A0C]">
              <div className="flex items-center gap-2 text-xs font-tech uppercase tracking-wider text-[#F4F2ED]">
                <Navigation className="w-3.5 h-3.5 text-[#C7F36B]" />
                <span>GEOGRAPHIC STAGING &middot; SHAIKPET FLYOVER</span>
              </div>
              <a
                href="https://maps.google.com/?q=Shaikpet+Flyover,+Gachibowli,+Hyderabad,+Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-tech uppercase tracking-wider text-[#C7F36B] hover:underline"
              >
                OPEN MAPS &rarr;
              </a>
            </div>

            <div className="relative flex-1 w-full min-h-[360px] bg-[#090A0C]">
              <iframe
                title="Wheels Four Rent Hyderabad Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full border-0 filter grayscale contrast-125 invert-[0.9] opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
