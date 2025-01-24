'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEnvelopeOpen, FaHome, FaKey, FaHeadset } from 'react-icons/fa';

const steps = [
  {
    icon: FaEnvelopeOpen,
    title: 'Order Received',
    description: 'We receive your booking request',
    color: 'from-blue-500/20 to-blue-400/10',
    iconColor: 'text-blue-500',
    position: 'left-0 top-0',
  },
  {
    icon: FaHome,
    title: 'Property Prepared',
    description: 'Our team gets your property ready',
    color: 'from-green-500/20 to-green-400/10',
    iconColor: 'text-green-500',
    position: 'right-0 top-[20%]',
  },
  {
    icon: FaKey,
    title: 'Guest Arrival',
    description: 'Your guests check in and begin their stay',
    color: 'from-amber-500/20 to-amber-400/10',
    iconColor: 'text-amber-500',
    position: 'left-0 top-[60%]',
  },
  {
    icon: FaHeadset,
    title: 'Ongoing Support',
    description: 'We are always available for any needs',
    color: 'from-purple-500/20 to-purple-400/10',
    iconColor: 'text-purple-500',
    position: 'right-0 bottom-0',
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
              className="mt-2 text-4xl font-bold text-gray-900 leading-tight"
            >
              How We Make It{' '}
              <span className="text-primary">Simple</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-lg text-gray-600"
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
              className="mt-8 px-8 py-4 bg-primary text-white rounded-full font-medium
                       hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Learn More About Our Process
            </motion.button>
          </div>

          {/* Snake Flow - 70% */}
          <div className="lg:col-span-7">
            <div className="relative h-[800px] w-full">
              {/* Snake Path */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 800"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 100 100 
                     C 200 100, 600 100, 700 200
                     C 800 300, 200 400, 100 500
                     C 0 600, 600 600, 700 700"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  className="text-primary/30"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                />
              </svg>

              {/* Steps */}
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute ${step.position} w-64 transform -translate-x-1/2`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 
                                rounded-full bg-primary text-white flex items-center 
                                justify-center text-sm font-medium z-10">
                    {index + 1}
                  </div>

                  {/* Step Box */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${step.color}
                              shadow-lg hover:shadow-xl transition-all duration-300
                              border border-white/20 backdrop-blur-sm`}
                  >
                    <div className={`w-16 h-16 rounded-xl ${step.iconColor} bg-white/90
                                  flex items-center justify-center mb-4`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection; 