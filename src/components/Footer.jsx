'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/terms' },
];

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="block mb-6">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={120}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              We offer professional Airbnb management services to help you maximize 
              your property's potential. Our dedicated team ensures the best experience 
              for both hosts and guests.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-primary" />
                <a href="mailto:info@koosh.com" className="hover:text-white transition-colors duration-200">
                  info@koosh.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaPhone className="text-primary" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-200">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>
                  123 Business Street<br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                           hover:bg-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm">
              Subscribe to our newsletter for updates and special offers.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Koosh Management. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-primary 
                 flex items-center justify-center shadow-lg cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer; 