'use client';
import { motion } from 'motion/react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-primary-100 text-text py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transforming Ideas into
            <span className="text-text"> Digital Excellence</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We combine innovative technology solutions with strategic thinking to help businesses thrive in the digital age.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="#contact"
              className="bg-secondary-400 hover:bg-secondary-500 text-text px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link 
              href="/portfolio"
              className="bg-secondary-400/0 hover:bg-secondary-400/50 text-text px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Abstract shapes */}
        {/* <div className="absolute top-0 left-0 w-44 h-44 bg-gray-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-44 h-44 bg-gray-400/20 rounded-full blur-3xl" /> */}
      </div>
    </section>
  );
};

export default Hero;

