'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEnvelopeOpen, FaHome, FaKey, FaHeadset } from 'react-icons/fa';

const steps = [
  {
    icon: FaEnvelopeOpen,
    title: 'Order Received',
    description: 'We receive your booking request',
    color: 'bg-blue-500',
  },
  {
    icon: FaHome,
    title: 'Property Prepared',
    description: 'Our team gets your property ready',
    color: 'bg-green-500',
  },
  {
    icon: FaKey,
    title: 'Guest Arrival',
    description: 'Your guests check in and begin their stay',
    color: 'bg-amber-500',
  },
  {
    icon: FaHeadset,
    title: 'Ongoing Support',
    description: 'We are always available for any needs',
    color: 'bg-purple-500',
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16">
          {/* Text Content - 30% */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-primary uppercase tracking-wider font-medium"
            >
              Our Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl font-bold text-gray-900"
            >
              How We Make It{' '}
              <span className="text-primary">Simple</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-gray-600"
            >
              Our process is simple and transparent, guiding you every step of the way.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 bg-primary text-white rounded-full font-medium
                       hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Learn More About Our Process
            </motion.button>
          </div>

          {/* Right side will go here - 70% */}
          <div className="lg:col-span-7">
            {/* Content for right side will be added here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection; 