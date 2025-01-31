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
  metadataBase: new URL('https://kooshmanagement.com'),
  title: 'Koosh Management - Premium Property Management',
  description: `Professional Airbnb management services maximizing your property's potential with exceptional guest experiences and reliable property care.`,
  
  // Basic metadata
  keywords: 'property management, airbnb management, vacation rentals, property investment, rental optimization, guest experience',
  authors: [{ name: 'Koosh Management' }],
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kooshmanagement.com',
    siteName: 'Koosh Management',
    title: 'Koosh Management - Premium Property Management',
    description: 'Transform your property into a high-performing asset with professional management and exceptional guest experiences.',
    images: [
      {
        url: '/images/og-image.png', // Your 270x250 logo
        width: 270,
        height: 250,
        alt: 'Koosh Management Logo',
      },
      {
        url: '/images/og-image.png', // Optional: Additional OG image with 1200x630 ratio
        width: 1200,
        height: 630,
        alt: 'Koosh Management - Premium Property Management Services',
      }
    ],
  },

  // Twitter metadata
  twitter: {
    card: 'summary',  // Changed to 'summary' for square logo
    site: '@kooshmanagement',
    creator: '@kooshmanagement',
    title: 'Koosh Management - Premium Property Management',
    description: 'Professional property management solutions for maximizing your investment returns.',
    images: ['/images/og-image.png'], // Using the square logo for Twitter
  },

  // Additional metadata
  alternates: {
    canonical: 'https://kooshmanagement.com',
  },
  
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        {/* Verification tags */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:image" content="https://res.cloudinary.com/dsdre8udm/image/upload/f_auto,q_auto/umb6vbve8unledggiqsz" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
