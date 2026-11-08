import React from 'react';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PRIMARY_PHONE, openWhatsAppChat } from '../utils/whatsapp';

interface MobileActionBarProps {
  onQuoteClick: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onQuoteClick }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#090A0C]/95 backdrop-blur-xl border-t border-hairline px-3 py-2 flex items-center justify-between gap-2 h-14"
    >
      {/* Call Button */}
      <a
        href={`tel:${PRIMARY_PHONE}`}
        className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 text-[11px] font-tech font-bold uppercase tracking-wider text-[#F4F2ED] bg-[#15171B] border border-hairline active:bg-[#1F2228] transition-colors"
        aria-label="Call Wheels Four Rent"
      >
        <Phone className="w-3.5 h-3.5 text-[#C7F36B]" />
        <span>CALL</span>
      </a>

      {/* WhatsApp Button */}
      <button
        type="button"
        onClick={() => openWhatsAppChat()}
        className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 text-[11px] font-tech font-bold uppercase tracking-wider text-[#C7F36B] bg-[#15171B] border border-[#C7F36B]/40 active:bg-[#1F2228] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WHATSAPP</span>
      </button>

      {/* Get Quote Button */}
      <button
        type="button"
        onClick={onQuoteClick}
        className="flex-[1.3] flex items-center justify-center gap-1 h-10 px-3 text-[11px] font-tech font-bold uppercase tracking-wider text-[#090A0C] bg-[#C7F36B] active:bg-[#D4F788] shadow-md"
        aria-label="Get My Quote"
      >
        <span>GET QUOTE</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
