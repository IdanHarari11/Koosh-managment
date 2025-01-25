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
  FaClipboardList,
  FaLink
} from 'react-icons/fa';
import { useState, useRef } from 'react';

const steps = [
  {
    icon: FaEnvelopeOpen,
    title: 'Order Received',
    description: 'We receive your booking request and begin processing immediately',
    color: 'from-blue-500/20 to-blue-400/10',
    iconColor: 'text-blue-500',
    position: 'left-0 lg:top-[10%] top-[5%]',
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
    position: 'right-0 lg:top-[30%] top-[25%]',
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
    position: 'left-0 lg:top-[50%] top-[45%]',
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
    position: 'right-0 lg:top-[70%] top-[65%]',
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

const MobileSnakePath = ({ progress }) => {
  return (
    <svg
      className="absolute left-1/2 -translate-x-1/2 h-full"
      style={{ 
        top: '4rem',
        zIndex: -1,
        width: '100vw',
        maxWidth: '600px'
      }}
      viewBox="0 0 600 2000"
      preserveAspectRatio="xMidYMin slice"
    >
      <motion.path
        d={`M 300 40
            C 300 100, 500 150, 500 300
            C 500 450, 300 500, 300 500
            C 300 500, 100 550, 100 700
            C 100 850, 300 900, 300 900
            C 300 900, 500 950, 500 1100
            C 500 1250, 300 1300, 300 1300
            C 300 1300, 100 1350, 100 1500
            C 100 1650, 300 1700, 300 1850`}
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="8 8"
        className="text-primary/50"
        fill="none"
        initial={{ pathLength: 0 }}
        style={{ pathLength: progress }}
      />
    </svg>
  );
};

const WorkflowSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 100%"]
  });
  const [showCopy, setShowCopy] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = `${window.location.origin}/#workflow`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      className="py-12 md:py-20 bg-gray-50/50 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16">
          {/* Text Content - 30% */}
          <div className="lg:col-span-3 flex flex-col justify-center text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-primary uppercase tracking-wider font-medium"
            >
              Our Process
            </motion.p>
            <div 
              className="relative inline-flex items-center justify-center lg:justify-start"
              onMouseEnter={() => setShowCopy(true)}
              onMouseLeave={() => setShowCopy(false)}
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: showCopy ? 1 : 0 }}
                onClick={handleCopy}
                className="absolute -left-12 p-2 text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <FaLink className="w-4 h-4" />
              </motion.button>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              >
                How We Make It{' '}
                <span className="text-primary">Simple</span>
              </motion.h2>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded"
                >
                  URL Copied!
                </motion.div>
              )}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-base md:text-lg text-gray-600"
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
              className="mt-6 md:mt-8 px-6 py-3 md:px-8 md:py-4 bg-primary text-white rounded-full font-medium
                       hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg
                       mx-auto lg:mx-0 w-full md:w-auto"
            >
              Learn More About Our Process
            </motion.button>
          </div>

          {/* Snake Flow - 70% */}
          <div className="lg:col-span-7">
            {/* Desktop Layout */}
            <div className="relative hidden lg:block h-[1200px] w-full">
              {/* Original snake path and positioned steps for desktop */}
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

              {/* Desktop Steps */}
              {steps.map((step, index) => {
                const progress = getStepProgress(index);
                return (
                  <motion.div
                    key={`desktop-${step.title}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    style={{
                      opacity: progress,
                      scale: useTransform(progress, [0, 1], [0.8, 1])
                    }}
                    className={`absolute w-80 transform -translate-x-1/2 ${step.position}`}
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
                      className={`p-4 md:p-6 rounded-xl bg-gradient-to-br ${step.color}
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

            {/* Mobile Layout */}
            <div className="lg:hidden relative h-[2000px]">
              {/* Mobile Snake Path */}
              <MobileSnakePath progress={scrollYProgress} />

              {/* Steps Container */}
              <div className="relative h-full">
                {steps.map((step, index) => {
                  const progress = getStepProgress(index);
                  const isEven = index % 2 === 0;
                  const topPosition = `${index * 450}px`;

                  return (
                    <motion.div
                      key={`mobile-${step.title}`}
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      style={{
                        opacity: progress,
                        x: useTransform(progress, [0, 1], [isEven ? -20 : 20, 0]),
                        position: 'absolute',
                        top: topPosition,
                        left: 0,
                        right: 0,
                        paddingBottom: '50px'
                      }}
                      className="w-full"
                    >
                      <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                        <div className="w-[85vw] max-w-sm">
                          {/* Step Number */}
                          <motion.div
                            className="w-8 h-8 rounded-full bg-primary text-white 
                                      flex items-center justify-center text-sm font-medium
                                      mx-auto mb-4"
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
                            className={`p-4 rounded-xl bg-gradient-to-br ${step.color}
                                      shadow-lg transition-all duration-300
                                      border border-white/20 backdrop-blur-sm`}
                            style={{
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
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection; 