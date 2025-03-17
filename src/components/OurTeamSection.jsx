'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { useRef, useState } from 'react';

const teamMembers = [
  {
    name: 'Yair Harari',
    role: 'CEO & Founder',
    image: '/images/team/yair.webp',
    bio: 'B.A. in Business Management | 8+ Years in Property Management & Real Estate Investment, Airbnb Israel Community Owner.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:yair1harari@gmail.com'
    }
  },
  {
    name: 'Yarden Elbaz',
    role: 'General Manager',
    image: '/images/team/YardenElbaz.webp',
    bio: 'With expertise in hospitality and property management, ensuring seamless operations and exceptional guest experiences.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:emma@kooshmanagement.com'
    }
  },
  {
    name: 'Yani Gantz',
    role: 'CEO, KBI Cleaning Services',
    image: '/images/team/Yani.webp',
    bio: 'Leading our cleaning operations with exceptional quality and attention to detail.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:michael@kooshmanagement.com'
    }
  },
  {
    name: 'Shamir Hayat',
    role: 'Property Manager',
    image: '/images/team/Shamir.webp',
    bio: 'Ensures smooth operations, maintaining high standards across buildings and villas while delivering exceptional guest experiences.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:michael@kooshmanagement.com'
    }
  },
  {
    name: 'Mir Muhha',
    role: 'Customer Support',
    image: '/images/team/MirMuhha.webp',
    bio: 'Providing exceptional support, ensuring seamless communication and top-tier guest satisfaction.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:michael@kooshmanagement.com'
    }
  },
  {
    name: 'Shahkar Bangash',
    role: 'Supervisor',
    image: '/images/team/Shakar.webp',
    bio: 'Leads the customer service team, manages guest communication, resolves issues, and oversees bookings and operations to ensure a seamless experience.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:sarah@kooshmanagement.com'
    }
  },
  {
    name: 'Muhammad Umair',
    role: 'Virtual Assistant',
    image: '/images/team/MuhammadUmair.webp',
    bio: 'Manages bookings, guest communication, scheduling, and administrative tasks, ensuring smooth operations and top-tier service',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:sarah@kooshmanagement.com'
    }
  },
  {
    name: 'Andrea Posibo',
    role: 'Maintenance Assistant',
    image: '/images/team/AndreaPosibo.webp',
    bio: 'Handles property maintenance, repairs, and coordination with service providers, ensuring all units remain in top condition.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:sarah@kooshmanagement.com'
    }
  },
];

const OurTeamSection = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = (e) => {
    const container = e.target;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="pb-20 lg:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Meet Our Team"
          subtitle="The People Behind Our Success"
          sectionId="our-team"
        />

        {/* Slider Container for both Mobile and Desktop */}
        <div className="relative">
          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10
                       bg-white/80 rounded-full shadow-lg flex items-center justify-center
                       text-gray-800 hover:bg-white transition-colors duration-200
                       -translate-x-5 lg:-translate-x-8"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10
                       bg-white/80 rounded-full shadow-lg flex items-center justify-center
                       text-gray-800 hover:bg-white transition-colors duration-200
                       translate-x-5 lg:translate-x-8"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 -mx-4 px-4
                     scroll-smooth snap-x snap-mandatory"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[280px] md:w-[320px] h-full snap-center"
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Values Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about property management
            and delivering exceptional guest experiences.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-full font-medium
                     hover:bg-primary/90 transition-colors duration-200"
            onClick={() => window.location.href = 'mailto:careers@kooshmanagement.com'}
          >
            View Open Positions
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

// Extracted TeamMemberCard component for reusability
const TeamMemberCard = ({ member }) => (
  <div className="group h-[320px]">
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg pt-16 h-full flex flex-col">
      {/* Profile Image Container - Updated styling */}
      <div className="absolute p-4 -top-2 left-1/2 -translate-x-1/2 mt-1">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
            sizes="128px"
            priority
            style={{ objectPosition: '50% 30%' }} 
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
        </div>
        
        {/* Social Links - Always visible */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex justify-center space-x-2 w-full">
          {/* {Object.entries(member.social).map(([platform, link]) => (
            <motion.a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center
                       text-gray-900 hover:bg-primary hover:text-white transition-colors duration-200"
            >
              {platform === 'linkedin' && <FaLinkedinIn className="w-4 h-4" />}
              {platform === 'twitter' && <FaTwitter className="w-4 h-4" />}
              {platform === 'email' && <FaEnvelope className="w-4 h-4" />}
            </motion.a>
          ))} */}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-[6rem] text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {member.name}
          </h3>
          <p className="text-primary font-medium mb-3">
            {
              member.name === 'Yani Gantz' ? 
                <a href="https://kbi-cleaning.netlify.app/" target="_black" className="text-primary font-medium hover:brightness-90 transition" style={{textDecoration: 'underline'}}>{member.role}</a> 
                : <>{member.role}</>
            }
          </p>
          <p className="text-gray-600 text-sm line-clamp-4">
            {member.bio}
          </p>
        </div>
        <div className="h-8">
          {/* Can add additional content here if needed */}
        </div>
      </div>
    </div>
  </div>
);

export default OurTeamSection; 