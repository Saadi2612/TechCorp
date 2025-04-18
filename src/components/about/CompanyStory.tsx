'use client';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const CompanyStory = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
              Our Journey
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2015, TechCorp began with a simple mission: to make cutting-edge technology accessible to businesses of all sizes.
              </p>
              <p>
                What started as a small team of developers has grown into a full-service digital transformation company, serving clients across the globe.
              </p>
              <p>
                Today, we&apos;re proud to be at the forefront of technological innovation, helping businesses navigate the digital landscape and achieve their full potential.
              </p>
            </div>
          </div>

            <div className="rounded-xl overflow-hidden shadow-xl bg-text p-8">
              {/* <div className="absolute inset-0 bg-grid-primary-900/[0.03] bg-[size:20px_20px]" /> */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-b from-primary from-30% to-primary/50 text-transparent bg-clip-text">TechCorp</div>
              </div>
            </div>
            {/* <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-500/10 rounded-full blur-2xl" /> */}
          
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStory;

