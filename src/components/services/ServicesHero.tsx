'use client';
import { motion } from 'motion/react';

const ServicesHero = () => {
  return (
    <section className="relative bg-text-black text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-text-white from-30% to-text-white/40">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Comprehensive IT solutions tailored to transform your business and drive innovation.
          </p>
        </motion.div>
      </div>
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary-400/20 rounded-full blur-3xl" />
    </section>
  );
};

export default ServicesHero;

