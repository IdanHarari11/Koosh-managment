'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiX } from 'react-icons/hi';
import { FaHome, FaComments, FaChartLine, FaCog } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const features = [
  {
    icon: FaHome,
    title: 'Comprehensive Property Management',
    description: 'Full-service management of your property, from maintenance to pricing.',
  },
  {
    icon: FaComments,
    title: 'Streamlined Guest Communication',
    description: '24/7 guest support and automated messaging systems.',
  },
  {
    icon: FaChartLine,
    title: 'Maximized Rental Income',
    description: 'Dynamic pricing and optimization strategies for better returns.',
  },
  {
    icon: FaCog,
    title: 'Hassle-free Operations',
    description: 'We handle everything while you enjoy passive income.',
  },
];

const galleryImages = [
  {
    url: '/images/buildings/luxuryVila.webp',
    alt: 'Luxury Villa',
    height: 'row-span-1',
  },
  {
    url: '/images/buildings/modernApartment.webp',
    alt: 'Modern Apartment',
    height: 'row-span-2',
  },
  {
    url: '/images/buildings/cozyHome.webp',
    alt: 'Cozy Home',
    height: 'row-span-1',
  },
  {
    url: '/images/buildings/beachHouse.webp',
    alt: 'Beach House',
    height: 'row-span-2',
  },
  {
    url: '/images/buildings/luxuryInterior.webp',
    alt: 'Luxury Interior',
    height: 'row-span-1',
  },
  {
    url: '/images/buildings/modernKitchen.webp',
    alt: 'Modern Kitchen',
    height: 'row-span-1',
  },
];

const WhyChooseUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Koosh Management"
          subtitle="Our Advantages"
          sectionId="why-choose-us"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-primary uppercase tracking-wider font-medium"
            >
              Why Choose Us?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl md:text-4xl font-bold text-gray-900"
            >
              We Make it{' '}
              <span className="text-primary">Effortless</span>
            </motion.h2>

            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://koosh.holidayfuture.com/', '_blank')}
              className="mt-8 px-8 py-3 bg-primary text-white rounded-full font-medium
                       hover:bg-primary/90 transition-colors duration-200 w-fit"
            >
              Get Started Today
            </motion.button>
          </div>

          {/* Right Column - Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 auto-rows-[150px] gap-3">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${image.height} group cursor-pointer overflow-hidden rounded-lg`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium text-sm">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-5xl w-full aspect-[16/9]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              >
                <HiX className="w-6 h-6 text-white" />
              </button>
              <p className="absolute bottom-4 left-4 text-white font-medium">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhyChooseUs;