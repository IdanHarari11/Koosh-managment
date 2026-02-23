import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-concierge',
  display: 'swap',
});

export const metadata = {
  title: 'KOOSH Concierge | 24/7 Guest Service',
  description:
    'Your private 24/7 concierge service for Koosh short-term rental guests. Breakfast, massage, restaurant reservations, airport rides, and more.',
  openGraph: {
    title: 'KOOSH Concierge | 24/7 Guest Service',
    description: 'Your private 24/7 concierge service. Available during your stay.',
    url: '/concierge',
  },
  alternates: {
    canonical: 'https://koosh-management.com/concierge',
  },
};

export default function ConciergeLayout({ children }) {
  return (
    <div className={`${cormorant.variable} font-sans min-h-screen bg-black text-white`}>
      {children}
    </div>
  );
}
