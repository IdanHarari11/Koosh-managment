'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    alt: 'Luxury Villa'
  },
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    alt: 'Modern Apartment'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    alt: 'Cozy Home'
  },
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    alt: 'Beach House'
  },
];

const features = ['Top-rated Service', 'Airbnb Superhost', '24/7 Support'];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const getAdjacentIndexes = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;
    return { prevIndex, nextIndex };
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Custom bezier curve for smooth animation
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const sideImageVariants = {
    initial: (side) => ({
      opacity: 0,
      x: side === 'left' ? -50 : 50,
      scale: 0.7,
      zIndex: 0,
    }),
    animate: {
      opacity: 0.5,
      x: 0,
      scale: 0.85,
      zIndex: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="bg-gray-50/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Gallery Section */}
          <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Previous Image */}
              <motion.div
                className="absolute left-[2%] top-0 h-full w-[20%]
                          filter brightness-75 hover:brightness-100 transition-all duration-300"
                custom="left"
                variants={sideImageVariants}
                initial="initial"
                animate="animate"
                key={`prev-${currentIndex}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={images[getAdjacentIndexes().prevIndex].url}
                    alt="Previous"
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                    sizes="(max-width: 768px) 20vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-2xl" />
                </div>
              </motion.div>

              {/* Current Image */}
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-[60%] h-full mx-auto z-10"
                >
                  <Image
                    src={images[currentIndex].url}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover rounded-2xl shadow-xl"
                    sizes="(max-width: 768px) 80vw, 60vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next Image */}
              <motion.div
                className="absolute right-[2%] top-0 h-full w-[20%]
                          filter brightness-75 hover:brightness-100 transition-all duration-300"
                custom="right"
                variants={sideImageVariants}
                initial="initial"
                animate="animate"
                key={`next-${currentIndex}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={images[getAdjacentIndexes().nextIndex].url}
                    alt="Next"
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                    sizes="(max-width: 768px) 20vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-2xl" />
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 
                         transition-all shadow-lg hover:shadow-xl z-10 focus:outline-none
                         focus:ring-2 focus:ring-primary/50"
                onClick={() => paginate(-1)}
              >
                <HiChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 
                         transition-all shadow-lg hover:shadow-xl z-10 focus:outline-none
                         focus:ring-2 focus:ring-primary/50"
                onClick={() => paginate(1)}
              >
                <HiChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                           focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    index === currentIndex
                      ? 'bg-white w-6 shadow-lg'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Feature Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium
                             hover:bg-primary/20 transition-colors duration-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Experience Luxury Property Management
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-8">
                We handle everything from guest communication to property maintenance, 
                ensuring your property generates maximum revenue while being perfectly maintained.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-full font-medium
                         hover:bg-primary/90 transition-colors duration-200"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection; 