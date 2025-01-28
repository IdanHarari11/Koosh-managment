import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Koosh Management',
  description: 'Premium Property Management Solutions: Maximizing Your Investment with Professional Services, Smart Technology, and Exceptional Guest Experiences. Transform Your Property into a High-Performing Asset.',
  
  // Basic metadata
  keywords: 'property management, airbnb management, vacation rentals, property investment, rental optimization, guest experience, property services, smart property management, luxury rentals, property maintenance',
  author: 'Koosh Management',
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: 'Koosh Management - Premium Property Management Solutions',
    description: 'Transform your property into a high-performing asset with professional management, smart technology, and exceptional guest experiences.',
    siteName: 'Koosh Management',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Koosh Management Logo',
      },
    ],
  },

  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Koosh Management - Premium Property Management',
    description: 'Professional property management solutions for maximizing your investment returns.',
    images: '/images/logo.png',
  },

  // Robots metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification for search consoles
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },

  // Alternative languages
  alternates: {
    canonical: 'https://kooshmanagement.com',
    languages: {
      'en-US': 'https://kooshmanagement.com',
      // Add other languages if available
    },
  },

  // Icons
  icons: {
    icon: '../../images/logo.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
