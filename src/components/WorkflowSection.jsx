'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { 
  FaEnvelopeOpen, 
  FaHome, 
  FaKey, 
  FaHeadset,
  FaCheckCircle,
  FaClock,
  FaCalendarCheck,
  FaShieldAlt,
  FaTools,
  FaBell,
  FaUserCog,
  FaClipboardList
} from 'react-icons/fa';
import { useState, useRef } from 'react';

const steps = [
  {
    icon: FaEnvelopeOpen,
    title: 'Order Received',
    description: 'We receive your booking request and begin processing immediately',
    color: 'from-blue-500/20 to-blue-400/10',
    iconColor: 'text-blue-500',
    position: 'left-0 top-[10%]',
    features: [
      { icon: FaCheckCircle, text: 'Instant confirmation' },
      { icon: FaClock, text: 'Response within 1 hour' },
      { icon: FaCalendarCheck, text: 'Flexible scheduling' }
    ],
    stats: {
      value: '15min',
      label: 'Avg. Response Time'
    }
  },
  {
    icon: FaHome,
    title: 'Property Prepared',
    description: 'Professional cleaning and thorough preparation of your property',
    color: 'from-green-500/20 to-green-400/10',
    iconColor: 'text-green-500',
    position: 'right-0 top-[30%]',
    features: [
      { icon: FaTools, text: 'Deep cleaning service' },
      { icon: FaShieldAlt, text: 'Security check' },
      { icon: FaClipboardList, text: 'Quality inspection' }
    ],
    stats: {
      value: '100%',
      label: 'Quality Assured'
    }
  },
  {
    icon: FaKey,
    title: 'Guest Arrival',
    description: 'Seamless check-in process with digital access and support',
    color: 'from-amber-500/20 to-amber-400/10',
    iconColor: 'text-amber-500',
    position: 'left-0 top-[50%]',
    features: [
      { icon: FaBell, text: 'Arrival notifications' },
      { icon: FaKey, text: 'Digital key access' },
      { icon: FaUserCog, text: 'Guest orientation' }
    ],
    stats: {
      value: '24/7',
      label: 'Check-in Available'
    }
  },
  {
    icon: FaHeadset,
    title: 'Ongoing Support',
    description: 'Round-the-clock assistance for both hosts and guests',
    color: 'from-purple-500/20 to-purple-400/10',
    iconColor: 'text-purple-500',
    position: 'right-0 top-[70%]',
    features: [
      { icon: FaHeadset, text: 'Live chat support' },
      { icon: FaClock, text: '24/7 availability' },
      { icon: FaShieldAlt, text: 'Emergency assistance' }
    ],
    stats: {
      value: '<5min',
      label: 'Support Response'
    }
  },
];

const WorkflowSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 100%"]
  });

  // Adjusted timing for step animations to complete within view
  const getStepProgress = (index) => {
    return useTransform(
      scrollYProgress,
      [
        index * 0.2,          // Adjusted timing
        Math.min((index + 1) * 0.2, 0.8)  // Ensure all steps complete by 80% scroll
      ],
      [0, 1]
    );
  };

  return (
    <section 
      className="py-20 bg-gray-50/50 overflow-hidden"
      ref={containerRef}
    >
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
            <div className="relative h-[1200px] w-full">
              {/* Snake Path */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 1200"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 100 120 
                     C 200 120, 600 120, 700 360
                     C 800 600, 200 720, 100 840
                     C 0 960, 600 960, 700 960"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  className="text-primary/30"
                  initial={{ pathLength: 0 }}
                  style={{ pathLength: scrollYProgress }}
                />
              </svg>

              {/* Steps */}
              {steps.map((step, index) => {
                const progress = getStepProgress(index);

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    style={{
                      opacity: progress,
                      scale: useTransform(progress, [0, 1], [0.8, 1])
                    }}
                    className={`absolute ${step.position} w-80 transform -translate-x-1/2`}
                  >
                    {/* Step Number */}
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 
                                rounded-full bg-primary text-white flex items-center 
                                justify-center text-sm font-medium z-10"
                      style={{
                        scale: useTransform(progress, [0.5, 1], [1, 1.2]),
                        boxShadow: useTransform(
                          progress,
                          [0.5, 1],
                          ['0 0 0 0 rgba(var(--color-primary), 0)', '0 0 0 10px rgba(var(--color-primary), 0.2)']
                        )
                      }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Step Box */}
                    <motion.div
                      className={`p-6 rounded-2xl bg-gradient-to-br ${step.color}
                                shadow-lg transition-all duration-300
                                border border-white/20 backdrop-blur-sm`}
                      style={{
                        y: useTransform(progress, [0.2, 1], [20, 0]),
                        boxShadow: useTransform(
                          progress,
                          [0.5, 1],
                          ['0 4px 6px -1px rgba(0, 0, 0, 0.1)', '0 20px 25px -5px rgba(0, 0, 0, 0.1)']
                        )
                      }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className={`w-16 h-16 rounded-xl ${step.iconColor} bg-white/90
                                    flex items-center justify-center`}
                          style={{
                            rotate: useTransform(progress, [0.5, 1], [0, 360])
                          }}
                        >
                          <step.icon className="w-8 h-8" />
                        </motion.div>
                        <div className="text-right">
                          <motion.div
                            className="text-2xl font-bold text-primary"
                            style={{
                              scale: useTransform(progress, [0.5, 1], [0.8, 1])
                            }}
                          >
                            {step.stats.value}
                          </motion.div>
                          <div className="text-sm text-gray-600">
                            {step.stats.label}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {step.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-2"
                            style={{
                              x: useTransform(progress, [0.7 + idx * 0.1, 1], [-20, 0]),
                              opacity: useTransform(progress, [0.7 + idx * 0.1, 1], [0, 1])
                            }}
                          >
                            <feature.icon className={`w-4 h-4 ${step.iconColor}`} />
                            <span className="text-sm text-gray-700">{feature.text}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Progress Indicator */}
                      <div className="mt-4 pt-4 border-t border-gray-200/50">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Step {index + 1} of {steps.length}</span>
                          <span>{Math.round(((index + 1) / steps.length) * 100)}% Complete</span>
                        </div>
                        <div className="mt-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary"
                            style={{
                              width: useTransform(progress, [0, 1], ['0%', `${((index + 1) / steps.length) * 100}%`])
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection; 