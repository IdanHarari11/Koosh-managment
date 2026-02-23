/**
 * WhatsApp base URL and concierge services for guest landing page.
 * All links open wa.me with pre-filled message text.
 */
const WHATSAPP_BASE = 'https://wa.me/19543197577';

const encodeMessage = (text) => encodeURIComponent(text);

export const CONCIERGE_CTA_URL = `${WHATSAPP_BASE}?text=${encodeMessage(
  "Hi Koosh Concierge, I'm staying at Griffin and need assistance"
)}`;

export const CONCIERGE_SERVICES = [
  {
    id: 'breakfast',
    label: 'Breakfast Delivery',
    message: "Hi I'd like to order breakfast for my stay at Griffin",
    icon: 'coffee',
  },
  {
    id: 'massage',
    label: 'In-Apartment Massage',
    message: "Hi I'd like to book a massage in my apartment",
    icon: 'spa',
  },
  {
    id: 'restaurant',
    label: 'Restaurant Reservation',
    message: "Hi I'd like help with a restaurant reservation",
    icon: 'restaurant',
  },
  {
    id: 'airport',
    label: 'Airport Ride',
    message: "Hi I need an airport ride",
    icon: 'car',
  },
  {
    id: 'cleaning',
    label: 'Cleaning Service',
    message: "Hi I'd like to schedule cleaning",
    icon: 'cleaning',
  },
  {
    id: 'checkout',
    label: 'Late Checkout',
    message: "Hi I'd like late checkout",
    icon: 'clock',
  },
  {
    id: 'beach',
    label: 'Beach Setup',
    message: "Hi I'd like a beach setup",
    icon: 'beach',
  },
].map((s) => ({
  ...s,
  href: `${WHATSAPP_BASE}?text=${encodeMessage(s.message)}`,
}));

export const CONCIERGE_PHONE = '+1 954 319 7577';
export const CONCIERGE_WHATSAPP_URL = WHATSAPP_BASE;
