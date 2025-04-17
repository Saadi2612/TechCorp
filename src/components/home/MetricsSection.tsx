'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const metrics = [
  {
    value: 200,
    label: 'Projects Completed',
    symbol: '+',
  },
  {
    value: 10,
    label: 'Years of Experience',
    symbol: '+',
  },
  {
    value: 50,
    label: 'Team Members',
    symbol: '+',
  },
  {
    value: 95,
    label: 'Client Satisfaction',
    symbol: '%',
  },
];

const Counter = ({ value, label, symbol }: { value: number; label: string; symbol: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    let start = 0;
    if (inView) {
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60 FPS

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary-600">
        {count}
        {symbol}
      </div>
      <div className="mt-2 text-gray-600">{label}</div>
    </div>
  );
};

const MetricsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Through dedication and expertise, we've achieved significant milestones and delivered exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <Counter
              key={index}
              value={metric.value}
              label={metric.label}
              symbol={metric.symbol}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;

