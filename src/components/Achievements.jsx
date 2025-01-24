'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const achievements = [
  { number: 100, title: 'Properties Managed', suffix: '+' },
  { number: 5, title: 'Cities Covered', suffix: '' },
  { number: 20, title: 'Increased ROI for Clients', suffix: '%' },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Achievements = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="p-2 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm"
          >
            <div className="text-xl md:text-3xl font-bold text-white mb-0.5 md:mb-1">
              <Counter value={achievement.number} suffix={achievement.suffix} />
            </div>
            <div className="text-white/90 font-medium text-xs md:text-sm">
              {achievement.title}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements; 