'use client';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaHandshake, FaRocket, FaHeart } from 'react-icons/fa';

const values = [
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: 'Integrity',
    description: 'We believe in transparent relationships and honest communication with our clients and team members.',
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to client service.',
  },
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: 'Passion',
    description: 'We\'re passionate about technology and its potential to transform businesses and lives.',
  },
];

const Values = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These core values guide everything we do and shape how we work with our clients and each other.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary-500 mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

