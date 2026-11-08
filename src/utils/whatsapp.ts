import { IndiaBookingEnquiry } from '../types';

export const PRIMARY_PHONE = '+918074761185';
export const SECONDARY_PHONE = '+916302950721';
export const WHATSAPP_RAW_NUMBER = '918074761185';
export const PRIMARY_PHONE_DISPLAY = '+91 8074761185';
export const SECONDARY_PHONE_DISPLAY = '+91 6302950721';
export const BUSINESS_ADDRESS =
  'Shaikpet Flyover, Gachibowli, Hyderabad, Telangana, India';

export function formatIndiaWhatsAppEnquiry(data: IndiaBookingEnquiry): string {
  const pickupLoc = data.pickupCity
    ? `${data.pickupCity}, ${data.pickupState}`
    : data.pickupState;

  const dropoffLoc = data.dropoffCity
    ? `${data.dropoffCity}, ${data.dropoffState}`
    : data.dropoffState;

  const lines = [
    '🏁 *WHEELS FOUR RENT – AUTOMOTIVE ENQUIRY & QUOTE REQUEST*',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    `👤 *Client Name:* ${data.customerName.trim()}`,
    `📱 *Mobile:* +91 ${data.mobileNumber.trim()}`,
    '',
    '📍 *ITINERARY / ROUTE:*',
    `• *Pickup Location:* ${pickupLoc}`,
    `• *Drop-off Location:* ${dropoffLoc}`,
    `• *Pickup Schedule:* ${data.pickupDate} at ${data.pickupTime}`,
    `• *Return Schedule:* ${data.returnDate} at ${data.returnTime}`,
    '',
    '🚘 *VEHICLE & PURPOSE:*',
    `• *Category Preferred:* ${data.carCategory}`,
    data.vehicleName ? `• *Specific Model:* ${data.vehicleName}` : '',
    `• *Rental Purpose:* ${data.rentalPurpose}`,
    data.additionalRequirements
      ? `• *Requirements / Notes:* ${data.additionalRequirements.trim()}`
      : '',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '🏢 *Headquarters:* Shaikpet Flyover, Gachibowli, Hyderabad',
    '⚡ *Please review route feasibility, check fleet availability and share quote.*'
  ].filter(Boolean);

  return lines.join('\n');
}

export function generateWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encoded}`;
}

export function openWhatsAppChat(customMessage?: string): void {
  const text =
    customMessage ||
    'Hello Wheels Four Rent! I am looking for a premium car rental quote. Please share available vehicles and booking terms.';
  window.open(generateWhatsAppLink(text), '_blank', 'noopener,noreferrer');
}
