'use client';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
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
    icon: <FaMobile className="w-8 h-8" />,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications built for performance and user experience.',
  },
  {
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Responsive, modern web applications using cutting-edge technologies.',
  },
  {
    icon: <FaBrain className="w-8 h-8" />,
    title: 'AI/ML Solutions',
    description: 'Intelligent solutions powered by advanced machine learning algorithms.',
  },
  {
    icon: <FaPencilRuler className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging and intuitive experiences.',
  },
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: 'Smart Automation',
    description: 'Streamline operations with intelligent automation solutions.',
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: 'Security Services',
    description: 'Comprehensive security solutions to protect your digital assets.',
  },
];

const ServicesOverview = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of IT solutions to help your business thrive in the digital age.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 bg-secondary-400 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="text-secondary-950 mb-4 group-hover:text-text/90 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;

