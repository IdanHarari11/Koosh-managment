/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        concierge: ['var(--font-concierge)', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#FF5A5F', // Airbnb's primary red color
        // Concierge luxury palette
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C547',
          dark: '#B8960C',
          muted: 'rgba(212, 175, 55, 0.15)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.25)' },
          '50%': { boxShadow: '0 0 32px rgba(212, 175, 55, 0.4)' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212, 175, 55, 0.35)',
        'gold-lg': '0 0 32px rgba(212, 175, 55, 0.45)',
      },
    },
  },
  plugins: [],
} 