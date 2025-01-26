'use client';

import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const partners = [
  {
    name: 'Booking.com',
    logo: '/images/partners/bookingLogo.svg.png',
  },
  {
    name: 'Airbnb',
    logo: '/images/partners/airbnbLogo.png',
  },
  {
    name: 'VRBO',
    logo: '/images/partners/vrboLogo.png',
  },
  {
    name: 'Expedia',
    logo: '/images/partners/expediaLogo.svg',
  },
  {
    name: 'TripAdvisor',
    logo: '/images/partners/tripAdvisorLogo.png',
  },
  {
    name: 'Hotels.com',
    logo: '/images/partners/hotels.comLogo.png',
  },
  {
    name: 'Trivago',
    logo: '/images/partners/trivagoLogo.png',
  },
  {
    name: 'Kayak',
    logo: '/images/partners/kayakLogo.png',
  },
];

const Partners = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [0, -1000],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Trusted Partners"
          subtitle="Partnerships"
          sectionId="partners"
        />
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600 uppercase tracking-wider"
          >
            Trusted by Leading Companies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-2xl font-semibold text-gray-900"
          >
            Our Partners
          </motion.h2>
        </div>

        <div className="mt-8 relative">
          <div className="overflow-hidden">
            <motion.div
              animate={controls}
              className="flex space-x-8 w-fit"
            >
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-1`}
                  className="flex-shrink-0"
                >
                  <div className="relative w-32 h-12">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-2`}
                  className="flex-shrink-0"
                >
                  <div className="relative w-32 h-12">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Partners;