'use client';
import { motion } from 'motion/react';

import { 
  FaMobile, 
  FaLaptopCode, 
  FaBrain, 
  FaPencilRuler, 
  FaCogs, 
  FaShieldAlt 
} from 'react-icons/fa';

const services = [
  {
    icon: <FaMobile className="w-12 h-12" />,
    title: 'App Development',
    description: 'Create powerful, scalable mobile applications that engage users and drive business growth.',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions',
      'UI/UX focused design',
      'Performance optimization',
    ],
  },
  {
    icon: <FaLaptopCode className="w-12 h-12" />,
    title: 'Web Development',
    description: 'Build modern, responsive web applications that deliver exceptional user experiences.',
    features: [
      'Full-stack development',
      'Progressive Web Apps',
      'Custom CMS solutions',
      'E-commerce platforms',
    ],
  },
  {
    icon: <FaBrain className="w-12 h-12" />,
    title: 'AI/ML Solutions',
    description: 'Harness the power of artificial intelligence to optimize operations and gain valuable insights.',
    features: [
      'Machine learning models',
      'Natural Language Processing',
      'Predictive analytics',
      'Computer vision',
    ],
  },
  {
    icon: <FaPencilRuler className="w-12 h-12" />,
    title: 'UI/UX Design',
    description: 'Create intuitive, engaging user experiences that delight customers and drive conversions.',
    features: [
      'User research',
      'Interface design',
      'Prototyping',
      'Usability testing',
    ],
  },
  {
    icon: <FaCogs className="w-12 h-12" />,
    title: 'Smart Automation',
    description: 'Streamline operations and boost efficiency with intelligent automation solutions.',
    features: [
      'Process automation',
      'Workflow optimization',
      'Integration services',
      'Custom automation tools',
    ],
  },
  {
    icon: <FaShieldAlt className="w-12 h-12" />,
    title: 'Security Services',
    description: 'Protect your digital assets with comprehensive security solutions and best practices.',
    features: [
      'Security audits',
      'Penetration testing',
      'Compliance consulting',
      'Security monitoring',
    ],
  },
];

const ServiceDetail = () => {

  const fadeInAnimationVariants = {
    initial: (index:number) => ({ opacity: 0, x: index % 2 === 0 ? -50 : 50 }),
    animate: (index: number) => ({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }),
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul
          className="grid grid-cols-1 gap-20 list-none">
          {services.map((service, index) => (
            <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-primary-100 md:p-10 p-6 rounded-xl"
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="text-secondary-950 mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-text mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-xl overflow-hidden bg-text p-8">
                  {/* <div className="absolute inset-0 bg-grid-primary-900/[0.03] bg-[size:20px_20px]" /> */}
                  <div className="relative h-full flex items-center justify-center">
                    <div className="md:text-6xl text-4xl font-bold bg-gradient-to-b from-primary-400 to-secondary-400 text-transparent bg-clip-text">{service.title}</div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceDetail;

