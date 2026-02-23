'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaCoffee,
  FaSpa,
  FaUtensils,
  FaCar,
  FaBroom,
  FaClock,
  FaUmbrellaBeach,
  FaWhatsapp,
  FaChevronLeft,
  FaCrown,
  FaReply,
} from 'react-icons/fa';
import {
  CONCIERGE_CTA_URL,
  CONCIERGE_SERVICES,
  CONCIERGE_PHONE,
  CONCIERGE_WHATSAPP_URL,
} from './constants';

const SERVICE_ICONS = {
  coffee: FaCoffee,
  spa: FaSpa,
  restaurant: FaUtensils,
  car: FaCar,
  cleaning: FaBroom,
  clock: FaClock,
  beach: FaUmbrellaBeach,
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.06 },
  },
};

export default function ConciergePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back to main site - minimal, top-left */}
      <motion.div
        className="fixed top-0 left-0 z-20 p-4 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors duration-200 text-sm"
          aria-label="Back to Koosh Management"
        >
          <FaChevronLeft className="w-4 h-4" />
          <span>Back to Koosh</span>
        </Link>
      </motion.div>

      {/* Hero - luxury minimal */}
      <section className="relative min-h-[60vh] md:min-h-[55vh] flex flex-col justify-center items-center px-4 pt-20 pb-12 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full border border-gold/60 bg-gold/10 text-gold text-xs font-medium tracking-widest mb-6"
            variants={fadeUp}
          >
            VIP CONCIERGE
          </motion.span>
          <motion.h1
            className="font-concierge text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-gold mb-4"
            variants={fadeUp}
          >
            WELCOME TO KOOSH CONCIERGE
          </motion.h1>
          <motion.p
            className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 max-w-lg mx-auto leading-relaxed"
            variants={fadeUp}
          >
            Peak luxury meets peak technology. Your private VIP concierge, 24/7.
          </motion.p>
          {/* Trust strip: 24/7 · Instant reply · Premium */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-8 text-gray-400"
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 text-sm">
              <FaClock className="w-4 h-4 text-gold/90" aria-hidden />
              24/7
            </span>
            <span className="inline-flex items-center gap-2 text-sm">
              <FaReply className="w-4 h-4 text-gold/90" aria-hidden />
              Instant reply
            </span>
            <span className="inline-flex items-center gap-2 text-sm">
              <FaCrown className="w-4 h-4 text-gold/90" aria-hidden />
              Premium service
            </span>
          </motion.div>
          <motion.div variants={fadeUp}>
            <a
              href={CONCIERGE_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[240px] px-8 py-4 rounded-lg border-2 border-gold text-gold font-medium text-lg hover:bg-gold hover:text-black hover:shadow-gold hover:shadow-gold-lg transition-all duration-300"
            >
              <FaWhatsapp className="w-6 h-6" />
              Chat with Concierge
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Services - large tappable buttons */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            className="font-concierge text-2xl sm:text-3xl text-gold text-center mb-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
          >
            How Can We Assist You Today?
          </motion.h2>
          <motion.p
            className="text-gray-500 text-sm text-center mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            One tap to premium service.
          </motion.p>
          <motion.div
            className="grid gap-3 sm:gap-4"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-20px' }}
          >
            {CONCIERGE_SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || FaCoffee;
              return (
                <motion.a
                  key={service.id}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  className="flex items-center gap-4 w-full px-5 py-4 sm:px-6 sm:py-5 rounded-xl border border-gray-700/80 bg-white/5 text-left text-white hover:border-gold hover:shadow-gold hover:shadow-gold-lg hover:bg-gold-muted transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center text-gold">
                    <Icon className="w-6 h-6" />
                  </span>
                  <span className="font-medium text-base sm:text-lg">{service.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-4 py-10 md:py-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-concierge text-xl text-gold font-semibold">KOOSH MANAGEMENT</p>
          <p className="text-gray-500 text-sm mt-2">Luxury and technology at your service.</p>
          <p className="text-gray-400 mt-1">24/7 Guest Concierge</p>
          <a
            href={CONCIERGE_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-gray-300 hover:text-gold transition-colors"
          >
            WhatsApp: {CONCIERGE_PHONE}
          </a>
          <p className="text-gray-500 text-xs sm:text-sm mt-6 max-w-md mx-auto leading-relaxed">
            All services are optional and provided by third-party partners. Pricing will be
            confirmed before booking.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp - bottom right */}
      <motion.a
        href={CONCIERGE_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-105 active:scale-95 transition-transform"
        aria-label="Open WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      >
        <FaWhatsapp className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
