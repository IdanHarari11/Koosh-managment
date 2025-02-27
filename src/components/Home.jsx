'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Achievements from './Achievements';
import GallerySection from './GallerySection';
import Partners from './Partners';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import WorkflowSection from './WorkflowSection';
import Footer from './Footer';
import ContactSection from './ContactSection';
import ScrollToTop from './ScrollToTop';
import OurTeamSection from './OurTeamSection';

const images = [
  '/images/buildings/building2.webp',
  '/images/buildings/Griffin apartment.webp',
  '/images/buildings/building3.webp',
  '/images/buildings/building1.webp',
  '/images/buildings/koosh-building.webp',
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    if (window.location.hash) {
      setTimeout(handleHashChange, 500);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative">
      <div id="home" className="relative h-screen">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Property ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center text-white px-4 pb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-center"
            >
              Maximize Your Property's Potential
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl md:text-2xl text-center max-w-2xl"
            >
              Professional Airbnb Management Services for Property Owners
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => window.open('https://koosh.holidayfuture.com/', '_blank')}
              className="mt-8 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors duration-200"
            >
              Book Now
            </motion.button>
          </div>

          <div className="w-full py-6">
            <div className="max-w-6xl mx-auto px-4">
              <Achievements />
            </div>
          </div>
        </div>
      </div>

      <div id="partners">
        <Partners />
      </div>

      <div id="gallery">
        <GallerySection />
      </div>

      <div id="why-choose-us">
        <WhyChooseUs />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="workflow">
        <WorkflowSection />
      </div>

      <div id="our-team">
        <OurTeamSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <div id="footer">
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Home;