'use client';

import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaUserCog, 
  FaChartLine, 
  FaClipboardList,
  FaCamera,
  FaCreditCard,
  FaBook,
  FaFileContract,
  FaTools,
  FaCalendarCheck
} from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const services = [
  {
    icon: FaHome,
    title: 'Property Management',
    description: 'Full-service property management including maintenance, cleaning, and guest support.',
    height: 'row-span-1',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: FaUserCog,
    title: 'Guest Services',
    description: 'Comprehensive 24/7 concierge support for all guest needs during their stay. Our dedicated team ensures seamless check-ins, personalized recommendations, and immediate response to any requests.',
    features: [
      'Personalized welcome experience',
      'Local area recommendations',
      'Emergency support',
    ],
    height: 'row-span-2',
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
    button: {
      text: 'Guest Guide',
      action: '/guest-guide',
    },
  },
  {
    icon: FaChartLine,
    title: 'Revenue Optimization',
    description: 'Dynamic pricing and market analysis to maximize your rental income.',
    height: 'row-span-1',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    icon: FaClipboardList,
    title: 'Listing Management',
    description: 'Professional listing creation and optimization across multiple platforms.',
    height: 'row-span-1',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: FaFileContract,
    title: 'Insurance Coverage',
    description: 'Comprehensive property and liability insurance solutions to protect your investment. Our policies cover everything from property damage to guest accidents.',
    features: [
      'Property damage protection',
      'Liability coverage',
      'Guest accident protection',
    ],
    height: 'row-span-2',
    color: 'bg-teal-50',
    iconColor: 'text-teal-500',
    button: {
      text: 'View Policy',
      action: 'https://drive.google.com/file/d/1tf5LWrTqoij5Gtw7Ed9FgbM-ndrRjWBB/view?usp=drive_link',
    },
  },
  {
    icon: FaCamera,
    title: 'Professional Photography',
    description: 'High-quality photography and virtual tours that showcase your property in the best light. Our professional photographers capture every detail to attract more bookings.',
    features: [
      'Professional equipment',
      'Virtual 3D tours',
      'Drone photography',
    ],
    height: 'row-span-2',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
  {
    icon: FaCreditCard,
    title: 'Financial Management',
    description: 'Transparent financial reporting and automated payments.',
    height: 'row-span-1',
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-500',
  },
  {
    icon: FaBook,
    title: 'House Manual',
    description: 'Detailed guide for guests with all property information.',
    height: 'row-span-1',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
    button: {
      text: 'Download PDF',
      action: '/house-manual.pdf',
    },
  },
  {
    icon: FaTools,
    title: 'Maintenance',
    description: 'Regular maintenance and emergency repairs available 24/7.',
    height: 'row-span-1',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Services"
          subtitle="What We Offer"
          sectionId="services"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.height} ${service.color} rounded-2xl p-5 
                         shadow-sm hover:shadow-md transition-shadow duration-300
                         flex flex-col ${service.height === 'row-span-1' ? 'justify-start' : 'justify-between'}`}
            >
              <div className={`flex flex-col ${service.height === 'row-span-1' ? 'h-auto' : 'h-full'}`}>
                <div className={`${service.iconColor} mb-3`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className={`text-sm text-gray-600 ${service.features ? 'mb-2' : 'mb-auto'}`}>
                  {service.description}
                </p>
                {service.features && (
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className={`${service.iconColor} mr-2`}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {service.button && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 bg-white text-gray-800 rounded-full text-sm
                           font-medium hover:bg-gray-50 transition-colors duration-200
                           shadow-sm hover:shadow w-full sm:w-auto
                           ${service.height === 'row-span-1' ? 'mt-auto' : 'mt-3'}`}
                  onClick={() => window.open(service.button.action, '_blank')}
                >
                  {service.button.text}
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;